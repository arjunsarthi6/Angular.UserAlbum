describe('Loading Album', ()=> {
    it('load the Albums screen', () => {

        cy.visit('http://localhost:4200/users/userlist');

        cy.get('#goToAlbums').click();

    })
});

describe('Loading Photos', ()=> {
    it('load the Photos on the screen', () => {

        cy.visit('http://localhost:4200/users/album/1/Leanne%20Graham');

        cy.get('#1').click();

    })
});

describe('loading addAlbum Screen', ()=> {
    it('load the addAlbums screen', () => {

        cy.visit('http://localhost:4200/users/addAlbum/1/Leanne%20Graham');
        cy.url().should('includes', 'addAlbum');
        cy.get('[formControlName="title"]').type('XYZ');
        cy.get('[formControlName="description"]').type('XYZ');
        cy.get('#submit').click();
        cy.wait(400);
        cy.get('#cancel').click();

    })
});
