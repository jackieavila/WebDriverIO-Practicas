describe('Mi prueba invisible', () =>{

    it('Deberiamos de validar un titulo sin que se vea en el navegador', async () =>{

         //1) Vamos a ir a la página 'https://the-internet.herokuapp.com/')
         console.log('----Iniciamos la navegacion invisible ----')
        await browser.url('https://the-internet.herokuapp.com/');

        //2) Tratamos de obtener el titulo de la pag (esto deberia de lograrse en la memoria de la PC)
        const title = await browser.getTitle();


        //3)Imprimimos en consola para nosotros poderlo confirmar que si entro
        console.log('-----El titulo de forma invisible es: ' + title + '----');

        await expect(browser).toHaveTitle('The Internet');

        console.log('---la prueba invisible es exitosa-----');

    });

});