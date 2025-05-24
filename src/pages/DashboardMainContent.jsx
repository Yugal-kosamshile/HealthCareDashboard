import SideBar from "../components/SideBar";
import SearchBar from "../components/SearchBar";
import AnatomySection from "../components/AnatomySection";
import HealthStatusCards from "../components/HealthStatusCards";
import ActivityFeed from "../components/ActivityFeed";
import CalendarView from "../components/CalendarView";
import SimpleAppointmentCard from "../components/SimpleAppointmentCard";
import UpcomingSchedule from "../components/UpcomingSchedule";

function DashboardMainContent() {
  return (
    <div className="dashboard-wrapper d-flex">
      {/* Sidebar */}
      <div className="sidebar-col">
        <SideBar />
      </div>

      {/* Center content */}
      <div className="middle-col flex-grow-1 px-3 py-4">
        <SearchBar />

        <div className="d-flex flex-wrap gap-3 align-items-start mt-4">
          <div className="flex-grow-1">
            <AnatomySection />
          </div>
          <div style={{ width: '260px' }}>
            <HealthStatusCards />
          </div>
        </div>

        <div className="mt-4">
          <ActivityFeed />
        </div>
      </div>

      {/* Right content */}
      <div className="right-component px-3 py-4">
        <CalendarView />
        <SimpleAppointmentCard />
        <UpcomingSchedule />
      </div>
    </div>
  );
}

export default DashboardMainContent;
