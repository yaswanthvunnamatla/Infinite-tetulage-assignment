import "./AreaTableChart.scss";

const AreaTableChart = () => {
  return (
    <div className="area-table">
      <h4 className="area-table-title">Open Trades</h4>
      <div className="trades-container">
        <div className="trade">
          <p className="trade-pair">GBPUSB Long</p>
          <p className="trade-value">0.12</p>
          <p className="trade-profit">+56.00 USD</p>
        </div>
        <div className="trade">
          <p className="trade-pair">GBPUSB Long</p>
          <p className="trade-value">0.12</p>
          <p className="trade-profit">+56.00 USD</p>
        </div>
        <div className="trade">
          <p className="trade-pair">GBPUSB Long</p>
          <p className="trade-value">0.12</p>
          <p className="trade-profit">+56.00 USD</p>
        </div>
      </div>
    </div>
  );
};

export default AreaTableChart;
