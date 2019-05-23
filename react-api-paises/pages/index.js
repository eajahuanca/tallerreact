import fecth from 'isomorphic-unfetch';
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

const Index = (props) => (
    <div>
        <p className="btn btn-primary">Paises Sudamericanos</p>
        <ul>

            <table className="table">
                <tr>
                    <td>ID</td>
                    <td>PAIS</td>
                    <td>CAPITAL</td>
                    <td>POBLACION</td>
                </tr>
                {props.shows.map(show => (
                    <tr key={show.alpha2Code}>
                        <td>{show.alpha2Code}</td>
                        <td>{show.name}</td>
                        <td>{show.capital}</td>
                        <td>{show.population}</td>
                    </tr>
                ))}
            </table>

        </ul>
    </div>
)

Index.getInitialProps = async () => {
    const data = await fecth('https://restcountries.eu/rest/v2/all')
    const paises = await data.json()
    const subAmerica = paises.filter((pais) => {
        return pais.subregion === 'South America';
    });
    return {
        shows: subAmerica.map(pais => pais)
    }
}

export default Index;