import {
	Activity,
	ArrowLeft,
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
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { FootballHero } from "@/components/compositions/football-hero";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { activitiesData } from "@/config/activities";

type PageProps = {
	params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
	return Object.keys(activitiesData).map((slug) => ({ slug }));
}

export async function generateMetadata({
	params,
}: PageProps): Promise<Metadata> {
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
			images:
				activity.bentoImages.length > 0 ? [activity.bentoImages[0].src] : [],
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
		`Hola, quiero consultar disponibilidad para ${activity.title}.\nEdad del futbolista:\nPosición:\nObjetivo:`,
	);
	const whatsappUrl = `https://wa.me/34636152876?text=${whatsappText}`;

	return (
		<>
			<Header />
			<main className="min-h-screen bg-slate-50/50">
				{/* Top Bar Navigation */}
				<div className="bg-white">
					<div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
						<Link
							href="/#services"
							className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
						>
							<ArrowLeft className="h-4 w-4" />
							Todas las actividades
						</Link>
					</div>
				</div>

				{/* Hero Section */}
				<section className="-mb-5 relative overflow-hidden bg-linear-to-b from-white to-slate-50/80 ">
					<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
						<div className="max-w-3xl space-y-4">
							<h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
								{activity.title}
							</h1>
							<p className="mb-5 text-lg font-medium text-slate-600 md:text-xl">
								{activity.subtitle}
							</p>

							<FootballHero />
						</div>
					</div>
				</section>

				{/* Highlights & Methodology */}
				<section className="py-6">
					<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
						<div className="mb-8 max-w-2xl">
							<h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
								{activity.methodologyTitle}
							</h2>
							<p className="mt-2 text-muted-foreground">
								{activity.methodologyDescription}
							</p>
						</div>

						<ul className="grid grid-cols-2 lg:grid-cols-4">
							{activity.highlights.map((item) => {
								return (
									<li
										key={item.title}
										className="m-2 rounded-2xl border border-slate-300 p-4"
									>
										{getIcon(item.iconName)}{" "}
										<div className="mt-2">{item.title}</div>
									</li>
								);
							})}
						</ul>
					</div>
				</section>

				{/* Bento Grid Visual Showcase */}
				{activity.bentoImages.length > 0 && (
					<section className="py-6">
						<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
							<div className="mb-6">
								<h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
									Momentos reales Futgo Talent
								</h2>
								<p className="text-sm text-muted-foreground">
									Entrenamientos, torneos y experiencias capturados sobre el
									césped.
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

				<section className="py-6">
					<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
						<div className="mb-10 max-w-3xl">
							<h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
								Ediciones que ya han dejado huella
							</h2>
							<p className="mt-2 text-muted-foreground">
								Un recorrido por campeonatos, clínics y programas que han
								impulsado el crecimiento deportivo y humano de nuestros
								futbolistas. En todas nuestras actividades se configuran grupos
								específicos por nivel, edad y condiciones formativas para
								garantizar la máxima evolución y un aprendizaje óptimo.
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
												<h3 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
													{exp.title}
												</h3>

												<p className="leading-relaxed text-slate-600">
													{exp.description}
												</p>

												<div className="space-y-2 pt-2">
													<p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
														Qué lo hizo diferencial:
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
				<section className="py-6">
					<div className="flex flex-col items-center justify-center border-t p-7 border-black mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
						<h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
							¿Quieres saber si hay plaza?
						</h2>
						<p className="mt-3 text-slate-600">
							Te respondemos por WhatsApp con la mejor opción según edad, nivel
							y posición.
						</p>
						<Button
							asChild
							size="lg"
							className="mt-6 bg-[#637aa4] px-8 font-semibold text-white hover:bg-[#52668a]"
						>
							<a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
								<MessageCircle className="mr-2 h-5 w-5" />
								Consultar plaza
							</a>
						</Button>
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
}
