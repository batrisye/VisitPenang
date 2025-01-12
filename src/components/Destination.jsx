import DestinationData from './DestinationData';
import "./DestinationStyle.css"
import Nature from '../assets/NaturePics/Nature.avif';

const Destination = () => {
    return (
        <div className="destination">
            <h1>Nature & Recreation</h1>
            <p>Penang is a paradise for nature lovers, offering a stunning blend 
            of tropical rainforests, lush hills, pristine beaches, and vibrant wildlife. 
            From the serene trails of Penang National Park to the breathtaking views atop 
            Penang Hill, nature’s beauty is abundant here. Explore hidden waterfalls, walk 
            through botanical gardens, or simply bask in the tranquility of the island’s 
            natural landscapes.</p>            

            <img src={Nature} alt="Nature" />

        </div>
    );
};

export default Destination;