import { useSomeItems } from "./hook";
import { GroupedData, FooterData } from "./memo";

const SomeItems = () => {
  const [grouped, group, allGroups, handleNext, handleAfter] = useSomeItems();

  return (
    <>
      <section className="w-full h-auto grid grid-cols-1 lg:grid-cols-2 justify-items-center items-stretch gap-5">
        <GroupedData grouped={grouped} />
      </section>
      <section className="w-full h-auto py-2.5 bg-gray-50 rounded-2xl flex flex-row justify-center align-center ">
        <button
          className="cursor-pointer"
          onClick={handleAfter}
          disabled={group === 0}
        >
          <svg
            className="size-6 right-[10%] xl:right-3 text-gray-500"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M14.9991 19L9.83911 14C9.56672 13.7429 9.34974 13.433 9.20142 13.0891C9.0531 12.7452 8.97656 12.3745 8.97656 12C8.97656 11.6255 9.0531 11.2548 9.20142 10.9109C9.34974 10.567 9.56672 10.2571 9.83911 10L14.9991 5"
              stroke="#000000"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <FooterData group={group} allGroups={allGroups} />
        <button
          className="cursor-pointer"
          onClick={handleNext}
          disabled={group === allGroups - 1}
        >
          <svg
            className="size-6 right-[10%] xl:right-3 text-gray-500"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M9 5L14.15 10C14.4237 10.2563 14.6419 10.5659 14.791 10.9099C14.9402 11.2539 15.0171 11.625 15.0171 12C15.0171 12.375 14.9402 12.7458 14.791 13.0898C14.6419 13.4339 14.4237 13.7437 14.15 14L9 19"
              stroke="#000000"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </section>
    </>
  );
};

export default SomeItems;
