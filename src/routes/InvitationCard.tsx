import { motion } from "framer-motion";

const InvitationCard = () => {
  return (
    <div className="relative mx-auto max-w-[700px] overflow-hidden">
      <motion.div
        className="absolute top-0 left-0 z-50 h-full w-full bg-[#a75f5f]"
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        transition={{ duration: 1.25, ease: "easeInOut" }}
        style={{ transformOrigin: "left" }}
      />
      <motion.div
        className="absolute top-0 left-0 z-50 h-full w-full bg-[#a75f5f]"
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        transition={{ duration: 1.25, ease: "easeInOut" }}
        style={{ transformOrigin: "right" }}
      />
      <div className="mx-auto flex flex-col items-center justify-center text-center">
        <motion.p
          initial={{ opacity: 0, filter: "blur(10px)", y: 100 }}
          whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: 0.8,
          }}
          className="crimson relative mx-9 my-4 mt-8 rounded-lg border-2 border-dotted border-[#cbb79f] bg-[#fff2f2] p-6 text-neutral-600 italic"
        >
          “Semoga Allah memberi barakah kepadamu dan keberkahan atas pernikahan
          kamu, dan mengumpulkan kalian berdua dalam kebaikan.”
        </motion.p>
      </div>
    </div>
  );
};

export default InvitationCard;
