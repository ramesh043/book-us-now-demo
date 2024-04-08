


# Explanation of Design and Technical Decisions

## Components
- **Home Component (Home.js):** This component represents the homepage of the application. It includes sections for the hero banner, recommended shows carousel, upcoming events, and a footer.
- **EventCarousel Component (EventCarousel.js):** This component renders a carousel of recommended shows.
- **UpComingEvents Component (UpComingEvents.js):** This component displays upcoming events.
- **CSS Styles (home.css):** This file contains styles for the components.

## Technical Decisions
- **React Framework:** The project is built using React, a popular JavaScript library for building user interfaces. React allows for the creation of reusable UI components, making the codebase modular and easier to maintain.
- **CSS Styling:** Styling is done using CSS files, keeping the styles separate from the component logic. This promotes better organization and scalability of the project.
- **External Images:** Images such as the GitHub icon are imported and utilized within the components.
- **Animation Library:** An animation library (`animate.css`) is used to add subtle animations to certain elements, enhancing the user experience.

## Future Considerations
- **Backend Integration:** Currently, the application focuses on the frontend. In the future, integrating a backend would enable features such as user authentication, event management, and data persistence.
- **Responsive Design:** Enhancing the responsiveness of the application to ensure optimal viewing across various devices and screen sizes.
- **Testing:** Implementing unit tests and end-to-end tests to ensure the reliability and stability of the application.
- **Accessibility:** Ensuring the application is accessible to users with disabilities by adhering to accessibility best practices and standards.

Feel free to reach out if you have any questions or need further assistance!

5. **Open in Browser:**
Once the development server is running, open your web browser and navigate to `http://localhost:3000` to view the application.

# Explanation of Design and Technical Decisions

## Components

