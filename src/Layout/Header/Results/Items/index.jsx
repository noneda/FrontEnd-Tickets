const ResultsItemsHeader = () => {
  return (
    <div className="relative overflow-visible flex flex-col md:flex-row shadow-lg rounded-2xl w-11/12 px-7 py-1">
      <section className="md:absolute md:-left-3 md:-top-2 md:h-[115%] *:rounded-sm *:shadow-lg flex flex-col justify-center items-center md:*:h-full  *:bg-cover">
        <img
          src="https://i.pinimg.com/736x/ac/c8/3c/acc83c344f2b49484394cca5bec5c0f5.jpg"
          alt="example"
        />
      </section>
      <section className="flex flex-col py-5 md:pl-40">
        <h3 className="text-2xl text-[#3366CC]">Title Where this explicate</h3>
        <span className="text-sm text-[#428041]">https://idk.com</span>
        <p className="text-sm">Context</p>
      </section>
    </div>
  );
};

export default ResultsItemsHeader;
