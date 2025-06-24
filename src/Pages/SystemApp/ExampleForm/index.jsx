const Example = () => {
  return (
    <form class="relative flex flex-col justify-center items-center shadow-2xl rounded-3xl">
      <section class="w-full text-center m-9">
        <h2 class="text-5xl">Escriba al Alcalde</h2>
        <h3 class="text-3xl">SOLICITUD TRÁMITE</h3>
        <span class="text-left">
          <h4 class="text-red-600 text-1xl pt-5 pl-10">
            Los campos marcados con * son requeridos
          </h4>
        </span>
      </section>
      <section class="required-form w-11/12 h-auto py-5 grid grid-cols-1 xl:grid-cols-2 justify-items-center-safe gap-10 *:px-5 *:py-5 *:shadow-md *:rounded-lg *:flex *:flex-row *:items-center *:justify-between *:w-full *:hover:scale-105 *:hover:shadow-xl [&>div>label]:text-xl [&>div>label]:text-shadow-sm [&>div>input]:text-sm [&>div>input]:px-4 [&>div>input]:py-2 [&>div>input]:border [&>div>input]:border-gray-300 [&>div>input]:rounded-lg [&>div>input]:shadow-sm [&>div>input]:transition [&>div>input]:duration-300 [&>div>input]:ease-in-out [&>div>input]:transform [&>div>input]:focus:-translate-y-1 [&>div>input]:focus:outline-[green] [&>div>input]:hover:shadow-lg [&>div>input]:hover:border-[green] [&>div>input]:w-1/2 [&>div>label]:truncate [&>div>input]:truncate [&>div>select]:truncate">
        <div>
          <label for="DocType">Tipo de Documento</label>
          <select
            id="DocType"
            class="text-sm custom-input px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-[green] hover:shadow-lg hover:border-[green] w-1/2"
            required
          >
            <option value="1">Cédula de Ciudadanía</option>
            <option value="2">Cédula de Extranjería</option>
            <option value="4">NIT</option>
            <option value="5">Pasaporte</option>
          </select>
        </div>
        <div>
          <label for="Ide">Identificación</label>
          <input
            type="text"
            id="Ide"
            placeholder="Ingrese su Numero de Identificación"
            required
          />
        </div>
        <div>
          <label for="FirstName">Primer Nombre</label>
          <input
            type="text"
            id="FirstName"
            placeholder="Ingresa aquí tu primer nombre"
            required
          />
        </div>
        <div>
          <label for="SecondName">Segundo Nombre</label>
          <input
            type="text"
            id="SecondName"
            placeholder="Ingresa aquí tu segundo nombre"
          />
        </div>
        <div>
          <label for="FirstSubname">Primer Apellido</label>
          <input
            type="text"
            id="FirstSubname"
            placeholder="Ingresa aquí tu primer apellido"
            required
          />
        </div>
        <div>
          <label for="SecondSubname">Segundo Apellido</label>
          <input
            type="text"
            id="SecondSubname"
            placeholder="Ingresa aquí tu segundo apellido"
          />
        </div>

        <div class="xl:col-span-2">
          <label for="PersonalEmail">Correo Electrónico</label>
          <input
            type="email"
            id="PersonalEmail"
            placeholder="Ingrese aquí su correo electrónico"
            required
          />
        </div>

        <div>
          <label for="Address">Dirección</label>
          <input
            type="text"
            id="Address"
            placeholder="Ingrese aquí su Dirección"
            required
          />
        </div>
        <div>
          <label for="CountryCode">Prefijo País</label>
          <input
            type="number"
            id="CountryCode"
            placeholder="Ingrese aquí el Prefijo de su País"
            required
          />
        </div>
        <div>
          <label for="PersonalNumber">Numero de Teléfono (Celular)</label>
          <input
            type="number"
            id="PersonalNumber"
            placeholder="Ingrese aquí el Numero de su Celular"
            required
          />
        </div>
        <div>
          <label for="CountryCode2">Prefijo País</label>
          <input
            type="number"
            id="CountryCode2"
            placeholder="Ingrese aquí el Prefijo de su País"
          />
        </div>
        <div>
          <label for="CityCode">Indicativo Ciudad</label>
          <input
            type="number"
            id="CityCode"
            placeholder="Ingrese aquí el Indicativo de su Ciudad"
          />
        </div>
        <div>
          <label for="LandlineTelephone">Teléfono (Fijo)</label>
          <input
            type="number"
            id="LandlineTelephone"
            placeholder="Ingrese aquí su Numero Fijo"
          />
        </div>
        <div class="xl:col-span-2" style={{ justifyContent: "center" }}>
          <button
            class="w-1/3 transition-colors delay-50 duration-700 px-4 py-2 shadow-md rounded-2xl hover:bg-green-200 hover:text-white hover:scale-105"
            onclick="$('input[type=file]').click()"
          >
            Subir Archivos
          </button>
          <input type="file" name="archives" class="hidden" />
        </div>

        <div class="xl:col-span-2" style={{ flexFlow: "row wrap" }}>
          <label for="Desc" class="text-xl text-shadow-sm pb-5">
            Ingrese una descripción, Indicando el motivo de la solicitud.
          </label>
          <textarea
            id="Desc"
            class="w-full h-100 text-base px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-[green] hover:shadow-lg hover:border-[green] truncate"
          ></textarea>
        </div>
      </section>
      <section class="required-form w-full text-justify p-20 *:pb-5">
        <h2 class="text-xl">Aceptación de Términos</h2>
        <div>
          <label for="Ley14732011">
            El usuario acepta expresamente que la notificación de la decisión se
            hará vía electrónica de conformidad a la Ley 1473 de 2011, la cual
            se realizará el correo electrónico suministrado por el solicitante
          </label>
          <br />
          <br />
          <span class="text-violet-400 text-sm">
            Acepto la política de tratamiento de datos personales
          </span>
          <br />
          <input type="checkbox" id="Ley14732011" />
        </div>
        <div>
          <label for="Ley14732011">
            El usuario acepta expresamente que la notificación de la decisión se
            hará vía electrónica de conformidad a la Ley 1473 de 2011, la cual
            se realizará el correo electrónico suministrado por el solicitante
          </label>
          <br />
          <br />
          <span class="text-violet-400 text-sm">
            Acepto la política de tratamiento de datos personales
          </span>
          <br />
          <input type="checkbox" id="Ley14732011" />
        </div>
      </section>
      <button
        class="absolute -bottom-5 right-5 bg-[white] w-1/6 transition-colors delay-50 duration-700 px-4 py-2 shadow-md rounded-2xl hover:bg-green-200 hover:text-white hover:font-bold hover:scale-105"
        type="submit"
      >
        Enviar
      </button>
    </form>
  );
};

export default Example;
