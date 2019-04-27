it('check reducers instances', () => {

    cy.viewport(1024, 768);

    //currentlyReading
    //wantToRead
    //read

    // visit 'baseUrl'
    cy.visit('/');

    // Check post list
    const posts = cy.get('#list-posts>div');
    posts.first().should('be.visible');

    // reducer check items
    cy.window().its('store').invoke('getState').should('have.keys', [
        'categoriesReducer',
        'postsReducer',
        'commentsReducer',
        'form',
        'loadingBar'
    ]);
});

it('check posts ons store', () => {

    // Check post list
    const posts = cy.get('#list-posts>div');
    posts.first().should('be.visible');

    // reducer check items
    cy.window().its('store').invoke('getState').its('postsReducer.posts').should(($p) => {

        // should have found greater than 0
        expect($p.length).to.be.greaterThan(0)
    });
});