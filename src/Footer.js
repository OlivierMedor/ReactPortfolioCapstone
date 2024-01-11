import Nav from "./Nav";

function Footer() {
    return (
      <>
        <footer>
          <img className="logo" src={require('./assets/Asset 14@4x.png')} alt="logo" />
          <Nav displayHeading="Navigation" />
          <div className="contact">
            <h4>Contact</h4>
            <ul>
              <li>Address</li>
              <li>Phone number</li>
              <li>Email</li>
            </ul>
          </div>
          <div className="social">
            <h4>Social Media Links</h4>
            <ul>
              <li>Address</li>
              <li>Phone number</li>
              <li>Email</li>
            </ul>
          </div>
        </footer>
      </>
    );
  }

  export default Footer;