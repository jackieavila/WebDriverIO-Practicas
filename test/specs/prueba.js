describe('Prueba Final', () =>{

    it('Deberiamos de navegar y verificar un elemento especifico', async () =>{

        //1) Vamos a ir a la página 'https://the-internet.herokuapp.com/')
        await browser.url('https://the-internet.herokuapp.com/');

        //2) Buscamos el enlace que  dice 'input' y le vamos a dar click
        //para eso vamos a usar el selector de texto (link texto)
        const linkInputs = await $('=Inputs');
        await linkInputs.click();

        //3) verificamos que entramos en la página correcta 
        //buscamos el encabezado que deberia de decir (Inputs)

        const header = await $('h3');
        await expect(header).toHaveText('Inputs');

        console.log('-----Reto completo con exito----')

    });
});

// $(h3) selector de etiqueta
//$('#login') -> buscamos un elemento con ID == 'login'
//$('.btn-primary')-> buscamos un elemento con CLASS = 'btn-primary'
//$ ('=Inputs') -> se buscan enlaces de texto con el texto 'Inputs'