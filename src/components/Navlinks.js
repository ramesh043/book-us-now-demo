import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
function Navlinks() {
  return (
    <div style={{ background: "white" }} className="main__links">
      <div>
        <LocationOnIcon />
      </div>

      <h3>
        Mumbai<span>,India</span>
      </h3>
      <div>
        <KeyboardArrowRightIcon className="key-icon" />
      </div>
      <div className="main__items">
        <h5>Live Shows</h5>
        <h5>Streams</h5>
        <h5>Events</h5>
        <h5>Movies</h5>
        <h5>Plays</h5>
        <h5>Sports</h5>
        <h5>Activities</h5>
      </div>
    </div>
  );
}

export default Navlinks;
