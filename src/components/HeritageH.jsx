import './HeritageHStyle.css'
import HeritageHData from './HeritageHData'
import BM1 from '../assets/HeritagePics/Cheong Fatt Tze, The Blue Mansion 01.jpg'
import K1 from '../assets/HeritagePics/KekLokSiTemple01.jpeg'
import SA1 from '../assets/HeritagePics/Penang Street Wall Murals 01.jpeg'


function HeritageH () {
    return(
        <div className="heritage">
            <div className='heritagecard'>
                <HeritageHData 
                    to='/HeritagePage'
                    image={BM1}
                    heading ='Mansion'
                />
                
                <HeritageHData 
                to='/HeritagePage'
                image={K1}
                heading ='Temple'
                />
                <HeritageHData 
                to='/HeritagePage'
                image={SA1}
                heading ='Street Art'
                />
            </div>
        </div>
    );
}

export default HeritageH;