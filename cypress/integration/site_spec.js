describe('Docusaurus site', () => {
    it('loads the home page', () => {
      cy.visit('/');
      cy.contains('Docusaurus');
    });
  
  });
  