it('filter posts by date', () => {

    cy.viewport(1024, 768);

    //currentlyReading
    //wantToRead
    //read

    // visit 'baseUrl'
    cy.visit('/');

    // Filter posts
    const filterPosts = cy.get('#filter-posts');
    filterPosts.should('be.visible');
    filterPosts.select('Date');

});