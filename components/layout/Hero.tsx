import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { homeContent } from "@/config/site";


export function Hero() {
  return(
    <section className="h-[88svh] relative">
						<Image
							src={homeContent.hero.image}
							alt="Campus FutGo en el campo de futbol"
							className="object-cover -z-20"
							fill
							loading="eager"
							/>
						<div className="inset-0 h-full w-full -z-10 bg-black/55" />

						<div className="top-0 h-full absolute pt-10 px-3 flex gap-4 justify-start max-w-4xl flex-col text-white">
							<p className="text-sm font-semibold uppercase tracking-wide text-amber-300">
								{homeContent.hero.eyebrow}
							</p>

							<h1 className="text-4xl font-bold tracking-tight md:text-6xl">
								{homeContent.hero.title}
							</h1>

							<p className="max-w-2xl text-lg leading-8 text-white/85">
								{homeContent.hero.description}
							</p>

							<div className="mt-8 flex flex-wrap gap-3">
								<Button
									asChild
									size="lg"
									className="bg-white h-12 text-black hover:bg-white/90"
								>
									<Link href="#contact">
										Quiero formar parte
										<ArrowRight aria-hidden="true" />
									</Link>
								</Button>
							</div>
						</div>
				</section >);
}
