export const siteConfig = {
	name: "Futgo Talent",

	description:
		"Tecnificación, preparación física, clínics de fútbol y experiencias en torneos para jugadores y jugadoras en Menorca con Futgo Talent.",

	url: "https://webfutgo.local",

	locale: "es_ES",

	contact: {
		email: "futgotalent@gmail.com",
		phone: "+34 636 152 876",
		phoneHref: "tel:+34636152876",
		instagram: "https://www.instagram.com/futgotalent",
		instagramLabel: "@futgotalent",
		socials: [
			{
				name: "Instagram",
				href: "https://www.instagram.com/futgotalent",
				label: "@futgotalent",
			},
		],
	},
} as const;

export const homeContent = {
	hero: {
		eyebrow: "Fútbol base en Menorca",
		title:
			"Futgo Talent: fútbol, formación y experiencias para jugadores y jugadoras en Menorca",
		description:
			"Organización deportiva en Menorca para futbolistas que quieren crecer, mejorar y disfrutar. Cuidamos los pequeños detalles y a las personas para que cada experiencia combine calidad, rendimiento y diversión.",
		image: "/images/entrenamiento-futgo-petos-naranjas.jpg",
	},
	about: {
		title: "Sobre Futgo Talent",
		description:
			"Futgo Talent es una organización deportiva nacida en Menorca con el objetivo de acompañar a futbolistas en su crecimiento personal y futbolístico. Priorizamos primero a las personas: el buen trato, la calidad del entrenamiento y la diversión son la base de cada experiencia.",
		secondary:
			"Trabajamos con una identidad clara: pequeños detalles, compromiso y respeto. Creamos entornos positivos donde cada jugador y jugadora puede evolucionar, aprender y vivir el fútbol con exigencia, cercanía y confianza.",
		image: "/images/equipo-futgo-campo-ferreries-02.jpg",
	},
	servicesIntro:
		"Servicios pensados para el crecimiento de los y las futbolistas, cuidando la calidad del trabajo, el rendimiento y la diversión de cada experiencia.",
	contactCta: {
		title: "Fútbol para todos. Diversión y evolución.",
		description:
			"¿Quieres entrenar, competir o vivir una experiencia Futgo Talent? Contacta con nosotros para empezar a formar parte!",
	},
} as const;

export const services = [
	{
		id: "tecnificacion",
		title: "Tecnificación individual y grupal",
		description:
			"Trabajo individual específico o en grupo reducido para mejorar acciones técnico-tácticas, toma de decisiones y confianza, siempre con feedback especializado.",
		image: "/images/preparacion-fisica-contacto-02.jpg",
	},
	{
		id: "preparacion-fisica",
		title: "Preparación física específica",
		description:
			"Trabajo de fuerza para prevenir lesiones, mejorar velocidad y potencia, adaptado a cada edad y nivel tanto en gimnasio como en campo.",
		image: "/images/preparacion-fisica-abdominal-futgo.jpg",
	},
	{
		id: "clinics",
		title: "Clínics intensivos",
		description:
			"Tecnificaciones intensivas para perfeccionar el nivel individual con acciones técnico-tácticas, juegos de habilidad, ejercicios específicos por posición y feedback individualizado.",
		image: "/images/charla-entrenamiento-futgo-02.jpg",
	},
	{
		id: "torneos",
		title: "Torneos y experiencias",
		description:
			"Participación en torneos con una experiencia única que une cultura, convivencia y deporte, con formación, rendimiento y momentos dentro y fuera del campo.",
		image: "/images/viaje-equipo-autobus-futgo-02.jpg",
	},
] as const;

