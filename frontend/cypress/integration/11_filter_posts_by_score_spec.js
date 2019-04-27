it('filter posts by vote score', () => {

    cy.viewport(1024, 768);

    //currentlyReading
    //wantToRead
    //read

    // visit 'baseUrl'
    cy.visit('/');

    // Filter posts
    const filterPosts = cy.get('#filter-posts');
    filterPosts.should('be.visible');
    filterPosts.select('VoteScore');

});