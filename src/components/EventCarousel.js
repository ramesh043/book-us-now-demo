import React from "react";
import firstImage from "../images/Rectangle 9.svg";
import secondImage from "../images/Rectangle 7 (1).svg";
import thirdImage from "../images/Rectangle 23.svg";
import fourthImage from "../images/Rectangle 37.svg";
import fifthImage from "../images/Rectangle 21.svg";
import sixthImage from "../images/Rectangle 22.svg";
import seventhImage from "../images/Rectangle 11.svg";
import eigthImage from "../images/Rectangle 15.svg";
import lastImage from "../images/Rectangle 16.svg";
function EventCarousel() {
  const eventItems = [
    {
      eventName: "Winter Wonderland Fair",
      cityName: "West Douglas",
      date: "2024-03-24Z",
      weather: "Snowy 26C",
      distanceKm: "4265",
      imgUrl: firstImage,
    },
    {
      eventName: "Spring Clouds Art Exhibit",
      cityName: "North Amy",
      date: "2024-03-2Z",
      weather: "Cloudy 7C",
      distanceKm: "382",
      imgUrl: secondImage,
    },
    {
      eventName: "Snowy Peaks Photography Workshop",
      cityName: "Rayville",
      date: "2024-03-Z",
      weather: "Snowy 18C",
      distanceKm: "1417",
      imgUrl: thirdImage,
    },
    {
      eventName: "Sunny Days Marathon",
      cityName: "Hartville",
      date: "2024-03-2Z",
      weather: "Sunny 2C",
      distanceKm: "90",
      imgUrl: fourthImage,
    },
    {
      eventName: "Tropical Tunes Music Festival",
      cityName: "South Andrew",
      date: "2024-03Z",
      weather: "Cloudy 30C",
      distanceKm: "143",
      imgUrl: fifthImage,
    },
    {
      eventName: "Frozen Harmony Concert",
      cityName: "Port Markton",
      date: "2024-03-27",
      weather: "Sunny -3C",
      distanceKm: "123",
      imgUrl: sixthImage,
    },
    {
      eventName: "Cloudy Skies Book Fair",
      cityName: "Lake Matthew",
      date: "2024-03-27T",
      weather: "Cloudy 14C",
      distanceKm: "654",
      imgUrl: seventhImage,
    },
    {
      eventName: "Sunlit Path Charity Run",
      cityName: "West Erika",
      date: "2024-03-27Z",
      weather: "Sunny -4C",
      distanceKm: "45",
      imgUrl: eigthImage,
    },
    {
      eventName: "Winter Bliss Ice Sculpture Contest",
      cityName: "Terrenceberg",
      date: "2024-03-27Z",
      weather: "Snowy 25C",
      distanceKm: "63",
      imgUrl: lastImage,
    },
  ];
  return (
    <div className="event_Carousal">
      <div className="event_content">
        {eventItems.map((item, index) => {
          return (
            <div className="event_Section">
              <div className="event_images">
                <img
                  src={item.imgUrl}
                  alt="imageSection"
                  class="animate__animated animate__zoomInDown"
                />
                <div className="event_items_desc">
                  <ul key={index}>
                    <div className="items_content">
                      <div>
                        <li>
                          <h3>{item.eventName}</h3>
                        </li>
                        <li>{item.cityName}</li>
                      </div>
                      <div className="left-desc">
                        <li>
                          <p>{item.date}</p>
                        </li>
                        <li>
                          <p>{item.weather}</p>
                        </li>
                        <li>
                          <p>{item.distanceKm}</p>
                        </li>
                      </div>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default EventCarousel;
