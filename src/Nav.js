function Nav({displayHeading}) {
    return (
      <>
        <nav>
          {displayHeading &&
            <h4>{ displayHeading }</h4>
          }
          <ul>
            <li><a href="/Home">Home</a></li>
            <li><a href="/About">About</a></li>
            <li><a href="/Menu">Menu</a></li>
            <li><a href="/BookingPage">Reservations</a></li>
          </ul>
        </nav>
      </>
    );
  }

  export default Nav;