import { useEffect, useRef } from "react";
import { IoClose } from "react-icons/io5";
import { SiGooglemaps } from "react-icons/si";
import Title from "./Title";
import { FaWaze } from "react-icons/fa";
import { motion } from "framer-motion";

type ContactModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const LocationModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node | null)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);
  if (!isOpen) return null;
  return (
    <div className="primary-text fixed inset-0 flex w-full flex-col items-center justify-end bg-black/40 px-2">
      <motion.div
        initial={{ y: 300 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.25 }}
        ref={modalRef}
        className="relative mb-20 flex w-full max-w-md flex-col items-center rounded-lg bg-neutral-50 p-6 pt-0 shadow-lg"
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
              className="flex w-40 cursor-pointer items-center justify-center gap-2 rounded-full bg-[var(--button)] px-4 py-2 text-white transition-colors duration-300 hover:bg-[var(--button)]/90 sm:w-40 sm:text-lg"
              href="https://maps.app.goo.gl/fgwAuUz1rfDx7r2k8"
              target="_blank"
            >
              <SiGooglemaps />
              Google Map
            </a>
            <a
              className="flex w-40 cursor-pointer items-center justify-center gap-2 rounded-full bg-[var(--button)] px-4 py-2 text-white transition-colors duration-300 hover:bg-[var(--button)]/90 sm:w-40 sm:text-lg"
              href="https://waze.com/ul/hw1p2qf868"
              target="_blank"
            >
              <FaWaze />
              Waze
            </a>
          </div>
        </div>
        <button
          onClick={onClose}
          className="absolute top-0 right-0 m-2 cursor-pointer text-3xl transition-colors duration-300 hover:text-[#d17b7b]"
        >
          <IoClose />
        </button>
      </motion.div>
    </div>
  );
};

export default LocationModal;
