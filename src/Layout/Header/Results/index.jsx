import ResultsItemsHeader from "./Items";

const ResultHeader = (props) => {
  return (
    <div className="fixed hidden overflow-x-hidden overflow-y-auto z-10  top-20 md:top-[5%] left-4 md:left-[12%] h-10/12 md:h-4/5 w-11/12 md:w-9/12 transition delay-100 duration-150 ease-linear rounded-sm p-5 bg-white shadow-lg">
      <section className="border-b-1 border-[#ebebeb] w-full flex flex-col md:flex-row justify-between items-baseline md:items-center text-[#676767] text-base">
        <h5>Aproximadamente (All#) resultados (Delay)</h5>
        <div className="flex flex-row justify-evenly md:items-center items-baseline w-full md:w-1/5">
          <h5>Ordenar por:</h5>
          <select
            class="text-sm custom-input px-4 py-1 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-[green] hover:shadow-lg hover:border-[green] w-auto"
            required
          >
            <option value="">Relevante</option>
          </select>
        </div>
      </section>
      <section className="relative flex flex-col gap-10 justify-center items-center py-5">
        <ResultsItemsHeader />
      </section>
    </div>
  );
};

export default ResultHeader;
