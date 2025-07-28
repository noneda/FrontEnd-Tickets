import HandleObservation from "./HandleObservation";
import { useOneItem } from "./hook";
import { TicketData, DocumentsData } from "./memo";
const OneItem = () => {
  const [
    ticket,
    user,
    data,
    observation,
    setObservation,
    documents,
    statesColor,
    styles,
    system,
    schema,
  ] = useOneItem();

  return (
    <form className="flex flex-col justify-center items-center shadow-2xl rounded-2xl min-w-90 py-2 relative ">
      <section className="flex flex-row flex-wrap justify-evenly gap-5 w-full">
        <h1
          className={`w-5/6 ${styles.bgGradient} text-white font-bold text-lg text-center text-wrap truncate py-2.5 rounded-4xl `}
        >
          {ticket?.typeTicket}
        </h1>
        <span
          className={`h-full min-w-10 max-w-20 flex rounded-lg p-2 ${styles.bgGradient} text-white text-sm text-wrap truncate pt-2.5`}
        >
          {ticket?.code}
        </span>
        <span className="text-sm rounded-lg text-white font-bold bg-stone-300 p-2">
          {ticket?.submissionDate}
        </span>
      </section>
      <span
        className={`absolute -top-1 -right-1 rounded-lg py-2 px-3 ${
          statesColor[ticket?.state]?.color
        }`}
      />

      <section className="w-3/4 h-auto py-5">
        <h2 className="w-full text-2xl text-left">{user?.name}</h2>
        <h3 className="w-full text-xl text-left text-neutral-500">
          {user?.secretariat}
        </h3>
      </section>
      <section className="border-t border-t-black w-5/6 py-2 px-5">
        <h4 className={`text-2xl ${styles.text} pb-5 font-bold`}>
          Solicitudes
        </h4>
        <ul>
          <li>
            <h2 className="text-xl">
              <b>Service</b> <br />
              {ticket?.service}
            </h2>
          </li>
        </ul>
        <TicketData data={data} schema={schema} />
      </section>
      <section className="border-t border-t-black w-5/6 py-2 px-5">
        <h4 className={`text-2xl ${styles.text} pb-5 font-bold`}>Documents</h4>
        <ul>
          <DocumentsData documents={documents} />
        </ul>
      </section>
      <HandleObservation
        styles={styles}
        data={observation}
        set={setObservation}
      />
    </form>
  );
};

export default OneItem;
