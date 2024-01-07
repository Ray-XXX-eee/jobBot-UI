import React, { useState } from "react";
import { Link } from "react-router-dom";

const Test = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const handleSidebarToggle = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div class="flex h-[72px] w-8 items-center justify-center" data-projection-id="204">
      <div class="flex h-6 w-6 flex-col items-center" data-projection-id="205">
        <div class="h-3 w-1 rounded-full bg-token-text-primary" data-projection-id="206"></div>
        <div class="h-3 w-1 rounded-full bg-token-text-primary" data-projection-id="207"></div>
      </div>
    </div>
  );
};

export default Test;
