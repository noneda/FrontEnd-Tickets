// Assets/SomeItems.jsx
import { SectSystem, colorMap } from "@/Utils/SystemApp";
import { useTicketSocket } from "@/Utils/Api/WEBSOCKET";
const SomeItems = () => {
  const { data } = useTicketSocket();

  const grouped = SectSystem.map((section) => {
    const tickets = (data?.tickets || []).filter(
      (ticket) => ticket.typeTicket === section.name
    );

    const latest = tickets[0];

    return {
      ...section,
      latestCode: latest?.code || "MA0000",
      latestDate: latest?.date || "##/##/##",
      count: tickets.length,
    };
  });

  return (
    <section className=" w-full h-auto grid grid-cols-1 lg:grid-cols-2 justify-items-center items-stretch gap-5">
      {grouped.map((element, index) => {
        const styles = colorMap[element.color] || colorMap.white;
        return (
          <div
            key={index}
            className="relative w-full h-12 shadow-xl/15 rounded-lg flex flex-row justify-baseline items-center gap-5 p-1 hover:scale-[1.05] lg:hover:scale-[1.01]"
          >
            <span
              className={`h-full min-w-10 max-w-20 rounded-md px-1 ${styles.bgGradient} text-white text-sm text-wrap text-center truncate pt-2.5 `}
            >
              {element.latestCode}
            </span>
            <h3>{element.name}</h3>
            <span className="absolute bg-green-300 py-2.5 px-3 -top-1 -right-1 rounded-lg">
              {element.count}
            </span>
            <span className="absolute -bottom-2 right-0 text-xs rounded-xs text-white font-bold bg-zinc-400 py-0.5 px-1">
              {element.latestDate}
            </span>
          </div>
        );
      })}
    </section>
  );
};

export default SomeItems;
