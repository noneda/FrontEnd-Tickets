import { handlePopUpSearch } from "./hook";

// TODO: Faltan los refs
const PopUpSearch = ({ show, handle, refSearch }) => {
  return (
    <section
      className={`${
        !show && "hidden"
      } scrollbar-hidden top-0 right-[10%] w-auto h-auto px-5 py-2.5 rounded-md flex flex-row gap-5`}
    >
      <div className="relative">
        <input
          placeholder="Search..."
          className="appearance-none input shadow-lg focus:border-2 border-gray-300 px-5 py-3 rounded-xl w-56 transition-all focus:w-64 outline-none"
          name="search"
          type="search"
          ref={refSearch}
        />
        <svg
          className="size-6 absolute top-3 right-3 text-gray-500"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            strokeLinejoin="round"
            strokeLinecap="round"
          ></path>
        </svg>
      </div>
      <button
        className="cursor-pointer duration-200 hover:scale-125 active:scale-100"
        title="Go Back"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25px"
          height="25px"
          viewBox="0 0 24 24"
          className="stroke-gray-500"
        >
          <path
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="1.5"
            d="M11 6L5 12M5 12L11 18M5 12H19"
          ></path>
        </svg>
      </button>
    </section>
  );
};

export default PopUpSearch;
