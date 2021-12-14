Given('I open the Google web url', () => {
  cy.visit('https://www.google.com');
})
Then('I verify title of web page as {string}', (title) => {
  cy.title().should('include', title);
})

Given('I open the Facebook web url', () => {
  cy.visit('https://www.facebook.com');
})
Then('I verify title of web page as {string}', (title) => {
  cy.title().should('include', title);
})

Given('I open the Pet database web url', () => {
  cy.visit('http://the-pettest-store.herokuapp.com/pet');
})
Then('I verify the first name of a pet as {string}', (title) => {
  cy.get('.card-title').first().should('have.text', title);
})

Given('I open the Pet database web url', () => {
  cy.visit('http://the-pettest-store.herokuapp.com/pet');
})
Then('I verify age of a pet as {string}', (title) => {
  cy.get('.list-group-item').first().should('include.text', title);
})

Given('I open the Pet database web url', () => {
  cy.visit('http://the-pettest-store.herokuapp.com/pet');
})
Then('I verify header as {string}', (title) => {
  cy.get('h1').first().should('include.text', title);
})

Given('I open the Pet database web url', () => {
  cy.visit('http://the-pettest-store.herokuapp.com/pet');
})
Then('I verify button as {string}', (title) => {
  cy.get('.nav-link').should('include.text', title);
})

Given('I open the Pet database web url', () => {
  cy.visit('http://the-pettest-store.herokuapp.com/pet');
})
Then('I verify a name of a pet as {string}', (title) => {
  cy.get('.card-title').should('include.text', title);
})

Given('I open the Pet database web url', () => {
  cy.visit('http://the-pettest-store.herokuapp.com/pet');
})
Then('I verify if any pet is important', () => {
  cy.get('.badge').should('include.text', 'Important');
})

Given('I open the Pet database web url', () => {
  cy.visit('http://the-pettest-store.herokuapp.com/pet');
})
Then('I verify if any pet is new', () => {
  cy.get('.badge').should('include.text', 'New');
})

Given('I open the Pet database web url', () => {
  cy.visit('http://the-pettest-store.herokuapp.com/pet');
})
Then('I verify if any pet is negative', () => {
  cy.get('.age').should('include.text', '-');
})

Given('I open the Pet database web url', () => {
  cy.visit('http://the-pettest-store.herokuapp.com/pet');
})
Then('I verify if {string} is on the page', (title) => {
  cy.get('body').should('include.text', title);
})
