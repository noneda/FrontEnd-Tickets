import { memo, useCallback } from "react";

export const TicketData = memo(({ data, schema }) =>
  data?.map((element, index) => (
    <div
      className="flex items-center justify-between text-sm"
      key={"request-ticket-" + index}
    >
      {Object.entries(element).map(([key, values]) => {
        const data = schema.find((item) => {
          if (item.id === key) return item;
        });
        const htmlString = Array.isArray(values)
          ? values.join(" </br>")
          : String(values);
        return (
          <div key={"values-ticket-" + key}>
            <span className="text-gray-600">{data?.Question}</span>
            <p
              className="px-5 truncate text-sm font-light"
              dangerouslySetInnerHTML={{ __html: htmlString }}
            ></p>
          </div>
        );
      })}
    </div>
  ))
);

export const DocumentsData = memo(({ documents }) => {
  const handleDownload = useCallback(async (url, filename) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const blob = await response.blob();
      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(link.href);
    } catch (error) {
      console.error("Error al descargar el documento:", error);
      alert("No se pudo descargar el documento. Inténtalo de nuevo más tarde.");
    }
  }, []);

  return documents?.map((element, index) => (
    <div
      key={"documents-" + index}
      className="flex flex-row items-center justify-baseline gap-3"
    >
      <button
        type="button"
        onClick={() => handleDownload(element.content, element.name)}
        className="p-0 border-none bg-transparent cursor-pointer"
        aria-label={`Descargar ${element.name}`}
      >
        <img
          src="/download.svg"
          className="size-4 right-[10%] xl:right-3 text-gray-500"
          alt="Icono de descarga"
        />
      </button>
      <a
        className="text-zinc-800 text-base font-light underline"
        href={element.content}
        target="_blank"
        rel="noopener noreferrer"
      >
        {element.name}
      </a>
    </div>
  ));
});

export const StatesData = memo(
  ({ statesColor, state, stateList, handle, isState, setState }) =>
    isState ? (
      <button
        type="button"
        className={`font-semibold inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs  transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-secondary/80 ${statesColor[state]?.oneItem}`}
        onClick={() => setState(!isState)}
      >
        {statesColor[state]?.translate}
      </button>
    ) : (
      stateList.map((element) => (
        <button
          type="button"
          key={"States-" + element}
          className={`font-semibold inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs  transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-secondary/80 ${
            statesColor[element]?.oneItem
          } ${state === element && "uppercase"}`}
          onClick={() => handle(element)}
        >
          {statesColor[element]?.translate}
        </button>
      ))
    )
);
