import './Header.css'
import Nav from './Nav';

function Header() {
  return (
    <>
      <header>
        <div></div>
        <img className="logo" src={require('./assets/Asset 14@4x.png')} alt="logo" />
        <Nav></Nav>
        <div></div>
      </header>
    </>
  );
}

export default Header;
