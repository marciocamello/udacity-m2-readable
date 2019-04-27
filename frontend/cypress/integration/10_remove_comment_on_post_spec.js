it('remove comment on post', () => {

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

    // Remove comment
    const removeComment = cy.get('#remove-comment');
    removeComment.should('be.visible');
    cy.get('#remove-comment').click();

});
