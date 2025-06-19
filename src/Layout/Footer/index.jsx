const LayoutFooter = () => {
  return (
    <footer className="z-0 flex flex-col w-full">
      <section className="w-full h-200 bg-[#428041] flex flex-col items-center">
        <div className="w-11/12 h-11/12 bg-[#fff] shadow-md/20 rounded-md -top-10 flex flex-col justify-baseline items-center px-12 py-10 gap-10">
          <section className="flex flex-col justify-baseline items-baseline gap-2.5 [&>h5]:font-normal [&>h5]:text-[#434343]">
            <h4 className="text-xl text-[#428041] font-semibold">
              Alcaldía Municipal de Cota, Cundinamarca
            </h4>
            <h5>Dirección: Carrera 4 No. 12 - 63, Palacio Municipal</h5>
            <h5>
              Horario de atención: Lunes a viernes 8:00 a.m. a 5:00 p.m. Jornada
              Continua.
            </h5>
            <h5>Teléfono conmutador: (+57) 601 7451453</h5>
          </section>
          <section class="col-span-1 flex flex-col gap-6 justify-center items-center w-full ">
            <div class="flex flex-row justify-center items-center">
              <img
                src="https://www.cota-cundinamarca.gov.co/SiteAssets/V3/assets/img/Escudo_de_Colombia.png"
                alt="Escudo de la república de Colombia"
                class="w-[80px] h-14 lg:w-[80px] lg:h-[5rem] object-contain"
              />
              <img
                src="https://www.cota-cundinamarca.gov.co/SiteAssets/V3/assets/img/escudo-municipio.png"
                alt="Escudo del municipio de Puerto Asis"
                class="w-[80px] h-14 lg:w-[80px] lg:h-[5rem] object-contain"
              />
            </div>
            <div className="w-[137%] h-[100px] overflow-hidden">
              <iframe
                src="https://horalegal.inm.gov.co/inm/"
                className="w-[99%] scale-[0.99]"
              />
            </div>
          </section>
          <section></section>
          <section></section>
        </div>
        <div></div>
      </section>
      <section className="w-full bg-[#3366CC] px-6 justify-self-end-safe">
        <article class="lg:container mx-auto flex justify-center items-center lg:justify-start py-3 gap-3">
          <a href="https://colombia.co" role="link" target="_blank">
            <img
              src="https://www.cota-cundinamarca.gov.co/SiteAssets/V3/assets/img/logofooter.png"
              class="w-[3rem]"
              alt=""
            />
          </a>
          <div class="h-10 w-[1px] bg-white"></div>
          <a href="https://www.gov.co" role="link" target="_blank">
            <img
              src="https://www.cota-cundinamarca.gov.co/SiteAssets/V3/assets/img/logoGov.svg"
              class="w-[8rem]"
              alt=""
            />
          </a>
        </article>
      </section>
    </footer>
  );
};

export default LayoutFooter;
