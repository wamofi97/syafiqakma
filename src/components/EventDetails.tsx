import { motion } from "framer-motion";

const EventDetails = () => {
  const container = {
    hidden: { opacity: 0, filter: "blur(10px)", y: 1000 },
    show: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        delayChildren: 1,
        duration: 2.5,
      },
    },
  };

  return (
    <div>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="primary-text mt-6 mb-4 flex min-h-[75vh] w-full flex-col justify-evenly px-4 text-center"
      >
        <img
          className="mx-auto my-4 w-60"
          src="bismillah.png"
          alt="bismillah"
        />
        <motion.p className="secondary-text">
          Assalamualaikum & Salam Sejahtera
        </motion.p>
        <motion.div className="names my-1 text-xl font-semibold tracking-wide sm:text-2xl">
          <div className="">
            <h2>Rizaman bin Yahya</h2>
            <h6>&</h6>
            <h2>Nik Zailana binti Mohamad</h2>
          </div>
        </motion.div>

        <motion.div className="secondary-text">
          <p>
            Dengan segala hormatnya kami ingin menjemput Dato’/ Datin/ Tuan/
            Puan/ Encik/ Cik seisi keluarga ke majlis perkahwinan putera kami
          </p>
        </motion.div>
        <motion.div className="names flex flex-col items-center rounded-lg p-2 text-2xl font-semibold tracking-wider sm:text-3xl">
          <img className="h-9 w-80 opacity-50" src="/leaf.png" alt="leaf" />
          <div className="">
            <h2>Mohd Syafiq Azfar bin Rizaman</h2>
          </div>
          <h6>&</h6>
          <div className="">
            <h2>Norakmal binti Suhaimi</h2>
          </div>
          <img
            className="h-9 w-80 rotate-180 opacity-50"
            src="/leaf.png"
            alt="leaf"
          />
        </motion.div>
        <motion.div className="space-y-2">
          <div>
            <p className="secondary-text">Tarikh</p>
            <p className="font-medium uppercase">10 Mei 2025</p>
          </div>
          <div>
            <p className="secondary-text">Tempat</p>
            <p className="font-medium uppercase">
              DEWAN MPSPK, BANDAR LAGUNA MERBOK, 08000 SUNGAI PETANI, KEDAH
            </p>
          </div>
          <div>
            <p className="secondary-text">Waktu</p>
            <p className="font-medium uppercase">12.00PM - 5.00PM</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default EventDetails;
