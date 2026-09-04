// Todas las secciones comparten el mismo borde izquierdo (contenedor de 1040).
// El texto se limita a 760 dentro, alineado a la izquierda, no centrado.
export default function Section({ id, title, children, wide = false }) {
  return (
    <section id={id} className="py-14 sm:py-20">
      <div className="mx-auto max-w-[1040px] px-6">
        <div className={wide ? '' : 'max-w-[760px]'}>
          <h2 className="mb-8 text-title font-medium">{title}</h2>
          {children}
        </div>
      </div>
    </section>
  )
}
