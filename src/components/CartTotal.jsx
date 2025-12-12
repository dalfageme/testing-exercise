function CartTotal({ total }) {
  return (
    <footer
      className="total"
      role="status"
      aria-label="Total del carro"
      aria-live="polite"
    >
      Total: {total.toFixed(2)} €
    </footer>
  )
}

export default CartTotal
