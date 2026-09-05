export type ExperienceItem = {
	id: string;
	title: string;
	period: string;
	badge: string;
	description: string;
	highlights: string[];
	image: string;
	alt: string;
};

export type ActivityHighlight = {
	title: string;
	description: string;
	iconName: "trophy" | "users" | "zap" | "heartHandshake" | "shield" | "target" | "activity" | "flame";
};

export type BentoImage = {
	src: string;
	alt: string;
	className: string;
};

export type ActivityData = {
	id: string;
	slug: string;
	title: string;
	badge: string;
	subtitle: string;
	intro: string;
	methodologyTitle: string;
	methodologyDescription: string;
	highlights: ActivityHighlight[];
	bentoImages: BentoImage[];
	experiences: ExperienceItem[];
};

export const activitiesData: Record<string, ActivityData> = {
	torneos: {
		id: "torneos",
		slug: "torneos",
		title: "Torneos y Experiencias Competitivas",
		badge: "Competición, Convivencia y Rendimiento",
		subtitle:
			"Viajes deportivos de alto nivel que unen convivencia, cultura, rendimiento y valores dentro y fuera del terreno de juego.",
		intro:
			"En Futgo Talent entendemos los torneos como una experiencia formativa 360°. No se trata solo de competir contra canteras y clubes de primer nivel, sino de convivir como un equipo profesional: desplazamientos organizados, soporte multidisciplinar (cuerpo técnico, fisioterapia, nutrición y medios audiovisuales) y la vivencia de momentos que marcan a los y las futbolistas para siempre.",
		methodologyTitle: "¿Por qué competir con Futgo Talent?",
		methodologyDescription:
			"Apostamos por una preparación previa integral en Menorca antes de cada campeonato y por un acompañamiento cercano durante todo el viaje, cuidando a cada persona del grupo.",
		highlights: [
			{
				title: "Pioneros en Fútbol Femenino",
				description:
					"Somos la primera organización deportiva en Menorca en poner el foco de manera prioritaria en el fútbol femenino, llevando equipos femeninos y mixtos a cada torneo.",
				iconName: "heartHandshake",
			},
			{
				title: "Todas las Categorías",
				description:
					"Participamos con selecciones y equipos representativos de todas las edades (fútbol base, formativo y juvenil), brindando opciones a cada etapa de crecimiento.",
				iconName: "users",
			},
			{
				title: "Experiencia Profesional 360°",
				description:
					"Alojamiento de calidad, desplazamientos coordinados, fisioterapia en el campo y hotel, soporte nutricional y cobertura fotográfica y de vídeo.",
				iconName: "trophy",
			},
			{
				title: "Creación de Torneos Propios",
				description:
					"No solo participamos fuera; también creamos e impulsamos torneos propios en Menorca para ofrecer nuevos horizontes competitivos al fútbol local.",
				iconName: "target",
			},
		],
		bentoImages: [
			{
				src: "/images/4b244db6-dbe2-41eb-9e1e-42c37d653838.JPEG",
				alt: "Partido de torneo Futgo Talent en acción",
				className: "md:col-span-2 md:row-span-2",
			},
			{
				src: "/images/CAD MASC.jpg.jpeg",
				alt: "Equipo cadete en torneo de fútbol",
				className: "",
			},
			{
				src: "/images/ALEVMASC.jpg.jpeg",
				alt: "Equipo alevín preparado para la competición",
				className: "",
			},
			{
				src: "/images/WhatsApp Image 2026-08-04 at 00.16.21.jpeg",
				alt: "Celebración y entrega de trofeos",
				className: "md:col-span-2",
			},
		],
		experiences: [
			{
				id: "spain-cup",
				title: "Spain Cup (Ediciones 2022, 2023 y 2025)",
				period: "2022 · 2023 · 2025",
				badge: "Competición Nacional · Todas las Categorías",
				description:
					"Participación continuada en uno de los torneos formativos más prestigiosos de la península. Viajes con múltiples equipos que abarcan desde el fútbol base hasta juveniles, destacando la presencia de equipos femeninos que rompieron barreras competitivas.",
				highlights: [
					"Presencia histórica de equipos de todas las categorías y del fútbol femenino menorquín.",
					"Enfrentamientos de alto rendimiento contra canteras y academias de ámbito nacional e internacional.",
					"Convivencia inolvidable que fortalece la cohesión, la disciplina y el compañerismo.",
				],
				image: "/images/CAD MASC.jpg.jpeg",
				alt: "Futgo Talent en la Spain Cup",
			},
			{
				id: "salou-esei-cup-2026",
				title: "Salou Esei Cup 2026",
				period: "2026",
				badge: "Experiencia 360° · Máximo Nivel",
				description:
					"Una expedición de referencia que combinó competición de alto ritmo en instalaciones de césped natural y artificial con una convivencia de equipo en hotel de 4 estrellas con pensión completa.",
				highlights: [
					"Staff integral: entrenadores titulados, entrenador específico de porteros y fisioterapeutas dedicados.",
					"Soporte nutricional, grabación de partidos y dinamización en redes sociales.",
					"Competición con equipos de todas las edades y apuesta firme por categorías femeninas.",
				],
				image: "/images/4b244db6-dbe2-41eb-9e1e-42c37d653838.JPEG",
				alt: "Futgo Talent compitiendo en Salou Esei Cup 2026",
			},
			{
				id: "waves-go-cup-2025",
				title: "Waves Go Cup 2025 (Creación de Torneo Propio)",
				period: "2025",
				badge: "Torneo Propio · Dinamización en Menorca",
				description:
					"Creación y organización integral por parte de Futgo Talent del torneo Waves Go Cup en Menorca, concebido para brindar nuevas oportunidades competitivas a los clubes y deportistas de la isla.",
				highlights: [
					"Iniciativa pionera para atraer competición de calidad sin necesidad de desplazarse de Menorca.",
					"Visibilidad para el talento menorquín y fomento del fútbol femenino local.",
					"Organización, logística, arbitrajes y ambiente festivo para familias y jugadores.",
				],
				image: "/images/CAMPUS.JPEG",
				alt: "Torneo propio Waves Go Cup en Menorca",
			},
		],
	},
	clinics: {
		id: "clinics",
		slug: "clinics",
		title: "Clínics Intensivos de Tecnificación",
		badge: "Formación en Períodos Vacacionales",
		subtitle:
			"Jornadas intensivas de fútbol y aprendizaje durante vacaciones de verano e invierno para dar un salto de nivel.",
		intro:
			"Los Clínics de Futgo Talent están diseñados para aprovechar las vacaciones escolares con jornadas dinámicas y estructuradas. Combinamos trabajo técnico-táctico específico por posiciones, entrenamientos especializados para porteros, juegos de habilidad y feedback individual para que cada jugador y jugadora progrese divirtiéndose.",
		methodologyTitle: "¿Cómo estructuramos cada clínic?",
		methodologyDescription:
			"Entrenamientos en grupos reducidos organizados por edad y nivel, garantizando que el contacto con el balón y la atención de los técnicos sea constante.",
		highlights: [
			{
				title: "Ratios Reducidas",
				description:
					"Garantizamos un número óptimo de futbolistas por entrenador para corregir gestos técnicos y dar feedback en directo.",
				iconName: "users",
			},
			{
				title: "Específico para Porteros y Jugadores",
				description:
					"Contamos con entrenadores de porteros dedicados para trabajar blocajes, juego aéreo y juego de pies al mismo tiempo que los jugadores de campo.",
				iconName: "target",
			},
			{
				title: "Ambiente Positivo y Formativo",
				description:
					"La diversión y el respeto son innegociables: combinamos exigencia técnica con dinámicas de grupo y compañerismo.",
				iconName: "heartHandshake",
			},
			{
				title: "Atención y Confort",
				description:
					"Incluye camiseta oficial Futgo Talent, hidratación constante, fruta, zonas de sombra y cobertura de seguro deportivo.",
				iconName: "shield",
			},
		],
		bentoImages: [
			{
				src: "/images/IMG_2665.JPG.jpeg",
				alt: "Entrenamiento técnico en clínic",
				className: "md:col-span-2 md:row-span-2",
			},
			{
				src: "/images/IMG_2646.JPEG",
				alt: "Jugadores concentrados en el campo",
				className: "",
			},
			{
				src: "/images/IMG_2822.JPG.jpeg",
				alt: "Sesión de clínic en césped",
				className: "",
			},
			{
				src: "/images/CAMPUS.JPEG",
				alt: "Grupo de participantes de clínic Futgo Talent",
				className: "md:col-span-2",
			},
		],
		experiences: [
			{
				id: "clinic-nadal-ferreries",
				title: "Clínic de Navidad Mixto Ferreríes (Ediciones 2025 y 2026)",
				period: "2025 · 2026",
				badge: "Invierno · Mixto · C.E. Ferreríes",
				description:
					"Tecnificación intensiva durante el parón navideño en las instalaciones del C.E. Ferreríes. Una oportunidad única para mantener la forma física y afinar la técnica individual antes de reanudar las ligas regulares.",
				highlights: [
					"Participación mixta abierta a jugadoras y jugadores de toda la isla.",
					"Trabajo específico para guardametas con entrenador de porteros titulado.",
					"Ejercicios orientados a la velocidad gestual, control en espacios reducidos y finalización.",
				],
				image: "/images/IMG_2822.JPG.jpeg",
				alt: "Clínic de Navidad en Ferreríes",
			},
			{
				id: "clinic-estiu-es-castell-2026",
				title: "Clínic de Verano Mixto Es Castell 2026",
				period: "Agosto 2026",
				badge: "Verano · Mixto · Atlético Villacarlos",
				description:
					"Cuatro jornadas vespertinas de tecnificación intensiva en el campo del Atlético Villacarlos en Es Castell. Diseñado con horarios adaptados al verano para evitar las horas centrales de calor.",
				highlights: [
					"Horario de tarde (17:30 a 20:30 h) con estaciones de hidratación, fruta y zonas de sombra.",
					"Categorías de F7 (2019-2015) y F11 (2014-2010) con metodología adaptada a cada fase madurativa.",
					"Camiseta técnica oficial Futgo Talent, seguro médico y grupos de trabajo muy reducidos.",
				],
				image: "/images/IMG_2665.JPG.jpeg",
				alt: "Clínic de Verano en Es Castell",
			},
		],
	},
	tecnificacion: {
		id: "tecnificacion",
		slug: "tecnificacion",
		title: "Tecnificación Individual y Grupal",
		badge: "Perfeccionamiento Técnico y Toma de Decisiones",
		subtitle:
			"Sesiones continuas a lo largo de la temporada para dominar los fundamentos que marcan la diferencia en competición.",
		intro:
			"La tecnificación de Futgo Talent ofrece un espacio de entrenamiento minucioso y complementario al trabajo en sus clubes. Analizamos y pulimos cada detalle biomecánico: control orientado, pierna no hábil, perfiles corporales, velocidad de ejecución y visión táctica bajo presión, tanto para jugadores de campo como para porteros.",
		methodologyTitle: "Nuestra metodología de tecnificación",
		methodologyDescription:
			"Basada en repeticiones de calidad con transferencia directa a la situación real de partido y retroalimentación pedagógica positiva.",
		highlights: [
			{
				title: "Foco Pionero en Fútbol Femenino",
				description:
					"Creamos grupos y programas específicos para el desarrollo de jugadoras y porteras, potenciando su confianza, liderazgo y rendimiento.",
				iconName: "heartHandshake",
			},
			{
				title: "Entrenamiento de Porteros",
				description:
					"Metodología propia para guardametas: posición básica, desplazamientos, blocaje, desvío, juego aéreo y salida de balón con los pies.",
				iconName: "target",
			},
			{
				title: "Pierna No Hábil y Perfiles",
				description:
					"Insistimos en el uso de ambos perfiles y en la orientación corporal previa a la recepción para ganar tiempo y espacio.",
				iconName: "zap",
			},
			{
				title: "Análisis y Feedback Inmediato",
				description:
					"Cada ejercicio cuenta con corrección individualizada para que el futbolista interiorice el porqué de cada acción.",
				iconName: "activity",
			},
		],
		bentoImages: [
			{
				src: "/images/IMG_6749.jpg.jpeg",
				alt: "Entrenamiento de tecnificación con balón",
				className: "md:col-span-2 md:row-span-2",
			},
			{
				src: "/images/IMG_3839.JPG.jpeg",
				alt: "Ejercicio de agilidad y pase",
				className: "",
			},
			{
				src: "/images/IMG_2836.JPG.jpeg",
				alt: "Trabajo de control de balón",
				className: "",
			},
			{
				src: "/images/IMG_5107.jpg.jpeg",
				alt: "Grupo de tecnificación en sesión",
				className: "md:col-span-2",
			},
		],
		experiences: [
			{
				id: "tecnificacion-menorca-femenino",
				title: "Tecnificación Menorca Femenino (2025 y 2026)",
				period: "2025 · 2026",
				badge: "Pioneras en Menorca · Porteras y Jugadoras",
				description:
					"Programa continuado e histórico en Menorca dedicado exclusivamente a la formación de futbolistas y guardametas femeninas. Un entorno seguro, de alta exigencia técnica y compañerismo donde evolucionar sin barreras.",
				highlights: [
					"Atención específica para porteras y jugadoras de campo de diversas edades.",
					"Entrenamientos técnicos centrados en golpeo, orientación espacial y finalización.",
					"Consolidación de una comunidad de futbolistas femeninas de referencia en la isla.",
				],
				image: "/images/IMG_3839.JPG.jpeg",
				alt: "Tecnificación femenina en Menorca",
			},
			{
				id: "tecnificacion-menorca-masculino",
				title: "Tecnificaciones Menorca Masculino (2025 y 2026)",
				period: "2025 · 2026",
				badge: "Continuo en Menorca · Porteros y Jugadores",
				description:
					"Módulos periódicos durante toda la temporada en diferentes campos de la isla para complementar los entrenamientos de club de los futbolistas locales.",
				highlights: [
					"Grupos reducidos por nivel para asegurar un alto volumen de toques y repeticiones de calidad.",
					"Especial atención al golpeo con pierna no dominante y a la anticipación táctica.",
					"Seguimiento evolutivo de cada jugador a lo largo de los meses.",
				],
				image: "/images/IMG_6749.jpg.jpeg",
				alt: "Tecnificación masculina en Menorca",
			},
			{
				id: "tecnificacion-catalunya-masculino",
				title: "Tecnificación Cataluña Masculino",
				period: "Temporada 2025 - 2026",
				badge: "Stage Península · Porteros y Jugadores",
				description:
					"Jornadas de tecnificación especial organizadas en Cataluña, compartiendo el método formativo y los valores de Futgo Talent con futbolistas de clubes catalanes.",
				highlights: [
					"Intercambio metodológico y enriquecimiento competitivo.",
					"Sesiones intensivas de doble turno para guardametas y jugadores.",
					"Excelente acogida que reafirma la efectividad del método Futgo Talent fuera de Menorca.",
				],
				image: "/images/IMG_2836.JPG.jpeg",
				alt: "Tecnificación en Cataluña",
			},
		],
	},
	"preparacion-fisica": {
		id: "preparacion-fisica",
		slug: "preparacion-fisica",
		title: "Preparación Física y Readaptación",
		badge: "Rendimiento, Fuerza y Prevención",
		subtitle:
			"Desarrollo atlético específico para futbolistas y programas individualizados de vuelta a la competición tras lesión.",
		intro:
			"El fútbol moderno exige velocidad, potencia, cambios de ritmo y, por encima de todo, disponibilidad física. Nuestro departamento de preparación física diseña programas adaptados tanto a futbolistas que buscan elevar su rendimiento atlético en campo y gimnasio como a aquellos que necesitan recuperarse de lesiones complejas con total garantía.",
		methodologyTitle: "Enfoque científico y práctico",
		methodologyDescription:
			"Cada sesión combina trabajo de fuerza preventiva, control neuromuscular y velocidad reactiva con transferencia directa al juego.",
		highlights: [
			{
				title: "Fuerza Funcional y Potencia",
				description:
					"Entrenamiento de fuerza específico adaptado a la edad del jugador para mejorar saltos, duelos y aceleraciones.",
				iconName: "flame",
			},
			{
				title: "Prevención de Lesiones",
				description:
					"Trabajo neuromuscular y excéntrico para blindar isquiotibiales, aductores, tobillos y rodillas frente a recaídas.",
				iconName: "shield",
			},
			{
				title: "Readaptación 'Return to Play'",
				description:
					"Acompañamiento individualizado desde la fase final de rehabilitación clínica hasta el alta competitiva con balón.",
				iconName: "activity",
			},
			{
				title: "Puesta a Punto de Pretemporada",
				description:
					"Planes para llegar al inicio de curso con los clubes en el mejor estado cardiovascular y muscular, reduciendo el riesgo de sobrecarga.",
				iconName: "zap",
			},
		],
		bentoImages: [
			{
				src: "/images/preparacion-fisica-futgo-talent.png",
				alt: "Preparación física específica Futgo Talent",
				className: "md:col-span-2 md:row-span-2",
			},
			{
				src: "/images/IMG_5907-Mejorado-NR.JPEG",
				alt: "Trabajo atlético y físico en campo",
				className: "",
			},
			{
				src: "/images/IMG_4879.jpg.jpeg",
				alt: "Ejercicio de fuerza y estabilidad",
				className: "",
			},
			{
				src: "/images/IMG_5113.jpg.jpeg",
				alt: "Sesión de movilidad y prevención",
				className: "md:col-span-2",
			},
		],
		experiences: [
			{
				id: "pre-pretemporada-menorca",
				title: "Pre-pretemporada en Menorca (2025 y 2026)",
				period: "2025 · 2026",
				badge: "Puesta a Punto · Prevención de Lesiones",
				description:
					"Bloques intensivos de acondicionamiento físico durante los meses de verano previos al inicio de la pretemporada oficial de los clubes. El objetivo es que los jugadores lleguen con una base sólida de fuerza y resistencia, evitando las lesiones tempranas.",
				highlights: [
					"Trabajo de capacidad aeróbica y anaeróbica con balón.",
					"Fortalecimiento de la musculatura estabilizadora del core, tobillo y rodilla.",
					"Planificación de cargas individualizada según la categoría del futbolista.",
				],
				image: "/images/IMG_5907-Mejorado-NR.JPEG",
				alt: "Pre-pretemporada en Menorca",
			},
			{
				id: "recuperacion-lesiones-severas",
				title: "Recuperación y Readaptación de Lesiones Severas",
				period: "Programas Continuos",
				badge: "Readaptación Físico-Deportiva · Casos Reales",
				description:
					"Protocolos personalizados de reintegración deportiva tras lesiones graves o de larga duración, trabajando la confianza física y psicológica del futbolista.",
				highlights: [
					"Esguinces de segundo grado: trabajo propioceptivo profundo, estabilidad articular y reactividad de tobillo.",
					"Roturas musculares severas (isquiotibiales, recto anterior, gemelos): entrenamiento de fuerza excéntrica y tolerancia a sprints de alta intensidad.",
					"Roturas de rodilla (ligamento cruzado anterior / meniscos): transición progresiva desde la fuerza en gimnasio hasta giros, frenadas, saltos y contacto con balón en césped.",
				],
				image: "/images/preparacion-fisica-futgo-talent.png",
				alt: "Readaptación de lesiones deportivas",
			},
		],
	},
};
