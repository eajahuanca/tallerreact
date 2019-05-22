import {withRouter} from 'next/router';
import Principal from '../componentes/Principal';

const Poster = (props) => {
    return (
        <Principal>
            <h1>{props.router.query.title}</h1>
            <h4>{props.router.query.mivar}</h4>
            <p>Este en nel contenido de la pagina post.</p>
        </Principal>
    );
}

export default withRouter(Poster);