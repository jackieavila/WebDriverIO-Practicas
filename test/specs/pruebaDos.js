describe('Segunda Prueba', () =>{
    it ('Deberia NAVEGAR Y BUSCAR OTRO ELEMENTO EN ESPECIFICO', async () =>{
            //1) Vamos a ir a la página 'https://the-internet.herokuapp.com/')
        await browser.url('https://the-internet.herokuapp.com/');

        const linkInputs = await $('=Geolocation');
        await linkInputs.click();

        //3) verificamos que entramos en la página correcta 
        //buscamos el encabezado que deberia de decir (Inputs)

        const header = await $('h3');
        await expect(header).toHaveText('Geolocation');

        console.log('-----Reto completo con exito----')

        

    });
});


        
    


