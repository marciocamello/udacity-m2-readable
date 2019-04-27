it('add comment on post', () => {

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

    // click to view one post
    posts.get('#add-comment')
        .first()
        .click();

    // Save post
    cy.get('#save-comment').find('input[name="body"]').type('Test new comment body');
    cy.get('#save-comment').find('input[name="author"]').type('Test new comment author');
    cy.get('#save-comment').submit();

    // visit 'baseUrl'
    cy.visit('/');

    // click to view one post
    posts.get('#show-post')
        .first()
        .click();

});
