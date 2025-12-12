import { useEffect, useState } from 'react'

function DelayedPromo() {
  const [ready, setReady] = useState(false)
  const [offers, setOffers] = useState([])

  useEffect(() => {
    const timer = setTimeout(() => {
      setReady(true)
      setOffers(['Oferta: online', 'Oferta: presencial'])
    }, 80)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section aria-label="promociones">
      {ready ? (
        <p>Oferta limitada disponible</p>
      ) : (
        <p aria-live="polite">Preparando oferta...</p>
      )}
      <ul>
        {offers.map((offer) => (
          <li key={offer}>{offer}</li>
        ))}
      </ul>
    </section>
  )
}

export default DelayedPromo
