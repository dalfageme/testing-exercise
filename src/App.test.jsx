import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { http, HttpResponse } from 'msw'
import { server } from './mocks/server'
import App from './App'

describe('carrito de eventos', () => {
  it('actualiza el total al seleccionar un evento', async () => {
    render(<App />)

    const button = screen.getByRole('button', { name: /añadir rock fest/i });
    await userEvent.click(button)

    const total = screen.getByRole('status', { name: /total del carro/i })
    expect(total).toHaveTextContent('30.00 €')
  })

  it('suma el valor de la entrada cada vez que seleccionas un evento', async () => {
    // arrange
    render(<App />)

    // act
    const pattern = /añadir rock fest/i;
    const button = screen.getByRole('button', { name: pattern });
    await userEvent.click(button);
    await userEvent.click(button);
    const button2 = screen.getByRole('button', { name: /añadir jazz night/i });
    await userEvent.click(button2)
    await userEvent.click(button2)

    // assert
    const total = screen.getByRole('status', { name: /total del carro/i })
    expect(total).toHaveTextContent('110.00 €')
  })

  it('se vacia el carrito al pulsar el boton de vaciar', async () => {
    // arrange
    render(<App/>)

    // act
    const addToCartButton = screen.getByRole('button', { name: /añadir jazz night/i });
    await userEvent.click(addToCartButton)
    const emptyCartButton = screen.getByRole("button", {name: "Vaciar carrito" })
    await userEvent.click(emptyCartButton)

    // arrange
    const total = screen.getByRole('status', { name: /total del carro/i })
    expect(total).toHaveTextContent('0.00 €')
  })

  it("al pulsar el botón de menos en el evento se quita del total", async () => {
    // arrange
    render(<App/>)

    // act
    const addToCartButton = screen.getByRole('button', { name: /añadir jazz night/i });
    await userEvent.click(addToCartButton)
    const removeFromCartButton = screen.getByRole('button', { name: /restar jazz night/i });
    await userEvent.click(removeFromCartButton)

    // arrange
    const total = screen.getByRole('status', { name: /total del carro/i })
    expect(total).toHaveTextContent('0.00 €')
  })

})

