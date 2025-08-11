function Footer() {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4 mb-3 mb-md-0">
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li>Email: contact@company.com</li>
              <li>Phone: +123 456 7890</li>
            </ul>
          </div>
          <div className="col-12 col-md-4 mb-3 mb-md-0">
            <h5>About Us</h5>
            <p>We are a hospital committed to delivering compassionate and quality healthcare services.</p>
          </div>
          <div className="col-12 col-md-4 mb-3 mb-md-0">
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/privacypolicy" className="text-white">Privacy Policy</a>
              </li>
              <li>
                <a href="/termsconditions" className="text-white">Terms of Service</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-3">
          <small>© 2025 DentalCare Pro. All Rights Reserved.</small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

