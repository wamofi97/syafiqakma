import { useEffect, useMemo, useState } from "react";
import Title from "./Title";
import { motion } from "framer-motion";

const Countdown = () => {
  const weddingDate = useMemo(() => new Date("2025-05-10T12:00:00"), []);
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(weddingDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(weddingDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [weddingDate]);

  function calculateTimeLeft(weddingDate: string | number | Date) {
    const difference = +new Date(weddingDate) - +new Date();
    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, filter: "blur(10px)", y: 100 }}
        whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{
          duration: 0.8,
        }}
        className="primary-text z-10 my-4 flex flex-col items-center px-4"
      >
        <Title title="Menghitung Hari" />
        <div className="mt-2 flex items-center justify-center gap-1 sm:gap-8">
          <div className="w-14 rounded-full sm:w-20 sm:p-3">
            <p className="clash-display text-xl font-medium sm:text-3xl">
              {timeLeft.days}
            </p>
            <p className="secondary-text">Hari</p>
          </div>
          <p>:</p>
          <div className="w-16 rounded-full sm:w-20 sm:p-3">
            <p className="clash-display text-xl font-medium sm:text-3xl">
              {timeLeft.hours}
            </p>
            <p className="secondary-text">Jam</p>
          </div>
          <p>:</p>
          <div className="w-16 rounded-full sm:w-20 sm:p-3">
            <p className="clash-display text-xl font-medium sm:text-3xl">
              {timeLeft.minutes}
            </p>
            <p className="secondary-text">Minit</p>
          </div>
          <p>:</p>
          <div className="w-16 rounded-full sm:w-20 sm:p-3">
            <p className="clash-display text-xl font-medium sm:text-3xl">
              {timeLeft.seconds}
            </p>
            <p className="secondary-text">Saat</p>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Countdown;
