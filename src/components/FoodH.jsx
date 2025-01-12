import './FoodHStyle.css'
import FoodHData from './FoodHData'
import Nature1 from '../assets/NaturePics/RP01.avif'
import Nature3 from '../assets/NaturePics/EP1.png';
import HokkienMee from '../assets/FoodPics/HokkienMee.png';

function FoodH () {
    return(
        <div className="food">
            <div className='foodcard'>
                <FoodHData 
                    to='/FoodPage'
                    image={Nature1}
                    heading ='Malay Food'
                />
                
                <FoodHData 
                to='/FoodPage'
                image={HokkienMee}
                heading ='Chinese Food'
                />
                <FoodHData 
                to='/FoodPage'
                image={Nature3}
                heading ='Indian Food'
                />
            </div>
        </div>
    );
}

export default FoodH;