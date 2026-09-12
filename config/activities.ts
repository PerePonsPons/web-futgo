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
	iconName:
		| "trophy"
		| "users"
		| "zap"
		| "heartHandshake"
		| "shield"
		| "target"
		| "activity"
		| "flame";
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
			"Viajes deportivos diseñados para competir, convivir y crecer como equipo dentro y fuera del campo.",
		intro:
			"En Futgo Talent los torneos son mucho más que partidos. Preparamos cada expedición como una experiencia deportiva completa: planificación previa, desplazamientos organizados, staff técnico, apoyo de fisioterapia, nutrición y cobertura audiovisual para que cada futbolista compita con exigencia y viva momentos que dejan marca.",
		methodologyTitle: "Competir con una estructura profesional",
		methodologyDescription:
			"Antes de cada campeonato trabajamos la preparación deportiva en Menorca y durante el viaje acompañamos de cerca a cada jugador y jugadora, cuidando el rendimiento, la convivencia y la seguridad del grupo.",
		highlights: [
			{
				title: "Impulso real al fútbol femenino",
				description:
					"Damos protagonismo a jugadoras y equipos femeninos en experiencias competitivas donde pueden medirse, crecer y ganar visibilidad.",
				iconName: "heartHandshake",
			},
			{
				title: "Equipos para cada etapa",
				description:
					"Formamos grupos adaptados a fútbol base, etapa formativa y juvenil para que cada futbolista compita en un contexto adecuado a su edad y nivel.",
				iconName: "users",
			},
			{
				title: "Experiencia 360°",
				description:
					"Alojamiento, traslados, fisioterapia, soporte nutricional y contenido audiovisual coordinados para que el equipo solo piense en competir.",
				iconName: "trophy",
			},
			{
				title: "Torneos propios en Menorca",
				description:
					"Además de viajar, impulsamos competiciones propias en la isla para abrir nuevas oportunidades al talento local.",
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
					"Participación consolidada en uno de los torneos formativos de referencia en la península, con expediciones que han reunido fútbol base, categorías juveniles y equipos femeninos con un papel protagonista.",
				highlights: [
					"Representación menorquina en distintas categorías y presencia destacada del fútbol femenino.",
					"Partidos exigentes ante canteras y academias de nivel nacional e internacional.",
					"Una convivencia que refuerza disciplina, compañerismo y sentimiento de equipo.",
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
					"Una expedición diseñada al detalle: competición de alto ritmo en instalaciones de primer nivel, convivencia de equipo y una organización pensada para que cada jugador viviera el torneo como una experiencia profesional.",
				highlights: [
					"Staff completo con entrenadores titulados, trabajo específico de porteros y fisioterapia.",
					"Soporte nutricional, grabación de partidos y seguimiento audiovisual de la experiencia.",
					"Equipos de distintas edades y apuesta firme por categorías femeninas.",
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
					"Creación y organización integral de Waves Go Cup en Menorca, un torneo nacido para generar nuevas oportunidades competitivas para clubes, familias y futbolistas de la isla.",
				highlights: [
					"Competición de calidad en Menorca, sin necesidad de desplazamientos fuera de la isla.",
					"Mayor visibilidad para el talento menorquín y para el fútbol femenino local.",
					"Logística, arbitrajes y ambiente familiar cuidados desde la organización.",
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
		badge: "Formación en Periodos Vacacionales",
		subtitle:
			"Jornadas intensivas para mejorar técnica, toma de decisiones y confianza durante las vacaciones.",
		intro:
			"Los clínics de Futgo Talent convierten las vacaciones en una oportunidad real de mejora. Cada jornada combina ejercicios técnico-tácticos por posiciones, sesiones específicas para porteros, juegos competitivos y correcciones individuales para que cada jugador y jugadora avance sin perder la diversión.",
		methodologyTitle: "Entrenar mejor en pocos días",
		methodologyDescription:
			"Organizamos los grupos por edad y nivel para asegurar muchas repeticiones con balón, atención cercana del staff y un ritmo de trabajo adaptado a cada etapa.",
		highlights: [
			{
				title: "Grupos reducidos",
				description:
					"Trabajamos con ratios ajustadas para corregir gestos técnicos, acompañar decisiones y dar feedback en el momento.",
				iconName: "users",
			},
			{
				title: "Porteros y jugadores de campo",
				description:
					"El entrenamiento de porteros tiene espacio propio mientras los jugadores de campo trabajan control, pase, conducción, finalización y juego real.",
				iconName: "target",
			},
			{
				title: "Ambiente exigente y positivo",
				description:
					"La diversión, el respeto y el compañerismo sostienen sesiones intensas donde cada futbolista se atreve a probar, fallar y mejorar.",
				iconName: "heartHandshake",
			},
			{
				title: "Cuidado en cada detalle",
				description:
					"Incluimos camiseta oficial, hidratación, fruta, zonas de descanso y seguro deportivo para que la experiencia sea cómoda y segura.",
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
					"Tecnificación intensiva durante el parón navideño en las instalaciones del C.E. Ferreríes: una forma útil y motivadora de mantener ritmo competitivo, afinar la técnica y volver mejor preparados a la liga.",
				highlights: [
					"Participación mixta para jugadoras y jugadores de diferentes puntos de la isla.",
					"Trabajo específico para guardametas con entrenador de porteros.",
					"Ejercicios de velocidad gestual, control en espacios reducidos y finalización.",
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
					"Cuatro jornadas de tarde en el campo del Atlético Villacarlos, diseñadas para entrenar con intensidad en un horario más amable y adaptado al verano.",
				highlights: [
					"Horario de tarde, hidratación, fruta y zonas de sombra para cuidar el rendimiento.",
					"Categorías F7 y F11 con metodología ajustada a cada fase madurativa.",
					"Camiseta técnica oficial, seguro deportivo y grupos de trabajo reducidos.",
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
		badge: "Técnica, Decisión y Confianza",
		subtitle:
			"Sesiones de mejora durante la temporada para dominar los detalles que deciden partidos.",
		intro:
			"La tecnificación de Futgo Talent complementa el trabajo del club con sesiones muy enfocadas en el detalle. Entrenamos control orientado, pierna no hábil, perfil corporal, velocidad de ejecución y lectura del juego bajo presión, tanto para jugadores de campo como para porteros.",
		methodologyTitle: "Mejorar lo que después aparece en partido",
		methodologyDescription:
			"Cada ejercicio busca transferencia directa al juego: pocas filas, muchas acciones útiles, correcciones claras y un entorno donde el futbolista entiende qué mejorar y por qué.",
		highlights: [
			{
				title: "Fútbol femenino con espacio propio",
				description:
					"Creamos grupos y programas pensados para jugadoras y porteras, reforzando confianza, liderazgo y rendimiento.",
				iconName: "heartHandshake",
			},
			{
				title: "Porteros con metodología específica",
				description:
					"Trabajamos posición básica, desplazamientos, blocaje, desvío, juego aéreo y salida de balón con los pies.",
				iconName: "target",
			},
			{
				title: "Perfiles y pierna no dominante",
				description:
					"Insistimos en la orientación corporal antes de recibir y en el uso de ambos perfiles para ganar tiempo y espacio.",
				iconName: "zap",
			},
			{
				title: "Corrección inmediata",
				description:
					"El feedback llega durante la acción para que el futbolista conecte rápido el gesto, la decisión y el resultado.",
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
					"Programa continuado dedicado a la evolución de jugadoras y guardametas femeninas en Menorca. Un entorno cercano, exigente y seguro para mejorar sin barreras y con referentes alrededor.",
				highlights: [
					"Atención específica para porteras y jugadoras de campo de distintas edades.",
					"Entrenamientos centrados en golpeo, orientación, conducción y finalización.",
					"Construcción de una comunidad femenina de referencia en la isla.",
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
					"Módulos periódicos durante la temporada en diferentes campos de la isla para complementar el entrenamiento de club con sesiones más específicas y personalizadas.",
				highlights: [
					"Grupos reducidos por nivel para asegurar volumen de balón y calidad en la repetición.",
					"Trabajo de pierna no dominante, perfiles corporales y anticipación táctica.",
					"Seguimiento de la evolución de cada futbolista a lo largo de los meses.",
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
					"Jornadas especiales en Cataluña para compartir la metodología Futgo Talent con futbolistas de clubes catalanes y crear un contexto de aprendizaje intenso fuera de Menorca.",
				highlights: [
					"Intercambio metodológico y aprendizaje en un entorno competitivo diferente.",
					"Sesiones intensivas para guardametas y jugadores de campo.",
					"Gran acogida del método Futgo Talent fuera de Menorca.",
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
		badge: "Rendimiento, Prevención y Vuelta al Juego",
		subtitle:
			"Trabajo físico específico para rendir más, prevenir lesiones y volver al campo con garantías.",
		intro:
			"El fútbol actual exige velocidad, potencia, cambios de ritmo y disponibilidad física durante toda la temporada. Nuestro departamento de preparación física diseña planes para futbolistas que quieren elevar su rendimiento y para quienes necesitan volver a competir después de una lesión con un proceso progresivo y controlado.",
		methodologyTitle: "Preparación física con transferencia al fútbol",
		methodologyDescription:
			"Combinamos fuerza preventiva, control neuromuscular, velocidad reactiva y trabajo con balón para que cada mejora física tenga sentido dentro del juego.",
		highlights: [
			{
				title: "Fuerza útil para competir",
				description:
					"Entrenamiento adaptado a la edad y nivel del futbolista para mejorar duelos, saltos, aceleraciones y estabilidad.",
				iconName: "flame",
			},
			{
				title: "Prevención de lesiones",
				description:
					"Trabajo neuromuscular y excéntrico para proteger isquiotibiales, aductores, tobillos y rodillas frente a sobrecargas y recaídas.",
				iconName: "shield",
			},
			{
				title: "Readaptación progresiva",
				description:
					"Acompañamos desde la fase final de rehabilitación hasta el regreso competitivo con balón, contacto y confianza.",
				iconName: "activity",
			},
			{
				title: "Puesta a punto",
				description:
					"Planes para llegar al inicio de temporada con una base física sólida y menor riesgo de lesión temprana.",
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
					"Bloques intensivos durante el verano para que los futbolistas lleguen a la pretemporada del club con una base física sólida, mejores sensaciones y menos riesgo de lesión temprana.",
				highlights: [
					"Trabajo aeróbico y anaeróbico con transferencia al fútbol.",
					"Fortalecimiento de core, tobillo, rodilla y musculatura estabilizadora.",
					"Planificación de cargas ajustada a la categoría y estado del futbolista.",
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
					"Protocolos personalizados para volver al entrenamiento y a la competición después de lesiones graves o de larga duración, cuidando tanto la respuesta física como la confianza del futbolista.",
				highlights: [
					"Esguinces de segundo grado: propiocepción, estabilidad articular y reactividad de tobillo.",
					"Roturas musculares: fuerza excéntrica, control de cargas y tolerancia progresiva a sprints.",
					"Lesiones de rodilla: transición desde gimnasio hasta giros, frenadas, saltos y contacto con balón.",
				],
				image: "/images/preparacion-fisica-futgo-talent.png",
				alt: "Readaptación de lesiones deportivas",
			},
		],
	},
};
