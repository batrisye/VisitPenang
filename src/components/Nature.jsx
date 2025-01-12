import './NatureStyle.css'
import NatureData from './NatureData';
import Nature1 from '../assets/NaturePics/RP01.avif'
import Nature2 from '../assets/NaturePics/PG01.avif';
import Nature3 from '../assets/NaturePics/EP1.png';

function Nature () {
    return(
        <div className="nature">
            <div className='naturecard'>
                <NatureData 
                    to='/RecreationPage'
                    image={Nature1}
                    heading ='Recreation'
                />
                
                <NatureData 
                to='/ParkPage'
                image={Nature2}
                heading ='Parks & Garden'
                />
                <NatureData 
                to='/AdventurePage'
                image={Nature3}
                heading ='Adventure & Nature'
                />
            </div>
        </div>
    );
}

export default Nature;