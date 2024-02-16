/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function Places({item}) {
    return(
        <div className="place">
            <img src={item.ImageUrl} alt={`Image of ${item.title}`} className='place--img'/>
            <div className="place--details">
                <FontAwesomeIcon icon={faLocationDot} className='place--icon'/>
                <p className='place--location grey'>{item.location}</p>
                <a href={item.googleMapsUrl} className='place--link grey' target='blank'>
                    View on Google Maps
                </a>
                <h1 className='place--name'>{item.title}</h1>
                <p className='place--dates'>{`${item.startDate} - ${item.endDate}`}</p>
                <p className='place--description'>{item.description}</p>
            </div>
        </div>
    )
}