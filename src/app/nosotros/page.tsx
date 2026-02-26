import type { Metadata } from 'next';
import Link from 'next/link';
import { Users, Shield, Lightbulb, HeartHandshake, ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Sobre Nosotros',
    description: 'Conocé la misión, el equipo y la historia detrás del proyecto LibrePollo.',
};

export default function NosotrosPage() {
    return (
        <div className="min-h-screen bg-lp-white">
            {/* Header */}
            <section className="bg-lp-black text-lp-white py-16 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <span className="tag bg-lp-yellow text-lp-black mb-4 inline-block">Sobre el Proyecto</span>
                    <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">Nuestra Misión</h1>
                    <p className="text-xl text-lp-gray leading-relaxed">
                        Construir herramientas libres para devolver la autonomía a las familias productoras,
                        rompiendo el cerco tecnológico impuesto por los oligopolios corporativos.
                    </p>
                </div>
            </section>

            {/* Origin */}
            <section className="py-16 px-4 max-w-4xl mx-auto prose-custom">
                <h2>Un esfuerzo colectivo</h2>
                <p>
                    El proyecto <strong>LibrePollo</strong> nace de la articulación comunitaria entre
                    <strong> AlterMundi</strong>, la <strong>Comunidad, Trabajo y Organización (CTO)</strong> y
                    diversas familias de la Agricultura Familiar, Campesina e Indígena (AFCI) en Córdoba, Argentina.
                </p>
                <p>
                    Entendemos que la tecnología no es neutral. Las herramientas de producción que utilizamos hoy en día están diseñadas
                    bajo lógicas de dependencia y extracción de valor. Frente a esto, nos proponemos desarrollar nuestro propio
                    ecosistema técnico: abierto, reparable, económico y apropiable por las propias bases campesinas.
                </p>

                <div className="my-12 grid sm:grid-cols-2 gap-6 not-prose">
                    <div className="card p-6 border-lp-yellowLight border-2">
                        <Users className="text-lp-yellow mb-4" size={32} />
                        <h3 className="text-xl font-bold mb-2">Comunidad</h3>
                        <p className="text-lp-grayDark text-sm">
                            Diseñamos con y para las familias productoras. Los saberes técnicos se combinan con el saber ancestral del territorio.
                        </p>
                    </div>
                    <div className="card p-6 border-lp-yellowLight border-2">
                        <Shield className="text-lp-yellow mb-4" size={32} />
                        <h3 className="text-xl font-bold mb-2">Soberanía</h3>
                        <p className="text-lp-grayDark text-sm">
                            El objetivo último: que las comunidades ya no pongan su supervivencia productiva en manos de corporaciones.
                        </p>
                    </div>
                </div>

                <h2>La Cuña Operativa</h2>
                <p>
                    LibrePollo y LibreIncu actúan como una "cuña" en la cadena agroindustrial. Al resolver el primer y más difícil
                    paso de la producción avícola (la incubación artificial de alta eficiencia), habilitamos la recuperación de
                    líneas genéticas propias y rompemos con el modelo de compra constante del "pollito bebé industrial".
                </p>
            </section>

            {/* Call to action */}
            <section className="bg-lp-gray py-16 px-4 text-center mt-12">
                <div className="max-w-2xl mx-auto">
                    <HeartHandshake className="text-lp-yellowDark mx-auto mb-6" size={48} />
                    <h2 className="text-3xl font-bold mb-4">Sumate a la iniciativa</h2>
                    <p className="text-lp-grayDark mb-8">
                        Necesitamos desarrolladores, productores, investigadores y divulgadores.
                        Todo nuestro trabajo es código e información abierta.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Link href="/contacto" className="btn-primary">
                            Contactarnos
                        </Link>
                        <Link href="https://github.com/AlterMundi-MonitoreoyControl" target="_blank" className="btn-secondary">
                            Ver Repositorios
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
