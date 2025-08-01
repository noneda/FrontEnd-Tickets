import HandleObservation from "./HandleObservation";
import { useOneItem } from "./hook";
import { TicketData, DocumentsData, StatesData } from "./memo";
const OneItem = () => {
  const [
    refAbsolute,
    hiddenAbsolute,
    ticket,
    handleTicketStateChange,
    isState,
    setState,
    user,
    data,
    observation,
    newObservation,
    setNewObservation,
    isObservation,
    SeeObservation,
    documents,
    statesColor,
    stateList,
    styles,
    schema,
    handleSubmit,
  ] = useOneItem();
  return (
    <form className="relative w-full max-w-md h-auto" onSubmit={handleSubmit}>
      <input type="checkbox" className="hidden peer" ref={refAbsolute} />
      <button
        type="button"
        className={`peer-checked:static peer-checked:rounded-b-none absolute cursor-pointer rounded-lg top-0 left-0 w-full h-full z-20 flex flex-row justify-center gap-10 items-center ${styles.bgGradient}`}
        onClick={hiddenAbsolute}
      >
        <h1 className="text-xl text-white font-bold">{ticket?.code}</h1>
        <div className="w-12 text-white font-bold">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.9959 4H6.99586C3.16586 4 2.09586 4.92 2.00586 8.5C3.93586 8.5 5.49586 10.07 5.49586 12C5.49586 13.93 3.93586 15.49 2.00586 15.5C2.09586 19.08 3.16586 20 6.99586 20H16.9959C20.9959 20 21.9959 19 21.9959 15V9C21.9959 5 20.9959 4 16.9959 4Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.4"
              d="M8.99414 4V7.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.4"
              d="M8.99414 16.5V20"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.4"
              d="M15.024 9.33016L15.644 10.5802C15.704 10.7002 15.824 10.7902 15.954 10.8102L17.334 11.0102C17.674 11.0602 17.814 11.4802 17.564 11.7202L16.564 12.6902C16.464 12.7802 16.424 12.9202 16.444 13.0602L16.684 14.4302C16.744 14.7702 16.384 15.0302 16.084 14.8702L14.854 14.2202C14.734 14.1602 14.584 14.1602 14.464 14.2202L13.234 14.8702C12.924 15.0302 12.574 14.7702 12.634 14.4302L12.874 13.0602C12.894 12.9202 12.854 12.7902 12.754 12.6902L11.764 11.7202C11.514 11.4802 11.654 11.0602 11.994 11.0102L13.374 10.8102C13.514 10.7902 13.624 10.7102 13.684 10.5802L14.294 9.33016C14.434 9.02016 14.874 9.02016 15.024 9.33016Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </button>
      <div
        className={`rounded-lg bg-card text-card-foreground shadow-sm w-full max-w-md transition-all duration-300 hover:shadow-lg ${styles?.border}`}
      >
        <div className="flex flex-col p-6 space-y-1">
          <div className="flex justify-between items-start w-full">
            <div className="space-y-2">
              <StatesData
                statesColor={statesColor}
                state={ticket?.state}
                stateList={stateList}
                handle={handleTicketStateChange}
                isState={isState}
                setState={setState}
              />
              <h3 className={`text-2xl font-semibold ${styles?.text}`}>
                {ticket?.typeTicket}
              </h3>
            </div>
          </div>
        </div>
        <div className="p-6 pt-0">
          <div className="space-y-4">
            <div className="overflow-hidden" style={{ height: "auto" }}>
              <div>
                <div className="space-y-4 pt-2" style={{ opacity: "1" }}>
                  <div className="flex items-center justify-end-safe text-sm text-gray-600">
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-clock h-4 w-4 mr-2"
                        aria-hidden="true"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                      <span>{ticket?.submissionDate}</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-users h-4 w-4 mr-2"
                        aria-hidden="true"
                      >
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                        <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                      </svg>
                      {user?.name}
                    </h4>
                    <h5 className="font-light text-sm ">{user?.secretariat}</h5>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">
                      Servicios: <b className="font-light">{ticket?.service}</b>
                    </h4>
                    <TicketData data={data} schema={schema} />
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">Documentos</h4>
                    <DocumentsData documents={documents} />
                  </div>
                  <div className="space-y-2">
                    <button
                      className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full cursor-pointer
                    "
                      type="button"
                      onClick={SeeObservation}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-message-square h-4 w-4 mr-2"
                        aria-hidden="true"
                      >
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                      </svg>
                      Observaciones
                    </button>
                    <HandleObservation
                      styles={styles}
                      data={newObservation}
                      original={observation}
                      set={setNewObservation}
                      see={isObservation}
                      close={SeeObservation}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center p-6 pt-0">
          <div className="flex items-center justify-between w-full text-sm text-gray-600">
            <span>
              {ticket?.completeDate
                ? `El ticket fue revisado: ${ticket?.completeDate}`
                : "No se ha revisado"}
            </span>
            <span>{observation.length} Observaciones</span>
          </div>
        </div>
      </div>
      <button
        className={` peer-checked:opacity-100 opacity-0 absolute -bottom-5 z-10 right-5 select-none rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md ${styles.button}  transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none`}
        type="submit"
      >
        Enviar
      </button>
    </form>
  );
};

export default OneItem;
