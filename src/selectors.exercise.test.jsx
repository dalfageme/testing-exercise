import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from './App'

describe('ejercicios de selectores', () => {
  it.skip('encuentra el título principal', () => {
    render(<App />)

    // sustituir null por el selector adecuado
    const pattern = /eventos disponibles/i;
    const heading = null;
    expect(heading).toBeVisible()
  })

  it.skip('encuentra todos los botones de añadir', () => {
    render(<App />)

    // sustituir null por el selector adecuado
    const pattern = /añadir/i;
    const addButtons = null;
    expect(addButtons).toHaveLength(3)
  })

  it.skip('comprueba que no se muestra el mensaje de sin eventos', () => {
    render(<App />)

    // sustituir null por el selector adecuado
    const pattern = /sin eventos disponibles/i;
    const noEventsMessage = null;

    expect(noEventsMessage).not.toBeInTheDocument()
  })

  it.skip('no hay etiquetas de "agotado"', () => {
    render(<App />)
    
    // sustituir null por el selector adecuado
    const pattern = /agotado/i;
    const soldOutTags = null;
    expect(null).toHaveLength(0)
  })

  it.skip('espera a que aparezca la promo', async () => {
    render(<App />)
    
    // sustituir null por el selector adecuado
    const pattern = /oferta limitada disponible/i;
    const promo = null;
    expect(promo).toBeInTheDocument()
  })

  it.skip('espera a que aparezcan todas las etiquetas de oferta', async () => {
    render(<App />)
    
    // sustituir null por el selector adecuado
    const pattern = /oferta:/i;
    const offers = null;
    expect(offers).toHaveLength(2)
  })
})
