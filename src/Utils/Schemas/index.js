export const getSchema = async ({ refs = null, System, setSchema }) => {
  try {
    const schemaMap = {
      HelpDesk: () => import("@/Utils/Schemas/HelpDesk.json"),
      WebPage: () => import("@/Utils/Schemas/WebPage.json"),
      EmailsUsers: () => import("@/Utils/Schemas/EmailsUsers.json"),
    };
    const module = await schemaMap[System.param]();
    const Schema = module.Schema || module.default;

    if (refs) {
      Schema.forEach((field) => {
        if (!refs.current[field.id]) {
          refs.current[field.id] =
            field.type === "TypeChoose" ? { current: [] } : { current: null };
        }
      });
    }

    setSchema([...Schema]);
  } catch (err) {
    console.error("Error cargando el esquema:", err);
    return null;
  }
};
