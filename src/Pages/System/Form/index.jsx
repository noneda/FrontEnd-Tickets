import PopUpSystem from "@/Assets/PopUpSystem";
import useHelpDesk from "./hook";
import ComponentsInput from "@/Assets/SectionForm";

const Form = () => {
  const [
    isPopUp,
    handlePopUp,
    handleForm,
    system,
    styles,
    Schema,
    refs,
    setAutocomplete,
    isTicket,
    navigate,
  ] = useHelpDesk();

  return (
    <>
      <PopUpSystem
        styles={styles}
        show={isPopUp}
        handle={handlePopUp}
        isTicket={isTicket}
      />

      <form
        onSubmit={handleForm}
        className="relative flex flex-col gap-10 w-100 pt-25"
      >
        <button
          className="sticky top-16 left-0 z-30 bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 px-2 py-0.5 w-fit rounded-2xl cursor-pointer"
          onClick={() => navigate("/")}
        >
          <svg
            className="size-6 right-[10%] xl:right-3 fill-white"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path d="M4 10L3.29289 10.7071L2.58579 10L3.29289 9.29289L4 10ZM21 18C21 18.5523 20.5523 19 20 19C19.4477 19 19 18.5523 19 18L21 18ZM8.29289 15.7071L3.29289 10.7071L4.70711 9.29289L9.70711 14.2929L8.29289 15.7071ZM3.29289 9.29289L8.29289 4.29289L9.70711 5.70711L4.70711 10.7071L3.29289 9.29289ZM4 9L14 9L14 11L4 11L4 9ZM21 16L21 18L19 18L19 16L21 16ZM14 9C17.866 9 21 12.134 21 16L19 16C19 13.2386 16.7614 11 14 11L14 9Z" />
          </svg>
        </button>
        <section className="relative group/system flex flex-col justify-end items-center overflow-visible w-full h-130  shadow-2xl rounded-3xl">
          <div
            className={`absolute flex justify-center items-center overflow-visible w-11/12 shadow-lg h-50 -top-10 rounded-2xl group-hover/system:-top-12 ${styles.bgGradient}`}
          >
            <img
              src={system.img}
              alt=""
              className="absolute -top-10 bg-cover h-full bg-center group-hover/system:-top-12 transition-all delay-50 duration-200"
            />
          </div>
          <div className="p-6 ">
            <h5
              className={`mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal ${styles.text}`}
            >
              {system.name}
            </h5>
            <p
              className="block font-sans text-base font-light leading-relaxed text-inherit"
              dangerouslySetInnerHTML={{ __html: system.text }}
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
                autocomplete={setAutocomplete}
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

export default Form;
