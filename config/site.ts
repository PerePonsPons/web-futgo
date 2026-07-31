export const siteConfig = {
	name: "FutGo Talent",

	description:
		"Tecnificacion, preparacion fisica, clinics de futbol y experiencias en torneos para jugadores y jugadoras en Menorca.",

	url: "https://webfutgo.local",

	locale: "es_ES",

	contact: {
		email: "futgotalent@gmail.com",
		phone: "+34 636 152 876",
		phoneHref: "tel:+34636152876",
		instagram: "https://www.instagram.com/futgotalent",
		instagramLabel: "@futgotalent",
	},
} as const;

export const homeContent = {
	hero: {
		eyebrow: "Futbol base en Menorca",
		title:
			"FutGo Talent: futbol, formacion y experiencias para jugadores y jugadoras en Menorca",
		description:
			"Entrenamientos, clinics, torneos y preparacion fisica para futbolistas que quieren mejorar, competir y disfrutar del futbol en un entorno cercano, profesional y familiar.",
		image: "/images/CAMPUS.JPEG",
	},
	about: {
		title: "Sobre FutGo",
		description:
			"FutGo Talent es una organizacion deportiva nacida en Menorca con el objetivo de acompanar a futbolistas en su crecimiento personal y futbolistico. Priorizamos primero a las personas: el buen trato, la calidad del entrenamiento y la diversion son la base de cada experiencia.",
		secondary:
			"Trabajamos con una identidad clara: pasion, compromiso y respeto. Creamos entornos positivos donde cada jugador y jugadora puede evolucionar, aprender y sentirse parte de una familia deportiva.",
		image: "/images/ALEVMASC.jpg.jpeg",
	},
	servicesIntro:
		"Sesiones y experiencias pensadas para mejorar tecnica, confianza y lectura del juego desde el campo.",
	contactCta: {
		title: "Futbol para todos. Diversion y evolucion.",
		description:
			"Quieres entrenar, competir o vivir una experiencia FutGo? Contacta con nosotros y forma parte de FutGo Talent.",
	},
} as const;

export const services = [
	{
		id: "tecnificacion",
		title: "Tecnificacion individual y grupal",
		description:
			"Sesiones adaptadas por edad, nivel y objetivos para mejorar la tecnica, la toma de decisiones y la confianza del futbolista.",
		image: "/images/IMG_0650.jpg.jpeg",
	},
	{
		id: "preparacion-fisica",
		title: "Preparacion fisica especifica",
		description:
			"Trabajo fisico orientado al futbol para ganar coordinacion, potencia, prevencion y rendimiento en entrenamientos y competicion.",
		image: "/images/IMG_4879.jpg.jpeg",
	},
	{
		id: "clinics",
		title: "Clinics intensivos",
		description:
			"Programas de vacaciones con grupos reducidos, tareas especificas por posicion, juegos de habilidad y feedback individual.",
		image: "/images/IMG_5113.jpg.jpeg",
	},
	{
		id: "torneos",
		title: "Torneos y experiencias",
		description:
			"Experiencias deportivas con convivencia, cultura y competicion para competir, hacer equipo y disfrutar dentro y fuera del campo.",
		image: "/images/IMG_0656.jpg.jpeg",
	},
] as const;

export const featuredExperiences = [
	{
		id: "clinic-futgo-verano-2026",
		title: "Clinic FutGo Verano 2026",
		description:
			"Tecnificacion intensiva para jugadores y jugadoras de Menorca que quieren seguir mejorando durante el verano.",
		details: [
			"Fechas: del lunes 17 de agosto al jueves 20 de agosto de 2026.",
			"Horario: de 17:30 a 20:30.",
			"Lugar: Atletico Villacarlos.",
			"Categorias: F7, nacidos entre 2019 y 2015; F11, nacidos entre 2014 y 2010.",
			"Precio: 55 euros 4 dias / 30 euros 2 dias.",
			"Incluye camiseta FutGo, fruta, sombra, hidratacion, seguro FutGo y grupos reducidos.",
		],
	},
	{
		id: "salou-cup-2026",
		title: "Salou Cup 2026",
		description:
			"Experiencia historica de FutGo Talent en la Salou Cup 2026: competicion, convivencia, dinamicas de equipo y futbol en instalaciones de primer nivel.",
		details: [
			"Incluyo torneo, hotel 4 estrellas, pension completa y transporte interno.",
			"Tambien entrenamientos previos en Menorca, staff tecnico, fisioterapeutas, entrenador de porteros, soporte nutricional, social media y grabacion de partidos.",
			"Fue una oportunidad para competir, conocer nuevos rivales y vivir una experiencia completa dentro y fuera del campo.",
		],
	},
] as const;

