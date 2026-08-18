export const siteConfig = {
	name: "FUTGO TALENT",

	description:
		"Tecnificacion, preparacion fisica, clinics de futbol y experiencias en torneos para jugadores y jugadoras en Menorca con Futgo Talent.",

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
			"FUTGO TALENT: futbol, formacion y experiencias para jugadores y jugadoras en Menorca",
		description:
			"Organizacion deportiva en Menorca para futbolistas que quieren crecer, mejorar y disfrutar. Cuidamos los pequenos detalles y a las personas para que cada experiencia combine calidad, rendimiento y diversion.",
		image: "/images/CAMPUS.JPEG",
	},
	about: {
		title: "Sobre Futgo Talent",
		description:
			"Futgo Talent es una organizacion deportiva nacida en Menorca con el objetivo de acompanar a futbolistas en su crecimiento personal y futbolistico. Priorizamos primero a las personas: el buen trato, la calidad del entrenamiento y la diversion son la base de cada experiencia.",
		secondary:
			"Trabajamos con una identidad clara: pequenos detalles, compromiso y respeto. Creamos entornos positivos donde cada jugador y jugadora puede evolucionar, aprender y vivir el futbol con exigencia, cercania y confianza.",
		image: "/images/ALEVMASC.jpg.jpeg",
	},
	servicesIntro:
		"Servicios pensados para el crecimiento de los y las futbolistas, cuidando la calidad del trabajo, el rendimiento y la diversion de cada experiencia.",
	contactCta: {
		title: "Futbol para todos. Diversion y evolucion.",
		description:
			"Quieres entrenar, competir o vivir una experiencia Futgo Talent? Contacta con nosotros y forma parte de FUTGO TALENT.",
	},
} as const;

export const services = [
	{
		id: "tecnificacion",
		title: "Tecnificacion individual y grupal",
		description:
			"Trabajo individual especifico o en grupo reducido para mejorar acciones tecnico-tacticas, toma de decisiones y confianza, siempre con feedback especializado.",
		image: "/images/IMG_6749.jpg.jpeg",
	},
	{
		id: "preparacion-fisica",
		title: "Preparacion fisica especifica",
		description:
			"Trabajo de fuerza para prevenir lesiones, mejorar velocidad y potencia, adaptado a cada edad y nivel tanto en gimnasio como en campo.",
		image: "/images/preparacion-fisica-futgo-talent.png",
	},
	{
		id: "clinics",
		title: "Clinics intensivos",
		description:
			"Tecnificaciones intensivas para perfeccionar el nivel individual con acciones tecnico-tacticas, juegos de habilidad, ejercicios especificos por posicion y feedback individualizado.",
		image: "/images/IMG_2665.JPG.jpeg",
	},
	{
		id: "torneos",
		title: "Torneos y experiencias",
		description:
			"Participacion en torneos con una experiencia unica que une cultura, convivencia y deporte, con formacion, rendimiento y momentos dentro y fuera del campo.",
		image: "/images/4b244db6-dbe2-41eb-9e1e-42c37d653838.JPEG",
	},
] as const;

export const featuredExperiences = [
	{
		id: "clinic-futgo-verano-2026",
		title: "Clinic Futgo Talent Verano 2026",
		description:
			"Tecnificacion intensiva para jugadores y jugadoras de Menorca que quieren seguir mejorando durante el verano.",
		details: [
			"Fechas: del lunes 17 de agosto al jueves 20 de agosto de 2026.",
			"Horario: de 17:30 a 20:30.",
			"Lugar: Atletico Villacarlos.",
			"Categorias: F7, nacidos entre 2019 y 2015; F11, nacidos entre 2014 y 2010.",
			"Precio: 55 euros 4 dias / 30 euros 2 dias.",
			"Incluye camiseta Futgo Talent, fruta, sombra, hidratacion, seguro Futgo Talent y grupos reducidos.",
		],
	},
	{
		id: "salou-cup-2026",
		title: "Salou Cup 2026",
		description:
			"Experiencia historica de Futgo Talent en la Salou Cup 2026: competicion, convivencia, dinamicas de equipo y futbol en instalaciones de primer nivel.",
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
		alt: "Entrenamiento Futgo Talent en accion",
		className: "md:col-span-2 md:row-span-2",
	},
	{
		src: "/images/IMG_2872.JPG.jpeg",
		alt: "Jugadores durante una actividad Futgo Talent",
		className: "",
	},
	{
		src: "/images/IMG_2836.JPG.jpeg",
		alt: "Trabajo tecnico en campo",
		className: "",
	},
	{
		src: "/images/IMG_5107.jpg.jpeg",
		alt: "Grupo Futgo Talent en sesion de futbol base",
		className: "",
	},
	{
		src: "/images/IMG_4960.jpg.jpeg",
		alt: "Detalle de entrenamientos Futgo Talent",
		className: "",
	},
] as const;

export const faqs = [
	{
		question: "Que es Futgo Talent?",
		answer:
			"Futgo Talent es una organizacion deportiva de Menorca que ofrece tecnificacion, preparacion fisica, clinics, torneos y experiencias futbolisticas para jugadores y jugadoras.",
	},
	{
		question: "Para quien son las actividades de Futgo Talent?",
		answer:
			"Las actividades estan adaptadas por edad, nivel y necesidades del futbolista, con grupos reducidos y feedback individual.",
	},
	{
		question: "Como puedo contactar con Futgo Talent?",
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
			name: "Clinic Futgo Talent Verano 2026",
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
					name: "Clinic Futgo Talent 4 dias",
					price: "55",
					priceCurrency: "EUR",
					availability: "https://schema.org/InStock",
					url: `${siteConfig.url}/#experiencias`,
				},
				{
					"@type": "Offer",
					name: "Clinic Futgo Talent 2 dias",
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
