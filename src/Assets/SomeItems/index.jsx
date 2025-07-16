import { SectSystem, colorMap } from "@/Utils/SystemApp";

const SomeItems = () => {
  return (
    <section className=" w-full h-auto grid grid-cols-1 lg:grid-cols-2 justify-items-center items-stretch gap-5">
      {SectSystem.map((element, index) => {
        const styles = colorMap[element.color] || colorMap.white;
        return (
          <div
            key={index}
            className="relative w-full h-12 shadow-xl/15 rounded-lg flex flex-row justify-baseline items-center gap-5 p-1 hover:scale-[1.05] lg:hover:scale-[1.01]"
          >
            <span
              className={`h-full min-w-10 max-w-20 rounded-md px-1 ${styles.bgGradient} text-white text-sm text-wrap text-center truncate pt-2.5 `}
            >
              MA0000
            </span>
            <h3>{element.name}</h3>
            <span className="absolute bg-green-300 py-2.5 px-3 -top-1 -right-1 rounded-lg" />
            <span
              className={`absolute -bottom-2 right-0 text-xs rounded-xs text-white font-bold bg-zinc-400 py-0.5 px-1`}
            >
              ##/##/##
            </span>
          </div>
        );
      })}
    </section>
  );
};

export default SomeItems;
