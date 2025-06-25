// Components/SystemApp.jsx
import { SectSystem, colorMap } from "../../Utils/SystemApp";
import { useNavigate } from "react-router-dom";

const SystemApp = () => {
  const navigate = useNavigate();

  return (
    <section className="w-auto h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 justify-items-center *:px-4 *:py-2">
      {SectSystem.map((element, index) => {
        const styles = colorMap[element.color] || colorMap.white;
        return (
          <div
            className="group/system relative flex w-80 xl:w-100 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg hover:shadow-2xl hover:scale-105"
            key={"SectSystem-" + index}
          >
            <div
              className={`relative flex  justify-center items-center mx-4 -mt-6 h-40 overflow-visible rounded-xl text-white shadow-lg ${styles.bgGradient}`}
            >
              <img
                src={element.img}
                alt=""
                className="absolute -top-10 bg-cover h-full bg-center group-hover/system:-top-12 transition-all delay-50 duration-200"
              />
            </div>
            <div className="p-6">
              <h5
                className={`mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal ${styles.text}`}
              >
                {element.name}
              </h5>
              <p className="block font-sans text-base font-light leading-relaxed text-inherit">
                {element.name}
              </p>
            </div>
            <div className="p-6 pt-0">
              <button
                type="button"
                onClick={() => {
                  navigate("/form/" + element.name);
                }}
                className={`select-none rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md ${styles.button}  transition-all hover:shadow-lg focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none`}
              >
                Read More
              </button>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default SystemApp;
