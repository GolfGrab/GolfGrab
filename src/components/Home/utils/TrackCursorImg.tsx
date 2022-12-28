import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";

type TrackCursorImgProps = {
  url: string;
  angle?: number;
};

export const TrackCursorImg: React.FC<TrackCursorImgProps> = ({
  url,
  angle,
}) => {
  const rotAngle = angle || 15;
  const x = useMotionValue(200);
  const y = useMotionValue(200);

  const rotateX = useTransform(y, [0, 400], [rotAngle, -rotAngle]);
  const rotateY = useTransform(x, [0, 400], [-rotAngle, rotAngle]);

  function handleMouse(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();

    x.set(event.clientX - rect.left);
    y.set(event.clientY - rect.top);
  }

  return (
    <motion.div
      style={{
        width: "100%",
        height: "100%",
        aspectRatio: 1,
        display: "flex",
        placeItems: "center",
        placeContent: "center",
        borderRadius: 30,
        perspective: 400,
      }}
      initial={{ scale: 0.8, filter: "blur(1px) " }}
      whileInView={{
        scale: 1,
        filter: "blur(0px) ",
        transition: {
          duration: 1,
          ease: "easeInOut",
          delay: 0.2,
        },
      }}
      onMouseMove={handleMouse}
      onMouseLeave={() => {
        animate(x, 200);
        animate(y, 200);
      }}
    >
      <motion.div
        style={{
          width: "80%",
          height: "80%",
          borderRadius: 30,
          backgroundColor: "#fff",
          rotateX: rotateX,
          rotateY: rotateY,
        }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 500 }}
      >
        <Image
          src={url}
          width={500}
          height={500}
          alt="GolfGrab portrait"
          className="aspect-square rounded-2xl object-cover"
        />
      </motion.div>
    </motion.div>
  );
};
