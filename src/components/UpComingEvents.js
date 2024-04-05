import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import firstImage from "../images/Rectangle 9.svg";
import secondImage from "../images/Rectangle 7 (1).svg";
import thirdImage from "../images/Rectangle 23.svg";
// import fourthImage from "../images/Rectangle 37.svg";
// import fifthImage from "../images/Rectangle 21.svg";

// import secondImage from "../images/Rectangle 7 (1).svg";
function UpComingEvents() {
  const items = [
    {
      id: 1,
      name: "After not Really",
      description: "West Bengal",
      weather: "snow",
      imgUrl: firstImage,
    },
    {
      id: 2,
      name: "After not Really",
      description: "West Bengal",
      weather: "snow",
      imgUrl: secondImage,
    },
    {
      id: 3,
      name: "After not Really",
      description: "West Bengal",
      weather: "snow",
      imgUrl: thirdImage,
    },
  ];
  return (
    <>
      <div>
        <div className="description">
          {items.map((item, index) => (
            <div key={index} className="item_list">
              <div className="img_section">
                <img
                  src={item.imgUrl}
                  alt="first"
                  class="animate__animated animate__zoomInUp"
                />
                <p className="para_image">March 23, 2024</p>
              </div>
              <div>
                <h4>{item.name}</h4>
                <div className="items_desc">
                  <div className="items_icon">
                    <LocationOnIcon />
                    <p>{item.description}</p>
                  </div>
                  <div>
                    <p>
                      {item.weather},{26} | {42}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default UpComingEvents;
