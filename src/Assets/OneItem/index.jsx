import { useOneItem } from "./hook";

const OneItem = () => {
  const [dataTicket, statesColor, styles, System, schema] = useOneItem();

  return (
    <form className="flex flex-col justify-center items-center shadow-2xl rounded-2xl min-w-90 py-2 relative ">
      <section className="flex flex-row flex-wrap justify-evenly gap-5 w-full">
        <h1
          className={`w-5/6 ${styles.bgGradient} text-white font-bold text-lg text-center text-wrap truncate py-2.5 rounded-4xl `}
        >
          Mesa de Ayuda
        </h1>
        <span
          className={`h-full min-w-10 max-w-20 flex rounded-lg p-2 ${styles.bgGradient} text-white text-sm text-wrap truncate pt-2.5`}
        >
          #MA000
        </span>
        <span className="text-sm rounded-lg text-white font-bold bg-stone-300 p-2">
          AAAA / MM / DD
        </span>
      </section>
      <span
        className={`absolute -top-1 -right-1 rounded-lg py-2 px-3 ${statesColor.in_progress.color}`}
      />

      <section className="w-3/4 h-auto py-5">
        <h2 className="w-full text-2xl text-left">User Name...</h2>
        <h3 className="w-full text-xl text-left text-neutral-500">
          Secretariat...
        </h3>
      </section>
      <section className="border-t border-t-black w-5/6 py-2 px-5">
        <h4 className="text-2xl text-neutral-700 pb-5">Solicitudes</h4>
        <ul>
          {dataTicket.map((element, index) => (
            <li key={"request-ticket-" + index}>
              {Object.entries(element).map(([key, values]) => {
                const data = schema.find((item) => {
                  if (item.id === key) return item;
                });
                return (
                  <div>
                    <b>{data?.Question}</b>
                    <p>
                      {Array.isArray(values)
                        ? values.join(", ")
                        : String(values)}
                    </p>
                  </div>
                );
              })}
            </li>
          ))}
        </ul>
      </section>
    </form>
  );
};

export default OneItem;
