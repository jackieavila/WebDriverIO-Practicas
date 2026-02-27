describe('Prueba en Google', ()=> {

    it ('Debería de navegar a Google', async ()=> {
        await browser.url('https://www.google.com/');
        console.log ('-----Estoy en Google---');
    });

    // escribimos un nuevo test realcionado con google
    //vamos hacer una busqueda

    it('Debería buscar "WEBDRIVERIO" en google', async () =>{

        // 1) Localizador la barra de busqueda, name=q
        const barraBusqueda = await $('[name="q"]');

        // 2) vamos escribir el motivo de la busqueda
        await barraBusqueda.setValue('WEBDRIVERIO');
        await browser.keys ('\uE006'); // este código presiona el ENTER

        console.log ('----Busqueda realizada con exito----');

        //3) validar el resultado de la busqueda
        await expect(browser).toHaveTitleContaining('WEBDRIVERIO');
    })

});

describe('Busqueda sin resultados', ()=>{
    it('Debería de mostrar un error si busco algo malo', async () => {
        {/*...*/};
    });

});