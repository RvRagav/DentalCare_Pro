
interface Treatment {
    name: string;
    description: string;
    price: string;
    img_url?: string;
}

const treatments: Treatment[] = [
    { name: 'Dental Cleaning',img_url: '/src/assets/dental_cleaning.avif', description: 'Professional cleaning to remove plaque and tartar.', price: '₹1,500' },
    { name: 'Root Canal',img_url: '/src/assets/rootcanal.avif', description: 'Treatment to repair and save a badly damaged or infected tooth.', price: '₹5,000' },
    { name: 'Teeth Whitening',img_url: '/src/assets/teeth_whitening.avif', description: 'Procedure to lighten the color of your teeth.', price: '₹3,000' },
    { name: 'Dental Implants', img_url: 'https://media.istockphoto.com/id/1412853972/photo/mandibular-prosthesis-all-on-4-system-supported-by-implants.webp?a=1&b=1&s=612x612&w=0&k=20&c=xY6719i5NFgDdt09dvPDrfdfKBTD1IaRatpQ0kj8G7U=', description: 'Surgical component that interfaces with the bone of the jaw.', price: '₹20,000' },
];

const Treatments = () => {
    return (
        <div className="container my-4">
            <h2 className="text-center mb-4">Available Treatments</h2>
            <div className="row">
                {treatments.map((treatment, index) => (
                    <div className="col-md-6 mb-4" key={index}>
                        <div className="card">
                            <div className="card-body">
                                <img src={treatment.img_url} alt={treatment.name} className="card-img-top" style={{ height: '200px', objectFit: 'cover' }} />
                                <h5 className="card-title">{treatment.name}</h5>
                                <p className="card-text">{treatment.description}</p>
                                <p className="card-text"><strong>Price: {treatment.price}</strong></p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Treatments;

