type CompactCardProps = {
  figure: React.ReactNode;
  title?: string;
  description?: string;
  fixWidth?: boolean;
  exClassName?: string;
};

const CompactCard: React.FC<CompactCardProps> = ({
  figure,
  title,
  description,
  fixWidth,
  exClassName,
}) => {
  return (
    <div>
      <div
        className={`card-compact card flex-1 bg-base-100 shadow-xl ${
          fixWidth ? "w-36" : ""
        } ${exClassName}`}
      >
        <figure className="overflow-visible px-4 pt-4">{figure}</figure>
        <div className="card-body gap-0 ">
          <h2 className="card-title mx-auto text-base lg:text-lg">{title}</h2>
          <p className=" mx-auto text-xs lg:text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default CompactCard;
