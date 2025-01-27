const Heading = ({ title }: { title: string }) => {
  return (
    <h1 className="text-[#152C5B] text-2xl font-medium font-poppins leading-[36px] sm:text-xl sm:leading-[30px]">
      {title}
    </h1>
  );
};

export default Heading;
