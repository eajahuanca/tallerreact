import Cabecera from './Cabecera';

const layoutStyle = {
    margin:20,
    padding: 20,
    border: '1px solid #0f36'
}

const Layout = (props) => {
    return(
        <div style={layoutStyle}>
            <Cabecera/>
            {props.children}
        </div>
    );
}


export default Layout;