import { motion } from "framer-motion";

type SectionHeaderProps = {
  sectionName: string;
  description: string;
};

const SectionHeader: React.FC<SectionHeaderProps> = ({
  sectionName,
  description,
}) => {
  return (
    <div className="absolute top-24 left-0 right-0 text-center ">
      <motion.h1
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{
          scale: 1,
          opacity: 1,
          transition: { duration: 1 },
        }}
        className="text-3xl font-semibold text-primary xl:text-4xl"
      >
        {sectionName}
      </motion.h1>
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: { duration: 1, delay: 0.5 },
        }}
        className="text-md    opacity-80 xl:text-lg"
      >
        {description}
      </motion.h2>
    </div>
  );
};

export default SectionHeader;
