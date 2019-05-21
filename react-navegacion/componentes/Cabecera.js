import Link from 'next/link';

const linkStyle = {
    margin: 15
}

const Cabeceras = () => {
    return (
        <div>
            <Link href="/">
                <a style={linkStyle}>Inicio</a>
            </Link>
            <Link href="/acercade">
                <a style={linkStyle}>Acerca de</a>
            </Link>
        </div>
    );
}

export default Cabeceras;