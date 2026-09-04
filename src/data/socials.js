// Datos de contacto. El telefono no se publica en la web.
// Hay un CV por idioma; Contact.jsx elige segun el idioma activo.

const BASE = import.meta.env.BASE_URL

export const socials = {
  github: 'https://github.com/jv-maroto',
  linkedin: 'https://linkedin.com/in/javier-maroto-domínguez-7a9974150',
  email: 'javidominguez060@gmail.com',
  emailHref: 'mailto:javidominguez060@gmail.com',
  location: 'Santa Cruz de Tenerife, Canary Islands, Spain',
  cv: {
    es: `${BASE}cv/javier-maroto-cv-es.pdf`,
    en: `${BASE}cv/javier-maroto-cv.pdf`,
  },
}
