import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Instagram, Facebook, ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Comunidad, Trabajo y Organización – CTO',
  description: 'Comunidad, Trabajo y Organización (CTO) – organización campesina e indígena del Valle de Traslasierra, Córdoba.',
  robots: 'noindex, nofollow',
};

export default function CTOPage() {
  return (
    <div className="min-h-screen bg-lp-white">

      {/* Header */}
      <section className="bg-lp-black text-lp-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center gap-8">
            <div className="shrink-0">
              <Image
                src="/images/cto/cto-logo.jpg"
                alt="Logo CTO – Comunidad, Trabajo y Organización"
                width={160}
                height={160}
                className="rounded-2xl border-2 border-lp-yellow/30 object-cover"
              />
            </div>
            <div>
              <span className="tag bg-lp-yellow text-lp-black mb-4 inline-block">Organización Campesina</span>
              <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
                Comunidad, Trabajo y Organización
              </h1>
              <p className="text-lp-gray text-lg">
                CTO – Valle de Traslasierra, Córdoba, Argentina
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Banner image */}
      <div className="w-full max-h-72 overflow-hidden bg-lp-black">
        <Image
          src="/images/cto/cto-banner.jpg"
          alt="Comunidad CTO en territorio"
          width={1200}
          height={400}
          className="w-full object-cover object-center"
        />
      </div>

      {/* Main content */}
      <section className="py-16 px-4 max-w-4xl mx-auto prose-custom">

        <h2>¿Quiénes somos?</h2>
        <p>
          La <strong>Comunidad, Trabajo y Organización (CTO)</strong> es una organización de base campesina
          e indígena del Valle de Traslasierra, en la provincia de Córdoba, Argentina. Agrupamos a familias
          productoras que trabajan la tierra con lógicas de economía social, soberanía alimentaria y
          producción comunitaria.
        </p>

        <h2>Nuestra relación con LibreIncu</h2>
        <p>
          La CTO es uno de los actores centrales en el desarrollo del proyecto <strong>LibreIncu</strong>.
          Desde la organización, aportamos el conocimiento territorial, los saberes productivos de las
          familias campesinas y la experiencia práctica en el manejo de aves de corral y producción avícola.
        </p>
        <p>
          Somos parte de las comunidades que recibieron las primeras incubadoras LibreIncu y que participamos como co-desarrolladoras, desde el comienzo del proyecto, aportando nuestro "know how" productivo (con 10 años de experiencia en desarrollo de genética y manejo de incubadoras). Nuestras voces y necesidades fueron el punto de partida para el diseño de la tecnología.
        </p>

        <h2>Soberanía Alimentaria y Tecnológica</h2>
        <p>
          Creemos que la autonomía productiva de las familias campesinas pasa por recuperar el control
          sobre las herramientas que usamos. La incubación con tecnología libre y reparable
          nos permite recuperar líneas genéticas propias y romper con la dependencia del pollito bebé
          industrial.
        </p>
        <p>
          Este proyecto es un ejemplo concreto de cómo la tecnología puede desarrollarse a partir de las necesidades reales productivas, con los protagonistas como codesarrolladores y dar respuestas eficientes a este sector.
        </p>

      </section>

      {/* Social links */}
      <section className="py-12 px-4 bg-lp-gray/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-lp-black mb-2">Seguinos en las redes</h2>
          <p className="text-lp-grayDark mb-8">Conocé las actividades y novedades de la CTO en el Valle de Traslasierra.</p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="https://www.instagram.com/traslasierra_cto/reels/?__d=1%2B"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-lp-black text-lp-white px-6 py-3 rounded-xl font-bold hover:bg-lp-yellow hover:text-lp-black transition-colors border-2 border-lp-yellow/30 hover:border-lp-yellow"
            >
              <Instagram size={20} />
              Instagram
              <ExternalLink size={14} className="opacity-60" />
            </a>
            <a
              href="https://www.facebook.com/comunidadtrabajoorganizacion?locale=es_LA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-lp-black text-lp-white px-6 py-3 rounded-xl font-bold hover:bg-lp-yellow hover:text-lp-black transition-colors border-2 border-lp-yellow/30 hover:border-lp-yellow"
            >
              <Facebook size={20} />
              Facebook
              <ExternalLink size={14} className="opacity-60" />
            </a>
          </div>
        </div>
      </section>

      {/* Back link */}
      <section className="py-8 px-4 text-center">
        <Link href="/nosotros" className="text-lp-grayDark hover:text-lp-black transition-colors text-sm underline underline-offset-4">
          ← Volver a Sobre el Proyecto
        </Link>
      </section>

    </div>
  );
}
