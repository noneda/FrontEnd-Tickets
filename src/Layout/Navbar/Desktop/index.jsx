import { SectionNav } from "../../../Utils/NavBar";

const NavBarDesktop = () => {
  return (
    <ul className="w-full z-10 relative hidden xl:flex pt-2 flex-row justify-center items-center border-b-[#428041] border-b-2 h-auto *:w-auto *:min-w-auto *:max-w-[225px] *:h-[45px] *:flex *:justify-center *:gap-5 *:items-center *:px-5 *:py-1 *:bg-transparent *:hover:bg-[#8c2226] *:text-wrap *:hover:text-white *:hover:font-bold *:text-sm  *:cursor-pointer *:relative">
      {SectionNav.map((father, index) =>
        father.children === undefined ? (
          <li key={"father-" + index}>
            <a href={father.ulr}>{father.name}</a>
          </li>
        ) : (
          <li key={"has-father-" + index} className="group/father">
            <section>{father.name}</section>
            <i className="self-start py-2 fa-solid fa-chevron-down transform group-hover/father:rotate-180 duration-500 group-hover/father:text-white  " />
            <ul className="hidden group-hover/father:block text-[#FFF] font-normal absolute top-[100%] w-full rounded-b-2xl shadow-lg bg-[#8c2226] *:w-full *:px-10 *:py-2 *:hover:bg-[#fff] *:hover:text-[#8c2226] *:hover:font-bold ">
              {father.children.map((son, i) =>
                son.children === undefined ? (
                  <li key={"son-" + i}>{son.name}</li>
                ) : (
                  <li
                    key={"has-son-" + i}
                    className="relative group/son flex flex-row justify-between items-center"
                    y
                  >
                    <section>{son.name}</section>
                    <i class="self-start py-2 fa-solid fa-chevron-right transform group-hover/son:rotate-180 duration-500 group-hover/son:text-[#8c2226]" />
                    <ul
                      className={`hidden group-hover/son:block absolute ${
                        index < 3 ? "left-[100%]" : "right-[100%]"
                      } top-0 font-normal w-full bg-[#fff] group-hover/son:bg-[#fff] group-hover/son:text-[#8c2226] text-black shadow-lg *:gap-5 *:w-full *:px-10 *:py-3 *:hover:bg-[#8c2226] *:hover:text-[#fff] *:hover:font-bold`}
                    >
                      {son.children.map((e, n) =>
                        e.children === undefined ? (
                          <li key={"grandson-" + n}>{e.name}</li>
                        ) : (
                          <li
                            key={"has-grandson-" + n}
                            className="relative group/grandson flex flex-row justify-between items-center"
                            y
                          >
                            <section>{e.name}</section>
                            <i class="self-start py-2 fa-solid fa-chevron-right transform group-hover/grandson:rotate-180 duration-500 group-hover/grandson:text-[#8c2226]" />
                            <ul
                              className={`hidden group-hover/grandson:block absolute ${
                                index < 3 ? "left-[100%]" : "right-[100%]"
                              } font-normal w-full bg-[#fff] group-hover/grandson:bg-[#fff] group-hover/grandson:text-[#8c2226] text-black shadow-lg *:gap-5 *:w-full *:px-10 *:py-3 *:hover:bg-[#8c2226] *:hover:text-[#fff] *:hover:font-bold`}
                            >
                              {e.children.map((_, d) => (
                                <li key={"more-grandson-" + d}>{_.name}</li>
                              ))}
                            </ul>
                          </li>
                        )
                      )}
                    </ul>
                  </li>
                )
              )}
            </ul>
          </li>
        )
      )}
    </ul>
  );
};

export default NavBarDesktop;
