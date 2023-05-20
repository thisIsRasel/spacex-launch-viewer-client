import UpcomingLaunches from "views/UpcomingLaunches"

var routes = [
    {
        path: "/upcoming-launches",
        name: "Launches",
        icon: "ni ni-spaceship text-red",
        component: UpcomingLaunches,
        layout: "/admin"
      },
];

export default routes;
