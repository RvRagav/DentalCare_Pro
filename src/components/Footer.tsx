function Footer() {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li>Email: contact@company.com</li>
              <li>Phone: +123 456 7890</li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>About Us</h5>
            <p>We are a company dedicated to providing excellent service.</p>
          </div>
          <div className="col-md-4">
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/privacy-policy" className="text-white">Privacy Policy</a>
              </li>
              <li>
                <a href="/terms-of-service" className="text-white">Terms of Service</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-3">
          <small>© 2023 Company Name. All Rights Reserved.</small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

