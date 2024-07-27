const Card: React.FC<{
  children: React.ReactNode;
  heading: string;
  title: string;
}> = ({ children, heading, title }) => {
  return (
    <div className="w-full max-w-md p-8 space-y-8 bg-custom-dark rounded-lg box">
      <div className="relative">
        <h6 className="text-center text-custom-gray tracking-0.03em font-medium text-14px">
          {heading}
        </h6>

        <p className="mt-2 text-center font-semibold text-18px text-white ">
          {title}
        </p>
      </div>
      {children}
    </div>
  );
};

export default Card;
