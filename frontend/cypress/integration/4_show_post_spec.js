it('show post', () => {

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

});

it('vote up post', () => {

    cy.viewport(1024, 768);

    // Check post list
    const voteUp = cy.get('#post-vote-up');
    voteUp.should('be.visible');

    // click to view one post
    voteUp.click();
    voteUp.click();

    // check vote score after vote up
    const voteScore = cy.get('#post-score');
    voteScore.should('be.visible');

    voteScore.contains('Vote Score 8');

});

it('vote down post', () => {

    cy.viewport(1024, 768);

    // Check post list
    const voteDown = cy.get('#post-vote-down');
    voteDown.should('be.visible');

    // click to view one post
    voteDown.click();
    voteDown.click();

    // check vote score after vote up
    const voteScore = cy.get('#post-score');
    voteScore.should('be.visible');

    voteScore.contains('Vote Score 6');

});
