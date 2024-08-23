import "./AreaProgressChart.scss";
const AreaProgressChart = () => {
  return (
    <div className="progress-bar">
      <h4 className="progress-bar-title">Trading Accounts</h4>
      <div className="accounts-container">
        <div className="account">
          <h5 className="account-title">MasterAccount</h5>
          <p className="account-id">Ctrader #273728</p>
          <p className="account-value">0.00 USD</p>
        </div>
        <div className="account">
          <h5 className="account-title">MasterAccount</h5>
          <p className="account-id">Ctrader #273728</p>
          <p className="account-value">0.00 USD</p>
        </div>
      </div>
    </div>
  );
};

export default AreaProgressChart;
