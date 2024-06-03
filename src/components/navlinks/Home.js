import React from "react";

const Home = () => {

    const tourDates = [
        { city: "Detroit, MI", venue: "Die Energy Music Theatre", date: "July 16" },
        { city: "Toronto, ON", venue: "Budweiser Stage", date: "July 19" },]
  return (
    <div className="container">
    <div className="row">
      <div className="col-md-12">
        <h2>The Generics Tour Dates</h2>
        <ul className="list-group">
          {tourDates.map((tourDate) => (
            <li key={tourDate.city} className="list-group-item">
              <div className="d-flex justify-content-between">
                <div>
                  <h5>{tourDate.city}</h5>
                  <p className="mb-0">{tourDate.venue}</p>
                </div>
                <span className="badge bg-primary rounded-pill">{tourDate.date}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
  );
};

export default Home;
