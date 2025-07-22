export const SectSystem = [
  {
    name: "Mesa de Ayuda",
    param: "HelpDesk",
    color: "purple",
    img: "/undraw_hello_ccwj.svg",
    text: "Solicitud de Soporte Técnico <br/> Bienvenido al formulario de solicitud de soporte técnico de la Alcaldía de Cota. Este formulario está diseñado para facilitar el proceso de reporte y atención de cualquier inconveniente técnico que puedas experimentar dentro de nuestra entidad. Por favor, completa el siguiente formulario con la",
    link: "/form/HelpDesk",
  },
  {
    name: "Pagina Web",
    param: "WebPage",
    color: "green",
    img: "/undraw_onboarding_wkl7.svg",
    text: "...",
    link: "/form/WebPage",
  },
  {
    name: "Correos y Usuarios",
    param: "EmailsUsers",
    color: "blue",
    img: "/undraw_people_ka7y.svg",
    text: "...",
    link: "form/EmailsUsers",
  },
];

export const colorMap = {
  purple: {
    bgGradient: "bg-gradient-to-r from-purple-400 to-purple-500",
    text: "text-purple-900",
    button: "bg-purple-500 shadow-purple-500/20 hover:shadow-purple-500/40",
    inputText: "border-purple-300 focus:outline-[purple] hover:border-[purple]",
    inputCheck: "border-purple-500 peer-checked:bg-purple-400",
  },
  green: {
    bgGradient: "bg-gradient-to-r from-green-400 to-green-500",
    text: "text-green-900",
    button: "bg-green-500 shadow-green-500/20 hover:shadow-green-500/40",
    inputText: "border-green-300 focus:outline-[green] hover:border-[green]",
    inputCheck: "border-green-500 peer-checked:bg-green-400",
  },
  blue: {
    bgGradient: "bg-gradient-to-r from-blue-300 to-blue-400",
    text: "text-blue-900",
    button: "bg-blue-400 shadow-blue-400/20 hover:shadow-blue-400/40",
    inputText: "border-blue-300 focus:outline-[blue] hover:border-[blue]",
    inputCheck: "border-blue-500 peer-checked:bg-blue-400",
  },
};
