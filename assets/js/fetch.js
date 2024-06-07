//==========================REALIZAMOS UN FETCH PARA OBTENER LA LISTA DE PRODUCTOS EN JSON================

let Array_Clases;

async function cargarClasesDesdeJSON() {
    try {
        const response = await fetch('productos.json');
        if (!response.ok) {
            throw new Error('Error al cargar el archivo');
        }
        Array_Clases = await response.json();
        cargarClases();
    } catch (error) {
        console.error('Error:', error);
    }
}

async function cargarProductos() {
    if (!Array_Clases) {
        await cargarClasesDesdeJSON();
    }
    return Array_Clases;
}
