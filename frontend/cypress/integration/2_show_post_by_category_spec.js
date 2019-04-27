it('show post by category react', () => {

    cy.viewport(1024, 768);

    //currentlyReading
    //wantToRead
    //read

    // visit 'baseUrl'
    cy.visit('/');

    // Check post list
    const category = cy.get('#react-category');
    category.should('be.visible');

    // show posts react category
    category.click();

});


it('show post by category redux', () => {

    // Check post list
    const category = cy.get('#redux-category');
    category.should('be.visible');

    // show posts redux category
    category.click();

});

it('show post by category udacity', () => {

    // Check post list
    const category = cy.get('#udacity-category');
    category.should('be.visible');

    // show posts udacity category
    category.click();

});

it('show post by all', () => {

    // Check post list
    const category = cy.get('#all-posts');
    category.should('be.visible');

    // show posts all category
    category.click();

});
