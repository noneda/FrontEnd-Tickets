import HeaderDashboard from "./Header";
import { SectSystem, colorMap } from "@/Utils/SystemApp";
import SomeItems from "@/Assets/SomeItems";
import { useDashboard } from "./hook";

const DashBoard = () => {
  const [refCalendar] = useDashboard();
  return (
    <>
      <section className="flex flex-col align-center justify-between w-full h-auto gap-5">
        <HeaderDashboard refCalendar={refCalendar} />
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        <div className="grid grid-cols-1 gap-3">
          {SectSystem.map((element, index) => {
            const styles = colorMap[element.color] || colorMap.white;
            return (
              <section
                key={"selected-" + element.name}
                className={`w-full rounded-xl shadow-xl/20 h-20 flex items-center justify-center ${styles.bgGradient}`}
              >
                <h4 className="text-white font-bold text-xl">{element.name}</h4>
              </section>
            );
          })}
        </div>
        <div className="group/states flex flex-row justify-around items-center bg-zinc-100 py-0.5 rounded-2xl shadow-xl/10">
          <section className="rounded-xl py-2 px-9 hover:bg-emerald-500 hover:text-white hover:font-bold">
            Activo
          </section>
          <section className="rounded-xl py-2 px-9 hover:bg-rose-500 hover:text-white hover:font-bold">
            Finalizado
          </section>
        </div>
        <button className="w-4/6 h-10 rounded-2xl bg-red-400 text-xl text-white hover:font-bold self-center">
          Limpiar
        </button>
        <SomeItems />
      </section>
    </>
  );
};

export default DashBoard;
