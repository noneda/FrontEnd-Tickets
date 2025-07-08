const PopUp = ({ styles, show, handle, isTicket }) => {
  return (
    <section
      className={`${
        !show && "hidden"
      } fixed w-full h-[100vh] top-0 right-0 z-40 bg-white/30 backdrop-blur-xs flex justify-center items-center`}
    >
      <div className="w-64 bg-white shadow-[0px_0px_15px_rgba(0,0,0,0.09)] p-9 space-y-3 relative overflow-visible rounded-md">
        <div
          className={`w-24 h-10 rounded-md  absolute -right-1 -top-2 ${styles.bgGradient}`}
        >
          <p className="absolute right-2.5 text-white text-2xl">
            {isTicket.code}
          </p>
        </div>
        <div className="w-12">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.9959 4H6.99586C3.16586 4 2.09586 4.92 2.00586 8.5C3.93586 8.5 5.49586 10.07 5.49586 12C5.49586 13.93 3.93586 15.49 2.00586 15.5C2.09586 19.08 3.16586 20 6.99586 20H16.9959C20.9959 20 21.9959 19 21.9959 15V9C21.9959 5 20.9959 4 16.9959 4Z"
              stroke="#292D32"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.4"
              d="M8.99414 4V7.5"
              stroke="#292D32"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.4"
              d="M8.99414 16.5V20"
              stroke="#292D32"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.4"
              d="M15.024 9.33016L15.644 10.5802C15.704 10.7002 15.824 10.7902 15.954 10.8102L17.334 11.0102C17.674 11.0602 17.814 11.4802 17.564 11.7202L16.564 12.6902C16.464 12.7802 16.424 12.9202 16.444 13.0602L16.684 14.4302C16.744 14.7702 16.384 15.0302 16.084 14.8702L14.854 14.2202C14.734 14.1602 14.584 14.1602 14.464 14.2202L13.234 14.8702C12.924 15.0302 12.574 14.7702 12.634 14.4302L12.874 13.0602C12.894 12.9202 12.854 12.7902 12.754 12.6902L11.764 11.7202C11.514 11.4802 11.654 11.0602 11.994 11.0102L13.374 10.8102C13.514 10.7902 13.624 10.7102 13.684 10.5802L14.294 9.33016C14.434 9.02016 14.874 9.02016 15.024 9.33016Z"
              stroke="#292D32"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h1 className="font-bold text-xl">Ticket</h1>
        <p className="text-sm text-zinc-500 leading-6">
          Tu ticked a sido creado: <br />A las {isTicket.createTime}
        </p>
        <button
          className={`absolute -bottom-5 z-10 right-2.5 select-none rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md ${styles.button}  transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none`}
          type="submit"
          onClick={handle}
        >
          Listo
        </button>
      </div>
    </section>
  );
};

export default PopUp;
