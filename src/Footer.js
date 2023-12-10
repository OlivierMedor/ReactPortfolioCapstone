function Footer() {
    return (
      <>
        <footer>
          <div><img className="logo" src={require('./assets/Asset 14@4x.png')} alt="logo" /></div>
          <div>
            <ul>
              <li><a href="/Home">Home</a></li>
              <li><a href="/About">About</a></li>
              <li><a href="/Menu">Menu</a></li>
              <li><a href="/Reservations">Reservations</a></li>
            </ul>
          </div>
          <div>
            <h2>Contact</h2>
            <ul>
              <li>Address</li>
              <li>Phone number</li>
              <li>Email</li>
            </ul>
          </div>
          <div>
            <h2>Social Media Links</h2>
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