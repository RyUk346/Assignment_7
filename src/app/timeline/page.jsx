"use client";
import { FriendsContext } from "@/context/context";
import React, { useContext, useMemo, useState } from "react";
import { FiPhoneCall } from "react-icons/fi";
import { PiChatDotsBold, PiVideoCamera } from "react-icons/pi";

const Timeline = () => {
  const { timelineEvents } = useContext(FriendsContext);
  const [filterType, setFilterType] = useState("all");

  const eventConfig = {
    call: {
      icon: <FiPhoneCall className="text-3xl" />,
      label: "Call",
    },
    text: {
      icon: <PiChatDotsBold className="text-3xl" />,
      label: "Text",
    },
    video: {
      icon: <PiVideoCamera className="text-3xl" />,
      label: "Video call",
    },
  };

  const filteredEvents = useMemo(() => {
    if (filterType === "all") return timelineEvents;
    return timelineEvents.filter((event) => event.type === filterType);
  }, [timelineEvents, filterType]);

  const formatTime = (timestamp) => {
    return new Date(timestamp).toLocaleString("en-BD", {
      dateStyle: "medium",
      timeStyle: "short",
    });
  };

  return (
    <div className="bg-[#F8FAFC]">
      <div className="container mx-auto my-10 px-4">
        <div className="items-center mb-6 space-y-4">
          <h1 className="text-3xl font-bold">Timeline</h1>

          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="border border-slate-300 rounded-md px-4 py-2 bg-white"
          >
            <option value="all">Filter Timeline</option>
            <option value="call">Call</option>
            <option value="text">Text</option>
            <option value="video">Video</option>
          </select>
        </div>

        {filteredEvents.length === 0 ? (
          <h2 className="font-bold text-4xl text-center my-5 min-h-[300px] flex items-center justify-center">
            No timeline activity found!
          </h2>
        ) : (
          filteredEvents.map((event) => {
            const config = eventConfig[event.type];

            return (
              <div
                key={event.id}
                className="flex gap-4 items-center justify-between shadow p-4 rounded-md bg-slate-100 mb-4"
              >
                <div className="flex gap-3 items-center">
                  {config.icon}

                  <div>
                    <h2 className="font-medium text-xl text-[#244D3F] flex gap-2">
                      {config.label}
                      <span className="text-[#64748B] font-normal text-lg">
                        with {event.friend.name}
                      </span>
                    </h2>
                    <p className="text-sm text-slate-500 mt-1">
                      {formatTime(event.createdAt)}
                    </p>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Timeline;
