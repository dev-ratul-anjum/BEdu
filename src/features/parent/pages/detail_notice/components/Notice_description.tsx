interface Notice_descriptionProps {
  description: string;
}

export const Notice_description: React.FC<Notice_descriptionProps> = ({ description }) => {
  return (
    <div
      className="border-2 border-gray-900 rounded-lg p-4 bg-gradient-to-br from-blue-50 to-blue-100"
      style={{
        backgroundImage:
          'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(59,130,246,0.1) 10px, rgba(59,130,246,0.1) 20px)',
      }}
    >
      <p className="font-sans text-lg text-gray-700 leading-relaxed">{description}</p>
    </div>
  );
};
