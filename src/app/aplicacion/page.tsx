import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Wifi, Settings, Bell, AlertTriangle, RotateCcw, BarChart2,
  Smartphone, Layers, Power, CheckCircle2, Lightbulb, ShieldAlert,
  ThermometerSun, Droplets, MessageSquare
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Manual de Usuario – App LibrePollo',
  description: 'Manual de usuario de la aplicación LibrePollo para controlar y monitorear tu incubadora LibreIncu desde el celular.',
};

export default function AplicacionPage() {
  return (
    <div className="min-h-screen bg-lp-white">

      {/* Header */}
      <section className="bg-lp-black text-lp-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="tag bg-lp-yellow text-lp-black mb-4 inline-block">Documentación</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 flex items-center justify-center gap-3">
            <Smartphone className="text-lp-yellow" size={44} />
            Manual de Usuario
          </h1>
          <p className="text-xl text-lp-gray">Aplicación LibrePollo</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-16">

        {/* Introducción */}
        <section>
          <div className="card p-8 bg-lp-black text-lp-white border-2 border-lp-yellow/30">
            <h2 className="text-2xl font-bold text-lp-yellow mb-4 flex items-center gap-2">
              <Lightbulb className="text-lp-yellow" />
              Introducción
            </h2>
            <p className="text-lp-gray leading-relaxed text-lg">
              Esta aplicación te permite <strong className="text-lp-white">controlar y monitorear tu LibreIncu</strong> de forma fácil y eficiente desde tu dispositivo móvil. Vas a poder supervisar la temperatura, humedad, rotación de bandejas y recibir notificaciones importantes sobre el proceso de incubación.
            </p>
          </div>
        </section>

        {/* Componentes */}
        <section>
          <h2 className="text-3xl font-extrabold text-lp-black mb-8 pb-3 border-b-4 border-lp-yellow">
            Componentes de la Aplicación
          </h2>

          {/* Pantalla Principal */}
          <div className="mb-10">
            <h3 className="text-xl font-bold text-lp-black mb-4 flex items-center gap-2">
              <Smartphone className="text-lp-yellow" size={22} />
              Pantalla Principal (Inicio)
            </h3>
            <p className="text-lp-grayDark mb-4">En la pantalla principal encontrás la información más importante de tu Incubadora:</p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="card p-5 border-l-4 border-lp-yellow">
                <div className="flex items-center gap-2 font-bold text-lp-black mb-1"><Wifi size={18} className="text-lp-yellow" /> Estado de Conexión WiFi</div>
                <p className="text-lp-grayDark text-sm">Muestra si la incubadora está conectada a internet.</p>
              </div>
              <div className="card p-5 border-l-4 border-lp-yellow">
                <div className="flex items-center gap-2 font-bold text-lp-black mb-1"><RotateCcw size={18} className="text-lp-yellow" /> Estado de Rotación</div>
                <p className="text-lp-grayDark text-sm">Indica si el sistema de rotación está funcionando correctamente.</p>
              </div>
              <div className="card p-5 border-l-4 border-lp-yellow">
                <div className="flex items-center gap-2 font-bold text-lp-black mb-1"><ThermometerSun size={18} className="text-lp-yellow" /> Temperatura Actual</div>
                <p className="text-lp-grayDark text-sm">
                  Temperatura en tiempo real con código de colores:<br />
                  <span className="text-green-600 font-medium">Verde</span>: dentro del rango configurado.<br />
                  <span className="text-red-500 font-medium">Rojo</span>: fuera del rango seguro.
                </p>
              </div>
              <div className="card p-5 border-l-4 border-lp-yellow">
                <div className="flex items-center gap-2 font-bold text-lp-black mb-1"><Droplets size={18} className="text-lp-yellow" /> Humedad Actual</div>
                <p className="text-lp-grayDark text-sm">Nivel de humedad con el mismo sistema de colores que la temperatura.</p>
              </div>
            </div>
          </div>

          {/* Menú de Navegación */}
          <div className="mb-10">
            <h3 className="text-xl font-bold text-lp-black mb-4 flex items-center gap-2">
              <Layers className="text-lp-yellow" size={22} />
              Menú de Navegación
            </h3>
            <p className="text-lp-grayDark mb-4">En la parte inferior de la pantalla encontrás seis botones de navegación:</p>
            <div className="bg-lp-black rounded-2xl p-6 grid sm:grid-cols-2 gap-3">
              {[
                { icon: Smartphone, label: 'Inicio', desc: 'Pantalla principal con información en tiempo real.' },
                { icon: Wifi, label: 'Conexión', desc: 'Configuración de WiFi.' },
                { icon: Settings, label: 'Configuraciones', desc: 'Ajustes generales de la incubadora.' },
                { icon: Layers, label: 'Contador', desc: 'Control de bandejas y ciclos de incubación.' },
                { icon: RotateCcw, label: 'Rotación', desc: 'Control manual de la rotación.' },
                { icon: BarChart2, label: 'Grafana', desc: 'Visualización de datos históricos.' },
              ].map(({ icon: Icon, label, desc }) => (
                <div key={label} className="flex items-start gap-3 text-lp-white">
                  <div className="bg-lp-yellow text-lp-black rounded-lg p-1.5 shrink-0 mt-0.5"><Icon size={16} /></div>
                  <div>
                    <span className="font-bold">{label}:</span>
                    <span className="text-lp-gray text-sm ml-1">{desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Notificaciones y Alertas */}
          <div>
            <h3 className="text-xl font-bold text-lp-black mb-4 flex items-center gap-2">
              <Bell className="text-lp-yellow" size={22} />
              Notificaciones y Alertas
            </h3>
            <p className="text-lp-grayDark mb-4">En la parte superior de la pantalla encontrás dos botones de navegación:</p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="card p-5 border-l-4 border-lp-yellow">
                <div className="flex items-center gap-2 font-bold text-lp-black mb-1"><MessageSquare size={18} className="text-lp-yellow" /> Notificaciones</div>
                <p className="text-lp-grayDark text-sm">Tutorial de suscripción al sistema de Notificaciones.</p>
              </div>
              <div className="card p-5 border-l-4 border-lp-yellow">
                <div className="flex items-center gap-2 font-bold text-lp-black mb-1"><AlertTriangle size={18} className="text-lp-yellow" /> Alertas</div>
                <p className="text-lp-grayDark text-sm">Muestra los llamados de atención más importantes.</p>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-lp-gray" />

        {/* Primera Conexión */}
        <section>
          <h2 className="text-3xl font-extrabold text-lp-black mb-8 pb-3 border-b-4 border-lp-yellow">
            Primera Conexión y Configuraciones Básicas
          </h2>

          {/* Instalación */}
          <div className="mb-10">
            <h3 className="text-xl font-bold text-lp-black mb-3 flex items-center gap-2">
              <Power className="text-lp-yellow" size={22} />
              Instalación
            </h3>
            <ul className="space-y-2 text-lp-grayDark">
              <li className="flex gap-2"><CheckCircle2 className="text-lp-yellow shrink-0 mt-0.5" size={18} />La aplicación LibrePollo se instala a través de un archivo APK.</li>
              <li className="flex gap-2"><CheckCircle2 className="text-lp-yellow shrink-0 mt-0.5" size={18} />En caso de ser necesario, permitir <strong className="text-lp-black">&quot;Instalar sin Analizar&quot;</strong>.</li>
            </ul>
          </div>

          {/* Conexión con LibreIncu */}
          <div className="mb-10">
            <h3 className="text-xl font-bold text-lp-black mb-3 flex items-center gap-2">
              <Wifi className="text-lp-yellow" size={22} />
              Conexión con LibreIncu
            </h3>
            <ol className="space-y-3">
              {[
                'Conectá y encendé la incubadora.',
                'Ingresá a las configuraciones de WiFi de tu teléfono.',
                <>Esperá que aparezca la red WiFi <code className="bg-lp-gray px-2 py-0.5 rounded text-lp-black text-sm font-mono">incu-</code> (luego del guión cada incubadora tiene un número único de identificación).</>,
                <>Conectate desde tu celular con la contraseña: <strong className="text-lp-black">12345678</strong>.</>,
                'Ya podés abrir la aplicación y comenzar el proceso de configuración de los parámetros básicos de tu LibreIncu.',
              ].map((step, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <span className="bg-lp-yellow text-lp-black font-extrabold rounded-full w-7 h-7 flex items-center justify-center shrink-0 text-sm">{i + 1}</span>
                  <span className="text-lp-grayDark pt-0.5">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Configuración de WiFi */}
          <div className="mb-10">
            <h3 className="text-xl font-bold text-lp-black mb-3 flex items-center gap-2">
              <Wifi className="text-lp-yellow" size={22} />
              Configuración de WiFi
            </h3>
            <p className="text-lp-grayDark mb-4">
              Para que la LibreIncu pueda enviar notificaciones móviles a tu teléfono y guardar sus datos históricos en Grafana, necesitás conectarla a una red WiFi con acceso a internet. Desde la aplicación LibrePollo:
            </p>
            <ol className="space-y-3">
              {[
                'Presioná el botón "Conexión" en el menú inferior.',
                'Seleccioná tu red WiFi de la lista.',
                'Ingresá la contraseña.',
                'Esperá a que se establezca la conexión.',
                'Verificá el estado de conexión en la pantalla principal.',
                'Si la conexión se realizó correctamente, en la pantalla principal el estado de WiFi dirá "Conectado".',
              ].map((step, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <span className="bg-lp-black text-lp-yellow font-extrabold rounded-full w-7 h-7 flex items-center justify-center shrink-0 text-sm">{i + 1}</span>
                  <span className="text-lp-grayDark pt-0.5">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Configuraciones Básicas */}
          <div className="mb-10">
            <h3 className="text-xl font-bold text-lp-black mb-3 flex items-center gap-2">
              <Settings className="text-lp-yellow" size={22} />
              Configuraciones Básicas
            </h3>
            <p className="text-lp-grayDark mb-4">
              En esta sección podés modificar los parámetros predeterminados de la LibreIncu de acuerdo a tus necesidades:
            </p>
            <ol className="space-y-3">
              {[
                'Presioná el botón de editar que se encuentra al lado del campo que querés cambiar.',
                'Ingresá el nuevo valor que querés que tenga el campo seleccionado.',
                'Pulsá "Aceptar".',
                'Listo, ahora tu LibreIncu está adaptada a tus parámetros de producción.',
              ].map((step, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <span className="bg-lp-yellow text-lp-black font-extrabold rounded-full w-7 h-7 flex items-center justify-center shrink-0 text-sm">{i + 1}</span>
                  <span className="text-lp-grayDark pt-0.5">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* NTFY */}
          <div className="card p-6 bg-lp-black text-lp-white border-2 border-lp-yellow/30">
            <h3 className="text-xl font-bold text-lp-yellow mb-3 flex items-center gap-2">
              <Bell className="text-lp-yellow" size={22} />
              Suscripción a Sistema de Notificaciones (NTFY)
            </h3>
            <p className="text-lp-gray mb-4">
              Para recibir notificaciones móviles sobre el comportamiento de tu LibreIncu cuando no estás cerca, necesitás trabajar en conjunto con la app <strong className="text-lp-white">NTFY</strong>:
            </p>
            <ol className="space-y-3">
              {[
                'Buscá "NTFY" en la tienda de aplicaciones de tu teléfono (ej: Google Play).',
                'Instalá la aplicación NTFY.',
                'En la Pantalla Principal de tu app LibrePollo, dirigite al ícono de mensaje en la barra superior.',
                'Seguí el tutorial detallado que se explica en esa pantalla.',
              ].map((step, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <span className="bg-lp-yellow text-lp-black font-extrabold rounded-full w-7 h-7 flex items-center justify-center shrink-0 text-sm">{i + 1}</span>
                  <span className="text-lp-gray pt-0.5">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <hr className="border-lp-gray" />

        {/* Funciones */}
        <section>
          <h2 className="text-3xl font-extrabold text-lp-black mb-8 pb-3 border-b-4 border-lp-yellow">
            Funciones de la Aplicación
          </h2>

          {/* Control de Bandejas */}
          <div className="mb-10">
            <h3 className="text-xl font-bold text-lp-black mb-3 flex items-center gap-2">
              <Layers className="text-lp-yellow" size={22} />
              Control de Bandejas
            </h3>
            <p className="text-lp-grayDark mb-4">La sección <strong className="text-lp-black">&quot;Contador&quot;</strong> te permite gestionar hasta tres bandejas de incubación:</p>
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <div className="card p-5 border-l-4 border-green-500">
                <div className="font-bold text-lp-black mb-1">Bandeja Verde</div>
                <p className="text-lp-grayDark text-sm">Indica que la bandeja está <strong>vacía y lista</strong> para un nuevo ciclo.</p>
              </div>
              <div className="card p-5 border-l-4 border-red-500">
                <div className="font-bold text-lp-black mb-1">Bandeja Roja</div>
                <p className="text-lp-grayDark text-sm">Indica que la bandeja está <strong>en uso</strong> con un ciclo activo.</p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-lp-gray/30 rounded-xl p-5">
                <p className="font-bold text-lp-black mb-2">Para iniciar un ciclo:</p>
                <ol className="text-lp-grayDark text-sm space-y-1">
                  <li>1. Seleccioná una bandeja verde.</li>
                  <li>2. Confirmá el inicio del ciclo.</li>
                </ol>
              </div>
              <div className="bg-lp-gray/30 rounded-xl p-5">
                <p className="font-bold text-lp-black mb-2">Para finalizar un ciclo:</p>
                <ol className="text-lp-grayDark text-sm space-y-1">
                  <li>1. Seleccioná una bandeja roja.</li>
                  <li>2. Confirmá que deseás finalizar el ciclo.</li>
                  <li>3. La bandeja volverá a estado verde.</li>
                </ol>
              </div>
            </div>
          </div>

          {/* Configuraciones Generales */}
          <div className="mb-10">
            <h3 className="text-xl font-bold text-lp-black mb-3 flex items-center gap-2">
              <Settings className="text-lp-yellow" size={22} />
              Configuraciones Generales
            </h3>
            <p className="text-lp-grayDark mb-4">En esta sección podés ajustar:</p>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { label: 'Nombre de la Incubadora', desc: 'Identificador único de tu equipo.' },
                { label: 'Temperaturas', desc: 'Máxima y mínima permitidas.' },
                { label: 'Humedad', desc: 'Niveles máximo y mínimo deseados.' },
                { label: 'Período de Incubación', desc: 'Duración del ciclo en días.' },
                { label: 'Intervalos de Rotación', desc: 'Frecuencia de rotación de las bandejas.' },
              ].map(({ label, desc }) => (
                <div key={label} className="card p-4 border-l-4 border-lp-yellow">
                  <div className="font-bold text-lp-black text-sm">{label}</div>
                  <div className="text-lp-grayDark text-sm">{desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Rotación Manual */}
          <div className="mb-10">
            <h3 className="text-xl font-bold text-lp-black mb-3 flex items-center gap-2">
              <RotateCcw className="text-lp-yellow" size={22} />
              Control Manual de Rotación
            </h3>
            <p className="text-lp-grayDark mb-3">La pantalla de rotación te permite:</p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="card p-5 border-2 border-lp-gray hover:border-lp-yellow transition-colors text-center">
                <div className="text-3xl mb-2">↑</div>
                <div className="font-bold text-lp-black">Rotar hacia arriba</div>
              </div>
              <div className="card p-5 border-2 border-lp-gray hover:border-lp-yellow transition-colors text-center">
                <div className="text-3xl mb-2">↓</div>
                <div className="font-bold text-lp-black">Rotar hacia abajo</div>
              </div>
            </div>
            <p className="text-lp-grayDark text-sm mt-3">De esta forma podemos dejar las bandejas en la posición necesaria para realizar tareas de limpieza, carga y descarga, etc.</p>
          </div>

          {/* Sistema de Alertas */}
          <div className="mb-10">
            <h3 className="text-xl font-bold text-lp-black mb-3 flex items-center gap-2">
              <Bell className="text-lp-yellow" size={22} />
              Sistema de Alertas
            </h3>
            <p className="text-lp-grayDark mb-4">
              Cuando presionás el ícono de campana en la esquina superior derecha, la aplicación mostrará alertas sobre:
            </p>
            <ul className="space-y-2">
              {[
                'Problemas con el sensor de temperatura / humedad.',
                'Problemas de rotación.',
                'Problemas de conexión a internet.',
              ].map((item) => (
                <li key={item} className="flex gap-2 items-start text-lp-grayDark">
                  <AlertTriangle className="text-lp-yellow shrink-0 mt-0.5" size={18} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Grafana */}
          <div>
            <h3 className="text-xl font-bold text-lp-black mb-3 flex items-center gap-2">
              <BarChart2 className="text-lp-yellow" size={22} />
              Visualización de Datos (Grafana)
            </h3>
            <p className="text-lp-grayDark mb-4">La sección Grafana te permite:</p>
            <ul className="space-y-2 mb-4">
              {[
                'Ver gráficos históricos de temperatura y humedad.',
                'Analizar tendencias.',
                'Identificar patrones o problemas.',
              ].map((item) => (
                <li key={item} className="flex gap-2 items-start text-lp-grayDark">
                  <CheckCircle2 className="text-lp-yellow shrink-0 mt-0.5" size={18} />
                  {item}
                </li>
              ))}
            </ul>
            <div className="bg-lp-black text-lp-yellow rounded-xl px-5 py-4 text-sm font-medium">
              ⚠ Para ver los datos en Grafana, tu teléfono debe estar conectado a una red WiFi con acceso a internet.
            </div>
          </div>
        </section>

        <hr className="border-lp-gray" />

        {/* Solución de Problemas */}
        <section>
          <h2 className="text-3xl font-extrabold text-lp-black mb-8 pb-3 border-b-4 border-lp-yellow">
            Solución de Problemas Comunes
          </h2>

          <div className="space-y-6">

            {/* Error de conexión */}
            <div className="card p-6 border-l-4 border-lp-yellow">
              <h3 className="font-bold text-lp-black mb-3 flex items-center gap-2">
                <ShieldAlert size={20} className="text-lp-yellow" />
                La aplicación muestra &quot;Verifique conexión con incubadora&quot;
              </h3>
              <ol className="space-y-2 text-lp-grayDark text-sm">
                <li className="flex gap-3"><span className="font-bold text-lp-black">1.</span>Verificá que la incubadora esté encendida.</li>
                <li className="flex gap-3"><span className="font-bold text-lp-black">2.</span>Asegurate de estar conectado a la red WiFi con el nombre de tu incubadora (ModoAP).</li>
                <li className="flex gap-3"><span className="font-bold text-lp-black">3.</span>Presioná &quot;Reintentar&quot;.</li>
                <li className="flex gap-3"><span className="font-bold text-lp-black">4.</span>Si el problema persiste, revisá la configuración WiFi.</li>
              </ol>
            </div>

            {/* Rotación */}
            <div className="card p-6 border-l-4 border-lp-yellow">
              <h3 className="font-bold text-lp-black mb-3 flex items-center gap-2">
                <RotateCcw size={20} className="text-lp-yellow" />
                Problemas de Rotación
              </h3>
              <p className="text-lp-grayDark text-sm mb-3">Si ves una alerta de rotación:</p>
              <ol className="space-y-2 text-lp-grayDark text-sm">
                <li className="flex gap-3"><span className="font-bold text-lp-black">1.</span>Verificá que no haya obstáculos físicos.</li>
                <li className="flex gap-3"><span className="font-bold text-lp-black">2.</span>Usá los controles manuales de rotación para probar el sistema.</li>
                <li className="flex gap-3"><span className="font-bold text-lp-black">3.</span>Si el problema persiste: revisá la posición de la bandeja y los sensores Reed, las conexiones del motor, y que las partes (cinta, polea y motor) estén bien asociadas.</li>
              </ol>
            </div>

            {/* Temperatura / Humedad */}
            <div className="card p-6 border-l-4 border-lp-yellow">
              <h3 className="font-bold text-lp-black mb-3 flex items-center gap-2">
                <ThermometerSun size={20} className="text-lp-yellow" />
                Alertas de Temperatura o Humedad
              </h3>
              <p className="text-lp-grayDark text-sm mb-3">Si recibís alertas constantes:</p>
              <ol className="space-y-2 text-lp-grayDark text-sm">
                <li className="flex gap-3"><span className="font-bold text-lp-black">1.</span>Verificá que los rangos configurados sean correctos.</li>
                <li className="flex gap-3"><span className="font-bold text-lp-black">2.</span>Asegurate de que el sensor no se encuentre obstruido.</li>
                <li className="flex gap-3"><span className="font-bold text-lp-black">3.</span>Comprobá el funcionamiento del sistema de ventilación.</li>
              </ol>
            </div>

          </div>
        </section>

        {/* CTA */}
        <div className="bg-lp-black text-lp-white rounded-2xl p-8 text-center">
          <p className="text-lp-yellow font-extrabold text-xl mb-2">¡A incubar se ha dicho! 🐣</p>
          <p className="text-lp-gray mb-6">¿Querés ver la app en acción antes de empezar?</p>
          <Link
            href="/app-movil"
            className="inline-flex items-center gap-2 bg-lp-yellow text-lp-black font-bold px-6 py-3 rounded-xl hover:bg-lp-yellowLight transition-colors"
          >
            <Smartphone size={18} />
            Ver Demo Interactivo
          </Link>
        </div>

      </div>
    </div>
  );
}
