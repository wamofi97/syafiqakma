import { motion } from "framer-motion";
import EventDetails from "../components/EventDetails";
import Contact from "../components/Contact";
import Countdown from "../components/Countdown";
import Guestbook from "../components/Guestbook";
import Location from "../components/Location";
import ParticlesBackground from "../components/ParticlesBackground";
import NavigationBar from "../components/NavigationBar";

const InvitationCard = () => {
  return (
    <div className="relative mx-auto max-w-[700px] overflow-hidden px-10 py-10">
      <motion.div
        className="absolute top-0 left-0 z-50 h-full w-full bg-[var(--primary)]"
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        transition={{ duration: 1.25, ease: "easeInOut" }}
        style={{ transformOrigin: "left" }}
      />
      <motion.div
        className="absolute top-0 left-0 z-50 h-full w-full bg-[var(--primary)]"
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        transition={{ duration: 1.25, ease: "easeInOut" }}
        style={{ transformOrigin: "right" }}
      />
      <img
        className="fixed top-0 left-0 min-h-svh w-full object-cover object-center"
        src="background.webp"
        alt="background"
      />
      <img
        src="/floral-topleft.png"
        className="absolute top-4 left-0 z-20 w-24"
      />
      <img
        src="/floral-topright.png"
        className="absolute top-4 right-0 z-20 w-24"
      />

      <div className="relative z-10 mx-auto flex flex-col items-center justify-center rounded-xl bg-white text-center">
        {/* <img
          className="absolute top-0 h-full object-cover"
          src="paper-texture.jpg"
          alt="background"
        /> */}
        <ParticlesBackground />
        <EventDetails />

        <Countdown />

        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)", y: 100 }}
          whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: 0.8,
          }}
          className="crimson relative my-4 mt-8 p-4 text-neutral-600 italic"
        >
          <p className="rounded-xl border border-dashed border-[var(--accent)] p-4">
            “Semoga Allah memberi barakah kepadamu dan keberkahan atas
            pernikahan kamu, dan mengumpulkan kalian berdua dalam kebaikan.”
          </p>
          <img
            src="/floral-topright.png"
            className="absolute -top-2 -right-2 w-16"
          />
          <img
            src="/floral-bottomleft.png"
            className="absolute -bottom-2 -left-2 w-16"
          />
        </motion.div>
        <Location />
        <Guestbook />
        <Contact />
        <NavigationBar />
      </div>
    </div>
  );
};

export default InvitationCard;
