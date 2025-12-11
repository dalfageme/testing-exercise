import { useState } from 'react'
import './App.css'

const EVENTS = [
  { id: 'rock', name: 'Rock Fest', price: 30 },
  { id: 'jazz', name: 'Jazz Night', price: 25 },
  { id: 'techno', name: 'Techno Party', price: 18 },
]

function App() {
  const [total, setTotal] = useState(0)

  const updateTotal = (price) => {
    setTotal(price)
  }

  return (
    <main className="app">
      <header className="header">
        <p className="eyebrow">Ejercicio de testing</p>
        <h1>Eventos disponibles</h1>
        <p className="hint">
          Usa + o - para simular añadir o quitar entradas y comprobar el total.
        </p>
      </header>

      <section className="event-list">
        {EVENTS.map((event) => {
          return (
            <article key={event.id} className="event">
              <div>
                <h2>{event.name}</h2>
                <p className="price">{event.price.toFixed(2)} € por entrada</p>
              </div>
              <div className="controls">
                <button
                  aria-label={`Restar ${event.name}`}
                  onClick={() => updateTotal(event.price)}
                >
                  -
                </button>
                <button
                  aria-label={`Añadir ${event.name}`}
                  onClick={() => updateTotal(event.price)}
                >
                  +
                </button>
              </div>
            </article>
          )
        })}
      </section>

      <footer
        className="total"
        role="status"
        aria-label="Total del carro"
        aria-live="polite"
      >
        Total: {total.toFixed(2)} €
      </footer>
    </main>
  )
}

export default App
