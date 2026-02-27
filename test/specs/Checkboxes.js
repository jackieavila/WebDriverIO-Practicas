describe('Checkboxes practica', () => {
    it('Debería navegar y seleccionar checkboxes', async () =>{

        await browser.url('https://the-internet.herokuapp.com/');

        console.log('-------Entra al navegador------');

        const linkCheckbox = $('=Checkboxes');
        await linkCheckbox.click();

        console.log('-----Entra al link de checkboxes------');

        const header = $('h3');
        await expect(header).toHaveText('Checkboxes');

        

        let element = await $$('form#checkboxes input');
        console.log(await element[0].getHTML());

        await element[0].click();
        //await expect(element[1]).not.toBeChecked();
        await expect(element[0]).toBeChecked();

        

        console.log('-----PASO LA PRUEBA----------')


    





    })
})