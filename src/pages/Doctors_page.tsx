

const Doctors = () => {
const doctors = [
    {
        id: 1,
        name: "Dr. Smith",
        specialty: "Dentist",
        experience: "10+ years",
        image: '',
    },
    {
        id: 2,
        name: "Dr. Johnson",
        specialty: "Orthodontist",
        experience: "15+ years",
        image: '',
    },
    {
        id: 3,
        name: "Dr. Brown",
        specialty: "Pediatric Dentist",
        experience: "5+ years",
        image: '',
    },
    {
        id: 4,
        name: "Dr. Taylor",
        specialty: "Oral Surgeon",
        experience: "8+ years",
        image: '',
    },
    {
        id: 5,
        name: "Dr. Wilson",
        specialty: "Periodontist",
        experience: "12+ years",
        image: '',
    },
    {
        id: 6,
        name: "Dr. Ragavan R",
        specialty: "Endodontist",
        experience: "7+ years",
        image: '',
    }
];

return (
    <div className="container">
        <h1 className="text-center my-5">Our Doctors</h1>
        <div className="row">
            {doctors.map((doctor) => (
                <div className="col-md-4" key={doctor.id}>
                    <div className="card mb-3">
                        <img src={doctor.image} className="card-img-top" alt={doctor.name} />
                        <div className="card-body">
                            <h5 className="card-title">{doctor.name}</h5>
                            <p className="card-text">{doctor.specialty}</p>
                            <p className="card-text">Experience: {doctor.experience}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
);
}

export default Doctors
