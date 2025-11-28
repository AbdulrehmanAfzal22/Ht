import React from "react";

export default function NotificationsUI() {
  const notifications = [
    {
      id: 1,
      title: "Payment Cleared",
      desc: "Lot #3456 - Antique Persian Rug",
      time: "2m ago",
      icon: "💲",
      handled: false,
    },
    {
      id: 2,
      title: "Lot Booked-In",
      desc: "Lot #3459 - 19th Century Oak Dresser",
      time: "10m ago",
      icon: "📦",
      handled: false,
    },
    {
      id: 3,
      title: "Consignment Deadline Approaching",
      desc: "Vendor ID #8821 - Modern Art Collection",
      time: "1h ago",
      icon: "⏳",
      handled: false,
    },
    {
      id: 4,
      title: "Payment Cleared",
      desc: "Lot #3450 - Victorian Era Brooch",
      time: "Yesterday",
      icon: "✔️",
      handled: true,
    },
  ];

  return (
    <div className="min-h-screen bg-[#f5f7fa] p-10 flex justify-center">
      <div className="w-full max-w-2xl">

        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-semibold">Notifications</h1>
            <p className="text-gray-500 text-sm mt-1">
              Review and manage all operational updates.
            </p>
          </div>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700">
            Mark all as handled
          </button>
        </div>


        <div className="flex gap-4 mb-6">
          <button className="px-4 py-1 bg-blue-50 text-blue-700 rounded-full">All</button>
          <button className="px-4 py-1 bg-gray-100 text-gray-700 rounded-full">Unread</button>
          <button className="px-4 py-1 bg-gray-100 text-gray-700 rounded-full">Handled</button>
        </div>


        {notifications.map((n) => (
          <div
            key={n.id}
            className={`flex justify-between items-start bg-white p-4 rounded-xl shadow mb-3 border ${{
              true: "opacity-50 line-through text-gray-400",
              false: "",
            }[n.handled]}`}
          >
            <div className="flex gap-4">
              <div className="text-2xl">{n.icon}</div>
              <div>
                <p className="font-semibold">{n.title}</p>
                <p className="text-sm text-gray-500">{n.desc}</p>
                <p className="text-xs text-gray-400 mt-1">{n.time}</p>
              </div>
            </div>
            <button className="text-blue-600 text-sm hover:underline">
              {n.handled ? "Undo" : "Mark as Handled"}
            </button>
          </div>
        ))}

   
        <div className="text-center mt-10 p-10 bg-white rounded-xl shadow">
          <div className="text-4xl mb-3">🎉</div>
          <p className="font-semibold text-lg">All caught up!</p>
          <p className="text-gray-500 text-sm">There are no new notifications.</p>
        </div>
      </div>
    </div>
  );
}
