

interface CardProps {
  title: string;
  icon: React.ReactNode;
}

const CardService: React.FC<CardProps> = ({ title, icon }) => {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-white rounded-md shadow-md transition-transform transform hover:scale-105">
      <div className="text-blue-600">{icon}</div>
      <h3 className="mt-2 text-center text-lg font-medium text-gray-700">{title}</h3>
    </div>
  );
};

export default CardService;