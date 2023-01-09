import { motion } from "framer-motion";
import FormContact from "../../elements/FormContact";
import SectionHeader from "../../elements/SectionHeader";
import SocialContact from "../../elements/SocialContact";
// import Image from "next/image";

const Contact = () => {
  return (
    <>
      <div className="container   relative mx-auto  min-h-screen bg-base-200 py-16">
        <div className="flex w-full   flex-col pb-6  pt-24 lg:flex-row">
          {/* section text */}
          <SectionHeader sectionName="CONTACT" description="Get in touch" />
          {/* social side */}

          <motion.div className=" flex-1 flex-col">
            <SocialContact />
          </motion.div>
          {/* form side */}
          <motion.div className="flex flex-1 flex-col">
            <FormContact />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Contact;
