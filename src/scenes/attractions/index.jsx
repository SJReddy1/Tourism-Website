import AttractionCard from './AttractionCard';
import { useState } from 'react';
const Attractions = () => {

    const [attractionArray, setAttractionArray] = useState([]);

    async function getAttractions() {
        try {
            const response = await fetch('http://localhost:8000/attractions');
            const data = await response.json();
            if (data.success) {
                setAttractionArray(data.data);
            }
        } catch (err) {
            console.log(err);
        }
    }

    useState(() => {
        getAttractions();
    }, []);
    return (
        <>
            <div className="about-banner">
                <div className="home_content">
                    <div className="home_title">ATTRACTIONS</div>
                </div>
            </div>


            {/* gallery */}
            <div className="container-fluid p-5 attraction-all-img aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
                <div className="row">
                    { attractionArray.length > 0 ? attractionArray.map((attraction, i) => (
                        <div className="col-lg-4 col-md-6 col-sm-12 attraction-col mb-3" key={i}>
                            <div className="owl-item-hover">
                                <div className="test_item-hover_img">
                                    <div className="test-images">
                                        <AttractionCard  info={attraction} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )) : <h1 className='text-center'>No Attractions are there at present moment</h1>}
                </div>
            </div>
        </>
    );
}

export default Attractions;