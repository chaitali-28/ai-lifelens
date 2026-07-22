// "use client";

// import { useEffect, useRef, useState } from "react";
// import { Bell, CheckCheck, Trash2 } from "lucide-react";

// import {
//   getActivities,
//   markAllAsRead,
//   clearActivities,
// } from "@/lib/activity";

// export default function NotificationBell() {
//   const [open, setOpen] = useState(false);
//   const [notifications, setNotifications] = useState(
//     getActivities()
//   );

//   const ref = useRef<HTMLDivElement>(null);

//   const refreshNotifications = () => {
//     setNotifications(getActivities());
//   };

//   useEffect(() => {
//     refreshNotifications();

//     window.addEventListener(
//       "activityChanged",
//       refreshNotifications
//     );

//     return () => {
//       window.removeEventListener(
//         "activityChanged",
//         refreshNotifications
//       );
//     };
//   }, []);

//   useEffect(() => {
//     function handleClickOutside(e: MouseEvent) {
//       if (
//         ref.current &&
//         !ref.current.contains(e.target as Node)
//       ) {
//         setOpen(false);
//       }
//     }

//     document.addEventListener(
//       "mousedown",
//       handleClickOutside
//     );

//     return () =>
//       document.removeEventListener(
//         "mousedown",
//         handleClickOutside
//       );
//   }, []);

//   const unreadCount = notifications.filter(
//     (item) => !item.read
//   ).length;

//   const handleMarkAllRead = () => {
//     markAllAsRead();
//     refreshNotifications();
//   };

//   const handleClear = () => {
//     clearActivities();
//     refreshNotifications();
//   };

//   return (
//     <div className="relative" ref={ref}>
//       {/* Bell */}
//       <button
//         onClick={() => setOpen(!open)}
//         className="relative rounded-xl bg-white/20 p-3 transition hover:bg-white/30"
//       >
//         <Bell size={22} />

//         {unreadCount > 0 && (
//           <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
//             {unreadCount > 9 ? "9+" : unreadCount}
//           </span>
//         )}
//       </button>

//       {/* Dropdown */}
//       {open && (
//         <div className="absolute right-0 mt-3 w-[400px] overflow-hidden rounded-2xl bg-white text-slate-800 shadow-2xl">

//           {/* Header */}
//           <div className="flex items-center justify-between border-b p-4">

//             <div>
//               <h2 className="text-lg font-bold">
//                 Notifications
//               </h2>

//               <p className="text-sm text-slate-500">
//                 {unreadCount} unread
//               </p>
//             </div>

//             <div className="flex gap-2">

//               <button
//                 onClick={handleMarkAllRead}
//                 className="rounded-lg p-2 transition hover:bg-slate-100"
//                 title="Mark all as read"
//               >
//                 <CheckCheck size={18} />
//               </button>

//               <button
//                 onClick={handleClear}
//                 className="rounded-lg p-2 transition hover:bg-red-100 hover:text-red-600"
//                 title="Clear notifications"
//               >
//                 <Trash2 size={18} />
//               </button>

//             </div>

//           </div>

//           {/* Notification List */}
//           <div className="max-h-[450px] overflow-y-auto">

//             {notifications.length === 0 ? (
//               <div className="p-8 text-center text-slate-500">
//                 🎉 You're all caught up!
//               </div>
//             ) : (
//               notifications.map((item) => (
//                 <div
//                   key={item.id}
//                   className="flex gap-3 border-b p-4 transition hover:bg-slate-50"
//                 >
//                   {!item.read && (
//                     <div className="mt-2 h-3 w-3 rounded-full bg-blue-600" />
//                   )}

//                   {item.read && (
//                     <div className="mt-2 h-3 w-3 rounded-full bg-transparent" />
//                   )}

//                   <div className="flex-1">

//                     <p className="font-semibold">
//                       {item.title}
//                     </p>

//                     <p className="mt-1 text-sm text-slate-600">
//                       {item.description}
//                     </p>

//                     <p className="mt-2 text-xs text-slate-400">
//                       {item.time}
//                     </p>

//                   </div>

//                 </div>
//               ))
//             )}

//           </div>

//         </div>
//       )}
//     </div>
//   );
// }
"use client";

import { useEffect, useRef, useState } from "react";
import { Bell, CheckCheck, Trash2 } from "lucide-react";

import {
  getActivities,
  markAllAsRead,
  clearActivities,
} from "@/lib/activity";

