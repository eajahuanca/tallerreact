console.log('====================================');
console.log('hola mundo NODE JS');
console.log('123456');
console.log('====================================');

factorial = (num) => {
    if (num <= 0) return 1;
    return (num * factorial(num - 1));
}

console.log('====================================');
console.log('Factorial : ', factorial(5));
console.log('====================================');

const alumno = {
    nombre: 'Edwin',
    curso: 'React',
    miFunc: () => { return 'Saludo' }
}

console.log('====================================');
console.log(`Alumno => ${alumno.nombre}`);
console.log(`Alumno => ${alumno.curso}`);
console.log(`Alumno => ${alumno.miFunc()}`);
console.log('====================================');