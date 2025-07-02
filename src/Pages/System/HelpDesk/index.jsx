import PopUp from "../../../Assets/PopUp";
import useHelpDesk from "./hook";
import ComponentsInput from "../../../Assets/SectionForm";

const HelpDesk = () => {
  const [isPopUp, handlePopUp, handleForm, System, styles, Schema, refs] =
    useHelpDesk();

  return (
    <>
      <PopUp styles={styles} show={isPopUp} handle={handlePopUp} />
      <form
        onSubmit={handleForm}
        className=" relative flex flex-col justify-center items-center gap-10 w-100"
      >
        <section className="relative group/system flex flex-col justify-end items-center overflow-visible w-full h-130  shadow-2xl rounded-3xl">
          <div
            className={`absolute flex justify-center items-center overflow-visible w-11/12 shadow-lg h-50 -top-10 rounded-2xl group-hover/system:-top-12 ${styles.bgGradient}`}
          >
            <img
              src={System.img}
              alt=""
              className="absolute -top-10 bg-cover h-full bg-center group-hover/system:-top-12 transition-all delay-50 duration-200"
            />
          </div>
          <div className="p-6 ">
            <h5
              className={`mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal ${styles.text}`}
            >
              {System.name}
            </h5>
            <p
              className="block font-sans text-base font-light leading-relaxed text-inherit"
              dangerouslySetInnerHTML={{ __html: System.text }}
            ></p>
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
          {Schema.map((field, id) => {
            const Component = ComponentsInput[field.type];

            return (
              <Component
                key={field.id}
                id={id}
                Question={field.Question}
                values={field.values}
                styles={styles}
                refObj={refs.current[field.id]}
                inputType={field.inputType}
                required={field.required}
              />
            );
          })}
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

export default HelpDesk;
