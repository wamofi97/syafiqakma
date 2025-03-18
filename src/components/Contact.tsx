import { motion } from "framer-motion";
import Title from "./Title";
import { IoCallOutline } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(10px)", y: 100 }}
      whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{
        duration: 0.8,
      }}
      className="primary-text relative my-8 flex w-full flex-col items-center px-4"
    >
      <Title title="Hubungi" />
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
    </motion.div>
  );
};

export default Contact;
