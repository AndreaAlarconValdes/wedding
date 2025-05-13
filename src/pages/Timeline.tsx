import "./Timeline.css";

const Timeline = () => {
  return (
    <div className="timeline-container">
      <h2>Timeline</h2>
      <div className="timeline">
        <div className="timeline-imgs">
          <img src="./ring.png" alt="" />
          <img src="./cocktail.png" alt="" />
          <img src="./table.png" alt="" />
          <img src="./disco-cocktail.png" alt="" />
        </div>
        <div className="timeline-info">
          <div>
            <span></span>
            <p>13:15</p>
            <h4>CEREMONY</h4>
          </div>
          <div>
            <span></span>
            <p>15:30</p>
            <h4>COCKTAIL</h4>
          </div>
          <div>
            <span></span>
            <p>17:30</p>
            <h4>DINNER</h4>
          </div>
          <div>
            <span></span>
            <p>19:30</p>
            <h4>PARTY</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
