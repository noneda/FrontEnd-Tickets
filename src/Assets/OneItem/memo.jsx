import { memo } from "react";

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

export const DocumentsData = memo(({ documents }) =>
  documents?.map((element, index) => (
    <li
      key={"documents-" + index}
      className="flex flex-row items-center justify-baseline gap-3"
    >
      <img
        src="/documentsIcon.svg"
        className="size-6 right-[10%] xl:right-3 text-gray-500"
        alt="Icon Documents"
      />
      <a
        className="text-zinc-800 text-base font-light underline"
        href={element.content}
      >
        {element.name}
      </a>
    </li>
  ))
);
