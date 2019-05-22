import Principal from '../componentes/Principal';
import Link from 'next/link';
const PostLink = (props) => {
    return (
        <li>
            <Link href={`/poster?title=${props.title}&mivar=${props.mivar}`}>
                <a>{props.title}</a>
            </Link>
        </li>
    );
}

const Contenido = () => {
    return (
        <Principal>
            <p>Hola Next.js</p>
            <p>2019</p>
            <ul>
                <PostLink title="Helo NEst.js" mivar="Subtitulo del contenido 1"/>
                <PostLink title="Aprendiendo cpn NEWXT.js" mivar="subtitulo del contenido 2"/>
                <PostLink title="Subiendo aplicaciones" mivar="subtitltulo del conteido 333"/>
            </ul>
        </Principal>
    );
}

export default Contenido;