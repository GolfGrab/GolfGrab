type CompactCardProps = {
  icon: React.ReactNode;
  title?: string;
  description: string;
  fixWidth?: boolean;
};

const CompactCard: React.FC<CompactCardProps> = ({
  icon,
  title,
  description,
  fixWidth,
}) => {
  return (
    <div>
      <div
        className={`card-compact card flex-1 bg-base-100 shadow-xl ${
          fixWidth ? "w-36" : ""
        }`}
      >
        <figure className="overflow-visible px-4 pt-4">{icon}</figure>
        <div className="card-body gap-0 ">
          <h2 className="card-title mx-auto text-base lg:text-lg">{title}</h2>
          <p className=" mx-auto text-xs lg:text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default CompactCard;
