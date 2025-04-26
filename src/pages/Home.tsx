import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className="container my-5">
            <h1 className="text-center mb-4">Welcome to DentalCare Pro</h1>

            <div id="homeCarousel" className="carousel slide mb-5" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="/images/dental1.jpg" className="d-block w-100" alt="Dental Care 1" />
                    </div>
                    <div className="carousel-item">
                        <img src="/images/dental2.jpg" className="d-block w-100" alt="Dental Care 2" />
                    </div>
                    <div className="carousel-item">
                        <img src="/images/dental3.jpg" className="d-block w-100" alt="Dental Care 3" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#homeCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#homeCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col">
                    <div className="card h-100">
                        <div className="card-body">
                            <h5 className="card-title">Description</h5>
                            <p className="card-text">At DentalCare Pro, we provide world-class dental services to ensure your oral health is at its best.</p>
                            <p className="card-text">Our team of experienced professionals is dedicated to providing personalized care for every patient.</p>
                            <p className="card-text">We utilize the latest technology and techniques to ensure a comfortable and effective treatment experience.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <div className="card-body">
                            <h5 className="card-title">Mission</h5>
                            <p className="card-text">Our mission is to deliver exceptional dental care and improve oral health outcomes for our community.</p>
                            <p className="card-text">We strive to create a welcoming environment where patients feel comfortable and cared for.</p>
                            <p className="card-text">Our goal is to educate our patients about their oral health and empower them to make informed decisions.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <div className="card-body">
                            <h5 className="card-title">Vision</h5>
                            <p className="card-text">To be the leading dental care provider known for innovative treatment and compassionate care.</p>
                            <p className="card-text">We envision a future where everyone has access to high-quality dental care.</p>
                            <p className="card-text">Our commitment to excellence drives us to continuously improve our services and facilities.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <div className="card-body">
                            <h5 className="card-title">Awards and Honors</h5>
                            <p className="card-text">We have been recognized for our excellence in dental care with numerous awards.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row row-cols-1 row-cols-md-2 g-4 mt-4">
                <div className="col">
                    <div className="card h-100">
                        <div className="card-body">
                            <h5 className="card-title">Facilities</h5>
                            <ul>
                                <li>Digital X-Ray</li>
                                <li>Panoramic X-Ray</li>
                                <li>Dental Chair with LED Light</li>
                            </ul>
                            <Link to="/facilities" className="btn btn-primary">See More</Link>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <div className="card-body">
                            <h5 className="card-title">Treatments</h5>
                            <ul>
                                <li>Dental Cleaning</li>
                                <li>Root Canal</li>
                                <li>Teeth Whitening</li>
                            </ul>
                            <Link to="/treatments" className="btn btn-primary">See More</Link>
                        </div>
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
                            <p>We have multiple locations to serve you better. Visit our <Link to="/locations">Locations</Link> page for more details.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home

