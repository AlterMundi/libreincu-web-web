import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Política de Privacidad',
  description: 'Política de privacidad del sitio LibreIncu: qué datos recolectamos, cómo los usamos y tus derechos respecto a la información personal.',
};

export default function PrivacidadPage() {
  return (
    <article className="min-h-screen bg-lp-white py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-lp-black mb-4">Política de Privacidad</h1>
        <p className="text-sm text-lp-grayDark mb-10">Última actualización: abril de 2026</p>

        <section className="prose prose-lg max-w-none text-lp-grayDark space-y-6">
          <h2 className="text-2xl font-bold text-lp-black">Alcance</h2>
          <p>
            Esta política describe cómo el sitio público <strong>libreincu.altermundi.net</strong> trata la
            información de las personas que lo visitan. El sitio es un espacio documental del proyecto
            LibreIncu, desarrollado por <a href="https://altermundi.net" target="_blank" rel="noopener noreferrer" className="underline">AlterMundi</a>
            {' '}y la <Link href="/cto" className="underline">Comunidad, Trabajo y Organización (CTO)</Link>.
          </p>

          <h2 className="text-2xl font-bold text-lp-black">Datos que recolectamos</h2>
          <p>
            El sitio es estático y <strong>no utiliza cookies ni rastreadores propios</strong>. No recolectamos
            datos personales de navegación. El servidor web registra solicitudes HTTP de forma temporal
            (dirección IP, fecha, ruta solicitada y user agent) únicamente a los efectos de operación y
            seguridad del servicio. Estos registros no se comparten con terceros.
          </p>

          <h2 className="text-2xl font-bold text-lp-black">Contenido embebido de terceros</h2>
          <p>
            Algunas páginas embeben videos de YouTube y miniaturas de <code>img.youtube.com</code>, así como
            imágenes alojadas en <code>hackmd.io</code> y <code>github.com</code>. Al cargar ese contenido tu
            navegador se comunica directamente con esos servicios, que pueden registrar la visita según
            sus propias políticas. Te sugerimos revisar las políticas de privacidad de YouTube / Google y
            de cualquier otro servicio enlazado.
          </p>

          <h2 className="text-2xl font-bold text-lp-black">Comunicaciones</h2>
          <p>
            Si nos escribís a los correos electrónicos listados en <Link href="/contacto" className="underline">Contacto</Link>,
            tu dirección y el contenido del mensaje quedan en las bandejas de entrada correspondientes y
            se usan exclusivamente para responder tu consulta.
          </p>

          <h2 className="text-2xl font-bold text-lp-black">Tus derechos</h2>
          <p>
            Podés solicitar información sobre el tratamiento de tus datos, o la eliminación de cualquier
            comunicación que nos hayas enviado, escribiendo a
            {' '}<a href="mailto:info@altermundi.net" className="underline">info@altermundi.net</a>.
          </p>

          <h2 className="text-2xl font-bold text-lp-black">Cambios</h2>
          <p>
            Esta política puede actualizarse si cambian las prácticas del sitio. La fecha al comienzo del
            documento refleja la última modificación.
          </p>
        </section>
      </div>
    </article>
  );
}
