import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';

export const metadata: Metadata = {
  title: 'Guía de Buenas Prácticas de Incubación',
  description: 'Preguntas guía para evaluar y mejorar el manejo de reproductores, huevos fértiles e incubación en la Agricultura Familiar, Campesina e Indígena.',
};

const groups = [
  {
    title: 'Manejo de Reproductores, Huevos Fértiles e Incubación',
    sections: [
      {
        emoji: '🐣',
        title: 'Gallinero y Ambiente',
        questions: [
          '¿Cuál es la relación macho:hembra en su lote reproductor?',
          '¿Qué edad tienen las aves reproductoras?',
          '¿Cómo controla la temperatura y ventilación en el gallinero? (¿Están muy encerradas o a pleno sol?)',
          '¿Cuáles son las instalaciones para que pongan huevos? ¿Son limpias y ordenadas?',
          '¿Con qué frecuencia limpia los gallineros?',
        ],
      },
      {
        emoji: '🐣',
        title: 'Alimentación',
        questions: [
          '¿Qué tipo de dieta suministra a los reproductores?',
          '¿Cómo asegura el aporte adecuado de vitaminas y minerales (Calcio sobre todo)?',
          '¿Están demasiado gordas o demasiado flacas?',
        ],
      },
      {
        emoji: '🐣',
        title: 'Sanidad',
        questions: [
          '¿Ha observado signos de enfermedad en el lote reproductor?',
          '¿Realiza tratamientos contra parásitos internos/externos?',
        ],
      },
    ],
  },
  {
    title: 'Recolección y Manejo de Huevos',
    sections: [
      {
        emoji: '🐣',
        title: 'Recolección',
        questions: [
          '¿Con qué frecuencia recolecta los huevos?',
          '¿Qué porcentaje aproximado de huevos encuentra en el piso?',
        ],
      },
      {
        emoji: '🐣',
        title: 'Almacenamiento Pre-Incubación',
        questions: [
          '¿Cuánto tiempo almacena los huevos antes de incubarlos?',
          '¿A qué temperatura y humedad los almacena?',
          '¿Cómo posiciona los huevos durante el almacenamiento?',
          '¿Cómo los transporta?',
        ],
      },
      {
        emoji: '🐣',
        title: 'Selección',
        questions: [
          '¿Qué criterios utiliza para seleccionar huevos fértiles?',
          '¿Descarta huevos con formas irregulares, grietas o suciedad?',
          '¿Qué porcentaje de huevos suele descartar antes de incubar?',
        ],
      },
    ],
  },
  {
    title: 'Incubación',
    sections: [
      {
        emoji: '🐣',
        title: 'Parámetros de Incubación',
        questions: [
          '¿Hubo problemas de temperatura en la incubadora?',
          '¿Hubo problemas de humedad durante las diferentes etapas?',
          '¿Hubo problemas con el ventilador?',
          '¿Hubo problemas con la rotación?',
          '¿Realiza ovoscopía? ¿Qué día?',
          '¿Hubo cortes de luz?',
        ],
      },
      {
        emoji: '🐣',
        title: 'Transferencia a Nacedora',
        questions: [
          '¿En qué día trasladó los huevos a la nacedora?',
        ],
      },
      {
        emoji: '🐣',
        title: 'Nacimiento',
        questions: [
          '¿Aumentó la humedad durante el nacimiento?',
          '¿Cuál es la duración promedio del proceso de eclosión (desde que nace el primero hasta el último que se espera)?',
          '¿A los cuántos días comenzó y terminó el nacimiento?',
        ],
      },
    ],
  },
  {
    title: 'Evaluación Post-Nacimiento',
    sections: [
      {
        emoji: '🐣',
        title: 'Resultados',
        questions: [
          '¿Cuál es su porcentaje de nacimientos sobre huevos fértiles?',
          '¿Cuál es su tasa de mortalidad embrionaria temprana, media y tardía? (¿Hay huevos que no nacieron muy formados o poco formados?)',
          '¿Qué porcentaje de pollitos nacen con problemas o malformaciones?',
        ],
      },
      {
        emoji: '🐣',
        title: 'Análisis',
        questions: [
          '¿Realiza necropsia de embriones no eclosionados? (¿Rompe los huevos que no nacieron?)',
        ],
      },
      {
        emoji: '🐣',
        title: 'Calidad de los Pollitos',
        questions: [
          '¿Cómo evalúa la calidad de los pollitos nacidos?',
          '¿Observa signos de deshidratación o problemas en las patas al poco tiempo de nacimiento?',
          '¿Se mueren muchos pollitos en las primeras horas?',
        ],
      },
    ],
  },
];

