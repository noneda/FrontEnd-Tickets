const LayoutFooter = () => {
  return (
    <footer className="z-0 flex flex-col w-full">
      <section className="relative w-full h-180 xl:h-120  bg-[#428041] flex flex-col items-center">
        <div className="absolute w-11/12 h-auto bg-[#fff]  shadow-md/20 rounded-md -top-10 flex flex-col flex-wrap xl:flex-row xl:justify-between justify-baseline items-center px-12 py-10 gap-10">
          <section className="flex flex-col justify-baseline items-baseline xl:w-1/3 xl:gap-0 gap-2.5 [&>h5]:font-normal [&>h5]:text-[#434343]">
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
          <section className="col-span-1 flex flex-col gap-6 justify-center items-center w-full xl:w-1/2 ">
            <div className="flex flex-row justify-center items-center xl:self-end-safe">
              <img
                src="/Escudo_de_Colombia.webp"
                alt="Escudo de la república de Colombia"
                className="w-[80px] h-14 xl:w-[80px] xl:h-[5rem] object-contain"
              />
              <img
                src="/icon.webp"
                alt="Escudo del municipio de Puerto Asis"
                className="w-[80px] h-14 xl:w-[80px] xl:h-[5rem] object-contain"
              />
            </div>
            <div className="w-[130%] lg:w-[110%] sm:w-[120%]   h-[100px] overflow-hidden">
              <div className="w-full h-full xl:w-auto flex flex-col justify-center items-center xl:justify-end-safe xl:items-end-safe ">
                <iframe
                  src="https://horalegal.inm.gov.co/inm/"
                  width={"100%"}
                  className="scale-[0.66] h-[125px] w-[145%] xl:scale-[0.9] 2xl:scale-[1] 2xl:w-[135%] xl:w-[130%]"
                />
              </div>
            </div>
          </section>
          <section className="w-full flex items-center">
            <ul className="flex w-full flex-col items-baseline justify-between gap-3 *:flex *:flex-row *:justify-baseline *:items-center *:gap-5 [&>li>i]:bg-[#428041] [&>li>i]:text-white [&>li>i]:p-1.5 [&>li>i]:rounded-full [&>li>i]:text-base [&>li>a]:text-[#428041] [&>li>a]:font-semibold">
              <li>
                <i className="fab fa-facebook facebook-icon" />
                <a href="">@AlcaldiaCotaOficial</a>
              </li>
              <li>
                <i className="fab fa-twitter facebook-icon" />
                <a href="">@alcaldiacota</a>
              </li>
              <li>
                <i className="fab fa-youtube facebook-icon" />
                <a href="">@alcaldiamunicipalcota4880</a>
              </li>
              <li>
                <i className="fab fa-instagram facebook-icon" />
                <a href="">@alcaldia_cota_official</a>
              </li>
            </ul>
          </section>
        </div>
      </section>
      <section className="w-full bg-[#3366CC] px-6 justify-self-end-safe">
        <article className="xl:container mx-auto flex justify-center items-center xl:justify-start py-3 gap-3">
          <a href="https://colombia.co" role="link" target="_blank">
            <img
              src="https://www.cota-cundinamarca.gov.co/SiteAssets/V3/assets/img/logofooter.png"
              className="w-[3rem]"
              alt=""
            />
          </a>
          <div className="h-10 w-[1px] bg-white"></div>
          <a href="https://www.gov.co" role="link" target="_blank">
            <img
              src="https://www.cota-cundinamarca.gov.co/SiteAssets/V3/assets/img/logoGov.svg"
              className="w-[8rem]"
              alt=""
            />
          </a>
        </article>
      </section>
    </footer>
  );
};

export default LayoutFooter;
