//REQUERIMOS LOS SIGUIENTE
const os = require('os');
const fs = require('fs');

const propiedades = {
    so: os.platform(),
    version: os.release(),
    total_memoria: `${os.totalmem()/1048576} GB`,
    memoria_libre: `${os.freemem()/1048576} GB`
};

const PATH_FILE = './src/data/config.json';
fs.writeFile(
    PATH_FILE,
    JSON.stringify(propiedades, null, 2),
    error => {
        if (error) {
            console.log('====================================');
            console.log(error);
            console.log('====================================');
        } else {
            console.log('====================================');
            console.log('CREACION DE ARCHIVO');
            console.log(` ${new Date().getMilliseconds()}: archivo creado con exito`);
            console.log('====================================');
        }
    }
);

/*fs.readFile(
    PATH_FILE,
    (error, datos) => {
        if (error) {
            console.log('====================================');
            console.log(error);
            console.log('====================================');
        } else {
            console.log('====================================');
            console.log(``);
            console.log('====================================');
        }
    }
);*/