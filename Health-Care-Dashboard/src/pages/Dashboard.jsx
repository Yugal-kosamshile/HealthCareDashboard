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
      <div className="container-fluid d-flex dashboard-layout">

        {/* Left Sidebar */}
        <div className="row">
          <div className="sidebar-col  col-md-2">
            <SideBar />
          </div>

          {/* Center Section*/}
          <div className="middle-col col-md-5">

            <div className="my-4 ">
              <SearchBar />
            </div>
            
 
            <div className="d-flex justify-content-between center-pair-wrapper">
              <Anatomy />
              <MedicalCards />
            </div>

            <Activity />
          </div>

          {/* Right component  */}
          <div className="right-component col-md-4">
            <Calender />
            <Appointment />
            <Schedule />
          </div>

        </div>
      </div>
    </>
  );
}
export default Dashboard