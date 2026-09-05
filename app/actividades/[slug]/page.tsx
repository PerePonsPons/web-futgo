import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
	Activity,
	ArrowLeft,
	Calendar,
	CheckCircle2,
	Flame,
	HeartHandshake,
	MessageCircle,
	Shield,
	Sparkles,
	Target,
	Trophy,
	Users,
	Zap,
} from "lucide-react";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { activitiesData } from "@/config/activities";
import { siteConfig } from "@/config/site";

type PageProps = {
	params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
	return Object.keys(activitiesData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
	const { slug } = await params;
	const activity = activitiesData[slug];

	if (!activity) {
		return {
			title: "Actividad no encontrada | Futgo Talent",
		};
	}

	return {
		title: `${activity.title} | Futgo Talent`,
		description: activity.subtitle,
		openGraph: {
			title: `${activity.title} | Futgo Talent`,
			description: activity.subtitle,
			images: activity.bentoImages.length > 0 ? [activity.bentoImages[0].src] : [],
		},
	};
}

function getIcon(name: string) {
	const props = { className: "h-6 w-6 text-[#637aa4]" };
	switch (name) {
		case "trophy":
			return <Trophy {...props} />;
		case "users":
			return <Users {...props} />;
		case "zap":
			return <Zap {...props} />;
		case "heartHandshake":
			return <HeartHandshake {...props} />;
		case "shield":
			return <Shield {...props} />;
		case "target":
			return <Target {...props} />;
		case "activity":
			return <Activity {...props} />;
		case "flame":
			return <Flame {...props} />;
		default:
			return <Sparkles {...props} />;
	}
}

export default async function ActivityPage({ params }: PageProps) {
	const { slug } = await params;
	const activity = activitiesData[slug];

	if (!activity) {
		notFound();
	}

	const whatsappText = encodeURIComponent(
		`Hola, me gustaría recibir más información sobre ${activity.title} en Futgo Talent.`,
	);
	const whatsappUrl = `https://wa.me/34636152876?text=${whatsappText}`;

	return (
		<>
			<Header />
			<main className="min-h-screen bg-slate-50/50 pb-20">
				{/* Top Bar Navigation */}
				<div className="border-b bg-white">
					<div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
						<Link
							href="/#services"
							className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
						>
							<ArrowLeft className="h-4 w-4" />
							Volver a todas las actividades
						</Link>
						<span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-700">
							{activity.badge}
						</span>
					</div>
				</div>

				{/* Hero Section */}
				<section className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50/80 py-12 md:py-16">
					<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
						<div className="max-w-3xl space-y-4">
							<div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-800">
								<Sparkles className="h-3.5 w-3.5" />
								Servicio Oficial Futgo Talent
							</div>
							<h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
								{activity.title}
							</h1>
							<p className="text-lg font-medium text-slate-600 md:text-xl">
								{activity.subtitle}
							</p>
							<p className="text-base leading-relaxed text-muted-foreground">
								{activity.intro}
							</p>
							<div className="pt-2">
								<Button asChild size="lg" className="bg-[#637aa4] hover:bg-[#52668a]">
									<a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
										<MessageCircle className="mr-2 h-5 w-5" />
										Consultar disponibilidad y plazas
									</a>
								</Button>
							</div>
						</div>
					</div>
				</section>

				{/* Highlights & Methodology */}
				<section className="py-12">
					<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
						<div className="mb-8 max-w-2xl">
							<h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
								{activity.methodologyTitle}
							</h2>
							<p className="mt-2 text-muted-foreground">
								{activity.methodologyDescription}
							</p>
						</div>

						<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
							{activity.highlights.map((item) => (
								<Card
									key={item.title}
									className="border-slate-200 bg-white transition-shadow hover:shadow-md"
								>
									<CardContent className="p-6">
										<div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100">
											{getIcon(item.iconName)}
										</div>
										<h3 className="font-semibold text-slate-900">{item.title}</h3>
										<p className="mt-2 text-sm leading-relaxed text-muted-foreground">
											{item.description}
										</p>
									</CardContent>
								</Card>
							))}
						</div>
					</div>
				</section>

				{/* Bento Grid Visual Showcase */}
				{activity.bentoImages.length > 0 && (
					<section className="py-8">
						<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
							<div className="mb-6">
								<h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
									El ambiente en el campo
								</h2>
								<p className="text-sm text-muted-foreground">
									Imágenes reales de nuestros entrenamientos, torneos y expediciones.
								</p>
							</div>

							<div className="grid auto-rows-[220px] gap-4 md:grid-cols-4 md:auto-rows-[240px]">
								{activity.bentoImages.map((image) => (
									<figure
										key={image.src}
										className={`relative overflow-hidden rounded-2xl border border-slate-200 bg-muted shadow-sm ${image.className}`}
									>
										<Image
											src={image.src}
											alt={image.alt}
											fill
											className="object-cover transition-transform duration-500 hover:scale-105"
											sizes="(min-width: 1024px) 50vw, 100vw"
										/>
									</figure>
								))}
							</div>
						</div>
					</section>
				)}

				{/* Historical & Featured Experiences */}
				<section className="py-12">
					<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
						<div className="mb-10 max-w-3xl">
							<div className="inline-flex items-center gap-2 rounded-md bg-amber-100 px-2.5 py-1 text-xs font-semibold text-amber-900">
								<Trophy className="h-3.5 w-3.5" />
								Trayectoria y Casos Reales
							</div>
							<h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
								Experiencias y ediciones destacadas
							</h2>
							<p className="mt-2 text-muted-foreground">
								Conoce el recorrido previo, los campeonatos disputados, clínics realizados y el impacto real en los y las futbolistas.
							</p>
						</div>

						<div className="space-y-8">
							{activity.experiences.map((exp) => (
								<div
									key={exp.id}
									className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:border-slate-300 hover:shadow-md"
								>
									<div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
										<div className="flex flex-col justify-between p-6 sm:p-8">
											<div className="space-y-4">
												<div className="flex flex-wrap items-center gap-2">
													<span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white">
														{exp.period}
													</span>
													<span className="rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-800 border border-sky-200">
														{exp.badge}
													</span>
												</div>

												<h3 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
													{exp.title}
												</h3>

												<p className="leading-relaxed text-slate-600">
													{exp.description}
												</p>

												<div className="space-y-2 pt-2">
													<p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
														Puntos clave de la experiencia:
													</p>
													<ul className="space-y-2">
														{exp.highlights.map((point) => (
															<li
																key={point}
																className="flex items-start gap-2.5 text-sm text-slate-700"
															>
																<CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
																<span>{point}</span>
															</li>
														))}
													</ul>
												</div>
											</div>
										</div>

										<div className="relative min-h-[260px] bg-muted lg:min-h-full">
											<Image
												src={exp.image}
												alt={exp.alt}
												fill
												className="object-cover"
												sizes="(min-width: 1024px) 40vw, 100vw"
											/>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* Final CTA Section */}
				<section className="pt-8">
					<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
						<div className="rounded-3xl bg-[#637aa4] p-8 sm:p-12 text-center text-white shadow-xl">
							<h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
								¿Quieres formar parte de la próxima experiencia?
							</h2>
							<p className="mx-auto mt-4 max-w-2xl text-slate-100 sm:text-lg">
								Grupos reducidos, atención personalizada para porteros y jugadores, y una metodología que prioriza el crecimiento deportivo y humano.
							</p>
							<div className="mt-8 flex flex-wrap justify-center gap-4">
								<Button
									asChild
									size="lg"
									className="bg-white text-slate-900 hover:bg-slate-100 font-semibold"
								>
									<a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
										<MessageCircle className="mr-2 h-5 w-5 text-emerald-600" />
										Contactar por WhatsApp
									</a>
								</Button>
								<Button
									asChild
									size="lg"
									variant="outline"
									className="border-white text-white hover:bg-white/10"
								>
									<Link href="/#contact">Ver formulario de contacto</Link>
								</Button>
							</div>
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
}
