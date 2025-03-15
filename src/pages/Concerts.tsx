import React, { useState, useEffect } from "react";
import concertService from "../services/concertService";
import { Concert } from "../types/Concert";

const ConcertApp: React.FC = () => {
  const [concerts, setConcerts] = useState<Concert[]>([]);

  useEffect(() => {
    concertService.getConcerts().then((data) => setConcerts(data));
  }, []);

  return (
    <div>
      <h1>Upcoming Concerts</h1>
      <ul>
        {concerts.map((concert) => (
          <li key={concert.id}>
            {concert.performer} - {concert.startTime} ({concert.duration} min){" "}
            {concert.isCanceled ? "🚫 Canceled" : ""}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ConcertApp;
