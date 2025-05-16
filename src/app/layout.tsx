import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from './../components/Header';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // Add the weights you need
  variable: '--font-poppins',
});


export const metadata: Metadata = {
  title: "Standard Bank",
  description: "standard bank redesign",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`} >
      <body
        className={`${inter.variable} ${poppins.variable}  antialiased pt-[80px]`}
      >
        <Header/>
        {children}
      </body>
    </html>
  );
}
