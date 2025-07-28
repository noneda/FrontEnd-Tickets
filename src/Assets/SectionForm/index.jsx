import { useEmailSuggestion, useTypeArchive } from "./hook";
import { memo } from "react";
const ComponentsInput = {
  TypeEmail: memo(
    ({ id, Question, styles, refObj, required, autocomplete }) => {
      const {
        suggestion,
        ghost,
        handleChange,
        handleKeyDown,
        handleAutocomplete,
      } = useEmailSuggestion(refObj, autocomplete);

      return (
        <div
          className="group/little h-auto px-5 py-10 flex flex-col justify-center items-start rounded-xl shadow-2xl/20 w-full hover:shadow-xl/20 gap-2 transition duration-300 ease-in-out transform hover:-translate-y-1"
          key={"TypeEmail-" + id}
        >
          <label htmlFor={"Email" + id} className={`text-xl ${styles.text}`}>
            {Question}
          </label>

          <input
            type="email"
            id={"Email" + id}
            ref={(el) => (refObj.current = el)}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            required={required}
            className={`w-11/12 border rounded-lg py-1 shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 hover:shadow-lg ${styles.inputText} pl-4 text-gray-600`}
          />

          {ghost && (
            <>
              <p className="text-gray-400 text-sm pl-1">
                Sugerencia: <span className="font-medium">{suggestion}</span>
              </p>
              {suggestion !== "No se encontró el correo" && (
                <button
                  type="button"
                  className="sm:hidden mt-2 px-4 py-2 bg-blue-500 text-white text-sm rounded-lg shadow-md hover:bg-blue-600 transition"
                  onClick={handleAutocomplete}
                >
                  Autocompletar
                </button>
              )}
            </>
          )}
        </div>
      );
    }
  ),
  TypeText: memo(({ id, Question, styles, refObj, inputType, required }) => (
    <div
      className="group/little h-30 px-5 py-10 flex flex-col justify-center items-baseline rounded-xl shadow-2xl/20 w-full hover:shadow-xl/20 gap-2 transition duration-300 ease-in-out transform hover:-translate-y-1"
      key={"TypeText-" + id}
    >
      <label htmlFor={"Text" + id} className={`text-xl ${styles.text}`}>
        {Question}
      </label>
      <input
        type={inputType}
        id={"Text" + id}
        ref={(el) => (refObj.current = el)}
        className={`w-11/12 border rounded-lg py-1 shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 hover:shadow-lg ${styles.inputText} pl-4 text-gray-600`}
        required={required}
      />
    </div>
  )),

  TypeArea: memo(({ id, Question, styles, refObj, required }) => (
    <div
      className="group/little h-auto px-5 py-10 flex flex-col justify-center items-baseline rounded-xl shadow-2xl/20 w-full hover:shadow-xl/20 gap-2 transition duration-300 ease-in-out transform hover:-translate-y-1"
      key={"TypeArea-" + id}
    >
      <label htmlFor={"TextArea" + id} className={`text-xl ${styles.text}`}>
        {Question}
      </label>
      <textarea
        id={"TextArea" + id}
        ref={(el) => (refObj.current = el)}
        className={`w-11/12 h-30 border rounded-lg py-1 shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 hover:shadow-lg ${styles.inputText} px-4 text-gray-600`}
        required={required}
      />
    </div>
  )),

  TypeSelect: memo(
    ({ id, Question, values = [], styles, refObj, required }) => (
      <div
        className="group/little text-sm h-30 px-5 py-10 flex flex-col justify-center items-baseline rounded-xl shadow-2xl/20 w-full hover:shadow-xl/20 gap-2 transition duration-300 ease-in-out transform hover:-translate-y-1"
        key={"TypeSelect-" + id}
      >
        <label htmlFor={"Select" + id} className={`text-xl ${styles.text}`}>
          {Question}
        </label>
        <select
          id={"Select" + id}
          ref={(el) => (refObj.current = el)}
          className={`text-sm custom-input py-2 border rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 w-full ${styles.inputText} pl-4 text-gray-600`}
          required={required}
        >
          {values.map((element, index) => (
            <option key={index * id} value={element}>
              {element}
            </option>
          ))}
        </select>
      </div>
    )
  ),

  TypeChoose: memo(
    ({ id, Question, values = [], styles, refObj, required }) => (
      <div className="group/little text-sm h-auto px-5 py-10 flex flex-col justify-center items-baseline rounded-xl  shadow-2xl/20 w-full hover:shadow-xl/20 gap-2 transition duration-300 ease-in-out transform hover:-translate-y-1">
        <fieldset
          className="w-full h-auto flex flex-col justify-baseline items-center gap-5"
          key={"TypeChoose-" + id}
        >
          <legend className={`text-xl ${styles.text} pb-5`}>{Question}</legend>
          {values.map((element, index) => (
            <div
              key={"TypeChooseOptions-" + index * id}
              className="w-full h-auto flex flex-row items-center gap-9"
            >
              <label
                htmlFor={"Choose" + index * id}
                className="flex flex-row items-center gap-2.5"
              >
                <input
                  id={"Choose" + index * id}
                  type="checkbox"
                  className="peer hidden"
                  ref={(el) => {
                    if (el) {
                      refObj.current[index] = el;
                    }
                  }}
                  value={element}
                />
                <div
                  className={`h-5 w-5 flex rounded-lg border transition duration-300 ease-in-out transform hover:-translate-y-1 peer-checked:-translate-y-1 ${styles.inputCheck}`}
                ></div>
                {element}
              </label>
            </div>
          ))}
        </fieldset>
      </div>
    )
  ),
  TypeArchive: memo(({ styles, refObj }) => {
    const [filesInfo, handleFileChange] = useTypeArchive(refObj);
    return (
      <div className="group/little text-sm h-auto px-5 py-10 flex flex-col justify-center items-center rounded-xl  shadow-2xl/20 w-full hover:shadow-xl/20 gap-2 transition duration-300 ease-in-out transform hover:-translate-y-1">
        <button
          type="button"
          className={`select-none rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md ${styles.button}  transition-all  duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none `}
          onClick={() => refObj.current?.click()}
        >
          Subir Archivos
        </button>
        <input
          type="file"
          name="archives"
          ref={refObj}
          onChange={handleFileChange}
          className="hidden"
          multiple
        />
        {filesInfo.length > 0 && (
          <div className="mt-2 text-md text-left text-gray-700">
            <p className="font-bold mb-1">Archivos seleccionados:</p>
            <ul className="list-disc list-inside">
              {filesInfo.map((info, idx) => (
                <li key={idx}>{info}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }),
};

export default ComponentsInput;
