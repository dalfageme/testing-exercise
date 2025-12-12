import { useState } from 'react'
import './App.css'
import CartTotal from './components/CartTotal'
import DelayedPromo from './components/DelayedPromo'
import EventList from './components/EventList'

const EVENTS = [
  { id: 'rock', name: 'Rock Fest', price: 30 },
  { id: 'jazz', name: 'Jazz Night', price: 25 },
  { id: 'techno', name: 'Techno Party', price: 18 },
]

function App() {
  const [total, setTotal] = useState(0)

  const updateTotal = (price) => {
    // Bug intencionado: se pisa el total con el último precio clicado.
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

      <EventList events={EVENTS} onSelectPrice={updateTotal} />
      <CartTotal total={total} />
      <DelayedPromo />
    </main>
  )
}

export default App
