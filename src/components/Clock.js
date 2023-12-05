import axios from "axios";
import React, { useState, useEffect } from "react";

const Clock = () => {
  // Implement clock logic here
  const [currentTime, setCurrentTime] = useState(new Date());
  const [timeZone, setTimeZone] = useState([]);
  const [selectedZone, setSelectedZone] = useState("");
  const [isStart, setStart] = useState(true);
  let continents;

  useEffect(() => {
    const fetchZones = async () => {
      const zones = await axios.get("https://worldtimeapi.org/api/timezone");
      setTimeZone(zones.data);
    };

    fetchZones();
  }, []);

  useEffect(() => {
    if (isStart) {
      const intervalId = setInterval(() => {
        setCurrentTime((prevTime) => {
          const newTime = new Date(prevTime);
          newTime.setSeconds(newTime.getSeconds() + 1);
          return newTime;
        });
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [isStart]);

  const handleTimezoneChange = async (event) => {
    if (event.target.value) {
      setSelectedZone(event.target.value);
      let response = await axios.get(
        "http://worldtimeapi.org/api/timezone/" + event.target.value
      );

      const selectedTime = response.data.datetime;
      let time = new Date(selectedTime);
      setCurrentTime(new Date(selectedTime.split("+")[0]));
      console.log(new Date(selectedTime.split("+")[0]).toLocaleTimeString());
    }
  };

  const separateTimezones = () => {
    const continents = {};

    // Separate timezones into continents and countries
    timeZone.forEach((timezone) => {
      const [continent, ...country] = timezone.split("/");

      if (!continents[continent]) {
        continents[continent] = [];
      }
      continents[continent].push(country.join("/"));
    });

    return continents;
  };

  continents = separateTimezones();

  return (
    <div className="row justify-content-between">
      <div className="col-3 align-self-center">
        <select
          className="form form-select form-select-sm"
          value={selectedZone}
          onChange={handleTimezoneChange}
        >
          <option value="" disabled>
            Select a timezone
          </option>
          {Object.entries(continents).map(([continent, countries]) => (
            <optgroup key={continent} label={continent}>
              {countries.map((country) => (
                <option
                  key={`${continent}/${country}`}
                  value={`${continent}/${country}`}
                >
                  {country}
                </option>
              ))}
            </optgroup>
          ))}
        </select>
      </div>

      <div className="col align-self-center text-end">
        {selectedZone + " Time : "}
        {currentTime && currentTime.toLocaleTimeString()}
        <button
          className={isStart ? "btn mx-4 bg-warning" : "btn mx-4 bg-success"}
          onClick={() => setStart(!isStart)}
        >
          {isStart ? "Stop" : "Start"}
        </button>
      </div>
    </div>
  );
};

export default Clock;
