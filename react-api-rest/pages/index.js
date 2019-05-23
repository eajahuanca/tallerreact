import Link from 'next/link';
import fecth from 'isomorphic-unfetch';

const Index = (props) => (
    <div>
        <h1>BAtman TV shows</h1>
        <ul>
            {
                props.shows.map(show => (
                    <li key={show.id}>
                        <p>{show.id} - {show.name}</p>
                    </li>
                ))
            }
        </ul>
    </div>
)

Index.getInitialProps = async () => {
    const res = await fecth('https://api.tvmaze.com/search/shows?q=batman')
    const data = await res.json()

    console.log('====================================');
    console.log(`Show data fetched. Count: ${data.length}`);
    console.log('====================================');
    return{
        shows: data.map(entry => entry.show)
    }
}

export default Index;