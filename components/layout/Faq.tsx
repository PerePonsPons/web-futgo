import { faqs } from "@/config/site";

export function Faq() {
	const containerClass = "mx-auto w-full max-w-7xl px-8 sm:px-6";
	return (
		<section id="faq" className="py-8">
			<div className={containerClass}>
				<div className="max-w-3xl space-y-6">
					<h2 className="text-3xl font-bold tracking-tight md:text-4xl">
						Preguntas frecuentes
					</h2>

					<div className="space-y-5">
						{faqs.map((faq) => (
							<article key={faq.question} className="space-y-2">
								<h3 className="text-lg font-semibold">{faq.question}</h3>
								<p className="leading-7 text-muted-foreground">{faq.answer}</p>
							</article>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
