type CompactCardProps = {
  figure: React.ReactNode;
  title?: string;
  fixWidth?: boolean;
  exClassName?: string;
};

const CompactCard: React.FC<CompactCardProps> = ({
  figure,
  title,
  fixWidth,
  exClassName,
}) => {
  return (
    <div>
      <div
        className={`card-compact card  flex-1  bg-base-100 shadow-xl ${
          fixWidth ? "w-36" : ""
        } ${exClassName}`}
      >
        <figure className="overflow-visible px-4 pt-4">{figure}</figure>
        <div className="card-body gap-0 ">
          <h2 className="card-title mx-auto text-base lg:text-lg">{title}</h2>
        </div>
      </div>
    </div>
  );
};

export default CompactCard;
