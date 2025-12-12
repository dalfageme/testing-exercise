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
})
