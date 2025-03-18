import { useEffect, useRef, useState } from "react";
import { IoClose } from "react-icons/io5";
// import { FaRegCheckCircle } from "react-icons/fa";

type GuestbookModalProps = {
  isOpen: boolean;
  onClose: () => void;
  fetchWishes: () => void;
};

const GuestbookModal: React.FC<GuestbookModalProps> = ({
  isOpen,
  onClose,
  fetchWishes,
}) => {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const successRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(false);
  const [wishData, setWishData] = useState({
    name: "",
    message: "",
  });

  const { name, message } = wishData;

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const submissionData = {
      name,
      message,
    };

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/wishes2`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submissionData),
      });
      if (response.ok) {
        if (successRef.current) {
          successRef.current.style.display = "block";
        }
        setLoading(false);
        setWishData({ name: "", message: "" });
        fetchWishes();
        onClose();
      }
    } catch (error) {
      console.error((error as Error).message);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLElement>) => {
    const target = e.target as HTMLInputElement; // Cast to HTMLInputElement
    setWishData((prevWishData) => ({
      ...prevWishData,
      [target.name]: target.value,
    }));
  };

  // const ok = () => {
  //   if (successRef.current) {
  //     successRef.current.style.display = "block";
  //   }
  //   onClose();
  // };

  return (
    <div
      className={`primary-text fixed ${isOpen && "z-30"} inset-0 mx-auto flex w-full flex-col items-center justify-center bg-black/40 px-2`}
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-md rounded-lg border bg-slate-50 shadow-lg"
      >
        <div className="relative w-full rounded-lg p-6">
          <h5 className="mb-4 text-center text-2xl font-bold"> Ucapan</h5>
          <button
            onClick={onClose}
            className="absolute top-0 right-0 m-2 cursor-pointer text-3xl transition-colors duration-300 hover:text-[var(--primary)]/80"
          >
            <IoClose />
          </button>
          <form onSubmit={handleSubmit}>
            <label className="pr mb-1 block text-start" htmlFor="name">
              Nama{" "}
              <input
                required
                className="mb-3 w-full rounded-xl bg-neutral-100 px-4 py-2 text-sm focus:border-transparent focus:ring-2 focus:ring-[#cbb79f] focus:outline-none"
                type="text"
                name="name"
                placeholder="Nama anda"
                value={name}
                onChange={handleChange}
              />
            </label>

            <label className="pr mb-1 block text-start" htmlFor="message">
              Ucapan
            </label>
            <textarea
              required
              className="mb-3 w-full rounded-xl bg-neutral-100 px-4 py-2 text-sm focus:border-transparent focus:ring-2 focus:ring-[#cbb79f] focus:outline-none"
              name="message"
              placeholder="Ucapan anda "
              value={message}
              onChange={handleChange}
            ></textarea>

            <div className="flex justify-end">
              <button
                type="submit"
                className="mt-2 flex cursor-pointer items-center gap-2 rounded-lg bg-[var(--button)] px-4 py-2 text-lg font-medium text-white transition-colors duration-300 hover:bg-[var(--button)]/90"
              >
                {loading ? (
                  <div className="flex items-center gap-2">
                    <p className="pr">Menghantar..</p>
                  </div>
                ) : (
                  "Hantar"
                )}
              </button>
            </div>
          </form>
          {/* <div
            ref={successRef}
            className="fixed top-0 left-0 bg-black/80"
            style={{ display: "none", height: "100vh", width: "100%" }}
          >
            <div className="m-[50vh] mx-auto flex max-w-[450px] translate-y-[-50%] flex-col items-center rounded-xl bg-white p-4 text-center">
              <p className="my-2 text-4xl text-green-700">
                <FaRegCheckCircle />
              </p>
              <p className="my-2">Terima kasih untuk ucapan anda 😁</p>
              <button onClick={ok} className="button btn-secondary mt-2">
                OK
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default GuestbookModal;
