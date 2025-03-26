import { motion } from "framer-motion";
import { useState } from "react";

const WelcomePage = ({
  isOpen,
  setIsModalOpen,
}: {
  isOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [showCurtain, setShowCurtain] = useState(false);

  if (!isOpen) return null;

  const closeModal = () => {
    setShowCurtain(true);
    setTimeout(() => {
      setIsModalOpen(false);
    }, 750);
  };

  return (
    <div className="relative mx-auto flex min-h-svh max-w-[700px] flex-col items-center justify-center overflow-hidden bg-[url('/background.webp')] bg-cover p-12 text-center">
      <div className="primary-text relative flex w-full flex-col items-center justify-center rounded-xl bg-white py-10 text-center">
        <div className="w-full"></div>
        <img
          className="absolute -top-4 w-40 opacity-80"
          src="/leaf.png"
          alt="leaf"
        />
        <img
          className="absolute -bottom-4 w-40 rotate-180 opacity-80"
          src="/leaf.png"
          alt="leaf"
        />
        <img
          className="absolute -top-18 -left-12 h-180 w-28 opacity-80"
          src="/floral-left.png"
          alt="floralleft"
        />
        <img
          className="absolute -top-18 -right-12 h-180 w-28 opacity-80"
          src="/floral-right.png"
          alt="floralright"
        />
        <p className="my-8 text-lg font-medium tracking-widest uppercase">
          Walimatul Urus
        </p>
        <div className="my-4 flex flex-col items-center gap-4">
          <img className="w-32" src="/logo.png" alt="logo" />
          <h1 className="names text-3xl font-medium tracking-wider">
            Syafiq & Akma
          </h1>
        </div>
        <div className="primary-text my-4 uppercase">
          <div className="my-4 flex w-full items-center">
            <div className="h-1.25 w-1.25 rounded-full bg-[#A8BBA2]"></div>
            <div className="h-0.25 flex-grow rounded bg-[#A8BBA2]"></div>
            <div className="mx-2 h-1 w-1 rounded-full bg-[#A8BBA2]"></div>
            <div className="h-0.25 flex-grow rounded bg-[#A8BBA2]"></div>
            <div className="h-1.25 w-1.25 rounded-full bg-[#A8BBA2]"></div>
          </div>
          <div className="space-y-1 text-xl">
            <p>Sabtu</p>
            <p className="space-x-2 text-3xl">
              <span>10</span>
              <span className="border-r-2 border-l-2 px-2">05</span>
              <span>2025</span>
            </p>
            <p className="text-[1rem]">12 ZULKAEDAH 1446H</p>
            <div className="my-4 flex w-full items-center">
              <div className="h-1.25 w-1.25 rounded-full bg-[#A8BBA2]"></div>
              <div className="h-0.25 flex-grow rounded bg-[#A8BBA2]"></div>
              <div className="mx-2 h-1 w-1 rounded-full bg-[#A8BBA2]"></div>
              <div className="h-0.25 flex-grow rounded bg-[#A8BBA2]"></div>
              <div className="h-1.25 w-1.25 rounded-full bg-[#A8BBA2]"></div>
            </div>
          </div>
        </div>

        <button
          onClick={closeModal}
          className="cursor-pointer rounded-full bg-[var(--button)] px-4 py-2 text-lg font-medium tracking-widest transition-colors duration-300 hover:bg-[var(--button)]/90"
        >
          <p className="text-white">Buka</p>
        </button>
        <p className="my-4">#theperfectFiqforAkma</p>
      </div>

      {/* Curtain Effect */}
      {showCurtain && (
        <div>
          <motion.div
            className="absolute top-0 left-0 z-50 h-full w-full bg-[var(--primary)]"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            style={{ transformOrigin: "top" }}
          />
        </div>
      )}
    </div>
  );
};

export default WelcomePage;
