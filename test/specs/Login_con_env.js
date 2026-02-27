require('dotenv').config();
// Aprendí a usar console.log para ver que usuario estaba anotando, ya que me daba error apesar de estar todo correcto. Al hacer console log me indico que username estaba usando y pude correjirlo.

//Dotenv es para protejer las credenciales y no subirlo a git
describe('Interaccion de login con dotenv', () =>{


    it('Debería hacer login en el formulario', async ()=>{

        await browser.url('https://the-internet.herokuapp.com/login');

        await $('#username').setValue(process.env.QA_USERNAME);
        await $('#password').setValue(process.env.QA_PASSWORD);

        await $('button[type="submit"]').click();

        const flashAlert = await $('#flash');

        await expect(flashAlert).toBeExisting();
        await expect(flashAlert).toHaveText(/You logged into a secure area!/ );
    });
});