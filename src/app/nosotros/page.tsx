import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Users, Shield, HeartHandshake, ExternalLink, Newspaper, Play, BookOpen } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Sobre el Proyecto – LibreIncu',
  description: 'Conocé la misión, el equipo, la historia y la prensa detrás del proyecto LibreIncu.',
};

const articles = [
  {
    source: 'Tiempo Argentino · Economía',
    title: 'Presentan incubadora para potenciar la producción avícola de los pequeños productores',
    url: 'https://www.tiempoar.com.ar/ta_article/incubadora-avicola-productores/',
  },
  {
    source: 'Legislatura de la Provincia de Córdoba',
    title: 'Se presentó "LibreIncu", una incubadora diseñada para la agricultura familiar',
    url: 'https://legislaturacba.gob.ar/se-presento-la-libreincu-una-incubadora-disenada-para-la-agricultura-familiar/',
  },
  {
    source: 'Tiempo Argentino · Tiempo Rural',
    title: 'Crean "LibreIncu", una incubadora para familias productoras que funciona con software libre',
    url: 'https://bit.ly/LibreIncu',
  },
  {
    source: 'Página 12',
    title: 'Problemas en la salud, maltrato animal y pérdida de soberanía. ¿Qué hacer con la industria avícola?',
    url: 'https://www.pagina12.com.ar/798691-que-hacer-con-la-industria-avicola',
  },
  {
    source: 'Multimedio Comechingones',
    title: 'Incubadoras Libres y la Soberanía Alimentaria y Tecnológica',
    url: 'https://www.youtube.com/watch?v=XAIEJV1IsmM',
  },
  {
    source: 'Radio Pueblo 103.3 · Somos Tierra',
    title: '"LibreIncu", una incubadora para familias productoras que funciona con software libre',
    url: 'https://www.facebook.com/100064102022746/posts/pfbid0N8CtLHdo2AVj12pVsAtcoeShCmByB2GCyXqmLqw75aoo8GYHFhkMTCCCVQQF8PBvl/?app=fbl',
  },
  {
    source: 'CDM Noticias',
    title: 'LibreIncu: una incubadora de pollos con software libre para la agricultura familiar en Córdoba',
    url: 'https://cdmnoticias.com.ar/2025/03/11/libreincu-una-incubadora-de-pollos-con-software-libre-para-la-agricultura-familiar-en-cordoba/',
  },
];

const videos = [
  {
    id: 'uNX2r0yYUN8',
    title: 'Presentación ante autoridades en la Legislatura de la Provincia de Córdoba',
    url: 'https://www.youtube.com/watch?v=uNX2r0yYUN8',
  },
  {
    id: 'J35QhUBAY-U',
    title: 'Jornada de trabajo con las comunidades que ya están produciendo con la LibreIncu',
    url: 'https://www.youtube.com/watch?v=J35QhUBAY-U',
  },
  {
    id: 'KnWVigydmrw',
    title: 'Las voces de las comunidades que recibieron la incubadora en primera persona',
    url: 'https://youtu.be/KnWVigydmrw',
  },
  {
    id: 'x1D_cCt7HYg',
    title: 'Capacitación técnica sobre el uso de la incubadora y su entrega a las comunidades (Feb. 2025)',
    url: 'https://youtu.be/x1D_cCt7HYg',
  },
  {
    id: 'SZky4Ak8hUw',
    title: 'Voces del Equipo de AlterMundi reflexionando sobre el proceso de desarrollo',
    url: 'https://youtu.be/SZky4Ak8hUw',
  },
  {
    id: 'OzdKqgwdBYY',
    title: 'Testimonios sobre lo que implica el proyecto para las organizaciones involucradas',
    url: 'https://youtu.be/OzdKqgwdBYY',
  },
  {
    id: 'WrC1Y-ACtMo',
    title: 'Presentación técnica de la incubadora y sus componentes',
    url: 'https://www.youtube.com/watch?v=WrC1Y-ACtMo',
  },
  {
    id: 'IfGGvOIJ1b8',
    title: '1ª Capacitación con comunidades sobre manejo productivo de huevos fértiles e incubadora',
    url: 'https://youtu.be/IfGGvOIJ1b8',
  },
];

