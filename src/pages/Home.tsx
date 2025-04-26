import { Link } from 'react-router-dom'
import { Goal, Telescope } from 'lucide-react'
const Home = () => {
    return (
        <>
            <section 
                className="hero-section text-center mb-5" 
                style={{
                    backgroundImage: 'url(/src/assets/dental1.webp)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    color: 'black',
                    padding: '50px 20px',
                    borderRadius: '10px'
                }}
            >
                <h1 className="display-4 fw-bold">Welcome to DentalCare Pro</h1>
                <p className="lead fw-semibold">Providing world-class dental services to ensure your oral health is at its best.</p>
                <p className='fw-semibold'>Our team of experienced professionals is dedicated to personalized care, utilizing the latest technology and techniques for a comfortable and effective treatment experience.</p>
                <Link to="/about" className="btn btn-primary btn-lg mt-3">Learn More About Us</Link>
            </section>
         

            <div className="row row-cols-1 row-cols-md-2 g-4">
                
                <div className="col">
                    <div className="card h-100 bg-light">
                        <div className="card-body d-flex align-items-center">
                            
                            <div>
                                <h5 className="card-title d-flex align-items-center fw-bold"><Goal size={48} color='orange'/>Mission</h5>
                                <p className="card-text fw-semibold">Our mission is to deliver exceptional dental care and improve oral health outcomes for our community.</p>
                                <p className="card-text fw-semibold">We strive to create a welcoming environment where patients feel comfortable and cared for.</p>
                                <p className="card-text fw-semibold">Our goal is to educate our patients about their oral health and empower them to make informed decisions.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 bg-light">
                        <div className="card-body d-flex align-items-center">
                            <div>
                                <h5 className="card-title d-flex align-items-center fw-bold"><Telescope size={48} color='green'/>Vision</h5>
                                <p className="card-text fw-semibold">To be the leading dental care provider known for innovative treatment and compassionate care.</p>
                                <p className="card-text fw-semibold">We envision a future where everyone has access to high-quality dental care.</p>
                                <p className="card-text fw-semibold">Our commitment to excellence drives us to continuously improve our services and facilities.</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="col">
                    <div className="card h-100">
                        <div className="card-body">
                            <h5 className="card-title">Awards and Honors</h5>
                            <p className="card-text">We have been recognized for our excellence in dental care with numerous awards.</p>
                        </div>
                    </div>
                </div> */}
            </div>

            <div className="row mt-4">
                <div className="col">
                    <h5 className="fw-bold mb-3">Our Treatments</h5>
                    <div className="d-flex overflow-auto">
                        <div className="card mx-2" style={{ minWidth: '250px' }}>
                            <div className="card-body">
                                <h5 className="card-title">Dental Cleaning</h5>
                                <img src="/src/assets/dental_cleaning.avif" alt="Dental Cleaning" className="card-img-top" style={{ height: '150px', objectFit: 'cover' }} />
                                <p className="card-text">Keep your teeth clean and healthy with our professional cleaning services.</p>
                                
                            </div>
                        </div>
                        <div className="card mx-2" style={{ minWidth: '250px' }}>
                            <div className="card-body">
                                <h5 className="card-title">Root Canal</h5>
                                <img src="/src/assets/rootcanal.avif" alt="Root Canal" className="card-img-top" style={{ height: '150px', objectFit: 'cover' }} />
                                <p className="card-text">Effective treatment to save and repair infected or damaged teeth.</p>
                                
                            </div>
                        </div>
                        <div className="card mx-2" style={{ minWidth: '250px' }}>
                            <div className="card-body">
                                <h5 className="card-title">Teeth Whitening</h5>
                                <img src="/src/assets/teeth_whitening.avif" alt="Teeth Whitening" className="card-img-top" style={{ height: '150px', objectFit: 'cover' }} />
                                <p className="card-text">Brighten your smile with our safe and effective whitening treatments.</p>
                            </div>
                        </div>
                        
                    </div>
                    <div className="align-items-center text-center mt-3">
                        <Link to="/treatments" className="btn btn-primary">See More Treatments</Link>
                    </div>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col">
                    <h5 className="fw-bold mb-3">Our Facilities</h5>
                    <div className="d-flex overflow-auto">
                        <div className="card mx-2" style={{ minWidth: '250px' }}>
                            <div className="card-body">
                                <h5 className="card-title">Digital X-Ray</h5>
                                <img src="/src/assets/digital_x-ray.avif" alt="Digital X-Ray" className="card-img-top" style={{ height: '150px', objectFit: 'cover' }} />
                                <p className="card-text">High-quality imaging for accurate diagnosis and treatment.</p>
                            </div>
                        </div>
                        <div className="card mx-2" style={{ minWidth: '250px' }}>
                            <div className="card-body">
                                <h5 className="card-title">Panoramic X-Ray</h5>
                                <img src="/src/assets/panoromic_xray.webp" alt="Panoramic X-Ray" className="card-img-top" style={{ height: '150px', objectFit: 'cover' }} />
                                <p className="card-text">Comprehensive view of the entire mouth for accurate diagnosis.</p>
                            </div>
                        </div>
                        <div className="card mx-2" style={{ minWidth: '250px' }}>
                            <div className="card-body">
                                <h5 className="card-title">Dental Chair with LED Light</h5>
                                <img src="/src/assets/dental_chair.avif" alt="Dental Chair" className="card-img-top" style={{ height: '150px', objectFit: 'cover' }} />
                                <p className="card-text">Comfortable and modern dental chairs with LED lighting.</p>
                            </div>
                        </div>
                        
                    </div>
                    <div className=" text-center mt-3">
                        <Link to="/facilities" className="btn btn-primary">See More Facilities</Link>
                    </div>
                </div>
            </div>
            

            <div className="row row-cols-1 row-cols-md-2 g-4 mt-4">
                <div className="col">
                    <div className="card h-100">
                        <div className="card-body">
                            <h5 className="card-title">Contact Us</h5>
                            <p>Email: contact@dentalcarepro.com</p>
                            <p>Phone: +123 456 7890</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <div className="card-body">
                            <h5 className="card-title">Locations</h5>
                            <ul className="list-unstyled">
                                <li><strong>Chennai:</strong> 123 Anna Salai, Chennai, Tamil Nadu - 600002</li>
                                <li><strong>Coimbatore:</strong> 45 Gandhipuram Main Road, Coimbatore, Tamil Nadu - 641012</li>
                                <li><strong>Madurai:</strong> 78 Meenakshi Street, Madurai, Tamil Nadu - 625001</li>
                            </ul>
                        </div>
                    </div>
                    </div>
                </div>
            
        </>
    );
}

export default Home

