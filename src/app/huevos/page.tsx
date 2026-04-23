import type { Metadata } from 'next';
import Image from 'next/image';
import PageHeader from '@/components/PageHeader';
import { AlertTriangle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Huevos Fértiles e Incubación',
  description: 'Guía completa sobre selección, almacenamiento y proceso de incubación de huevos fértiles.',
};

export default function HuevosPage() {
  return (
    <>
      <PageHeader
        title="Huevos Fértiles e Incubación"
        subtitle="Todo sobre la recolección, selección, almacenamiento y proceso completo de incubación de huevos."
        emoji="🥚"
        badge="Guía Práctica"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-12">

        {/* Separator */}
        <div className="text-center text-xl md:text-2xl tracking-widest text-gray-300 select-none overflow-hidden whitespace-nowrap">
          🥚🐣🐥🐓 🥚🐣🐥🐓 🥚🐣🐥🐓 🥚🐣🐥🐓
        </div>

        {/* 1. Recolección y Almacenamiento */}
        <section>
          <div className="card p-6 md:p-8">
            <h2 className="text-2xl font-bold text-green-800 mb-6 pb-2 border-b-2 border-green-100">
              1. Recolección y Almacenamiento
            </h2>
            <div className="space-y-4 text-gray-700">
              <p className="flex items-start gap-3">
                <span className="shrink-0 text-xl">🥚</span>
                <span>Recolectarlos al menos dos veces al día.</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="shrink-0 text-xl">🥚</span>
                <span>Seleccionar los más frescos posible, a lo sumo los recogidos en la semana previa a la incubación.</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="shrink-0 text-xl">🥚</span>
                <span>Almacenar en un maple nuevo o extremadamente limpio con el polo fino hacia abajo.</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="shrink-0 text-xl">🥚</span>
                <span>Conservar los huevos a una temperatura entre 13 y 15 °C.</span>
              </p>
              <p className="flex items-start gap-3 pl-8">
                <span>Permanecer en reposo al menos por 24 hs. antes de comenzar con la incubación.</span>
              </p>
            </div>

            <div className="mt-8 bg-green-50 p-6 rounded-xl border border-green-100">
              <h3 className="font-bold text-green-800 mb-4 text-lg">El Huevo Ideal</h3>
              <p className="mb-4 text-gray-700">Los mejores disponibles, considerando como huevo ideal:</p>
              <div className="space-y-3 text-gray-700">
                <p className="flex items-start gap-3">
                  <span className="shrink-0 text-xl">🥚</span>
                  <span>Los que tienen forma ovoide.</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="shrink-0 text-xl">🥚</span>
                  <span>Que no sean ni muy pequeños ni demasiados grandes.</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="shrink-0 text-xl">🥚</span>
                  <span>Con un peso aproximado entre los 52 a 70 gramos.</span>
                </p>
              </div>
              <p className="mt-5 font-bold text-gray-800">
                Todos los huevos que se coloquen en la bandeja deben ser homogéneos, tanto en forma como en tamaño.
              </p>
            </div>
          </div>
        </section>

        {/* Separator */}
        <div className="text-center text-xl md:text-2xl tracking-widest text-gray-300 select-none overflow-hidden whitespace-nowrap">
          🥚🐣🐥🐓 🥚🐣🐥🐓 🥚🐣🐥🐓 🥚🐣🐥🐓
        </div>

        {/* 2. Huevos a descartar */}
        <section>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="card p-6 border-2 border-red-200">
              <h2 className="text-2xl font-bold text-red-800 mb-6 pb-2 border-b-2 border-red-100">
                Huevos a Descartar
              </h2>
              <div className="space-y-4 text-gray-700">
                <p className="flex items-start gap-3">
                  <span className="shrink-0 font-bold text-red-500">❌</span>
                  <span>Deformes (muy redondos o puntiagudos).</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="shrink-0 font-bold text-red-500">❌</span>
                  <span>Rotos, con la cáscara rugosa, muy porosa o frágil.</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="shrink-0 font-bold text-red-500">❌</span>
                  <span>Sucios que estén recubiertos de excrementos, o con otras sustancias, como restos de huevos que se rompieron en el nido.</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="shrink-0 font-bold text-red-500">❌</span>
                  <span>Recolectados del suelo.</span>
                </p>
              </div>
            </div>

            <div className="card overflow-hidden shadow-md">
              <Image
                src="/images/huevos/nosepuedeincubar.jpg"
                alt="Ejemplos de huevos que no se deben incubar"
                width={800} height={600}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          <div className="mt-6 card p-6 bg-red-50 border-2 border-red-300">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <AlertTriangle className="text-red-600 shrink-0" size={40} />
              <div>
                <p className="font-black text-red-900 text-lg uppercase mb-2">
                  Los huevos NUNCA DEBEN LAVARSE
                </p>
                <p className="text-red-800">
                  Porque pierden su capa protectora, lo que facilita la entrada de bacterias durante el proceso de incubación.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Separator */}
        <div className="text-center text-xl md:text-2xl tracking-widest text-gray-300 select-none overflow-hidden whitespace-nowrap mt-10 mb-10">
          <Image
            src="/images/huevos/ovoscopio.png"
            alt="Uso de ovoscopio"
            width={400} height={300}
            className="rounded-xl shadow-md mx-auto object-cover"
          />
        </div>

        {/* 3. Preparación e Incubación */}
        <section>
          <h2 className="text-2xl font-bold text-green-800 mb-6 pb-2 border-b-2 border-green-100">
            3. Preparación e Incubación
          </h2>
          <div className="space-y-4 text-gray-700">
            {[
              "Limpiar y desinfectar profundamente la incubadora, lavar con una solución tibia de detergente y enjuagar con una solución desinfectante (ej. lavandina).",
              "Secar previo a la carga. Nunca se debe iniciar un proceso de incubación con la incubadora muy mojada.",
              "La incubadora debe estar a la misma temperatura que los huevos almacenados (23ºC) de ser posible. Ni fría ni caliente.",
              "Incrementar la temperatura ambiental a 23 ºC durante las 18 horas previas a ponerlos a incubar, los huevos no deben ingresar fríos para evitar cambios bruscos de temperatura dentro de la incubadora y que el vapor de agua se condense en la cáscara y tapone sus poros.",
              "Huevos con un peso entre 52 a 70 gramos. Iguales y limpios. No más de 7 días almacenados.",
              "La incubadora a temperatura de 37,8 ºC y humedad de 60 %. (Automático)\nVolteo de huevos 1 vez por hora (Automático)."
            ].map((text, i) => (
              <div key={i} className="flex gap-4 p-4 card items-start">
                <span className="shrink-0 text-xl">🐣</span>
                <p className="whitespace-pre-line">{text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Separator */}
        <div className="text-center text-xl md:text-2xl tracking-widest text-gray-300 select-none overflow-hidden whitespace-nowrap">
          🥚🐣🐥🐓 🥚🐣🐥🐓 🥚🐣🐥🐓 🥚🐣🐥🐓
        </div>

        <section>
          <div className="card p-6 bg-blue-50 border border-blue-100 flex gap-4 items-center mb-8">
            <span className="shrink-0 text-2xl">🐥</span>
            <p className="font-bold text-blue-900">Antes, de ser posible, pasar por ovoscopio.</p>
          </div>

          <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200">
            <Image
              src="/images/huevos/procesodeincubacion.jpg"
              alt="Progreso de incubación - Desarrollo del embrión día a día"
              width={1200} height={800}
              className="w-full h-auto"
            />
          </div>
        </section>

        {/* 4. Nacedora y Nacimiento */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-green-800 mb-6 pb-2 border-b-2 border-green-100">
            4. Nacedora y Nacimientos
          </h2>

          <div className="space-y-4 text-gray-700">
            {[
              "Temperatura a 36.5ºC e incrementar la humedad a 70%-75% (Automático).",
              "Suspender el volteo y reducir la humedad a 40% una vez nacidos los pollitos (Automático).",
              "Ventilar es muy importante para proporcionar el oxígeno que el embrión va consumiendo y para eliminar el CO2. La ventilación mejor es la denominada “forzada” que se consigue por medio de ventiladores, logrando que el aire esté en movimiento.",
              "Un buen nacimiento comienza el día 20.",
              "Ante cortes de energía, se puede esperar hasta el día 22 máximo.",
              "No deben permanecer más de 24 hs en la incubadora los pollitos.",
              "Si están mojados, dejarlos cerca de una fuente de calor (lámpara o estufa).",
              "Dejar en cajón de recría por lo menos 2 semanas con fuente de calor."
            ].map((text, i) => (
              <div key={i} className="flex gap-4 p-4 card items-start">
                <span className="shrink-0 text-xl">🐥</span>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200">
            <Image
              src="/images/huevos/cuadro.jpg"
              alt="Cuadro de problemas y posibles causas en la incubación"
              width={1200} height={800}
              className="w-full h-auto"
            />
          </div>
        </section>

        {/* 5. Limpieza Post-Nacimiento */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-green-800 mb-6 pb-2 border-b-2 border-green-100">
            5. Limpieza Final
          </h2>
          <div className="space-y-4 text-gray-700">
            {[
              "Retirar todas las cáscaras de huevo, plumas y polvo, protegiéndose con elementos de seguridad tales como antiparras, barbijo y guantes descartables.",
              "Limpiar en seco primero, y luego desinfectar profundamente la incubadora.",
              "Se debe lavar con una solución caliente de detergente y enjuagar con una solución desinfectante (amonio cuaternario o lavandina por ejemplo) y dejar secar."
            ].map((text, i) => (
              <div key={i} className="flex gap-4 p-4 card items-start bg-slate-50 border-slate-200">
                <span className="shrink-0 text-xl">🐓</span>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Separator */}
        <div className="text-center text-xl md:text-2xl tracking-widest text-gray-300 select-none overflow-hidden whitespace-nowrap mt-10 pb-8">
          🥚🐣🐥🐓 🥚🐣🐥🐓 🥚🐣🐥🐓 🥚🐣🐥🐓
        </div>

      </div>
    </>
  );
}
