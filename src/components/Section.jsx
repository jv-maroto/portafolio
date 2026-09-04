export default function Section({ id, title, children, wide = false }) {
  return (
    <section id={id} className="py-16 sm:py-24">
      <div className={`mx-auto px-6 ${wide ? 'max-w-[1040px]' : 'max-w-[760px]'}`}>
        <h2 className="mb-8 text-title font-medium">{title}</h2>
        {children}
      </div>
    </section>
  )
}
