import type { Metadata } from 'next';
import { ArrowUpRight, CheckCircle2, Video } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Avances e Impacto en el Territorio',
    description: 'Métricas, despliegues y resultados del proyecto LibreIncu en el territorio: incubadoras instaladas, comunidades alcanzadas y prensa sobre la iniciativa.',
};

export default function ImpactoPage() {
    return (
        <div className="min-h-screen bg-lp-white">
            {/* Header */}
            <section className="bg-lp-black text-lp-white py-16 px-4 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-32 opacity-5 pointer-events-none">
                    <ArrowUpRight size={400} />
                </div>
                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <span className="tag bg-lp-gray text-lp-black mb-4 inline-block">Métricas y Avances</span>
                    <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">Impacto en el Territorio</h1>
                    <p className="text-xl text-lp-gray leading-relaxed max-w-2xl mx-auto">
                        El verdadero valor del código y los circuitos hardware se mide en la soberanía que le otorgan a las personas.
                    </p>
                </div>
            </section>

            {/* Metricas */}
            <section className="py-16 px-4 max-w-5xl mx-auto">
                <div className="grid md:grid-cols-3 gap-6 mb-16">
                    <div className="card p-8 bg-lp-yellowLight text-lp-black">
                        <div className="text-5xl font-black mb-2">86%</div>
                        <p className="font-bold text-lg mb-2">Tasa de Eclosión Promedio</p>
                        <p className="text-sm opacity-90">
                            Superando el rendimiento de las incubadoras comerciales de bajo costo disponibles en el mercado.
                        </p>
                    </div>
                    <div className="card p-8 bg-lp-black text-lp-white">
                        <div className="text-5xl font-black mb-2 text-lp-yellow">1era</div>
                        <p className="font-bold text-lg mb-2 text-lp-gray">Registro Histórico</p>
                        <p className="text-sm text-lp-grayDark">
                            Evaluación productiva continua mediante registro histórico en tiempo real de los parámetros de incubación.
                        </p>
                    </div>
                    <div className="card p-8 bg-lp-gray border-2 border-lp-yellow">
                        <div className="text-5xl font-black mb-2">100%</div>
                        <p className="font-bold text-lg mb-2">Hardware y Software Abierto</p>
                        <p className="text-sm text-lp-grayDark">
                            Todo el conocimiento desarrollado se encuentra liberado bajo licencias públicas (CC BY 4.0 y GPL).
                        </p>
                    </div>
                </div>

                {/* Hitos */}
                <div className="prose-custom max-w-3xl mx-auto mb-16">
                    <h2 className="flex items-center gap-2">
                        <CheckCircle2 className="text-lp-yellowDark" /> Hitos Recientes
                    </h2>
                    <ul className="space-y-4">
                        <li className="flex flex-col">
                            <strong>Despliegue de 8 incubadoras</strong>
                            <span className="text-sm text-lp-grayDark">Libreincu ya está en producción en 8 cooperativas de la provincia de Córdoba. Con excelentes resultados productivos a partir de la evaluación de los datos a través de grafana.</span>
                        </li>
                        <li className="flex flex-col">
                            <strong>Aplicación Móvil</strong>
                            <span className="text-sm text-lp-grayDark">La aplicación para Android "App LibreIncu" permite ahora el control exhaustivo de parámetros y alertas en tiempo real de manera remota e integrada al ecosistema.</span>
                        </li>
                        <li className="flex flex-col">
                            <strong>Validación del Sistema Térmico PID</strong>
                            <span className="text-sm text-lp-grayDark">El control PID programado en el ESP32 logra sostener la temperatura a 37.8°C de manera continua evitando cortes abruptos.</span>
                        </li>
                    </ul>
                </div>
            </section>

            {/* Videos/Prensa Media */}
            <section className="bg-lp-gray py-16 px-4">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <Video className="mx-auto text-lp-yellowDark mb-4" size={32} />
                        <h2 className="section-title">Registro Audiovisual</h2>
                        <p className="section-subtitle">Lo que dicen las comunicadoras y medios sobre nuestro trabajo.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <a
                            href="https://www.youtube.com/watch?v=WrC1Y-ACtMo"
                            target="_blank" rel="noopener noreferrer"
                            className="block rounded-2xl overflow-hidden border-2 border-lp-white hover:border-lp-yellow transition-colors group bg-white shadow-sm"
                        >
                            <div className="relative">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src="https://img.youtube.com/vi/WrC1Y-ACtMo/maxresdefault.jpg"
                                    alt="Presentación Incubadora AlterMundi"
                                    className="w-full aspect-video object-cover"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors flex items-center justify-center">
                                    <div className="bg-lp-yellow/90 text-lp-black rounded-full p-4 group-hover:scale-110 transition-transform">
                                        <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4">
                                <h3 className="font-bold text-lg mb-1">El modelo LibreIncu</h3>
                                <p className="text-sm text-lp-grayDark">Recorrido por las características de control y los componentes técnicos del proyecto.</p>
                            </div>
                        </a>

                        <a
                            href="https://youtu.be/SZky4Ak8hUw"
                            target="_blank" rel="noopener noreferrer"
                            className="block rounded-2xl overflow-hidden border-2 border-lp-white hover:border-lp-yellow transition-colors group bg-white shadow-sm"
                        >
                            <div className="relative">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src="https://img.youtube.com/vi/SZky4Ak8hUw/maxresdefault.jpg"
                                    alt="Equipo LibreIncu"
                                    className="w-full aspect-video object-cover"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors flex items-center justify-center">
                                    <div className="bg-lp-yellow/90 text-lp-black rounded-full p-4 group-hover:scale-110 transition-transform">
                                        <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4">
                                <h3 className="font-bold text-lg mb-1">Equipo de Trabajo</h3>
                                <p className="text-sm text-lp-grayDark">Entrevistas con el equipo de AlterMundi discutiendo los próximos pasos en robótica rural.</p>
                            </div>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
