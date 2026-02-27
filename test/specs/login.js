describe('Interacción para un login', () =>{

    it ("Debería de hacer el login en el formulario", async ()=> {

        //1) Vamos a ir a la página 'https://the-internet.herokuapp.com/')
        await browser.url('https://the-internet.herokuapp.com/login');

        //2) vamos a localizar los campos de usuario y password
        await $('#username').setValue('tomsmith');
        await $('#password').setValue('SuperSecretPassword!');

        //3) Hacemos click en el boton
        await $('button[type="submit"]').click();

        //4 Validacón de login
        const flashAlert = await $('#flash');

        //5) Verificamos
        await expect(flashAlert).toBeExisting();

        await expect(flashAlert).toHaveText(/You logged into a secure area!/);

    });
});