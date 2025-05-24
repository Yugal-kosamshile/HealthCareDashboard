
function SideBar() {
  return (
    <aside className="sidebar d-flex flex-column justify-content-between p-4">
      <div>
        <h1 className="logo mb-4">
          <span className="health">Health</span>
          <span className="care">care.</span>
        </h1>

        <div className="mb-4">
          <p className="text-muted small mb-2">General</p>
          <ul className="list-unstyled">
            <li className="sidebar-item active">
                <i class="fa-solid fa-border-all"></i>
              <span className="ms-2">Dashboard</span>
            </li>
            <li className="sidebar-item">
                <i class="fa-solid fa-right-left"></i>
              <span className="ms-2">History</span>
            </li>
            <li className="sidebar-item">
                <i class="fa-solid fa-calendar-days"></i>
              <span className="ms-2">Calendar</span>
            </li>
            <li className="sidebar-item"> 
              <i class="fa-solid fa-briefcase-medical"></i>
              <span className="ms-2">Appointments</span>
            </li>
            <li className="sidebar-item">
                <i class="fa-solid fa-chart-line"></i>
              <span className="ms-2">Statistics</span>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-muted small mb-2">Tools</p>
          <ul className="list-unstyled">
            <li className="sidebar-item">
                <i class="fa-solid fa-comment-dots"></i>
              <span className="ms-2">Chat</span>
            </li>
            <li className="sidebar-item">
                <i class="fa-solid fa-phone"></i>
              <span className="ms-2">Support</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="sidebar-item mt-4">
        <i class="fa-solid fa-gear"></i>
        <span className="ms-2">Setting</span>
      </div>
    </aside>
  );
};

export default SideBar;
