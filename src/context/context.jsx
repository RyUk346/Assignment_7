"use client";
import { createContext, useState } from "react";

export const FriendsContext = createContext();

const FriendProvider = ({ children }) => {
  const [timelineEvents, setTimelineEvents] = useState([]);

  const addToTimeline = (type, friend) => {
    const newEvent = {
      id: `${friend.id}-${type}-${Date.now()}`,
      type,
      friend,
      createdAt: Date.now(),
    };

    setTimelineEvents((prev) => [newEvent, ...prev]);
  };

  const data = {
    timelineEvents,
    setTimelineEvents,
    addToTimeline,
  };

  return (
    <FriendsContext.Provider value={data}>{children}</FriendsContext.Provider>
  );
};

export default FriendProvider;
