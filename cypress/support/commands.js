import { faker } from '@faker-js/faker'

Cypress.Commands.add('geraAccessToken', () => {
  const token = faker.internet.password({ length: 50 })
  return token
})