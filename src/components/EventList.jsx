function EventList({ events, onSelectPrice }) {
  return (
    <section className="event-list" aria-label="lista de eventos">
      {events.map((event) => (
        <article key={event.id} className="event">
          <div>
            <h2>{event.name}</h2>
            <p className="price">{event.price.toFixed(2)} € por entrada</p>
          </div>
          <div className="controls">
            <button
              aria-label={`Restar ${event.name}`}
              onClick={() => onSelectPrice(event.price)}
              disabled
            >
              -
            </button>
            <button
              aria-label={`Añadir ${event.name}`}
              onClick={() => onSelectPrice(event.price)}
            >
              +
            </button>
          </div>
        </article>
      ))}
    </section>
  )
}

export default EventList
