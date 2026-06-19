// Floating colored orbs + grid + grain. The "soul" of the liquid-glass look.
// Placed once at App root and rendered behind everything.
export default function Background() {
  return (
    <>
      <div className="aurora" aria-hidden="true" />
      <div className="grid-overlay" aria-hidden="true" />
      <div className="noise" aria-hidden="true" />
    </>
  )
}
