function Appointment() {

    return (
    <div className="d-flex gap-3 flex-wrap appointment-cards-container">
      {/* Dentist Card */}
      <div className="card dentist-card p-3 rounded-4">
        <div className="fw-bold">Dentist 🦷</div>
        <div className="small my-1">09:00 - 11:00</div>
        <div className="small">Dr. Cameron Williamson</div>
      </div>

      {/* Physiotherapy Card */}
      <div className="card physiotherapy-card p-3 rounded-4">
        <div className="fw-bold text-dark">
          Physiotherapy Appointment 💪
        </div>
        <div className="small text-muted my-1">11:00 - 12:00</div>
        <div className="small text-muted">Dr. Kevin Djones</div>
      </div>
    </div>
  );
}

export default Appointment;