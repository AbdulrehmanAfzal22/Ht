import React, { useState } from "react";
import Sidebar from "./components/Sidebar/Index";
import Dashboard from "./srceens/Screen1/index";
import Notifications from "./srceens/Screen2/index";
// import Inventory from "./pages/Inventory";
// import Auctions from "./pages/Auctions";
// import Finance from "./pages/Finance";
// import Users from "./pages/Users";

function App() {
  const [page, setPage] = useState("dashboard"); 

  return (
    <>
      <Sidebar 
        mainheading="Auctioneer"
        position="Inventory Officer"
        account="Abdulrehman"
        setPage={setPage}   
      />

      {/* RIGHT SIDE CONTENT BASED ON PAGE */}
      {page === "dashboard" && <Dashboard />}
      {/* {page === "inventory" && <Inventory />}
      {page === "auctions" && <Auctions />}
      {page === "finance" && <Finance />}
      {page === "users" && <Users />} */}
       {page === "notifictions" && <Notifications />}
    </>
  );
}

export default App;
