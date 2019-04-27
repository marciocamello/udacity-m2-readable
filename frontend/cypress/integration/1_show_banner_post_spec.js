describe('Show banner in home from first post', () => {
    it('succesfully performs to show banner in home', () => {

        cy.viewport(1024, 768);

        //currentlyReading
        //wantToRead
        //read

        // visit 'baseUrl'
        cy.visit('/');

        // Check banner text
        const h1 = cy.get('.jumbotron h1.display-4.font-italic');
        h1.first().should('be.visible');
        h1.contains('Udacity is the best place to learn React');

        const p = cy.get('.jumbotron p.mb-0.d-inline-block.text-truncate');
        p.first().should('be.visible');
        p.contains('Everyone says so after all.');

        const footer = cy.get('.jumbotron .blockquote-footer');
        footer.first().should('be.visible');
        footer.contains('thingtwo');
    });
});
