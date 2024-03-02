const UploadStats = props => {
  return (
    <section className="statistics">
      <h2 className="title">Upload stats</h2>

      <ul className="stat-list">
        {props.statisticsData.map(statistic => (
          <li className="item" key={statistic.id}>
            <span className="label">{statistic.label}</span>
            <span className="percentage">{statistic.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default UploadStats;
