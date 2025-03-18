import { FaLocationDot } from "react-icons/fa6";

import { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import LocationModal from "./LocationModal";
import ContactModal from "./ContactModal";
import Song from "./Song";

const NavigationBar = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);

  const openContactModal = () => {
    setIsContactModalOpen(true);
  };

  const closeContactModal = () => {
    setIsContactModalOpen(false);
  };

  const openLocationModal = () => {
    setIsLocationModalOpen(true);
  };

  const closeLocationModal = () => {
    setIsLocationModalOpen(false);
  };

  return (
    <div
      className={`fixed bottom-0 z-50 flex w-full max-w-[700px] items-center justify-evenly bg-[var(--primary)]/95 py-5 text-[var(--button-text)] sm:pt-3 sm:pb-2`}
    >
      {/* <img
        src="/floral-bottomleft.png"
        className="absolute -top-28 left-4 w-24"
      />
      <img
        src="/floral-bottomright.png"
        className="absolute -top-28 right-4 w-24"
      />
      <img
        src="/floral-bottomleft.png"
        className="absolute -top-28 left-4 w-24"
      />
      <img
        src="/floral-bottomright.png"
        className="absolute -top-28 right-4 w-24"
      /> */}
      <button
        onClick={openContactModal}
        className="flex cursor-pointer flex-col items-center gap-1 text-sm"
      >
        <FaPhoneAlt size={25} />
        <p className="hidden sm:block">Contact</p>
      </button>

      <ContactModal isOpen={isContactModalOpen} onClose={closeContactModal} />

      <button
        onClick={openLocationModal}
        className="flex cursor-pointer flex-col items-center gap-1 px-2 text-sm"
      >
        <FaLocationDot size={25} />
        <p className="hidden sm:block">Location</p>
      </button>

      <LocationModal
        isOpen={isLocationModalOpen}
        onClose={closeLocationModal}
      />
      <Song />
    </div>
  );
};

export default NavigationBar;
