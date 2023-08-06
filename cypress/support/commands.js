import { faker } from '@faker-js/faker'

Cypress.Commands.add('geraAccessToken', () => {
  // Utilizando o faker para simular a geração de token
  const token = faker.internet.password({ length: 50 })
  return token
})