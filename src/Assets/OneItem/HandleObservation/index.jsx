import { useHandleObservation } from "./hook";
import { memo } from "react";

const HandleObservation = memo(
  ({ styles, data, original, set, see, close }) => {
    const [handleChange, addObservation] = useHandleObservation({
      set,
    });

    return (
      <section
        className={`
          absolute z-30 top-40 left-9 w-5/6 h-7/12 p-4
          flex flex-col gap-2.5 items-center bg-white shadow-lg rounded-lg
          transition-all duration-500 ease-in-out ${
            see
              ? "max-h-screen opacity-100  overflow-y-auto"
              : "max-h-0 opacity-0  overflow-hidden"
          }
        `}
      >
        <h4 className={`text-2xl ${styles.text} pb-5 font-bold`}>
          Observaciones
        </h4>
        {data?.map((item, index) => (
          <textarea
            key={"TextArea-" + index}
            className={`w-11/12 min-h-20 border rounded-lg py-1 shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 hover:shadow-lg ${styles.inputText} px-4 text-gray-600`}
            value={item}
            onChange={(e) => handleChange(e, index)}
            disabled={original?.some((originalItem) => originalItem === item)}
          />
        ))}
        <button
          onClick={addObservation}
          type="button"
          className="text-emerald-50 bg-emerald-500 py-1 px-4 rounded-lg w-full"
        >
          Añadir
        </button>
        <button
          onClick={close}
          type="button"
          className="text-red-50 bg-rose-500 py-1 px-4 rounded-lg w-full"
        >
          Salir
        </button>
      </section>
    );
  }
);

export default HandleObservation;
