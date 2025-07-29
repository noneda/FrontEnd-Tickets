import { memo } from "react";
import { colorMap } from "@/Utils/SystemApp";
import colorStates from "@/Utils/States/Colors.json";

export const GroupedData = memo(({ grouped }) =>
  grouped.map((element, index) => {
    const styles = colorMap[element.color] || colorMap.white;
    const statesColor = colorStates;
    return (
      <div
        key={index}
        className="relative w-full h-12 shadow-xl/15 rounded-lg flex flex-row justify-baseline items-center gap-5 p-1 hover:scale-[1.05] lg:hover:scale-[1.01] cursor-pointer"
      >
        <span
          className={`h-full min-w-10 max-w-20 rounded-md px-1 ${styles.bgGradient} text-white text-sm text-wrap text-center truncate pt-2.5 `}
        >
          {element.code}
        </span>
        <h3>{element.typeTicket}</h3>
        <span
          className={`absolute ${
            statesColor[element?.state]?.color
          } py-2.5 px-3 -top-1 -right-1 rounded-lg`}
        />
        <span className="absolute -bottom-2 right-0 text-xs rounded-xs text-white font-bold bg-zinc-400 py-0.5 px-1">
          {element.submissionDate}
        </span>
      </div>
    );
  })
);

export const FooterData = memo(({ group, allGroups }) =>
  [0, group, allGroups - 1]
    .filter((v, i, self) => self.indexOf(v) === i)
    .sort((a, b) => a - b)
    .map((i) => (
      <div key={"group-" + i} className={i === group ? "font-bold" : ""}>
        {i}
      </div>
    ))
);
