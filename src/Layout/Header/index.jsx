import HeaderSearch from "./Search";

const LayoutHeader = () => {
  return (
    <header>
      <section className="w-full bg-[#3366CC] px-6 py-3">
        <figure className="lg:container mx-auto flex items-center justify-center lg:justify-start">
          <img
            src="/logoGov.svg"
            className="w-32 object-contain"
            alt="logo republica de Colombia"
          />
        </figure>
      </section>
      <section className="lg:container mx-auto p-6 flex flex-wrap justify-center lg:justify-between items-center gap-y-6 xl:gap-6">
        <article className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-6">
          <section className="flex gap-6">
            <a className="w-[80px]">
              <img
                src="/Escudo_de_Colombia.webp"
                alt="Escudo de la republica de Colombia"
                className="w-full h-full object-contain"
              />
            </a>
            <a className="w-[80px]">
              <img
                src="/icon.webp"
                alt="Escudo de la republica de Colombia"
                className="w-full h-full object-contain"
              />
            </a>
          </section>
          <h2 className="text-[1.5rem] font-normal text-center lg:text-start">
            Alcaldía Municipal de <span className="font-bold">Cota</span> ,
            <br /> Cundinamarca
          </h2>
        </article>
        <section className="flex flex-col gap-3 w-full lg:w-1/4">
          <HeaderSearch />
        </section>
      </section>
    </header>
  );
};

export default LayoutHeader;
