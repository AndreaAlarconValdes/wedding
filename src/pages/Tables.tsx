import "./Tables.css";

const Tables = () => {
  return (
    <div className="tables-container">
      <h2>Tables Distribution</h2>
      <div className="main-table">
        <img src="./sweetheart-table.png" alt="" />
        <p>
          Table of the bride, groom, parents and siblings of the bride and groom
        </p>
      </div>
      <div className="tables-distribution">
        <div>
          <img src="./table-1.png" alt="" />
          <p>Family of the bride</p>
        </div>
        <div>
          <img src="./table-2.png" alt="" />
          <p>Family of the groom</p>
        </div>
        <div>
        <img src="./table-3.png" alt="" />
          <p>Friends of the bride</p>
        </div>
        <div>
        <img src="./table-4.png" alt="" />
          <p>Friends of the bride</p>
        </div>
      </div>
    </div>
  );
};

export default Tables;
