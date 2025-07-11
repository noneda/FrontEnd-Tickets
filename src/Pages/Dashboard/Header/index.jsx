import PopUpSearch from "@/Assets/PopUpSearch";
import { useHeaderDashboard } from "./hook";
import PopUpSecretariat from "@/Assets/PopUpSecretariat";

const HeaderDashboard = ({ refCalendar, refSecretariat, refSearch }) => {
  const [
    dateDisplay,
    handleCalendar,
    onChangeHandleCalendar,
    shoSecretariat,
    handleShowSecretariat,
    showSearch,
    handleShowSearch,
  ] = useHeaderDashboard({ refCalendar });

  return (
    <section className="flex flex-col items-end justify-center gap-2">
      <div className="relative flex flex-row w-full gap-2 items-center justify-between">
        <PopUpSecretariat
          show={shoSecretariat}
          handle={handleShowSecretariat}
          refSecretariat={refSecretariat}
        />
        <section className="flex flex-row gap-6">
          <h2 className="text-gray-600 font-bold text-md">{dateDisplay}</h2>
          <input
            type="date"
            className="hidden absolute"
            ref={refCalendar}
            name="calendar"
            onChange={onChangeHandleCalendar}
          />
          <button onClick={handleCalendar}>
            <svg
              className="size-6 right-[10%] xl:right-3 text-gray-500"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 9H21M7 3V5M17 3V5M6 12H8M11 12H13M16 12H18M6 15H8M11 15H13M16 15H18M6 18H8M11 18H13M16 18H18M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </section>
        <section className="flex flex-row gap-6">
          <button onClick={handleShowSearch}>
            <svg
              className="size-6 right-[10%] xl:right-3 text-gray-500"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 6C13.7614 6 16 8.23858 16 11M16.6588 16.6549L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button onClick={handleShowSecretariat}>
            <svg
              className="size-6 right-[10%] xl:right-3 text-gray-500"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 10H16M3 14H21M3 18H16M3 6H21"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </section>
      </div>
      <PopUpSearch
        handle={handleShowSearch}
        show={showSearch}
        refSearch={refSearch}
      />
    </section>
  );
};

export default HeaderDashboard;
