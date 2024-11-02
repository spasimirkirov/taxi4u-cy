import gallery from "../../resources/data/gallery";

export function VehicleCallery() {
  return (
    <div className="card text-md-center">
      <div className="card-header bg-primary text-light">
        <span className="fs-4 fw-bold">Vehicle</span>
      </div>
      <div className="card-body">
        <div className="row gap-2 gap-md-0">
          {gallery.map((item) => {
            return (
              <div className="col-12 col-md-2">
                <img src={item} className="img-fluid" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
