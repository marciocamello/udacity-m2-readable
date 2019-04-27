it('check comments by posts on store', () => {

    cy.viewport(1024, 768);

    //currentlyReading
    //wantToRead
    //read

    // visit 'baseUrl'
    cy.visit('/');

    // Check post list
    const posts = cy.get('#list-posts>div');
    posts.first().should('be.visible');

    // click to view one post
    posts.get('#show-post')
        .first()
        .click();

    cy.wait(5);

    // reducer check items
    cy.window().its('store').invoke('getState').its('commentsReducer.postComments').should(($p) => {

        // should have found greater than 0
        expect($p.length).to.be.greaterThan(0)
    });
});