export default function BuenasPracticasPage() {
  return (
    <>
      <PageHeader
        title="Guía de Buenas Prácticas de Incubación"
        subtitle="Preguntas clave para evaluar el manejo de reproductores, huevos fértiles e incubación. Una herramienta de autoevaluación para mejorar tus resultados."
        emoji="✅"
        badge="Evaluación & Diagnóstico"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">

        {/* Intro */}
        <div className="card p-6 border-l-4 border-l-lp-yellow mb-10">
          <p className="text-lp-grayDark leading-relaxed">
            Esta guía de preguntas está pensada para que los productores puedan evaluar y mejorar su proceso de
            incubación. Cubre desde el manejo del lote reproductor hasta la evaluación post-nacimiento, pasando
            por la recolección, selección, almacenamiento y el proceso en sí.
          </p>
        </div>

        {/* Grouped sections */}
        <div className="space-y-12">
          {groups.map((group, gi) => (
            <div key={gi}>
              {/* Group header */}
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px flex-1 bg-lp-gray"></div>
                <h2 className="text-xs font-bold uppercase tracking-widest text-lp-yellow px-2 whitespace-nowrap">
                  {group.title}
                </h2>
                <div className="h-px flex-1 bg-lp-gray"></div>
              </div>

              {/* Sections within group */}
              <div className="space-y-4">
                {group.sections.map((section, si) => (
                  <div key={si} className="card overflow-hidden border border-lp-gray">
                    <div className="bg-lp-black p-4 flex items-center gap-3">
                      <span className="text-xl">{section.emoji}</span>
                      <h3 className="font-bold text-lp-white">{section.title}</h3>
                      <span className="ml-auto text-xs text-lp-yellow bg-lp-yellow/10 border border-lp-yellow/30 rounded-full px-2 py-0.5">
                        {section.questions.length} {section.questions.length === 1 ? 'pregunta' : 'preguntas'}
                      </span>
                    </div>
                    <ul className="divide-y divide-lp-gray/40">
                      {section.questions.map((q, qi) => (
                        <li key={qi} className="p-4 flex items-start gap-3 hover:bg-lp-gray/20 transition-colors">
                          <span className="text-lp-yellow mt-0.5 shrink-0 font-bold">•</span>
                          <p className="text-lp-grayDark text-sm leading-relaxed">{q}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Practical Example */}
        <div className="mt-12 card overflow-hidden border border-lp-gray">
          <div className="bg-lp-black border-b-2 border-lp-yellow p-4">
            <h2 className="font-bold text-lp-yellow text-lg flex items-center gap-2">
              <span className="text-xl">🐤</span>
              Ejemplo Práctico de Análisis
            </h2>
          </div>
          <div className="p-6">
            <p className="text-lp-grayDark text-sm mb-4">
              Si ven esta tablita podemos suponer (porque es difícil de comprobar) que:
            </p>

            {/* Table */}
            <div className="my-4 overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-lp-black text-lp-white">
                    <th className="p-3 text-left font-medium">Etapa</th>
                    <th className="p-3 text-center font-medium">Huevos</th>
                    <th className="p-3 text-center font-medium">Porcentaje</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { etapa: 'Huevos totales cargados', cant: '60', pct: '100%', highlight: false },
                    { etapa: 'Descartados por ovoscopio', cant: '19', pct: '>30%', highlight: true },
                    { etapa: 'Pasaron a nacedora', cant: '41', pct: '68%', highlight: false },
                    { etapa: 'Nacieron con éxito', cant: '29', pct: '~70%', highlight: false },
                    { etapa: 'No nacieron', cant: '12', pct: '~30%', highlight: false },
                  ].map((row, i) => (
                    <tr key={i} className={`border-t border-lp-gray/40 ${row.highlight ? 'bg-lp-yellow/10' : i % 2 === 0 ? 'bg-white' : 'bg-lp-gray/10'}`}>
                      <td className="p-3 text-lp-grayDark">{row.etapa}</td>
                      <td className="p-3 text-center font-bold text-lp-black">{row.cant}</td>
                      <td className={`p-3 text-center font-semibold ${row.highlight ? 'text-lp-yellowDark' : 'text-lp-black'}`}>{row.pct}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2 bg-lp-yellow/10 border border-lp-yellow/30 p-3 rounded-lg">
                <span className="shrink-0">🥚</span>
                <p className="text-lp-grayDark">
                  Si el porcentaje de huevos descartados por ovoscopio es mayor al 20% (en este caso más del 30%),
                  tenemos que pensar que los 19 huevos descartados por ovoscopio no estaban fertilizados…
                  <strong className="text-lp-black"> ¿Por qué?</strong> (Es una pregunta que debería pensar el
                  dueñ@ del gallinero primero… después los que seleccionaron los huevos).
                </p>
              </div>
              <div className="flex items-start gap-2 bg-lp-gray/30 border border-lp-gray p-3 rounded-lg">
                <span className="shrink-0">🐥</span>
                <p className="text-lp-grayDark">
                  El nacimiento fue, dentro de todo, normal (ni excelente ni malo). Casi el 70% de eclosión sobre
                  los huevos que pasaron a nacedora.
                </p>
              </div>
            </div>

            <div className="mt-5">
              <p className="font-semibold text-lp-black mb-3">¿Qué pasó con los 12 huevos que no nacieron?</p>
              <ul className="space-y-2 text-sm">
                {[
                  '5 no tenían ningún desarrollo.',
                  '1 podrido mal. (¿Le explotó a Darío en la cara?) (también debería haberse descartado por ovoscopio). Estos primeros 6 podrían haber sido descartados por ovoscopio, y eso aumentaría al 81% el porcentaje de eclosión.',
                  '4 embriones muy formados (grandes) pero solo 2 rompieron cáscara y no pudieron nacer (¿Falta de rotación, o falta de humedad, o la misma naturaleza?).',
                  '2 con el embrión pequeño (¿Falta de calor o problema del huevo?).',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-lp-yellow shrink-0 font-bold">•</span>
                    <span className="text-lp-grayDark">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-5 bg-lp-black border border-lp-yellow/30 rounded-lg p-4">
              <p className="font-bold text-lp-yellow">
                Conclusión: ¡Hay que revisar el proceso de los huevos fértiles!
              </p>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}
