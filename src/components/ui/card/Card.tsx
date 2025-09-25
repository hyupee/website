type Props = {
  title: string;
  description: string;
  createdAt: string;
  emoji: string;
};

export const Card = ({ title, description, createdAt, emoji }: Props) => {
  return (
    <div className="flex gap-4 flex-col justify-between rounded-2xl shadow-card bg-white overflow-hidden aspect-[1/1.2] p-8 hover:shadow-card-hover hover:transform-[var(--transform-card-hover)] transition-[var(--transition-card)]">
      <div>
        <p className="text-gray-950 text-2xl font-semibold mb-3">{title}</p>
        <p className="text-gray-600 text-md mb-4 font-semilight line-clamp-3">
          {description}
        </p>
        <p className="text-gray-400 text-xs">{createdAt}</p>
      </div>
      <div className="flex justify-end">
        <span className="text-2xl">{emoji}</span>
      </div>
    </div>
  );
};
