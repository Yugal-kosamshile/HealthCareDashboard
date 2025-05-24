// import SideBar from "../components/SideBar";
// import SearchBar from "../components/SearchBar";
// import AnatomySection from "../components/AnatomySection";
// import HealthStatusCards from "../components/HealthStatusCards";
// import ActivityFeed from "../components/ActivityFeed";
// import CalendarView from "../components/CalendarView";
// import SimpleAppointmentCard from "../components/SimpleAppointmentCard";
// import UpcomingSchedule from "../components/UpcomingSchedule";

// function DashboardMainContent() {
//   return (
//     <div className="dashboard-wrapper d-flex">
//       {/* Left component */}
//       <div className="sidebar-col">
//         <SideBar />
//       </div>

//       {/* Middle Component */}
//       <div className="middle-col flex-grow-1 px-3 py-4">
//         <SearchBar />

//         <div className="d-flex flex-wrap gap-3 align-items-start mt-4">
//           <div className="flex-grow-1">
//             <AnatomySection />
//           </div>
//           <div style={{ width: '260px' }}>
//             <HealthStatusCards />
//           </div>
//         </div>

//         <div className="mt-4">
//           <ActivityFeed />
//         </div>
//       </div>

//       {/* Right component */}
//       <div className="right-component px-3 py-4">
//         <CalendarView />
//         <SimpleAppointmentCard />
//         <UpcomingSchedule />
//         <h6 className="yugal">❤️ Build by YugalK</h6>
//       </div>
//     </div>
//   );
// }

// export default DashboardMainContent;


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
    <div className="dashboard-wrapper d-flex" style={{ width: '100%' }}>
      {/* Left component - 2/12 */}
      <div style={{ flex: '0 0 16%' }} className="sidebar-col">
        <SideBar />
      </div>

      {/* Middle Component - 5/12 */}
      <div style={{ flex: '0 0 40%' }} className="middle-col px-3 py-4">
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

      {/* Right component - 5/12 */}
      <div style={{ flex: '0 0 40%' }} className="right-component px-3 py-4">
        <CalendarView />
        <SimpleAppointmentCard />
        <UpcomingSchedule />
        <h6 className="yugal">❤️ Build by YugalK</h6>
      </div>
    </div>
  );
}

export default DashboardMainContent;
