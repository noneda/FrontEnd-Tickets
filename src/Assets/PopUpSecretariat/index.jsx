import { handlePopUpSecretariat } from "./hook";

// TODO: Faltan los refs
const PopUpSecretariat = ({ show, handle, refSecretariat }) => {
  const [secretariat] = handlePopUpSecretariat(refSecretariat);

  return (
    <section
      className={`${
        !show && "hidden"
      } absolute scrollbar-hidden top-0 right-0 w-auto h-auto z-10 bg-zinc-100 px-5 py-2.5 rounded-md`}
    >
      <div className="flex flex-row justify-between items-center">
        <h3 className="text-2xl font-bold text-gray-700">
          Selecciona Secretaria
        </h3>
        <button onClick={handle}>
          <svg
            className="size-7 right-[10%] xl:right-3 "
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 10H21M3 14H21M8 18H21M3 6H21"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      <div className="group/little text-sm h-auto px-5 py-10 flex flex-col justify-center items-baseline w-full  gap-2">
        <fieldset className="w-full h-auto flex flex-col justify-baseline items-center gap-5">
          {secretariat.map((element, index) => (
            <div
              className="w-full h-auto flex flex-row items-center gap-9"
              key={"Secretariat-" + element.name + index}
            >
              <label
                id={"Choose-Secretariat-" + element.name}
                className="flex flex-row items-center gap-2.5"
              >
                <input
                  id={"Choose-Secretariat-" + element.name}
                  type="checkbox"
                  className="peer hidden"
                  value={element.name}
                  ref={(el) => {
                    if (el) {
                      refSecretariat.current[index] = el;
                    }
                  }}
                />
                <div
                  className={`h-5 w-5 flex rounded-lg border transition duration-300 ease-in-out transform hover:-translate-y-1 peer-checked:-translate-y-1 border-slate-500 peer-checked:bg-slate-400`}
                ></div>
                {element.name}
              </label>
            </div>
          ))}
        </fieldset>
      </div>
    </section>
  );
};

export default PopUpSecretariat;
