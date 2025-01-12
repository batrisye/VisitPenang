import './FoodHStyle.css'
import FoodHData from './FoodHData'
import HokkienMee from '../assets/FoodPics/HokkienMee.png';
import TehLimao from '../assets/FoodPics/TehLimao.png';
import TehTarik from '../assets/FoodPics/TehTarik.png';

function FoodH () {
    return(
        <div className="food">
            <div className='foodcard'>
                <FoodHData 
                    to='/FoodPage'
                    image={TehLimao}
                    heading ='Malay Food'
                />
                
                <FoodHData 
                to='/FoodPage'
                image={HokkienMee}
                heading ='Chinese Food'
                />
                <FoodHData 
                to='/FoodPage'
                image={TehTarik}
                heading ='Indian Food'
                />
            </div>
        </div>
    );
}

export default FoodH;