export const galleryImages = [
	{
		src: "/images/IMG_3839.JPG.jpeg",
		alt: "Entrenamiento FutGo en accion",
		className: "md:col-span-2 md:row-span-2",
	},
	{
		src: "/images/IMG_2872.JPG.jpeg",
		alt: "Jugadores durante una actividad FutGo",
		className: "",
	},
	{
		src: "/images/IMG_2836.JPG.jpeg",
		alt: "Trabajo tecnico en campo",
		className: "",
	},
	{
		src: "/images/IMG_5107.jpg.jpeg",
		alt: "Grupo FutGo en sesion de futbol base",
		className: "",
	},
	{
		src: "/images/IMG_4960.jpg.jpeg",
		alt: "Detalle de entrenamientos FutGo",
		className: "",
	},
] as const;

export const faqs = [
	{
		question: "Que es FutGo Talent?",
		answer:
			"FutGo Talent es una organizacion deportiva de Menorca que ofrece tecnificacion, preparacion fisica, clinics, torneos y experiencias futbolisticas para jugadores y jugadoras.",
	},
	{
		question: "Para quien son las actividades de FutGo?",
		answer:
			"Las actividades estan adaptadas por edad, nivel y necesidades del futbolista, con grupos reducidos y feedback individual.",
	},
	{
		question: "Como puedo contactar con FutGo Talent?",
		answer:
			"Puedes contactar por telefono en el +34 636 152 876, por email en futgotalent@gmail.com o a traves de Instagram en @futgotalent.",
	},
] as const;


export const structuredData = {
	"@context": "https://schema.org",
	"@graph": [
		{
			"@type": "SportsOrganization",
			"@id": `${siteConfig.url}/#organization`,
			name: siteConfig.name,
			url: siteConfig.url,
			email: siteConfig.contact.email,
			telephone: "+34636152876",
			sport: "Football",
			areaServed: {
				"@type": "Place",
				name: "Menorca",
			},
			sameAs: [siteConfig.contact.instagram],
			description:
				"Organizacion deportiva en Menorca especializada en tecnificacion, preparacion fisica, clinics y torneos de futbol para jugadores y jugadoras.",
		},
		{
			"@type": "Event",
			"@id": `${siteConfig.url}/clinic-futgo-verano-2026/#event`,
			name: "Clinic FutGo Verano 2026",
			description:
				"Tecnificacion intensiva de futbol en grupos reducidos para jugadores y jugadoras, con trabajo tecnico-tactico, ejercicios por posicion, feedback individual y entrenamiento de porteros.",
			startDate: "2026-08-17T17:30:00+02:00",
			endDate: "2026-08-20T20:30:00+02:00",
			eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
			eventStatus: "https://schema.org/EventScheduled",
			location: {
				"@type": "Place",
				name: "Atletico Villacarlos",
				address: {
					"@type": "PostalAddress",
					addressLocality: "Es Castell",
					addressRegion: "Menorca",
					addressCountry: "ES",
				},
			},
			organizer: {
				"@id": `${siteConfig.url}/#organization`,
			},
			offers: [
				{
					"@type": "Offer",
					name: "Clinic FutGo 4 dias",
					price: "55",
					priceCurrency: "EUR",
					availability: "https://schema.org/InStock",
					url: `${siteConfig.url}/#experiencias`,
				},
				{
					"@type": "Offer",
					name: "Clinic FutGo 2 dias",
					price: "30",
					priceCurrency: "EUR",
					availability: "https://schema.org/InStock",
					url: `${siteConfig.url}/#experiencias`,
				},
			],
		},
		{
			"@type": "FAQPage",
			"@id": `${siteConfig.url}/#faq`,
			mainEntity: faqs.map((faq) => ({
				"@type": "Question",
				name: faq.question,
				acceptedAnswer: {
					"@type": "Answer",
					text: faq.answer,
				},
			})),
		},
	],
};
