const calendarData = [
  { day: "Mon", date: 25, times: ["10:00", "11:00", "12:00"] },
  { day: "Tues", date: 26, times: ["08:00", "09:00", "10:00"], selected: "09:00" },
  { day: "Wed", date: 27, times: ["12:00", "13:00"] },
  { day: "Thurs", date: 28, times: ["10:00", "11:00"], selected: "11:00" },
  { day: "Fri", date: 29, times: ["14:00", "16:00"] },
  { day: "Sat", date: 30, times: ["12:00", "14:00", "15:00"], selected: "12:00" },
  { day: "Sun", date: 31, times: ["09:00", "10:00", "11:00"], disabled: true }
];

function Calender() {
  return (
    <div className="calendar-container">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h6 className="fw-bold mb-0">October 2021</h6>
        <div className="d-flex align-items-center gap-2">
          <img
            src="https://th.bing.com/th/id/OIP.KWlosxCOUcYU2RLg0gAjQwHaHa?w=145&h=181"
            alt="avatar"
            className="rounded-circle"
            width="36"
          />
          <button className="btn btn-primary btn-sm fw-bold fs-5 px-3">+</button>
        </div>
      </div>

      <div className="d-flex text-center">
        {calendarData.map((item, idx) => (
          <div key={idx} className={`flex-grow-1 px-1 ${item.disabled ? "text-muted" : ""}`}>
            <div className="fw-bold">{item.day}</div>
            <div className={`fw-bold ${item.disabled ? "text-secondary" : "text-dark"}`}>{item.date}</div>
            <div className="mt-1">
              {item.times.map((time, i) => (
                <div key={i} className={`time-slot mb-1 ${item.selected === time ? "selected" : ""}`}>
                  {time}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Calender;