export const featuredExperiences = [
	{
		id: "clinic-futgo-verano-2026",
		title: "Clinic Futgo Talent Verano 2026",
		description:
			"Tecnificación intensiva para jugadores y jugadoras de Menorca que quieren seguir mejorando durante el verano.",
		details: [
			"Fechas: del lunes 17 de agosto al jueves 20 de agosto de 2026.",
			"Horario: de 17:30 a 20:30.",
			"Lugar: Atlético Villacarlos.",
			"Categorías: F7, nacidos entre 2019 y 2015; F11, nacidos entre 2014 y 2010.",
			"Precio: 55 euros 4 días / 30 euros 2 días.",
			"Incluye camiseta Futgo Talent, fruta, sombra, hidratación, seguro Futgo Talent y grupos reducidos.",
		],
	},
	{
		id: "salou-cup-2026",
		title: "Salou Cup 2026",
		description:
			"Experiencia histórica de Futgo Talent en la Salou Cup 2026: competición, convivencia, dinámicas de equipo y fútbol en instalaciones de primer nivel.",
		details: [
			"Incluyó torneo, hotel 4 estrellas, pensión completa y transporte interno.",
			"También entrenamientos previos en Menorca, staff técnico, fisioterapeutas, entrenador de porteros, soporte nutricional, social media y grabación de partidos.",
			"Fue una oportunidad para competir, conocer nuevos rivales y vivir una experiencia completa dentro y fuera del campo.",
		],
	},
] as const;

export const galleryImages = [
	{
		src: "/images/partido-infantil-conduccion-azul.jpg",
		alt: "Entrenamiento Futgo Talent en acción",
		className: "md:col-span-2 md:row-span-2",
	},
	{
		src: "/images/equipo-futgo-partido-jovenes.jpg",
		alt: "Jugadores durante una actividad Futgo Talent",
		className: "",
	},
	{
		src: "/images/partido-infantil-carrera-balon.jpg",
		alt: "Trabajo técnico en campo",
		className: "",
	},
	{
		src: "/images/entrenamiento-con-petos-naranjas-01.jpg",
		alt: "Grupo Futgo Talent en sesión de fútbol base",
		className: "",
	},
	{
		src: "/images/entrenador-indicaciones-futgo-03.jpg",
		alt: "Detalle de entrenamientos Futgo Talent",
		className: "",
	},
] as const;

export const faqs = [
	{
		question: "¿Qué es Futgo Talent?",
		answer:
			"Futgo Talent es una organización deportiva de Menorca que ofrece tecnificación, preparación física, clínics, torneos y experiencias futbolísticas para jugadores y jugadoras.",
	},
	{
		question: "¿Para quién son las actividades de Futgo Talent?",
		answer:
			"Las actividades están adaptadas por edad, nivel y necesidades del futbolista, con grupos reducidos y feedback individual.",
	},
	{
		question: "¿Cómo puedo contactar con Futgo Talent?",
		answer:
			"Puedes contactar por teléfono en el +34 636 152 876, por email en futgotalent@gmail.com o a través de Instagram en @futgotalent.",
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
				"Organización deportiva en Menorca especializada en tecnificación, preparación física, clínics y torneos de fútbol para jugadores y jugadoras.",
		},
		{
			"@type": "Event",
			"@id": `${siteConfig.url}/clinic-futgo-verano-2026/#event`,
			name: "Clinic Futgo Talent Verano 2026",
			description:
				"Tecnificación intensiva de fútbol en grupos reducidos para jugadores y jugadoras, con trabajo técnico-táctico, ejercicios por posición, feedback individual y entrenamiento de porteros.",
			startDate: "2026-08-17T17:30:00+02:00",
			endDate: "2026-08-20T20:30:00+02:00",
			eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
			eventStatus: "https://schema.org/EventScheduled",
			location: {
				"@type": "Place",
				name: "Atlético Villacarlos",
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
					name: "Clinic Futgo Talent 4 días",
					price: "55",
					priceCurrency: "EUR",
					availability: "https://schema.org/InStock",
					url: `${siteConfig.url}/actividades/clinics`,
				},
				{
					"@type": "Offer",
					name: "Clinic Futgo Talent 2 días",
					price: "30",
					priceCurrency: "EUR",
					availability: "https://schema.org/InStock",
					url: `${siteConfig.url}/actividades/clinics`,
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
