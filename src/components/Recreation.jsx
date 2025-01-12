import BPSP1 from '../assets/NaturePics/BPSP1.webp';
import BPSP2 from '../assets/NaturePics/BPSP2.jpg';
import BMRF1 from '../assets/NaturePics/BMRF1.jpeg';
import BMRF2 from '../assets/NaturePics/BMRF2.webp'; 
import AHDEF1 from '../assets/NaturePics/AHDEF1.jpeg';
import AHDEF2 from '../assets/NaturePics/AHDEF2.jpeg';
import "./RecreationStyle.css"
import RecreationData from './RecreationData';

const Recreation = () => {
    return (
        <div className="recreation">
            <h1>Recreation</h1>
            <p>Rejuvenate your mind, body, and spirit through fun and adventure</p>            

            <RecreationData
            className='des-first'
            heading="Bukit Panchor State Park"
            text="Bukit Panchor State Park, located in the southwest of Penang, Malaysia, 
            is a serene and lush natural reserve known for its rich biodiversity and scenic 
            landscapes. The park features dense rainforests, waterfalls, and a variety of 
            wildlife, making it a popular spot for nature enthusiasts and trekkers. One of 
            the park's highlights is the beautiful Panchor Waterfall, which cascades down 
            a series of rocky steps, providing a tranquil setting for visitors. The park also 
            offers well-maintained trails, where visitors can explore the flora and fauna, 
            including various bird species and tropical plants. Ideal for hiking, picnicking, 
            and photography, Bukit Panchor State Park is a hidden gem for those looking to escape 
            the bustle of city life and immerse themselves in Penang's natural beauty."

            img1={BPSP1}
            img2={BPSP2}
           />


            <RecreationData
            className='des-first-reverse'
            heading="Bukit Mertajam Recreational Forest"
            text="Bukit Mertajam Recreational Forest, located on the mainland of Penang, is a 
            popular nature retreat that offers a peaceful escape into the lush greenery of Malaysia’s 
            tropical rainforest. Nestled at the foot of Bukit Mertajam Hill, the park is renowned 
            for its cool climate, diverse plant life, and rich biodiversity. Visitors can enjoy 
            well-marked trails that lead through the forest, offering opportunities for hiking, 
            bird watching, and photography. The forest is also home to a variety of wildlife, including 
            monkeys, squirrels, and numerous bird species. Bukit Mertajam Recreational Forest features 
            several picnic areas and scenic spots, making it a favorite destination for family outings 
            and outdoor activities. The highlight of the park is the serene environment, where visitors 
            can unwind while exploring the natural beauty of the area."
            img1={BMRF1}
            img2={BMRF2}

            />

            <RecreationData
            className='des-first'
            heading="Air Hitam Dalam Educational Forest"
            text="Air Hitam Dalam Educational Forest, located in the southwestern part of Penang, is a 
            unique and educational destination that combines nature exploration with environmental awareness. 
            The forest is part of the Air Hitam Dam area and serves as both a recreational space and an 
            ecological learning center. Visitors can enjoy a range of walking trails through lush tropical 
            rainforest, where they can learn about the region's diverse flora and fauna through informative 
            signboards along the way. The forest is home to a variety of species, including monkeys, birds, and 
            butterflies, as well as numerous plant species, some of which are rare or endangered. With its tranquil 
            environment, clear streams, and the nearby Air Hitam Dam, the forest offers a peaceful retreat for 
            nature lovers, school groups, and anyone interested in sustainability and conservation efforts. The 
            forest's educational focus makes it a great place for both leisure and learning."

            img1={AHDEF1}
            img2={AHDEF2}
           />

        </div>
    );
};

export default Recreation;