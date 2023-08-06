import { faker } from '@faker-js/faker'

describe('Usuários', () => {

  it('obter todos os usuários', () => {
    cy.geraAccessToken().then((token) => {
      cy.request({
        method: 'GET',
        url: '/users',
        headers: {
          Authorization: `Bearer ${token}`,
        }
      }).then((response) => {
        expect(response.status).to.equal(200)
        expect(response.body.length).to.be.greaterThan(1)
        expect(response).to.have.property('headers')
        expect(response).to.have.property('body')
      })
      cy.log(token)
    })
  })

  it('obter usuário específico por ID válido', () => {
    cy.geraAccessToken().then((token) => {
      const id = faker.number.int({ min: 1, max: 10 })
      cy.request({
        method: 'GET',
        url: `/users/${id}`,
        headers: {
          Authorization: `Bearer ${token}`,
        }
      }).then((response) => {
        expect(response.status).to.equal(200)
        expect(response).to.have.property('headers')
        expect(response).to.have.property('body')
        expect(response.body.id).to.equal(id)
      })
      cy.log(token)
    })
  })
})          