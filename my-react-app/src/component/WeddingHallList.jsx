import React from "react";
import "./WeddingHallList.css";

const halls = [
  {
    name: "Sri Shanteri Kamakshi Sabhagraha Convention Hall",
    address: "Near, Kumbeshwar Temple Rd, Kumta, Karnataka 581343",
    rating: 4.8,
    image: "https://th.bing.com/th/id/OIP.9vbE7ec_Obd6VXbZlGWGbwHaE9?w=252&h=180&c=7&r=0&o=5&pid=1.7", 
  },
  {
    name: "Namadhari Kalyan Mantap",
    address: "NH 17, Baggon Cross, Dist, Kumta, Karnataka 581343",
    rating: 4.2,
    image: "https://th.bing.com/th/id/OIP.KxuXMVTNiKo5s62bHRCT0wHaE8?w=245&h=180&c=7&r=0&o=5&pid=1.7",
  },
  {
    name: "GramaVakkaliga Samudaya Bhavana, Kumta",
    address: "GGBG-614, Mauli, Kumta, Karnataka 581343",
    rating: 4.5,
    image: "https://th.bing.com/th/id/OIP.MJfrue0zJxr1jXevueelnQAAAA?w=265&h=169&c=7&r=0&o=5&pid=1.7",
  },
];

const WeddingHallList = () => {
  return (
    <div className="wedding-hall-container">
      <header className="app-header">
        <div className="logo"><img SRC="https://png.pngtree.com/png-clipart/20230327/original/pngtree-orange-yellow-palm-tree-sunset-png-image_9005481.png" HEIGHT="50PX" WIDTH="50PX"></img> Namma Kumata</div>
        <div className="icons">
          <i className="fa fa-bell"></i>
          <i className="fa fa-user"></i>
          <i className="fa fa-globe"></i>
        </div>
      </header>

      <div className="subheader">
        <i className="fa fa-arrow-left"></i> Wedding Hall
      </div>

      <div className="hall-list">
        {halls.map((hall, index) => (
          <div className="hall-card" key={index}>
            <img src={hall.image} alt={hall.name} className="hall-image" />
            <div className="hall-info">
              <h3>{hall.name}</h3>
              <p>{hall.address}</p>
              <div className="rating">
                <span className="rating-value">{hall.rating}</span> ★
              </div>
              <button className="details-button">More details</button>
            </div>
          </div>
        ))}
      </div>

      <nav className="bottom-nav">
        <div className="nav-item"><i className="fa fa-home"></i> Home</div>
        <div className="nav-item"><i className="fa fa-search"></i> Search</div>
        <div className="nav-item"><i className="fa fa-plus"></i> Add/Join</div>
        <div className="nav-item"><i className="fa fa-lightbulb"></i> Alerts</div>
      </nav>
    </div>
  );
};

export default WeddingHallList;