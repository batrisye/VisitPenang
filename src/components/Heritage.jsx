import KLST1 from '../assets/NaturePics/KLST1.jpg';
import KLST2 from '../assets/NaturePics/KLST2.jpg'
import EP1 from '../assets/NaturePics/EP1.png';
import EP2 from '../assets/NaturePics/EP2.jpg'
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
            img1={KLST1}
            img2={KLST2}
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
            img1={EP1}
            img2={EP2}
            />      

    </div>
    );
};

export default Heritage;