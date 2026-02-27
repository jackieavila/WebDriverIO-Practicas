describe('Practica ', ()=>{

    it('Deberia navegar y buscar otro elemento para practica', async () =>{

      await browser.url('https://the-internet.herokuapp.com/');

      console.log('-----Entra al Navegador-----');
    
      const linkDropdown = $('=Dropdown');
      await linkDropdown.click();

      console.log('-----Le da click al icono de Dropdown----');

      const header = await $('h3');
      await expect(header).toHaveText('Dropdown List');

      console.log ("--------Estamos en el la pag Dropdown --------");

    });  

    it('Debería seleccionar la opción dos del Dropdown', async () =>{


        const elemento = $('#dropdown');
        await elemento.selectByVisibleText('Option 2');

        await expect(elemento).toHaveValue('2');
        
    });





});

