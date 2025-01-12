import EP1 from '../assets/NaturePics/EP1.png';
import TH1 from '../assets/NaturePics/TH1.jpeg'
import THV from '../assets/Videos/THV.mp4'
import EB1 from '../assets/NaturePics/EB1.jpeg'
import EBV from "../assets/Videos/EBV.mp4"
import EPV from '../assets/Videos/EPV.mp4';
import AdventureData from './AdventureData';


const Adventure = () => {
    return (
        <div className="adventure">
            <h1>ADVENTURE & NATURE</h1>
            <p>Embark on thrilling adventures amidst the raw beauty of nature’s wonders</p>            

            <AdventureData
            className='des-first'
            heading="Escape Penang"
            text="ESCAPE Penang is an adventure-filled theme park located in Teluk Bahang, offering a wide range of outdoor 
            activities that cater to all ages. Designed to connect visitors with nature through fun and excitement, ESCAPE 
            features over 30 thrilling rides and challenges set amidst lush tropical landscapes. The park is divided into 
            different zones, including obstacle courses, water slides, zip lines, and climbing walls, providing something f
            or everyone, from adrenaline seekers to families looking for a day of fun. Highlights include the world’s longest 
            water slide, the Aqua Loop, and the high-flying Sky Trail ropes course. ESCAPE Penang stands out for its focus 
            on physical activity, promoting healthy living while ensuring guests enjoy themselves in a safe and sustainable 
            environment. With its combination of adventure, nature, and relaxation, ESCAPE Penang is a must-visit destination 
            for those looking for a unique and exciting experience on the island."

            img1={EP1}
            vid={EPV}
            
           />


            <AdventureData
            className='des-first-reverse'
            heading="The Habitat"
            text="The Habitat at Penang Hill is a nature-based attraction that offers visitors an immersive experience 
            in one of Malaysia’s oldest tropical rainforests. Located at the summit of Penang Hill, it is a unique eco-tourism 
            site that combines conservation, education, and adventure. The Habitat features a range of interactive exhibits, 
            walking trails, and panoramic viewing platforms, including the famous Sky Walk — a canopy walk that allows visitors 
            to walk among the treetops and get a bird’s-eye view of the surrounding forest and island below. The site is home 
            to a diverse range of flora and fauna, including rare species of birds, insects, and plants, making it a haven for 
            nature enthusiasts and wildlife lovers. In addition to the natural beauty, The Habitat offers educational experiences 
            about rainforest ecosystems and sustainable practices. It’s a perfect blend of adventure and learning, offering a 
            peaceful escape with a touch of excitement for visitors of all ages."
            img1={TH1}
            vid={THV}

            />

            <AdventureData
            className='des-first'
            heading="Entopia By Penang Butterfly Farm"
            text="Entopia by Penang Butterfly Farm is a captivating nature park located in Teluk Bahang, Penang, that immerses 
            visitors in the vibrant world of butterflies and other fascinating creatures. The park is divided into two main 
            sections: the Natureland, an outdoor tropical garden that is home to thousands of free-flying butterflies, and 
            the Science Discovery zone, an indoor interactive exhibition area where visitors can learn about the life cycle 
            of butterflies, insects, and other wildlife through educational displays and hands-on activities. In Natureland, 
            visitors can stroll through lush gardens, observing a wide variety of butterfly species in their natural habitat, 
            as well as other creatures like reptiles, birds, and dragonflies. The Science Discovery section offers an in-depth 
            exploration of entomology, with informative exhibits on insects, their roles in the ecosystem, and conservation efforts. 
            With its blend of entertainment, education, and natural beauty, Entopia provides a memorable experience for nature lovers, 
            families, and anyone interested in the wonders of the insect world."

            img1={EB1}
            vid={EBV}
           />

            
        </div>
    );
};

export default Adventure;