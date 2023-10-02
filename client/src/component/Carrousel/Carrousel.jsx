import { useState } from "react";

/*eslint-disable*/
const Carrousel = ({ children: slides }) => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };
  const prev = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  return (
    <section className="overflow-hidden relative max-w-[60%] mx-auto">
      <aside
        className="flex flex-col transition-transform ease-out duration-500 w-full "
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides}
      </aside>
      <div className="absolute  inset-0 flex items-center justify-between p-2">
        <button
          className="p-1 bg-white/60 shadow rounded-full text-gray-800 hover:bg-white"
          onClick={() => {
            prev();
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        <button
          className="p-1 bg-white/60 shadow rounded-full text-gray-800 hover:bg-white"
          onClick={() => {
            next();
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides?.map((_, i) => (
            <div
              className={`
              transition-all w-2 h-2 bg-black rounded-full
              ${current === i ? "p-1" : "bg-opacity-50"}
            `}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carrousel;
