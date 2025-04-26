
interface Treatment {
    name: string;
    description: string;
    price: string;
    img_url?: string;
}

const treatments: Treatment[] = [
    { name: 'Dental Cleaning', description: 'Professional cleaning to remove plaque and tartar.', price: '₹1,500' },
    { name: 'Root Canal', description: 'Treatment to repair and save a badly damaged or infected tooth.', price: '₹5,000' },
    { name: 'Teeth Whitening', description: 'Procedure to lighten the color of your teeth.', price: '₹3,000' },
    { name: 'Dental Implants', description: 'Surgical component that interfaces with the bone of the jaw.', price: '₹20,000' },
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

