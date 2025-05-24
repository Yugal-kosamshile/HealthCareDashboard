
const days = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];
const chartData = [
  [30, 50, 40],
  [60, 20, 70],
  [20, 30, 50],
  [40, 45, 60],
  [70, 40, 50],
  [50, 20, 60],
  [30, 40, 20],
];

const acitity = chartData.map((bars, index) => (
  <div key={index} className="text-center">
    <div className="bar-group d-flex flex-column-reverse align-items-center gap-1 mb-1">
      {bars.map((height, i) => (
        <div
          key={i}
          className={`bar bar-${i}`}
          style={{ height: `${height}px` }}
        ></div>
      ))}
    </div>
    <small className="text-muted">{days[index]}</small>
  </div>
))

function ActivityFeed() {
  return (
    <div className="activity-card p-4 rounded shadow-sm">
      <div className="d-flex justify-content-between mb-3">
        <h6 className="fw-bold text-dark mb-0">Activity</h6>
        <small className="text-muted">3 appointment on this week</small>
      </div>

      <div className="d-flex justify-content-between align-items-end">
        {acitity}
      </div>
    </div>
  );
};

export default ActivityFeed;
