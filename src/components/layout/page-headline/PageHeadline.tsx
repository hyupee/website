type Props = {
  title: string;
  description: string;
};

export const PageHeadline = ({ title, description }: Props) => {
  return (
    <div className="text-4xl lg:text-5xl  font-semibold py-14 text-gray-400 leading-[1.1875]">
      <h2 className="inline text-black">{title}.</h2>
      <span className="whitespace-pre-line">{description}</span>
    </div>
  );
};
