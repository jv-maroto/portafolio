export default function Section({ id, title, children }) {
  const Heading = id === 'about' || id === 'stack' ? 'h2' : 'h1'
  return (
    <section id={id} className="content-section" aria-labelledby={`${id}-title`}>
      <Heading id={`${id}-title`} className="section-title reveal">{title}</Heading>
      <div className="section-body reveal" style={{ '--delay': '100ms' }}>{children}</div>
    </section>
  )
}
