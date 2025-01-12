import PH01 from '../assets/NaturePics/PH01.jpeg';
import PH02 from '../assets/NaturePics/PH02.avif';
import PNP01 from '../assets/NaturePics/PNP01.jpeg'
import PNP02 from '../assets/NaturePics/PNP02.jpeg'
import "./ParkStyle.css"
import ParkData from './ParkData';

const Park = () => {
    return (
        <div className="park">
            <h1>PARKS & GARDEN</h1>
            <p>Explore lush parks and gardens, where nature meets tranquility and beauty thrives</p>            

            <ParkData
            className='des-first'
            heading="Penang Hill"
            text="Penang Hill, also known as Bukit Bendera, is one of Penang’s most iconic and popular attractions, 
            offering panoramic views of the island and the mainland. Located about 800 meters above sea level, the 
            hill provides a cool escape from the tropical heat of George Town and its surrounding areas. Accessible 
            via the Penang Hill Railway, a funicular train that has been in operation since 1923, visitors can enjoy 
            the scenic journey up the hill, passing through lush rainforests and serene landscapes. At the summit, 
            visitors are rewarded with breathtaking views of the city, coastline, and distant islands. Besides the 
            views, Penang Hill is home to historical landmarks like the colonial-era David Brown’s Restaurant and a 
            variety of walking trails, gardens, and temples. It’s a perfect spot for hiking, picnicking, photography, 
            and simply enjoying the natural beauty and cooler climate."

            img1={PH01}
            img2={PH02}
           />


            <ParkData
            className='des-first-reverse'
            heading="Penang National Park"
            text="Penang National Park, located on the northwest corner of Penang Island, is one of the world’s 
            smallest national parks, yet it boasts incredible biodiversity and stunning landscapes. Covering approximately 
            1,213 hectares, the park features a unique mix of habitats, including mangroves, rainforests, and coral reefs, 
            making it a haven for nature lovers and wildlife enthusiasts. Visitors can explore the park’s well-maintained 
            trails, which lead to iconic spots like the pristine beaches of Teluk Duyung (Monkey Beach) and the picturesque 
            lighthouse at Cape Rachado. The park is home to a diverse range of species, including rare flora, tropical 
            birds, and even the endangered green sea turtle. It also offers activities like hiking, snorkeling, and boat 
            tours, making it a great place for both adventure seekers and those looking to relax in nature. Penang National 
            Park is a UNESCO Biosphere Reserve, and its unique ecological importance, combined with breathtaking natural 
            beauty, makes it a must-visit destination on the island."
            img1={PNP01}
            img2={PNP02}

            />

            
        </div>
    );
};

export default Park;