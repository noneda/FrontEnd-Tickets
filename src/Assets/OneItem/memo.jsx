import { memo, useCallback } from "react";

export const TicketData = memo(({ data, schema }) =>
  data?.map((element, index) => (
    <li key={"request-ticket-" + index}>
      {Object.entries(element).map(([key, values]) => {
        const data = schema.find((item) => {
          if (item.id === key) return item;
        });
        return (
          <div key={"values-ticket-" + key}>
            <b>{data?.Question}</b>
            <p className="px-5 truncate">
              {Array.isArray(values) ? values.join(", ") : String(values)}
            </p>
          </div>
        );
      })}
    </li>
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
    <li
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
          className="size-6 right-[10%] xl:right-3 text-gray-500"
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
    </li>
  ));
});
