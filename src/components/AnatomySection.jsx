
function AnatomySection () {

    return (
        <div className="anatomy-wrapper d-flex justify-content-center align-items-center">
            <div className="anatomy-card position-relative p-4 rounded">
                {/* Search icon top-right */}
                <i className="fas fa-search position-absolute top-0 end-0 m-3 text-muted"></i>

                {/* Body Image */}
                <img src="human.webp" alt="Body" className="img-fluid body-img" />

                {/* Heart Label */}
                <div className="label heart-label">
                    <span role="img" aria-label="Heart">❤️</span> Healthly Heart
                </div>

                {/* Leg Label */}
                <div className="label leg-label">
                    <span role="img" aria-label="Leg">🦵</span> Healthly Leg
                </div>

                {/* Bottom rotate icon */}
                <div className="position-absolute bottom-0 start-50 translate-middle-x mb-2">
                    <i className="fas fa-sync-alt text-muted"></i>
                </div>
            </div>
        </div>
    );
};

export default AnatomySection ;