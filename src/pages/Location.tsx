import "./Location.css";

const Location = () => {
  return (
    <div className="location-container">
      <img src="./love.png" alt="love" className="love-img" />
      <div className="church-container">
        <img src="./church.png" alt="Church" />
        <h4>Gracefire Chapel</h4>
        <a  href="https://www.google.com/maps" target="blank">Get Directions</a>
      </div>
      <div className="villa-container">
        <img src="./mansion.png" alt="Villa" />
        <h4>Maison Hall</h4>
        <a href="https://www.google.com/maps" target="blank">Get Directions</a>
      </div>
    </div>
  );
};

export default Location;
