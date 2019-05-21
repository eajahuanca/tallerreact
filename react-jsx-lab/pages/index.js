const alumno = {
    id: 1,
    nombre: "Edwin",
    apellido: "Ajahuanca"
}

const generatAleatorio = () => {
    return Math.trunc(Math.random() * 10);
}

const Index = () => (
    <div>
        <h1>Titulo</h1>
        <hr/>
        <p>
            Contenido del titulo,c odigo jsx
        </p>
        <p>Calculando 2018 + 1 = {2018 + 1}</p>
        <p>Alumno: {alumno.nombre} {alumno.apellido}</p>
        <p>Numero de la Suerte: { generatAleatorio() }</p>
        <p>La hora es : {new Date().toLocaleTimeString()}</p>
    </div>
);
export default Index;