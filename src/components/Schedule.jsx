function Schedule(params) {
    const scheduleData = [
  {
    day: "Thursday",
    events: [
      { title: "Health checkup complete 🧪", time: "11:00 AM" },
      { title: "Ophthalmologist 👁", time: "14:00 PM" },
    ],
  },
  {
    day: "Saturday",
    events: [
      { title: "Cardiologist ❤️", time: "12:00 AM" },
      { title: "Neurologist 🧑‍⚕️", time: "16:00 PM" },
    ],
  },
];

return (
  <>
    <div className="p-4 rounded-4  schedule-container">
      <h5 className="fw-bold text-dark mb-4">The Upcoming Schedule</h5>
      {scheduleData.map((dayBlock, idx) => (
        <div key={idx} className="mb-4">
          <p className="text-muted mb-2 fw-semibold">On {dayBlock.day}</p>
          <div className="d-flex gap-3">
            {dayBlock.events.map((event, index) => (
              <div
                key={index}
                className="event-card p-3 rounded-4 shadow-sm flex-grow-1"
              >
                <div className="fw-bold text-dark small">{event.title}</div>
                <div className="text-muted small">{event.time}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
    </>
  );
}

export default Schedule;