const academicPapers = [
  {
    event: 'X Congreso Latinoamericano de Agroecología – Asunción del Paraguay',
    title: 'Innovación tecnológica y productiva en la cadena avícola para la agricultura familiar, campesina e indígena (AFCI). Córdoba-Argentina.',
    author: 'Fabricio Puzio',
    url: 'https://indico.una.py/event/3/contributions/772/',
  },
];

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
          El proyecto <strong>LibreIncu</strong> nace de la articulación comunitaria entre{' '}
          <a href="https://altermundi.net" target="_blank" rel="noopener noreferrer" className="font-bold underline underline-offset-2 hover:text-lp-yellowDark transition-colors">AlterMundi</a>,
          la{' '}
          <Link href="/cto" className="font-bold underline underline-offset-2 hover:text-lp-yellowDark transition-colors">Comunidad, Trabajo y Organización (CTO)</Link>{' '}
          y diversas familias de la Agricultura Familiar, Campesina e Indígena (AFCI) en Córdoba, Argentina.
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
          LibreIncu y LibreIncu actúan como una "cuña" en la cadena agroindustrial. Al resolver el primer y más difícil
          paso de la producción avícola (la incubación artificial de alta eficiencia), habilitamos la recuperación de
          líneas genéticas propias y rompemos con el modelo de compra constante del "pollito bebé industrial".
        </p>
      </section>

      {/* Press & Media */}
      <section className="py-16 px-4 bg-lp-gray/20">
        <div className="max-w-5xl mx-auto space-y-14">

          <div className="text-center">
            <span className="tag bg-lp-black text-lp-yellow mb-4 inline-block">Difusión</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-lp-black">Videos, Prensa y Difusión</h2>
            <p className="text-lp-grayDark mt-3">Notas periodísticas, videos de difusión y artículos académicos sobre el proyecto.</p>
          </div>

          {/* Articles */}
          <div>
            <h3 className="text-xl font-bold text-lp-black mb-5 flex items-center gap-2">
              <Newspaper size={22} className="text-lp-yellowDark" />
              Artículos y Notas
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {articles.map((art, i) => (
                <a
                  key={i}
                  href={art.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card p-5 bg-white border border-lp-gray hover:border-lp-yellow hover:shadow-md transition-all group flex flex-col gap-2"
                >
                  <span className="text-xs font-bold uppercase tracking-wider text-lp-yellow">{art.source}</span>
                  <p className="text-lp-black text-sm font-medium leading-snug flex-1">{art.title}</p>
                  <span className="flex items-center gap-1 text-xs text-lp-grayDark group-hover:text-lp-yellowDark transition-colors mt-1">
                    <ExternalLink size={12} /> Leer nota
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Videos */}
          <div>
            <h3 className="text-xl font-bold text-lp-black mb-5 flex items-center gap-2">
              <Play size={22} className="text-lp-yellowDark" />
              Videos
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {videos.map((video) => (
                <a
                  key={video.id}
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card bg-white border border-lp-gray hover:border-lp-yellow hover:shadow-md transition-all group overflow-hidden flex flex-col"
                >
                  <div className="relative overflow-hidden bg-lp-black">
                    <Image
                      src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                      alt={video.title}
                      width={480}
                      height={270}
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-lp-black/30 group-hover:bg-lp-black/10 transition-colors">
                      <div className="bg-lp-yellow rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
                        <Play size={20} className="text-lp-black ml-1" fill="currentColor" />
                      </div>
                    </div>
                  </div>
                  <div className="p-4 flex-1">
                    <p className="text-lp-black text-sm font-medium leading-snug">{video.title}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Academic Papers */}
          <div>
            <h3 className="text-xl font-bold text-lp-black mb-5 flex items-center gap-2">
              <BookOpen size={22} className="text-lp-yellowDark" />
              Artículos Académicos
            </h3>
            <div className="space-y-3">
              {academicPapers.map((paper, i) => (
                <a
                  key={i}
                  href={paper.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card p-5 bg-lp-black text-lp-white border border-lp-yellow/20 hover:border-lp-yellow transition-all group flex flex-col gap-2"
                >
                  <span className="text-xs font-bold uppercase tracking-wider text-lp-yellow">{paper.event}</span>
                  <p className="text-lp-white text-sm font-medium leading-snug">{paper.title}</p>
                  <p className="text-lp-gray text-xs">{paper.author}</p>
                  <span className="flex items-center gap-1 text-xs text-lp-grayDark group-hover:text-lp-yellow transition-colors mt-1">
                    <ExternalLink size={12} /> Ver publicación
                  </span>
                </a>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Call to action */}
      <section className="bg-lp-gray py-16 px-4 text-center">
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
