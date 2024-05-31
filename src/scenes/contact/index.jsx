import Header from "../../components/Header";
import { PageBanner } from "../../components/PageBanner";
const Contact = () => {
	return (
		<>
			<PageBanner title='Contact Us' />
			<div className="about mb-5">
				<div className="container-fluid aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
					<div className="row">
						<div className="col-lg-5">
							{/* <!-- About - Image --> */}
							<div className="about_image">
								<img src="images/contact-us/contact-us.png" alt="contact-us" />
							</div>
						</div>
						<div className="col-lg-4">
							{/* <!-- About - Content --> */}
							<div className="about_content">
								<div className="logo_container about_logo">
									<div className="logo-contact"><a href="index.php"><img src="images/Logo.svg" alt="logo" /></a></div>
								</div>
								<p className="about_text">We’re honored that our Service, members and company are repeatedly recognized by the Dubai travel industry and organizations. For events &amp; meeting Reach us if you have any questions, or if you’d like to know more about our solutions for business travel management.</p>

							</div>
						</div>

						<div className="col-lg-3">


							<div className="about_info">
								<ul className="contact_info_list">
									<li className="contact_info_item d-flex flex-row">
										<div><div className="contact_info_icon"><img src="images/placeholder.svg" alt="placeholder" /></div></div>
										<a href="https://goo.gl/maps/k4ZQEZquRrnmC5vP6" target="_blank"><div className="contact_info_text">Al Abbas Building 2, Bur Dubai (UAE)</div></a>
									</li>
									<li className="contact_info_item d-flex flex-row">
										<div><div className="contact_info_icon"><img src="images/phone-call.svg" alt="phone-call" /></div></div>
										<a href="tel:9130777631"><div className="contact_info_text">+91-9130777631</div></a>
									</li>
									<li className="contact_info_item d-flex flex-row">
										<div><div className="contact_info_icon"><img src="images/message.svg" alt="message" /></div></div>
										<div className="contact_info_text"><a href="mailto:dubai@arabianark.com?Subject=Hello" target="_top">dubai@arabianark.com</a></div>
									</li>
									<li className="contact_info_item d-flex flex-row">
										<div><div className="contact_info_icon"><img src="images/planet-earth.svg" alt="planet-earth" /></div></div>
										<div className="contact_info_text"><a href="www.arabianark.com">www.arabianark.com</a></div>
									</li>
								</ul>
							</div>

						</div>

					</div>
				</div>
			</div>


			<div className="travelix_map">
				<div id="google_map" className="google_map">
					<div className="map_container">
						<div id="map">
							<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14433.36001617085!2d55.287940530526306!3d25.25914544800457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1675755883702!5m2!1sen!2sin" width="100%" height="100%" style={{ border: 'none' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Map"></iframe>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Contact;