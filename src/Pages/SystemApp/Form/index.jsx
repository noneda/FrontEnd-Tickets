import { useParams } from "react-router-dom";
import { colorMap, SectSystem } from "../../../Utils/SystemApp";

import PopUp from "../../../Assets/PopUp";
import FormState from "./hook";

const Form = () => {
  const { name } = useParams();
  const System = SectSystem.find((e) => e.name === name);
  const styles = colorMap[System.color] || colorMap.white;
  const [isPopUp, handlePopUp, handleForm] = FormState();

  return (
    <>
      <PopUp styles={styles} show={isPopUp} handle={handlePopUp} />
      <form
        onSubmit={handleForm}
        class=" relative flex flex-col justify-center items-center gap-10"
      >
        <section className="relative group/system flex flex-col justify-end items-center overflow-visible w-full h-90 shadow-2xl rounded-3xl">
          <div
            className={`absolute flex justify-center items-center overflow-visible w-11/12 shadow-lg h-50 -top-10 rounded-2xl group-hover/system:-top-12 ${styles.bgGradient}`}
          >
            <img
              src={System.img}
              alt=""
              className="absolute -top-10 bg-cover h-full bg-center group-hover/system:-top-12 transition-all delay-50 duration-200"
            />
          </div>
          <div className="p-6 w-full">
            <h5
              className={`mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal ${styles.text}`}
            >
              {System.name}
            </h5>
            <p className="block font-sans text-base font-light leading-relaxed text-inherit">
              {System.name}
            </p>
          </div>
          <div className="p-6 w-full">
            <span className="text-left">
              <h4 className="text-red-600 text-1xl pt-5 pl-10">
                Los campos marcados con * son requeridos
              </h4>
            </span>
          </div>
        </section>
        <section className="required-form w-full  flex flex-col gap-5 justify-center items-center">
          <div className="group/little h-30 px-5 py-10 flex flex-col justify-center items-baseline rounded-xl  shadow-2xl/20 w-full hover:shadow-xl/20 gap-2 transition duration-300 ease-in-out transform hover:-translate-y-1">
            <label htmlFor="Text" className={`text-xl ${styles.text}`}>
              Question Type Text
            </label>
            <input
              type="text"
              id="Text"
              className={`w-11/12 border rounded-lg py-1 shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1  hover:shadow-lg ${styles.inputText} pl-4 text-gray-600`}
            />
          </div>
          <div className="group/little text-sm h-30 px-5 py-10 flex flex-col justify-center items-baseline rounded-xl  shadow-2xl/20 w-full hover:shadow-xl/20 gap-2 transition duration-300 ease-in-out transform hover:-translate-y-1">
            <label htmlFor="Select" className={`text-xl ${styles.text}`}>
              Question Type Select
            </label>
            <select
              id="Select"
              class={`text-sm custom-input py-2 border rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 w-full ${styles.inputText} pl-4 text-gray-600`}
            >
              <option defaultValue="1" selected>
                ...
              </option>
              <option defaultValue="2">Ejemplo</option>
            </select>
          </div>
          <div className="group/little text-sm h-auto px-5 py-10 flex flex-col justify-center items-baseline rounded-xl  shadow-2xl/20 w-full hover:shadow-xl/20 gap-2 transition duration-300 ease-in-out transform hover:-translate-y-1">
            <fieldset className="w-full h-auto flex flex-col justify-baseline items-center gap-5">
              <legend className={`text-xl ${styles.text} pb-5`}>
                Question Type Choose
              </legend>
              {new Array(2).fill("").map((e, i) => (
                <div
                  key={i}
                  className="w-full h-auto flex flex-row items-center gap-9 "
                >
                  <label
                    htmlFor={"hr-" + i}
                    class="flex flex-row items-center gap-2.5"
                  >
                    <input id={"hr-" + i} type="checkbox" class="peer hidden" />
                    <div
                      htmlFor={"hr-" + i}
                      class={`h-5 w-5 flex rounded-lg border transition duration-300 ease-in-out transform  hover:-translate-y-1 peer-checked:-translate-y-1 ${styles.inputCheck}`}
                    ></div>
                    Test {i}
                  </label>
                </div>
              ))}
            </fieldset>
          </div>
          <div class="group/little text-sm h-auto px-5 py-10 flex flex-col justify-center items-center rounded-xl  shadow-2xl/20 w-full hover:shadow-xl/20 gap-2 transition duration-300 ease-in-out transform hover:-translate-y-1">
            <button
              type="button"
              class={`select-none rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md ${styles.button}  transition-all  duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none `}
              onClick={() => {
                document.querySelector('input[type="file"]').click();
              }}
            >
              Subir Archivos
            </button>
            <input type="file" name="archives" class="hidden" />
          </div>
        </section>

        <button
          className={`absolute -bottom-5 z-10 right-10 select-none rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md ${styles.button}  transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none`}
          type="submit"
        >
          Enviar
        </button>
      </form>
    </>
  );
};

export default Form;
