

const Doctors = () => {
const doctors = [
    {
        id: 1,
        name: "Dr. Smith",
        specialty: "Dentist",
        experience: "10+ years",
        image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGRvY3RvcnN8ZW58MHx8MHx8fDA%3D',
    },
    {
        id: 2,
        name: "Dr. Johnson",
        specialty: "Orthodontist",
        experience: "15+ years",
        image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZG9jdG9yc3xlbnwwfHwwfHx8MA%3D%3D',
    },
    {
        id: 3,
        name: "Dr. Brown",
        specialty: "Pediatric Dentist",
        experience: "5+ years",
        image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGRvY3RvcnN8ZW58MHx8MHx8fDA%3D',
    },
    {
        id: 4,
        name: "Dr. Taylor",
        specialty: "Oral Surgeon",
        experience: "8+ years",
        image: 'https://images.unsplash.com/photo-1606318313647-137d1f3b4d3c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGRvY3RvcnN8ZW58MHx8MHx8fDA%3D',
    },
    {
        id: 5,
        name: "Dr. Wilson",
        specialty: "Periodontist",
        experience: "12+ years",
        image: 'https://media.istockphoto.com/id/1410398449/photo/male-doctor-in-a-medical-clinic-writing-prescription-for-a-young-female-patient.webp?a=1&b=1&s=612x612&w=0&k=20&c=qc0xflQ7rHLudNluswcw3UqRNMaYFvnP8fjW3CqZ7XU=',
    },
    {
        id: 6,
        name: "Dr. Ragavan R",
        specialty: "Endodontist",
        experience: "7+ years",
        image: 'https://media.istockphoto.com/id/958410772/photo/happy-young-male-doctor.jpg?s=612x612&w=0&k=20&c=kOiM-gfhbdcjeJfSoSF0TIreW5eJVGk68QHl_XNWCB8=',
    }
];

return (
    <div className="container">
        <h1 className="text-center my-5">Our Doctors</h1>
        <div className="row">
            {doctors.map((doctor) => (
                <div className="col-md-4" key={doctor.id}>
                    <div className="card mb-3 shadow-sm">
                        <img src={doctor.image} className="card-img-top " height={350} alt={doctor.name} />
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
