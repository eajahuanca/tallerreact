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
const cursos = ['angular', 'nodejs', 'react', 'mongodb'];
cursos.splice(2, 0, 'postgres');


console.log('====================================');
console.log(`Alumno => ${alumno.nombre}`);
console.log(`Alumno => ${alumno.curso}`);
console.log(`Alumno => ${alumno.miFunc()}`);
console.log('====================================');
console.log('====================================');
console.log(cursos);
const eliminado = cursos.splice(3, 1);
console.log(cursos);
cursos.push('sql-server');
console.log(cursos);
const curso = cursos.find(elemento => elemento === 'mongodb');
if (curso) console.log(`Curso encontreado ${curso}`);

for (let item in cursos) {
    console.log(cursos[item]);
}

cursos.forEach(item => {
    console.log(item);
});

cursos.map((curso, indice) => {
    console.log(indice, curso);
});

const sinReact = cursos.filter(item => item !== 'react');
console.log(`Sin React ${sinReact}`);

const roles = new Map([
    ['r1', 'Usuario'],
    ['r2', 'Invitado'],
    ['r3', 'Administrador']
]);
console.log('====================================');
console.log(roles.get('r2'));
console.log('====================================');
const horarios = new Map();
horarios.set('001', { curso: 'nodejs', horarios: '19:00-21:00' });
horarios.set('002', { curso: 'angularjs', horarios: '21:00 - 23:00' });
horarios.set('003', { curso: 'React', horarios: '15:00 - 18:00' });

console.log('====================================');
console.log(`Horarios: ${horarios.get('002').curso}`);
console.log('====================================');

console.log('====================================');
console.log('OPERACIONES');
console.log('====================================');
sum = (x, y, z, n) => {
    return x + y + z + n;
}

const numbers = [2, 4, 6, 10];
console.log(`La suma es: ${sum(...numbers)}`);
console.log(sum(...numbers));

const arr = [1, 2, 3, 5, 12];
const arr2 = [...arr];
arr2.push(6);
console.log('====================================');
console.log(`Arrays: ${arr2}`);
console.log(arr2);
console.log('====================================');
const arr3 = [1, 2, 3, 4];
const arr4 = [5, 6, 7, 8];
arr3.push(...arr4);
console.log('====================================');
console.log('Mas Array');
console.log(arr3);
console.log('====================================');