import type { Metadata } from 'next';
import Image from 'next/image';
import PageHeader from '@/components/PageHeader';
import { AlertTriangle, Droplets, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Solución de Problemas – LibreIncu',
  description: 'Diagnóstico y solución de problemas paso a paso para la incubadora LibreIncu.',
};

const multimeterSteps = [
  {
    step: 1,
    title: 'Configurar el multímetro',
    desc: 'Colocar el multímetro en posición 20V continua.',
    img: 'https://hackmd.io/_uploads/H1HvWHi2yx.png',
    imgAlt: 'Multímetro configurado en posición 20V DC',
  },
  {
    step: 2,
    title: 'Conectar punta negra',
    desc: 'Colocar la punta negra en el cuarto terminal de la fuente donde salen cables negros.',
    img: 'https://hackmd.io/_uploads/S1CY-Hohyg.png',
    imgAlt: 'Punta negra en el cuarto terminal de la fuente',
  },
  {
    step: 3,
    title: 'Conectar punta roja',
    desc: 'Colocar la punta roja en el terminal del medio (5) de la caja azul que tiene cables.',
    img: 'https://hackmd.io/_uploads/Bk4RWBsn1l.png',
    imgAlt: 'Punta roja en el terminal 5 de la caja azul',
  },
  {
    step: 4,
    title: 'Verificar tensión',
    desc: 'El multímetro deberá indicar 12V. De lo contrario, existe un problema de cableado o la fuente no funciona.',
    img: 'https://hackmd.io/_uploads/BJtezroh1e.png',
    imgAlt: 'Multímetro mostrando 12V',
    important: true,
  },
  {
    step: 5,
    title: 'Verificar activación del relé',
    desc: 'En el plazo de 5 minutos, el relé se debe activar encendiendo una de las luces rojas.',
    img: 'https://hackmd.io/_uploads/Bk_BfBjnkx.png',
    imgAlt: 'Luz roja del relé encendida',
  },
  {
    step: 6,
    title: 'Verificar el pin del relé',
    desc: 'Cada vez que se activa el relé, verificar que el pin de la izquierda se ponga en 12V. Colocar la punta roja sobre el borne a la izquierda del borne del medio (4) y dejar la punta negra en la posición del punto 2. Debe marcar 0V mientras la luz está apagada, y 12V mientras la luz está encendida.',
  },
];

