import './FoodHStyle.css'
import FoodHData from './FoodHData'
import HokkienMee from '../assets/FoodPics/HokkienMee.png';
import NasiLemak from '../assets/FoodPics/NasiLemak.png';

import Thosai from '../assets/FoodPics/Thosai.png';
function FoodH () {
    return(
        <div className="food">
            <div className='foodcard'>
                <FoodHData 
                    to='/FoodPage'
                    image={NasiLemak}
                    heading ='Malay Food'
                />
                
                <FoodHData 
                to='/FoodPage'
                image={HokkienMee}
                heading ='Chinese Food'
                />
                <FoodHData 
                to='/FoodPage'
                image={Thosai}
                heading ='Indian Food'
                />
            </div>
        </div>
    );
}

export default FoodH;