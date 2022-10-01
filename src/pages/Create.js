import "../styles/Create.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


function Create() {

  let navigate = useNavigate();
  const routeChange = () => {
    navigate("/event");
  };

  const [eventName, setEventName] = useState("");
  const [hostName, setHostName] = useState("");
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(0);
  const [location, setLocation] = useState(0);

  const handleChangeName = (e) => {
    setEventName({ value: e.target.value });
  };

  const handleChangeHostName = (e) => {
    setHostName({ value: e.target.value });
  };

  const handleChangeStart = (e) => {
    setStart({ value: e.target.value });
  };

  const handleChangeEnd = (e) => {
    setEnd({ value: e.target.value });
  };

  const handleChangeLocation = (e) => {
    setLocation({ value: e.target.value });
  };

  //  const handleChangeImage = (e) => {
  //    setState({ value: e.target.value });
  //  };

   const handleSubmit = (e)  => {
    console.log("Form filled")
    e.preventDefault();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Event Name:
          <input
            type="text"
            name="event-name"
            onChange={handleChangeName}
            value={eventName}
          />
        </label>
        <label>
          Host Name:
          <input
            type="text"
            name="host-name"
            onChange={handleChangeHostName}
            value={hostName}
          />
        </label>
        <label>
          Start Date:
          <input
            type="datetime-local"
            name="start-date-time"
            onChange={handleChangeStart}
            value={start}
          />
        </label>
        <label>
          End Date:
          <input
            type="datetime-local"
            name="end-date-time"
            onChange={handleChangeEnd}
            value={end}
          />
        </label>
        <label>
          Location:
          <input
            type="text"
            name="end-location"
            onChange={handleChangeLocation}
            value={location}
          />
        </label>
        <label>
          Event Photo:
          <input
            type="file"
            name="image"
            alt="Event Photo"
            // onChange={handleChangeImage}
            // value={this.state.value}
          />
        </label>
        <input type="submit" value="submit" />
      </form>
      <button onClick={routeChange} className="button-next">
        Next
      </button>
    </div>
  );
};

export default Create;
