
function SearchBar() {
  return (
    <>
      <div className="search-bar d-flex align-items-center p-3 rounded shadow-sm bg-white">
        <i className="fas fa-search text-muted me-2"></i>
        <input
          type="text"
          className="form-control border-0 shadow-none"
          placeholder="Search..."
          style={{ background: 'transparent' }}
        />
        <i className="fas fa-bell text-muted ms-2"></i>
      </div>

      <div className=" d-flex justify-content-between align-items-center">
        <h1 className="dash-head">Dashboard</h1>
        <p className="dash-para">This week
          <i className="fa-solid fa-chevron-down"></i>
        </p>
      </div>
    </>
  );
};
export default SearchBar;