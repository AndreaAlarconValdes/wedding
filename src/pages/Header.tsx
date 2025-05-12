import "./Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <img src="./champagne.png" alt="car" className="champagne" />
      <img src="./disco-ball.png" alt="disco-ball" className="disco-ball" />
      <img src="./polaroid.png" alt="polaroid" className="polaroid-left" />
      <img src="./polaroid.png" alt="polaroid" className="polaroid-right" />
      <div className="names-container">
        <h1>James</h1>
        <h2>+</h2>
        <h1>Emma</h1>
      </div>
      <h4>21 July 2026</h4>
      <h5>BARCELONA</h5>
    </div>
  );
};

export default Header;
