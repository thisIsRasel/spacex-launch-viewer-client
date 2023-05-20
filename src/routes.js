import UpcomingLaunches from "views/UpcomingLaunches";
import PastLaunches from "views/PastLaunches";

var routes = [
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
