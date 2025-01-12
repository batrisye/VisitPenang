import { Link } from 'react-router-dom';
import './HeritageHStyle.css'

function HeritageHData (props) {
    return (
        <div className='t-card'>
            <Link to={props.to}>
                <div className="t-image">
                    <img src={props.image} alt="image"/>
                </div>
            </Link>
            <h4>{props.heading}</h4>
        </div>
    )
}

export default HeritageHData;