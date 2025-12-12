import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from './App'

describe('ejercicios de selectores', () => {
  it('encuentra el título principal', () => {
    render(<App />)

    // sustituir null por el selector adecuado
    const pattern = /eventos disponibles/i;
    const heading = screen.getByRole('heading', { name: pattern, level: 1 });
    expect(heading).toBeVisible()
  })

  it('encuentra todos los botones de añadir', () => {
    render(<App />)

    // sustituir null por el selector adecuado
    const pattern = /añadir/i;
    const addButtons = screen.getAllByRole("button", { name: pattern});
    expect(addButtons).toHaveLength(3)
  })

  it('comprueba que no se muestra el mensaje de sin eventos', () => {
    render(<App />)

    // sustituir null por el selector adecuado
    const pattern = /sin eventos disponibles/i;
    const noEventsMessage = screen.queryByText(pattern);

    expect(noEventsMessage).not.toBeInTheDocument()
  })

  it('no hay etiquetas de "agotado"', () => {
    render(<App />)
    
    // sustituir null por el selector adecuado
    const pattern = /agotado/i;
    const soldOutTags = screen.queryAllByText(pattern);
    expect(soldOutTags).toHaveLength(0)
  })

  it('espera a que aparezca la promo', async () => {
    render(<App />)
    
    // sustituir null por el selector adecuado
    const pattern = /oferta limitada disponible/i;
    const promo = await screen.findByText(pattern);
    expect(promo).toBeInTheDocument()
  })

  it('espera a que aparezcan todas las etiquetas de oferta', async () => {
    render(<App />)
    
    // sustituir null por el selector adecuado
    const pattern = /oferta:/i;
    const offers = await screen.findAllByText(pattern);
    expect(offers).toHaveLength(2)
  })
})
