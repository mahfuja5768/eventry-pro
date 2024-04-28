import React from "react";
import EventCard from "./EventCard";
import { getAllEvents } from "@/db/queries";

export default async function EventList() {
  const allEvents = await getAllEvents();
  console.log("a--->", allEvents);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
      <EventCard />
    </div>
  );
}
