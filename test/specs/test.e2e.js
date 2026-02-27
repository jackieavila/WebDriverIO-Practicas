// este bloque describe o agrupa una seria de pruebas que pueden estar relacionadas
// vamos a colocar el titulo de mi reporte de pruebas
describe('Mi primera prueba de automatización', () =>{
    
    // cuando generamos un IT es una prueba individual
    // en cada IT hacemos una descripcion de lo que queremos validar
    it('debería de abrir una página para verificar el título', async () =>{
        // 1. NAVEGACION
        // vamos a usar un AWAIT para que espere a que la pagina carge antes de seguir 
        // URL -> https://the-internet.herokuapp.com/ ->  se tiene que abrir el navegador en la direccion indicada
        await browser.url('https://the-internet.herokuapp.com/');

        // 2. EXTRAER EL TITULO DE LA PAGINA
        // para extraer el titulo se usa -> browser.getTitle() -> obtiene el texto de la pestaña del navegador
        // vamos a guardar el titulo en una variable
        const title = await browser.getTitle();

        // 3. MOSTRAR EL TITULO DE LA PAGINA EN LA CONSOLA (LOG)
        // vamos a imprimir el titulo en la terminal VSC, para poder verlo
        // este proceso no tiene que afectar el flujo del test, es mostrar la informacion
        console.log('-----------------------------------------------');
        console.log('--- EL TÍTULO DE LA PÁGINA ES ' + title + ' ---');
        console.log('-----------------------------------------------');
    });
});
