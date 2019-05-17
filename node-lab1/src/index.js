console.log('====================================');
console.log('LABORATORIO NODE 2');
console.log('====================================');
const moduloLog = require('./log');
const moduloOperaciones = require('./operaciones');
const param1 = 23;
const param2 = 10;

moduloLog.info('nodejs iniciado');
moduloLog.warning('nodejs no esta comnfigurado');
moduloLog.error('error en el acceso');

console.log(`la suma de ${param1} y ${param2} es ${moduloOperaciones.sumar(param1, param2)}`);
console.log(`la resta de ${param1} y ${param2} es ${moduloOperaciones.resta(param1, param2)}`);