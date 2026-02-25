import React from "react";

export default function NosotrosPage() {
  return (
    <div className="mt-10">
      <div>
        <h1 className="font-black text-4xl">Nosotros</h1>
        <p className="text-primary">Reparameya Admin</p>
      </div>

      <div className="my-15">
        <b className="text-lg">¿Quiénes somos?</b>
        <p className="mt-2 text-base/8">
          Nace con el propósito de educar y empoderar a los inversores minoristas, basándonos en normas de organismos
          internacionales para generar confianza y protección. Ofrecemos herramientas y conocimientos para que los
          individuos comprendan los riesgos, oportunidades y consecuencias de sus decisiones en el sistema financiero.
        </p>
      </div>

      <div className="gap-6 grid grid-cols-1 md:grid-cols-2">
        <div>
          <b className="text-lg">Nuestro Compromiso</b>
          <p className="mt-2 text-base/8">
            Es proporcionar contenido educativo de alta calidad que se adapta a distintos niveles de experiencia, desde
            principiantes hasta expertos. Buscamos que nuestra comunidad entienda diferentes formas de inversión.
          </p>
        </div>
        <div>
          <b className="text-lg">Transparencia</b>
          <p className="mt-2 text-base/8">
            Nos esforzamos en buscar información veraz y de alta calidad. Estamos en contra de propuestas de inversión
            falsas que ponen en riesgo tu capital. En nuestro contenido público no damos recomendaciones de inversión.
          </p>
        </div>
      </div>
    </div>
  );
}
