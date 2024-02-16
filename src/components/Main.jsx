import data from '../data';
import Place from './Place.jsx';

export default function Main() {
    const placeArray = data.map(place =>{
        return <Place key={place.id} item={place}/>
    });

    return (
        <section className="place-list">
            {placeArray}
        </section>
    )
}