export default function SolucionProblemasPage() {
  return (
    <>
      <PageHeader
        title="Diagnóstico y Solución de Problemas"
        subtitle="Guía paso a paso para identificar y resolver los problemas más comunes de la incubadora LibreIncu."
        emoji="🔧"
        badge="Soporte Técnico"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-10">

        {/* Intro */}
        <div className="card p-5 border-l-4 border-l-lp-yellow bg-lp-yellow/5">
          <div className="flex items-start gap-3">
            <AlertTriangle className="text-lp-yellowDark shrink-0 mt-0.5" size={20} />
            <p className="text-lp-grayDark text-sm leading-relaxed">
              Antes de comenzar el diagnóstico, asegurate de que la incubadora esté conectada a la corriente
              y que tengas acceso al multímetro si necesitás verificar tensiones eléctricas.
            </p>
          </div>
        </div>

        {/* Problem 1: Low humidity */}
        <section>
          <div className="card overflow-hidden border border-lp-gray">
            <div className="bg-lp-black text-lp-white p-5 border-b-2 border-lp-yellow">
              <div className="flex items-center gap-3">
                <Droplets size={24} className="text-lp-yellow" />
                <div>
                  <h2 className="text-xl font-bold">Problema: Baja Humedad</h2>
                  <p className="text-lp-gray text-sm mt-0.5">La humedad no alcanza el valor configurado</p>
                </div>
              </div>
            </div>

            <div className="p-6 space-y-10 bg-white">

              {/* Sub A: bomba no enciende */}
              <div>
                <h3 className="font-bold text-lp-black text-lg mb-2 flex items-center gap-2">
                  <span className="bg-lp-black text-lp-yellow rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold shrink-0">A</span>
                  No se escucha el sonido de la bomba
                </h3>
                <p className="text-lp-grayDark text-base mb-6 ml-10">
                  Si la bomba no enciende, es un problema eléctrico o mecánico.
                  Seguí estos pasos usando un multímetro para verificar que la fuente entregue 12V:
                </p>

                <div className="space-y-4 ml-10">
                  {multimeterSteps.map((item) => (
                    <div
                      key={item.step}
                      className={`rounded-2xl border-2 overflow-hidden ${item.important ? 'border-lp-yellow' : 'border-lp-gray'}`}
                    >
                      <div className={`flex items-center gap-3 px-4 py-3 ${item.important ? 'bg-lp-yellow/10' : 'bg-lp-gray/30'}`}>
                        <span className={`rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold shrink-0 ${item.important ? 'bg-lp-yellow text-lp-black' : 'bg-lp-black text-lp-yellow'}`}>
                          {item.step}
                        </span>
                        <p className="font-bold text-lp-black text-base">{item.title}</p>
                      </div>
                      <div className={`flex gap-4 px-4 py-4 items-start ${item.img ? 'flex-row' : ''}`}>
                        <p className="text-lp-grayDark text-base leading-relaxed flex-1">{item.desc}</p>
                        {item.img && (
                          <div className="shrink-0 w-44 sm:w-56 rounded-xl overflow-hidden border border-lp-gray bg-lp-gray/10">
                            <Image
                              src={item.img}
                              alt={item.imgAlt ?? ''}
                              width={280}
                              height={200}
                              className="w-full h-auto object-contain"
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Fix if step 6 fails */}
                <div className="mt-6 ml-10 rounded-2xl border-2 border-lp-yellow overflow-hidden">
                  <div className="bg-lp-black px-4 py-3 flex items-center gap-2">
                    <AlertTriangle size={16} className="text-lp-yellow shrink-0" />
                    <h4 className="font-bold text-lp-yellow text-sm">Si el paso 6 no se cumple — Solución de cableado</h4>
                  </div>
                  <div className="px-4 py-4 bg-white flex gap-4 items-start">
                    <div className="flex-1">
                      <ol className="space-y-2 text-base text-lp-grayDark mb-4">
                        {[
                          'Apagar la incubadora.',
                          'Quitar el cable del terminal 4 y colocarlo en el 1.',
                          'Quitar el cable de 5 y colocarlo en 2.',
                          'Quitar el cable de IN1 y colocarlo en IN2.',
                        ].map((step, i) => (
                          <li key={i} className="flex gap-2">
                            <span className="font-bold text-lp-black shrink-0">{i + 1}.</span>
                            {step}
                          </li>
                        ))}
                      </ol>
                      <p className="text-lp-grayDark text-sm">Cableado final resultante →</p>
                    </div>
                    <div className="shrink-0 w-44 sm:w-56 rounded-xl overflow-hidden border border-lp-gray bg-lp-gray/10">
                      <Image
                        src="https://hackmd.io/_uploads/H1biGrihJl.png"
                        alt="Diagrama final del cableado corregido"
                        width={280}
                        height={200}
                        className="w-full h-auto object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Sub B: bomba enciende pero no sale agua */}
              <div className="border-t-2 border-lp-gray pt-8">
                <h3 className="font-bold text-lp-black text-lg mb-2 flex items-center gap-2">
                  <span className="bg-lp-black text-lp-yellow rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold shrink-0">B</span>
                  La bomba enciende (cada 2 minutos) pero no sale agua
                </h3>
                <p className="text-lp-grayDark text-base mb-5 ml-10">
                  Esto indica un problema en el recorrido del agua. Verificar:
                </p>
                <div className="grid sm:grid-cols-3 gap-3 ml-10">
                  {[
                    { icon: '💧', title: 'Nivel del reservorio', desc: 'Verificar que tenga agua el reservorio.' },
                    { icon: '🔗', title: 'Manguera', desc: 'Verificar que la manguera no esté obstruida ni "ahorcada".' },
                    { icon: '🔩', title: 'Pico microaspersor', desc: 'Controlar que el pico no esté tapado ni sucio.' },
                  ].map((item, i) => (
                    <div key={i} className="card p-4 text-center border border-lp-gray">
                      <span className="text-3xl block mb-2">{item.icon}</span>
                      <p className="font-semibold text-lp-black text-sm">{item.title}</p>
                      <p className="text-lp-grayDark text-xs mt-1">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Other common problems */}
        <section>
          <h2 className="text-2xl font-bold text-lp-black mb-6 pb-2 border-b-2 border-lp-gray">
            Otros Problemas Frecuentes
          </h2>

          <div className="space-y-4">
            {[
              {
                title: 'La temperatura no sube',
                emoji: '🌡️',
                steps: [
                  'Verificá que la resistencia calefactora esté funcionando correctamente.',
                  'Revisá todas las conexiones eléctricas.',
                  'Controlá que el ventilador esté distribuyendo el aire.',
                  'Asegurate de que las ventilaciones no estén tapadas.',
                ],
              },
              {
                title: 'La rotación no funciona',
                emoji: '🔄',
                steps: [
                  'Revisá la posición de la bandeja y los sensores Reed.',
                  'Verificá las conexiones del motor.',
                  'Controlá que la cinta, la polea y el motor estén bien asociados.',
                  'Usá el control manual de rotación desde la app para probar el sistema.',
                ],
              },
              {
                title: 'La app no conecta con la incubadora',
                emoji: '📶',
                steps: [
                  'Verificá que la incubadora esté encendida.',
                  'Conectate al WiFi "incu-[número]" desde la configuración de tu teléfono.',
                  'Contraseña de fábrica: 12345678.',
                  'Presioná "Reintentar" en la app.',
                  'Si persiste, reiniciá la incubadora y el teléfono.',
                ],
              },
              {
                title: 'El humidificador hace ruido pero no humidifica',
                emoji: '💦',
                steps: [
                  'Desenroscá el pico de aspersión con cuidado.',
                  'Limpiá suavemente la boquilla para retirar incrustaciones.',
                  'Verificá que la manguera no esté torcida ni obstruida.',
                  'Asegurate de que haya agua suficiente en el reservorio.',
                ],
              },
            ].map((problem, i) => (
              <div key={i} className="card border border-lp-gray overflow-hidden">
                <div className="bg-lp-gray/40 p-4 flex items-center gap-3 border-b border-lp-gray">
                  <span className="text-xl">{problem.emoji}</span>
                  <h3 className="font-bold text-lp-black">{problem.title}</h3>
                </div>
                <div className="p-4 bg-white">
                  <ul className="space-y-2">
                    {problem.steps.map((step, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm text-lp-grayDark">
                        <CheckCircle size={14} className="text-lp-yellow shrink-0 mt-0.5" />
                        {step}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <div className="card p-6 bg-lp-black border-2 border-lp-yellow/30 text-center">
          <p className="text-2xl mb-3">🤝</p>
          <h3 className="font-bold text-lp-yellow text-lg mb-2">¿No encontrás la solución?</h3>
          <p className="text-lp-gray text-sm mb-4">
            Si el problema persiste, podés contactarnos a través de los canales del proyecto.
          </p>
          <a href="/contacto" className="btn-primary inline-flex items-center gap-2">
            Ver canales de contacto
          </a>
        </div>

      </div>
    </>
  );
}
