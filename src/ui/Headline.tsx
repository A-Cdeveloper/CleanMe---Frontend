type HeadlineProps = {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
};

const Headline = ({ level = 1, children, className = "" }: HeadlineProps) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  const generalClasses = "font-bold font-roboto leading-[1.25] my-2";
  let fontSizeClasses = "";

  switch (level) {
    case 1:
      fontSizeClasses = `text-4xl md:text-5xl lg:text-2xl `;
      break;

    case 2:
      fontSizeClasses = "text-4xl md:text-5xl lg:text-xl";
      break;

    case 3:
      fontSizeClasses = "text-4xl md:text-5xl lg:text-xl";
      break;

    case 4:
      fontSizeClasses = "text-4xl md:text-5xl lg:text-base";
      break;
  }

  return (
    <Tag className={`${className} ${fontSizeClasses} ${generalClasses}`}>
      {children}
    </Tag>
  );
};

export default Headline;
