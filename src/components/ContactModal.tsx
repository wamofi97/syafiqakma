import { useEffect, useRef } from "react";
import { IoCallOutline, IoClose } from "react-icons/io5";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa6";

type ContactModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
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
        className="relative mb-20 w-full max-w-md rounded-lg bg-neutral-50 p-6 text-center shadow-lg"
      >
        <p className="secondary-text">Bagi sebarang pertanyaan, sila hubungi</p>
        <div className="my-8 flex w-full flex-col items-center gap-4 px-4 font-semibold">
          <div className="flex w-full items-center">
            <p className="w-3/5 text-start">Rizaman</p>
            <div className="flex w-2/5 justify-end gap-6">
              <a
                href="tel:+60124666956"
                className="text-3xl transition-colors duration-300 hover:text-[var(--button)]/90"
              >
                <IoCallOutline />
              </a>
              <a
                href="https://wa.me/60124666956"
                target="blank"
                className="text-3xl transition-colors duration-300 hover:text-[var(--button)]/90"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
          <div className="flex w-full items-center">
            <p className="w-3/5 text-start">Nik Zailana</p>
            <div className="flex w-2/5 justify-end gap-6">
              <a
                href="tel:+60134675460"
                className="text-3xl transition-colors duration-300 hover:text-[var(--button)]/90"
              >
                <IoCallOutline />
              </a>
              <a
                href="https://wa.me/60134675460"
                target="blank"
                className="text-3xl transition-colors duration-300 hover:text-[var(--button)]/90"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
          <div className="flex w-full items-center">
            <p className="w-3/5 text-start">Izzatul Ain</p>
            <div className="flex w-2/5 justify-end gap-6">
              <a
                href="tel:+60109358592"
                className="text-3xl transition-colors duration-300 hover:text-[var(--button)]/90"
              >
                <IoCallOutline />
              </a>
              <a
                href="https://wa.me/60109358592"
                target="blank"
                className="text-3xl transition-colors duration-300 hover:text-[var(--button)]/90"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
          <div className="flex w-full items-center">
            <p className="w-3/5 text-start">Alya Nabila</p>
            <div className="flex w-2/5 justify-end gap-6">
              <a
                href="tel:+601158982900"
                className="flex text-3xl transition-colors duration-300 hover:text-[var(--button)]/90"
              >
                <IoCallOutline />
              </a>
              <a
                href="https://wa.me/601158982900"
                target="blank"
                className="text-3xl transition-colors duration-300 hover:text-[var(--button)]/90"
              >
                <FaWhatsapp />
              </a>
            </div>
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

export default ContactModal;
