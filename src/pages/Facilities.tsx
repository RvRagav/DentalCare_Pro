
function Facilities() {

    return (
        <div className="container my-4" >
            <h2 className="text-center mb-4">Our Facilities</h2>
            <div className="row">
                <div className="col-md-6 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Instruments</h5>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item d-flex align-items-start">
                                    <img src="/images/digital-xray.jpg" alt="Digital X-Ray" className="me-3" style={{ width: "50px", height: "50px", objectFit: "cover" }} />
                                    <div>
                                        <h6 className="mb-1">Digital X-Ray</h6>
                                        <p className="mb-0 text-muted">High-quality imaging for accurate diagnosis.</p>
                                    </div>
                                </li>
                                <li className="list-group-item d-flex align-items-start">
                                    <img src="/images/panoramic-xray.jpg" alt="Panoramic X-Ray" className="me-3" style={{ width: "50px", height: "50px", objectFit: "cover" }} />
                                    <div>
                                        <h6 className="mb-1">Panoramic X-Ray</h6>
                                        <p className="mb-0 text-muted">Comprehensive view of the entire mouth.</p>
                                    </div>
                                </li>
                                <li className="list-group-item d-flex align-items-start">
                                    <img src="/images/dental-chair.jpg" alt="Dental Chair with LED Light" className="me-3" style={{ width: "50px", height: "50px", objectFit: "cover" }} />
                                    <div>
                                        <h6 className="mb-1">Dental Chair with LED Light</h6>
                                        <p className="mb-0 text-muted">Comfortable and modern dental chairs.</p>
                                    </div>
                                </li>
                                <li className="list-group-item d-flex align-items-start">
                                    <img src="/images/dental-handpiece.jpg" alt="Dental Handpiece" className="me-3" style={{ width: "50px", height: "50px", objectFit: "cover" }} />
                                    <div>
                                        <h6 className="mb-1">Dental Handpiece</h6>
                                        <p className="mb-0 text-muted">Precision tools for effective treatments.</p>
                                    </div>
                                </li>
                                <li className="list-group-item d-flex align-items-start">
                                    <img src="/images/ultrasonic-cleaner.jpg" alt="Ultrasonic Cleaner" className="me-3" style={{ width: "50px", height: "50px", objectFit: "cover" }} />
                                    <div>
                                        <h6 className="mb-1">Ultrasonic Cleaner</h6>
                                        <p className="mb-0 text-muted">Ensures thorough sterilization of instruments.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Infrastructure</h5>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item d-flex align-items-start">
                                    <img src="/images/waiting-area.jpg" alt="Spacious Waiting Area" className="me-3" style={{ width: "50px", height: "50px", objectFit: "cover" }} />
                                    <div>
                                        <h6 className="mb-1">Spacious Waiting Area</h6>
                                        <p className="mb-0 text-muted">Comfortable seating for patients and visitors.</p>
                                    </div>
                                </li>
                                <li className="list-group-item d-flex align-items-start">
                                    <img src="/images/treatment-room.jpg" alt="Well Ventilated Treatment Rooms" className="me-3" style={{ width: "50px", height: "50px", objectFit: "cover" }} />
                                    <div>
                                        <h6 className="mb-1">Well Ventilated Treatment Rooms</h6>
                                        <p className="mb-0 text-muted">Ensuring a fresh and hygienic environment.</p>
                                    </div>
                                </li>
                                <li className="list-group-item d-flex align-items-start">
                                    <img src="/images/sterilization-room.jpg" alt="Dedicated Sterilization Room" className="me-3" style={{ width: "50px", height: "50px", objectFit: "cover" }} />
                                    <div>
                                        <h6 className="mb-1">Dedicated Sterilization Room</h6>
                                        <p className="mb-0 text-muted">Maintaining the highest standards of cleanliness.</p>
                                    </div>
                                </li>
                                <li className="list-group-item d-flex align-items-start">
                                    <img src="/images/parking-facility.jpg" alt="Parking Facility" className="me-3" style={{ width: "50px", height: "50px", objectFit: "cover" }} />
                                    <div>
                                        <h6 className="mb-1">Parking Facility</h6>
                                        <p className="mb-0 text-muted">Convenient parking for all visitors.</p>
                                    </div>
                                </li>
                                <li className="list-group-item d-flex align-items-start">
                                    <img src="/images/wheelchair-accessibility.jpg" alt="Wheelchair Accessibility" className="me-3" style={{ width: "50px", height: "50px", objectFit: "cover" }} />
                                    <div>
                                        <h6 className="mb-1">Wheelchair Accessibility</h6>
                                        <p className="mb-0 text-muted">Ensuring ease of access for everyone.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Facilities;