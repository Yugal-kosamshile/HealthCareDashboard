import Activity from "../components/Activity";
import Anatomy from "../components/anatomy";
import Appointment from "../components/Apointment";
import Calender from "../components/Calender";
import MedicalCards from "../components/MedicalCards";
import Schedule from "../components/Schedule";
import SearchBar from "../components/SearchBar";
import SideBar from "../components/SideBar";

function Dashboard() {
  return (
    <>
     <div className="container-fluid dashboard-layout">
      <div className="row">
        {/* Left Sidebar */}
        <div className="col-md-2 col-lg-2 px-0 sidebar-col">
          <SideBar />
        </div>

<div className="col-md-7 col-lg-7 px-4 middle-col">
  {/* Top: Search Bar */}
  <div className="mb-4">
    <SearchBar />
  </div>

  {/* Center Section: Anatomy and Medical Cards Side-by-Side */}
  <div className="d-flex flex-wrap">
    <Anatomy />
    <MedicalCards />
  </div>

  {/* Bottom: Activity Section */}
  <Activity />
</div>



       <div className="col-md-3 col-lg-3 px-4 right-col d-flex flex-column gap-4">
  {/* Calendar on top */}
  <Calender />

  {/* Appointment Cards below Calendar */}
  <Appointment />

  {/* Schedule at the bottom */}
  <Schedule />
</div>

      </div>
    </div>
    </>
  );
}
export default Dashboard