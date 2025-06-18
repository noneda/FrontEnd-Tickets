import ResultHeader from "../Results";

const HeaderSearch = () => {
  return (
    <article className="relative h-auto  xl:w-full flex justify-center xl:justify-end">
      <form className="text-sm mb-1 w-11/12 xl:w-auto" acceptCharset="utf-8">
        <input
          placeholder="Search..."
          className="input shadow-lg focus:border-2 border-gray-300 px-5 py-3 rounded-xl w-full xl:w-56 transition-all xl:focus:w-64 outline-none"
          name="search"
          type="search"
        />
        <svg
          className="size-6 absolute top-3 left-[90%] xl:right-3 text-gray-500"
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
      </form>
      <ResultHeader />
    </article>
  );
};

export default HeaderSearch;
