import { useHandleObservation } from "./hook";
import { memo } from "react";

const HandleObservation = memo(({ styles, data, set }) => {
  const [handleChange, addObservation] = useHandleObservation({ set });

  return (
    <section className="flex flex-col gap-2.5 justify-center items-center border-t border-t-black w-5/6 py-2 px-5">
      <h4 className={`text-2xl ${styles.text} pb-5 font-bold`}>
        Observaciones
      </h4>
      {data?.map((item, index) => (
        <textarea
          key={"TextArea-" + index}
          value={item}
          onChange={(e) => handleChange(e, index)}
          className={`w-11/12 h-20 border rounded-lg py-1 shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 hover:shadow-lg ${styles.inputText} px-4 text-gray-600`}
        />
      ))}
      <button onClick={addObservation} type="button">
        Add More
      </button>
    </section>
  );
});

export default HandleObservation;
