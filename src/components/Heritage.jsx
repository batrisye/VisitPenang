import K1 from '../assets/HeritagePics/KekLokSiTemple01.jpeg'
import K2 from '../assets/HeritagePics/KekLokSiTemple02.jpeg'
import F1 from '../assets/HeritagePics/FortCornwallis01.jpg'
import F2 from '../assets/HeritagePics/FortCornwallis02.jpg'
import SA1 from '../assets/HeritagePics/Penang Street Wall Murals 01.jpeg'
import SA2 from '../assets/HeritagePics/Penang Street Wall Murals 02.jpg'
import KK1 from '../assets/HeritagePics/Khoo Kongsi 01.jpeg'
import KK2 from '../assets/HeritagePics/Khoo Kongsi 02.jpeg'
import CJ1 from '../assets/HeritagePics/Chew Jetty 01.jpeg'
import CJ2 from '../assets/HeritagePics/Chew Jetty 02.jpg'
import BM1 from '../assets/HeritagePics/Cheong Fatt Tze, The Blue Mansion 01.jpg'
import BM2 from '../assets/HeritagePics/Cheong Fatt Tze, The Blue Mansion 02.jpg'
import HeritageData from './HeritageData';
import "./HeritageStyle.css"

const Heritage = () => {
    return (
        <div className="heritage">
            <h1>Penang Heritage</h1>
            <p>Welcome to explore Penang Heritages.</p>            

            <HeritageData
            className='heritage-loc'
            heading="Kek Lok Si Temple"
            text="built since the year 1891, kek lok si temple situated in the island 
                    of penang, malaysia, is one of the largest and finest temples complexes 
                    in southeast asia. With millions of magnificent images of buddha and
                    hundreds of beautiful halls, pagodas and archways, kek lok si temple 
                    is not just a center of chinese culture and buddha teaching, but also 
                    an unique heritage treasures the have mahayana buddhism and traditional 
                    chinese rituals blend into harmonious whole, in temple architecture and
                    daily activities of worshipers."
            img1={K1}
            img2={K2}
            />

            <HeritageData
            className='heritage-loc-reverse'
            heading="Fort Cornwallis"
            text="Built by Captain Francis Light following his settlement of Penang Island (then 
            known as Prince of Wales Island), the fort was established in 1786. When news of war 
            between France and England broke out in 1793, the original wooden structure was replaced 
            with a brick building in anticipation of an attack. Its fortifications and weapons increased 
            as the years went by, including the addition of a lighthouse in 1914. Dilapidation of the 
            fort began at the end of World War II, however it has since been restored and declared a National 
            Heritage site in 1976. Thanks to its rich history, the fort also played a crucial role in securing 
            George Town’s UNESCO World Heritage Site status in 2008."
            img1={F1}
            img2={F2}
            />      

            <HeritageData
            className='heritage-loc'
            heading="Penang Street Art - Wall Murals"
            text="George Town Festival commissioned Lithuanian artist Ernest Zacharevic to create 6 wall murals 
            in 2012, George Town’s street art scene has never been the same again. Zacharevic shot to international 
            fame with his murals and George Town’s walls in turn have acted as a canvas to some of the most interactive 
            artworks the city has seen."
            img1={SA1}
            img2={SA2}
            />  

            <HeritageData
            className='heritage-loc-reverse'
            heading="Khoo Kongsi"
            text="The Khoo Kongsi was a clan house built a long time ago by the Khoo family who migrated here 
            to Penang. It is both a temple and a museum, and remains as one of the grandest buildings in Georgetown. 
            For those who are into history and architecture, this place is definitely a must-visit."
            img1={KK1}
            img2={KK2}
            />      

            <HeritageData
            className='heritage-loc'
            heading="Chew Jetty"
            text="Chew Jetty is said to be the more known and prominent one among the eight clan jetties of Pengkalan 
            Weld. You can trace its origin back to the earlier Chinese settlements in Penang who built these village on stilts."
            img1={CJ1}
            img2={CJ2}
            />                

            <HeritageData
            className='heritage-loc-reverse'
            heading="Cheong Fatt Tze, The Blue Mansion"
            text="Built by the affluent and influential Chinese industrialist Cheong Fatt Tze at the turn of the 
            nineteenth century, the mansion is a revealing place to visit on a tour or (ideally) stay overnight in the boutique hotel."
            img1={BM1}
            img2={BM2}
            />
        </div>
    );
};

export default Heritage;