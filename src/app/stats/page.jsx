"use client";
import { Legend, Pie, PieChart, Tooltip } from "recharts";
import { useContext } from "react";
import { FriendsContext } from "@/context/context";

const Stats = () => {
  const { timelineEvents } = useContext(FriendsContext);

  const textCount = timelineEvents.filter(
    (event) => event.type === "text",
  ).length;
  const callCount = timelineEvents.filter(
    (event) => event.type === "call",
  ).length;
  const videoCount = timelineEvents.filter(
    (event) => event.type === "video",
  ).length;

  const totalEvents = callCount + textCount + videoCount;

  const data = [
    { name: "Text", value: textCount, fill: "#7E35E1" },
    { name: "Call", value: callCount, fill: "#244D3F" },
    { name: "Video", value: videoCount, fill: "#37A163" },
  ];

  return (
    <div className="bg-[#F8FAFC]">
      <div className="container mx-auto py-10 md:py-20">
        <h2 className="text-[#1F2937] font-bold text-5xl">
          Friendship Analytics
        </h2>
        <div className="my-10 shadow p-10 rounded-md  bg-white ">
          <h2 className="font-medium text-xl text-[#244D3F] mb-16">
            By Interaction Type
          </h2>
          <PieChart
            style={{
              width: "100%",
              maxWidth: "500px",
              maxHeight: "80vh",
              margin: "auto",
              aspectRatio: 1,
            }}
            responsive
          >
            {totalEvents === 0 ? (
              <text
                x="50%"
                y="50%"
                textAnchor="middle"
                dominantBaseline="middle"
                className="text-xl font-semibold text-gray-500"
              >
                Nothing found in timeline
              </text>
            ) : (
              <Pie
                data={data}
                innerRadius="80%"
                outerRadius="100%"
                cornerRadius="50%"
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
                isAnimationActive={true}
              />
            )}
            <Legend />
            <Tooltip />
          </PieChart>
        </div>
      </div>
    </div>
  );
};

export default Stats;
