it('remove post', () => {

    cy.viewport(1024, 768);

    //currentlyReading
    //wantToRead
    //read

    // visit 'baseUrl'
    cy.visit('/');

    // Remove post
    const removePost = cy.get('#remove-post');
    removePost.should('be.visible');
    cy.get('#remove-post').click();

});