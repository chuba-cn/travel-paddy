import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarth } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
    return(
        <nav className='nav'>
            <FontAwesomeIcon icon={faEarth} className='nav--icon'/>
            <p className='nav--title'>Travel Paddy </p>
        </nav>
    )
}