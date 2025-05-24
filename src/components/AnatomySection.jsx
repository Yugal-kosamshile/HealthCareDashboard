
function AnatomySection() {

    return (
        <div className="anatomy-wrapper d-flex justify-content-center align-items-center">
            <div className="anatomy-card position-relative p-4 rounded">

                <i className="fas fa-search position-absolute top-0 end-0 m-3 text-muted"></i>

                <img src="human.png" alt="Body" className="img-fluid body-img" />

                <div className="label heart-label">
                    <span role="img" aria-label="Heart">
                        ❤️</span> Healthly Heart
                </div>

                <div className="label leg-label">
                    <span role="img" aria-label="Leg">
                        🦵</span> Healthly Leg
                </div>

                <div className="position-absolute bottom-0 start-50 translate-middle-x mb-2">
                    <i className="fas fa-sync-alt text-muted"></i>
                </div>
            </div>
        </div>
    );
};

export default AnatomySection;