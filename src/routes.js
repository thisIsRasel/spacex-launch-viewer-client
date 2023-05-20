import UpcomingLaunches from "views/UpcomingLaunches";
import PastLaunches from "views/PastLaunches";
import LaunchDetail from "views/LaunchDetail"

var routes = [
  {
    path: "/launches/:flightNumber",
    name: "User Profile",
    icon: "ni ni-spaceship text-red",
    component: LaunchDetail,
    layout: "/admin"
  },
  {
    path: "/upcoming-launches",
    name: "Launches",
    icon: "ni ni-spaceship text-red",
    component: UpcomingLaunches,
    layout: "/admin"
  },
  {
    path: "/past-launches",
    name: "Launches",
    icon: "ni ni-spaceship text-red",
    component: PastLaunches,
    layout: "/admin"
  },
];

export default routes;
