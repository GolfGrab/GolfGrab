export type CardProps = {
  figure: React.ReactNode;
  title: string;
  description: string;
  subDescription?: string;
  action?: React.ReactNode;
  exClassName?: string;
};

const Card: React.FC<CardProps> = ({
  figure,
  title,
  description,
  subDescription,
  action,
  exClassName,
}) => {
  return (
    <div
      className={`card-compact card w-96 bg-base-100 shadow-xl ${exClassName}`}
    >
      <figure>{figure}</figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <p>{subDescription}</p>
        <div className="card-actions justify-end">{action}</div>
      </div>
    </div>
  );
};

export default Card;
