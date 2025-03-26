import { useEffect, useState } from "react";
import Title from "./Title";
import GuestbookModal from "./GuestbookModal";
import { motion } from "framer-motion";

type Wish = {
  name: string;
  message: string;
};

const Guestbook = () => {
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [isGuestbookOpenModal, setIsGuestbookOpenModal] = useState(false);

  const openGuestbookModal = () => {
    setIsGuestbookOpenModal(true);
  };

  const closeGuestbookModal = () => {
    setIsGuestbookOpenModal(false);
  };

  const fetchWishes = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/wishes2`);
      const data = await response.json();
      setWishes(data);
    } catch (error) {
      console.error((error as Error).message);
    }
  };

  useEffect(() => {
    fetchWishes();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(10px)", y: 100 }}
      whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{
        duration: 0.8,
      }}
      className={`primary-text z-30 my-4 flex w-full min-w-[250px] flex-col items-center px-4`}
    >
      <Title title="Ucapan" />
      <div className="mx-auto mb-4 max-h-[400px] w-full min-w-[250px] overflow-y-auto rounded-xl border-2 border-dotted border-[var(--accent)] p-4 text-center sm:min-w-[500px]">
        <img
          src="/floral-topleft.png"
          className="absolute top-20 -left-2 w-16"
        />
        <img
          src="/floral-bottomright.png"
          className="absolute -right-2 bottom-10 w-16"
        />
        {wishes?.length === 0 && (
          <p className="crimson text-center text-sm font-light text-neutral-600 italic">
            Belum ada ucapan. Jadi orang pertama yang beri ucapan.
          </p>
        )}
        {wishes &&
          wishes.map((wish, index) => {
            return (
              <div key={index} className="mx-auto">
                <div className={`${index === 0 && "mt-0"} my-4`}>
                  <p className="crimson font-light text-neutral-600 italic">
                    {wish?.message}
                  </p>
                  <p className="primary-text mt-1 font-semibold">
                    <span className="mx-2 text-neutral-500">•</span>
                    {wish?.name}
                    <span className="mx-2 text-neutral-500">•</span>{" "}
                  </p>
                </div>
                <hr
                  className={`${index === wishes.length - 1 && "hidden"} mx-auto my-2 h-1 w-full text-neutral-200`}
                />
              </div>
            );
          })}
      </div>

      <button
        onClick={openGuestbookModal}
        className="flex cursor-pointer items-center justify-center rounded-full bg-[var(--button)] px-4 py-2 font-medium text-[var(--button-text)] transition-colors duration-300 hover:bg-[var(--button)]/90 sm:text-lg"
      >
        Berikan Ucapan
      </button>

      <GuestbookModal
        isOpen={isGuestbookOpenModal}
        onClose={closeGuestbookModal}
        fetchWishes={fetchWishes}
      />
    </motion.div>
  );
};

export default Guestbook;
