const Heading: React.FC<HeadingProps> = ({ title, instruction }) => {
  return (
    <main>
      <h2 className="text-2xl font-semibold text-center mb-4">{title}</h2>
      <p className="text-center text-gray-600 mb-8">{instruction}</p>
    </main>
  );
};

export default Heading;

interface HeadingProps {
  title: string;
  instruction: string;
}
