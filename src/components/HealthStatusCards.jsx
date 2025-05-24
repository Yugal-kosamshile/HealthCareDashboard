
import 'bootstrap/dist/css/bootstrap.min.css';

function HealthStatusCards  (){
  const data = [
    { emoji: '🫁', title: 'Lungs', date: '26 Okt 2021', progress: 60, color: '#dc3545' },
    { emoji: '🦷', title: 'Teeth', date: '26 Okt 2021', progress: 80, color: '#20c997' },
    { emoji: '🦴', title: 'Bone', date: '26 Okt 2021', progress: 50, color: '#fd7e14' },
  ];

  return (
    <>
    <div className="medical-card-wrapper">
    <div className="medical-card" >
      {data.map((item, index) => (
        <div key={index} className="card p-3 mb-3  medical-card">
          <div className="d-flex align-items-center">
            <span className="fs-3 me-2">{item.emoji}</span>
            <h6 className="mb-0 fw-bold text-primary">{item.title}</h6>
          </div>
          <small className="text-muted mt-2">Date: {item.date}</small>
          <div className="progress mt-2" style={{ height: '6px' }}>
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: `${item.progress}%`, backgroundColor: item.color }}
            ></div>
          </div>
        </div>
      ))}
    </div>
    </div>
    </>
  );
};

export default HealthStatusCards ;