export default function NotificationBell() {
  const [open, setOpen] = useState(false);
  const [notifications, setNotifications] = useState(
    getActivities()
  );

  const ref = useRef<HTMLDivElement>(null);

  const refreshNotifications = () => {
    setNotifications(getActivities());
  };

  useEffect(() => {
    refreshNotifications();

    window.addEventListener(
      "activityChanged",
      refreshNotifications
    );

    return () => {
      window.removeEventListener(
        "activityChanged",
        refreshNotifications
      );
    };
  }, []);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        ref.current &&
        !ref.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () =>
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
  }, []);

  const unreadCount = notifications.filter(
    (item) => !item.read
  ).length;

  const handleMarkAllRead = () => {
    markAllAsRead();
    refreshNotifications();
  };

  const handleClear = () => {
    clearActivities();
    refreshNotifications();
  };

  return (
    <div className="relative" ref={ref}>
      {/* Notification Bell */}

      <button
        onClick={() => setOpen(!open)}
        aria-label="Open notifications"
        aria-expanded={open}
        className="
          relative
          rounded-xl
          bg-white/20
          p-3
          text-white
          transition-all
          duration-300
          hover:bg-white/30
          hover:shadow-lg

          dark:bg-slate-800/70
          dark:hover:bg-slate-700
        "
      >
        <Bell size={22} />

        {unreadCount > 0 && (
          <span
            className="
              absolute
              -right-1
              -top-1
              flex
              h-5
              w-5
              items-center
              justify-center
              rounded-full
              bg-red-500
              text-xs
              font-bold
              text-white
              ring-2
              ring-white

              dark:ring-slate-900
            "
          >
            {unreadCount > 9 ? "9+" : unreadCount}
          </span>
        )}
      </button>

      {/* Dropdown */}

      {open && (
        <div
          className="
            absolute
            right-0
            z-50
            mt-3
            w-[calc(100vw-2rem)]
            max-w-[400px]
            overflow-hidden
            rounded-2xl
            border
            border-slate-200
            bg-white
            text-slate-800
            shadow-2xl

            dark:border-slate-700
            dark:bg-slate-900
            dark:text-slate-100
          "
        >
          {/* Header */}

          <div
            className="
              flex
              items-center
              justify-between
              border-b
              border-slate-200
              p-4

              dark:border-slate-700
            "
          >
            <div>
              <h2 className="text-lg font-bold">
                Notifications
              </h2>

              <p className="text-sm text-slate-500 dark:text-slate-400">
                {unreadCount} unread
              </p>
            </div>

            <div className="flex gap-2">
              {/* Mark All as Read */}

              <button
                onClick={handleMarkAllRead}
                aria-label="Mark all notifications as read"
                title="Mark all as read"
                className="
                  rounded-lg
                  p-2
                  text-slate-600
                  transition
                  hover:bg-slate-100
                  hover:text-blue-600

                  dark:text-slate-300
                  dark:hover:bg-slate-800
                  dark:hover:text-blue-400
                "
              >
                <CheckCheck size={18} />
              </button>

              {/* Clear Notifications */}

              <button
                onClick={handleClear}
                aria-label="Clear notifications"
                title="Clear notifications"
                className="
                  rounded-lg
                  p-2
                  text-slate-600
                  transition
                  hover:bg-red-100
                  hover:text-red-600

                  dark:text-slate-300
                  dark:hover:bg-red-950
                  dark:hover:text-red-400
                "
              >
                <Trash2 size={18} />
              </button>
            </div>
          </div>

          {/* Notification List */}

          <div className="max-h-[450px] overflow-y-auto">
            {notifications.length === 0 ? (
              <div
                className="
                  p-8
                  text-center
                  text-slate-500

                  dark:text-slate-400
                "
              >
                🎉 You're all caught up!
              </div>
            ) : (
              notifications.map((item) => (
                <div
                  key={item.id}
                  className="
                    flex
                    gap-3
                    border-b
                    border-slate-100
                    p-4
                    transition-colors
                    duration-200
                    hover:bg-slate-50

                    dark:border-slate-800
                    dark:hover:bg-slate-800
                  "
                >
                  {/* Unread Indicator */}

                  {!item.read ? (
                    <div
                      className="
                        mt-2
                        h-3
                        w-3
                        shrink-0
                        rounded-full
                        bg-blue-600
                      "
                    />
                  ) : (
                    <div className="mt-2 h-3 w-3 shrink-0 rounded-full bg-transparent" />
                  )}

                  {/* Notification Content */}

                  <div className="flex-1">
                    <p
                      className="
                        font-semibold
                        text-slate-900

                        dark:text-white
                      "
                    >
                      {item.title}
                    </p>

                    <p
                      className="
                        mt-1
                        text-sm
                        text-slate-600

                        dark:text-slate-300
                      "
                    >
                      {item.description}
                    </p>

                    <p
                      className="
                        mt-2
                        text-xs
                        text-slate-400

                        dark:text-slate-500
                      "
                    >
                      {item.time}
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}