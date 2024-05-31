import { PageBanner } from "../../components/PageBanner";

import styles from './about.module.css'

const AboutUs = () => {
	return (
		<>
			{/* <Header /> */}
			<div
				className={styles.about}
			>
				<PageBanner title='About us' />

				<div className="container-fluid d-flex flex-column gap-5 py-5">

					<div className="row first-about-us-row aos-init aos-animate" data-aos="fade-up" data-aos-duration="2000">
						<div className="col-xl-1"></div>
						<div className="col-xl-4 col-lg-6 col-md-8 col-sm-8">
							<div className="row aboutsec-img">
								<div className="col-lg-6 col-md-6 col-sm-6 col-6">
									<img src="images/best-selling/flying-cup.jpg" alt="flying" className="img-about-dest" />
								</div>
								<div className="col-lg-6 col-md-6 col-sm-6 col-6">
									<img src="images/best-selling/dubai-frame.jpg" alt="desert" className="img-about-dest-one" />
								</div>
							</div>
						</div>
						<div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
							<p>“Travel is the main thing you purchase that makes you more extravagant”. We, at ‘Dubai Journeys’, swear by this and put stock in satisfying travel dreams that make you perpetually rich constantly.</p>
							<p>We have been moving excellent encounters for a considerable length of time through our cutting-edge planned occasion bundles and other fundamental travel administrations. We rouse our clients to carry on with a rich life, brimming with extraordinary travel encounters.</p>
							<p>Through our exceptionally curated occasion bundles, we need to take you on an adventure where you personally enjoy the stunning magnificence of America and far-off terrains. We need you to observe sensational scenes that are a long way past your creative ability.</p>
							<p>The powerful inclination of voyagers to travel more nowadays is something that keeps us inspired to satisfy our vacation necessities. Our vision to give you a consistent occasion encounter makes us one of the main visit administrators in the regularly extending travel industry.</p>
						</div>
					</div>

					<div className="row sec-about-us-row aos-init aos-animate" data-aos="fade-up" data-aos-duration="3000">
						<div className="col-xl-1"></div>
						<div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
							<p>To guarantee that you have a satisfying occasion and healthy encounters, all our vacation administrations are available to your no matter what. On your universal occasion, we guarantee that you are very much outfitted with outside trade (Forex), visa, and travel protection.</p>
							<p>We are the pioneers of outside trade in India and booking forex online is basic and advantageous with us.</p>
							<p>Our online visa administrations are exceptional and make the bulky procedure of booking visas a cake stroll for clients.</p>
							<p>Regardless of whether it’s reserving flights or inns for your movement, Dubai Journeys offers everything under one umbrella. We likewise have journey occasions for individuals who are searching for solace and reasonable extravagance.</p>
							<p>We offer the best limits on our top-rated visit bundles to clients who pick our viable administrations over and over. How about we remind you indeed that we don’t expect to be your visit and travel specialists; we endeavor to be your vacation accomplices until the end of time.</p>
						</div>
						<div className="col-xl-4 col-lg-6 col-md-8 col-sm-8">
							<div className="row aboutsec-img">
								<div className="col-lg-6 col-md-6 col-sm-6 col-6">
									<img src="images/best-selling/ferrari-world.jpg" alt="ferrari-world" className="img-about-dest" />
								</div>
								<div className="col-lg-6 col-md-6 col-sm-6 col-6">
									<img src="images/best-selling/water-car.jpg" alt="water-car" className="img-about-dest-one" />
								</div>
							</div>
						</div>
					</div>
				</div>


				<section className="our-webcoderskull padding-lg">
    <div className="container">
        <div className="row heading heading-icon">
            <div className="col-md-12 text-center pb-5">
                <h2 className="section_title commn-heading text-center aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
                    <span className="yellow-shape">Our Team</span>
                </h2>
            </div>
        </div>
        <ul className="row aos-init aos-animate" data-aos="fade-up" data-aos-duration="2000">
            <li className="col-12 col-md-6 col-lg-4">
                <div className="cnt-block equal-hight">
                    <figure><img src="images/contact-us/about-img-4.jpeg" className="img-responsive" alt=""/></figure>
                    <h3>Dr Munesh Singh</h3>
                    <p>Mentor</p>
                    
                </div>
            </li>
            <li className="col-12 col-md-6 col-lg-4">
                <div className="cnt-block equal-hight">
                    <figure><img src="images/contact-us/about-img-1.jpeg" className="img-responsive" alt=""/></figure>
                    <h3>Priyesh Markam</h3>
                    <p>Facilitator</p>
                   
                </div>
            </li>
            <li className="col-12 col-md-6 col-lg-4">
                <div className="cnt-block equal-hight">
                    <figure><img src="images/contact-us/about-img-6.jpeg" className="img-responsive" alt=""/></figure>
                    <h3>Jitendra Reddy</h3>
                    <p>Tech Evangelist</p>
                   
                </div>
            </li>
            <li className="col-12 col-md-6 col-lg-4">
                <div className="cnt-block equal-hight">
                    <figure><img src="images/contact-us/about-img-2.jpeg" className="img-responsive" alt=""/></figure>
                    <h3>Siddharth Bharti</h3>
                    <p>Code Whisperer</p>
                    
                </div>
            </li>
            <li className="col-12 col-md-6 col-lg-4">
                <div className="cnt-block equal-hight">
                    <figure><img src="images/contact-us/about-img-5.jpeg" className="img-responsive" alt="" /></figure>
                    <h3>Kiran Sakpal</h3>
                    <p>Grammar Nazi</p>
                   
                </div>
            </li>
            <li className="col-12 col-md-6 col-lg-4">
                <div className="cnt-block equal-hight">
                    <figure><img src="images/contact-us/about-img-3.jpeg" className="img-responsive" alt="" /></figure>
                    <h3>Kabeer </h3>
                    <p>Night's Watch</p>
                   
                </div>
            </li>
        </ul>
    </div>
</section>

			</div>
		</>
	);
}

export default AboutUs;