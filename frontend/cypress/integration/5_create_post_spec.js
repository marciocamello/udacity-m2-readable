it('edit post', () => {

    cy.viewport(1024, 768);

    //currentlyReading
    //wantToRead
    //read

    // visit 'baseUrl'
    cy.visit('/');

    // Check post list
    const posts = cy.get('#list-posts>div');
    posts.first().should('be.visible');

    // click to edit one post
    posts.get('#add-post')
        .first()
        .click();

});

it('create save post', () => {

    cy.viewport(1024, 768);

    // Save post
    const savePost = cy.get('#save-post');
    savePost.should('be.visible');
    cy.get('#save-post').find('select[name="category"]').select('udacity');
    cy.get('#save-post').find('input[name="title"]').type('Test new title');
    cy.get('#save-post').find('input[name="body"]').type('Test new body');
    cy.get('#save-post').find('input[name="author"]').type('Test new author');
    cy.get('#save-post').submit();

});