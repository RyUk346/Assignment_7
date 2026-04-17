"use client";

import FriendProvider from "@/context/context";
import React from "react";

const Providers = ({ children }) => {
  return <FriendProvider>{children}</FriendProvider>;
};

export default Providers;
