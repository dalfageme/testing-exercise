import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import App from './App'

describe('carrito de eventos', () => {
  it('actualiza el total al seleccionar un evento', async () => {
    const user = userEvent.setup();
    render(<App />)

    await user.click(screen.getByRole('button', { name: /añadir rock fest/i }))

    const total = screen.getByRole('status', { name: /total del carro/i })
    expect(total).toHaveTextContent('30.00 €')
  })
})