### Home Component (Home.js)
```javascript
import React from "react";
import "./home.css";
import EventCarousel from "./EventCarousel";
import UpComingEvents from "./UpComingEvents";
import githubImg from "../images/github.png";

function Home() {
return (
 <>
   {/* Hero section */}
   <div className="hero">
     {/* Hero content */}
   </div>

   {/* Event Carousel */}
   <div className="eventCarousel">
     {/* Carousel content */}
   </div>

   {/* Upcoming Events */}
   <div className="upcomingEvents">
     {/* Upcoming events content */}
   </div>

   {/* Footer */}
   <footer>
     <a href="https://github.com/ramesh043" target="_blank" rel="noreferrer">
       <img src={githubImg} alt="github" width={20} />
     </a>
     <p>💛Created By Ramesh</p>
   </footer>
 </>
);
}

export default Home;

<h1>Thhis is BookUsnow Demo Website</h1>


<h1>
  This Navbar Component Code
</h1>
<code>
  import React from "react";
import { IoIosMenu } from "react-icons/io";
import { IoMdSearch } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import "./Navbar.css";
import Navlinks from "./Navlinks";
function Navbar() {
  return (
    <>
      <div>
        <div className="navbar">
          <div>
            <h3 className="heading">BookUsNow</h3>
          </div>
          <div className="menu">
            <IoIosMenu />
            <h6>Categories</h6>
          </div>
          <div className="search-icon">
            <input
              type="search"
              placeholder="search anything"
              className="search"
            />
            <IoMdSearch className="searchIcon" />
          </div>
          <div className="favourites">
            <FaHeart />
            <h5>Favourites</h5>
          </div>
          <div className="signin-btn">
            <button className="btn">Sign in</button>
          </div>
        </div>
      </div>
      <div className="nav_main_link">
        <Navlinks />
      </div>
    </>
  );
}

export default Navbar;

</code>



<h3>Home Component Code</h3>
<code>
  import React from "react";
import "./home.css";
import EventCarousel from "./EventCarousel";
import UpComingEvents from "./UpComingEvents";
import githubImg from "../images/github.png";
// import { animate__zoomInDown } from "react-awesome-reveal";
function Home() {
  return (
    <>
      <div className="hero">
        <div className="hero-content">
          <div className="">
            <h1 class="animate__animated  animate__zoomInDown">
              discovering Existing Events Happening
              <br /> Near You -Stay Tuned For Updates
            </h1>
          </div>
          <div className="hero-para animate__animated animate__zoomInUp">
            <p style={{ textAlign: "center" }}>
              loremhuwygefhudjiFAGUIFDJIOavbhjcnVGIBBHJ
              loremhuwygefhudjiFAGUIFDJIOavbhjcnVGIBBHJ
            </p>
          </div>
        </div>
      </div>
      <div className="eventCarusel">
        <div className="head-section">
          <h4>Recomendation Shows &rarr;</h4>
          <a href="/">see all</a>
        </div>
        <EventCarousel />
      </div>

      <h4
        style={{
          margin: "0 auto",
          maxWidth: "1200px",
          paddingBottom: "5px",
        }}
      >
        Upcoming Events &rarr;
      </h4>

      <div className="upcoming__events">
        <UpComingEvents />
        <br />
        <UpComingEvents />
      </div>
      <div>
        <footer>
          <a
            href="https://github.com/ramesh043"
            target="_blank"
            rel="noreferrer"
          >
            <img src={githubImg} alt="github" width={20} />
          </a>
          <p>💛Created By Ramesh</p>
        </footer>
      </div>
    </>
  );
}

export default Home;

</code>





<h4>This is Few More Steps to see you movies demo</h4>
<code>
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

</code>
<h4>Carousal Component</h4>
<code>
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

</code>



<h2>This is all style are here </h2>
<p>This is Home Style Components</p>
<code>
  .hero {
  background: url("../images/Banner.svg");
  width: 100%;
  background-size: cover;

  background-repeat: no-repeat;
  height: 80vh;
}
.hero h1 {
  color: white;
  text-transform: capitalize;
  letter-spacing: 1px;
  line-height: 1.6;
}
.hero p {
  color: white;
}
.hero-content {
  max-width: 1000px;
  margin: 0 auto;
  padding: 9rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.eventCarusel {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  margin-top: -7rem;
}
.item {
  display: flex;
  overflow-x: hidden;
  justify-content: space-around;
  gap: 20px;
  border: none;
}
.upcoming__events {
  padding-top: 2rem;
}
.heading {
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: flex-start;
}
.heading h4 {
  color: black;
}
.arrow_icon {
  margin-left: 5px;
  font-size: 18px;
  color: black;
}
.description {
  max-width: 1200px;
  /* gap: 20px; */
  padding-bottom: 1rem;
  justify-content: space-evenly;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
}
.item_list {
  border: 1px solid #ddd;
  padding: 1rem;
  border-radius: 9px;
}
.img_section img {
  border-radius: 9px;
}
.items_desc {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #b0babf;
  padding-top: 0.4rem;
  font-family: "inter";
  font-size: 12px;
}
.items_icon {
  display: flex;
  align-items: center;
}
.img_section {
  position: relative;
}
.img_section > img {
  z-index: 1000;
  display: block;
}
.para_image {
  position: absolute;

  bottom: 5px;
  left: 4px;
  right: inherit;
  background-color: rgba(0, 0, 0, 0.4);
  padding: 1rem;
  color: #ddd;
  font-size: 13px;
  font-weight: bold;
  width: 98%;
}
.eventCarusel h4 {
  color: #ddd;
  padding-bottom: 1rem;
}
.eventCarusel .right-icon {
  color: white;
}
.head-section {
  display: flex;
  justify-content: space-between;
}
.head-section a {
  color: #ddd;
  font-family: "inter";
}
.description h4 {
  padding-top: 1.7rem;
}
.event_content {
  position: relative;
  display: flex;
  max-width: 1200px;
  overflow-x: scroll;
  align-items: center;
  gap: 30px;
  padding-bottom: 1rem;
}

.event_items_desc {
  position: absolute;
  bottom: 8px;
  color: #ddd;
  left: auto;

  font-size: 10px;
  font-family: "inter";
}
.event_content img {
  max-height: auto;
  /* padding: 2rem; */
  width: 400px;
}
.items_content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
}
.items_content li {
  list-style: none;
}
.left-desc {
  text-align: right;
  margin-left: 2rem;
}

</code>

<h3>Navbar</h3>
<code>
  .navbar {
  display: flex;
  justify-content: space-evenly;
  height: 50px;

  width: 100%;
  z-index: 1;
  background-color: white;
  padding: 30px;
  align-items: center;
  border: 1px solid #ddd;
  cursor: pointer;
}
.search-icon {
  border: 1px solid #b0babf;
  display: flex;
  flex: 0.6;
  justify-content: flex-end;
  padding: 0.4rem 1rem;
  color: #989090;
  border-radius: 4px;
}
input {
  width: 100%;
  background: transparent;
  outline: none;
  border: none;
  background-color: white;
}
input::placeholder {
  color: #b0babf;
  font-weight: bold;
  font-family: "inter";
}
.menu {
  background-color: black;
  color: white;
  display: flex;
  gap: 5px;
  padding: 0.4rem 1rem;
  align-items: center;
  border-radius: 5px;
}
.heading {
  color: #cf2d2d;
}
.favourites {
  display: flex;
  align-items: center;
  gap: 5px;
  color: #989090;
}
/* Font and Color:
Font - Inter
Font color (Heading) - #1E2022, Font color (Subtitle) - #989090
Background color - #ffffff
Logo color - #CF2D2D
Stroke/border color - #B0BABF
 */
button {
  border: none;
}
.btn {
  padding: 0.4rem 1rem;
  border: 1px solid #b0babf;
  border-radius: 5px;
  font-weight: 800;
  background-color: #fff;
  color: #b0babf;
}
.searchIcon {
  font-size: 18px;
}

.main__links {
  display: flex;
  justify-content: flex-start;
  padding: 0.2rem 0rem 0.2rem 5.6rem;
  align-items: center;
  color: #989090;
}
.main__items {
  display: flex;
  gap: 2rem;

  padding-left: 5rem;
}
span {
  font-size: 10px;
  padding-left: 0.3rem;
}
.main__links h3 {
  font-size: 15px;
}
.main__links .key-icon {
  font-size: 13px;
  display: flex;
  align-items: center;
}
.nav_main_link {
  position: sticky;
  z-index: 1000;
  top: 0;
}

</code>
<h1>Global CSS</h1>
<code>
  * {
  margin: 0;
  box-sizing: border-box;
}

body {
  font-family: "Inter", sans-serif;
  font-optical-sizing: auto;
  font-weight: normal;
  font-style: normal;
  font-variation-settings: "slnt" 0;
}
:root {
  --animate-duration: 800ms;
  --animate-delay: 0.9s;
}
footer {
  display: flex;
  justify-content: space-evenly;
  padding: 0.7rem;
  border-top: 1px solid #ddd;
  font-family: "inter";
  font-weight: bold;
}

</code>



