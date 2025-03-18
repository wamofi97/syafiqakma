import { SiGooglemaps } from "react-icons/si";
import { motion } from "framer-motion";
import Title from "./Title";
import { FaWaze } from "react-icons/fa6";

const Location = () => {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(10px)", y: 100 }}
      whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{
        duration: 0.8,
      }}
      className="primary-text my-4 flex w-full flex-col items-center px-4 pb-8"
    >
      <Title title="Lokasi" />
      <div className="space-y-4 text-center">
        <div>
          <p className="font-semibold">DEWAN MPSPK</p>
          <p> Bandar Laguna Merbok</p>
          <p> 08000 Sungai Petani, Kedah</p>
        </div>
        <div className="flex justify-center gap-2 sm:gap-4">
          <a
            className="flex cursor-pointer items-center justify-center gap-2 rounded-full bg-[var(--button)] px-4 py-2 text-[var(--button-text)] transition-colors duration-300 hover:bg-[var(--button)]/90 sm:text-lg"
            href="https://maps.app.goo.gl/fgwAuUz1rfDx7r2k8"
            target="_blank"
          >
            <SiGooglemaps />
            Google Map
          </a>
          <a
            className="flex cursor-pointer items-center justify-center gap-2 rounded-full bg-[var(--button)] px-4 py-2 text-[var(--button-text)] transition-colors duration-300 hover:bg-[var(--button)]/90 sm:text-lg"
            href="https://waze.com/ul/hw1p2qf868"
            target="_blank"
          >
            <FaWaze />
            Waze
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Location;
