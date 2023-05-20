import React from "react";
import { useLocation, Route, Switch, Redirect } from "react-router-dom";

import AppNavbar from "components/Navbars/AppNavbar";
import Sidebar from "components/Sidebars/Sidebar.js";

import routes from "routes.js";

const AppLayout = (props) => {
  const mainContent = React.useRef(null);
  const location = useLocation();

  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainContent.current.scrollTop = 0;
  }, [location]);

  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
        return (
          <Route
            path={prop.path}
            component={prop.component}
            key={key}
          />
        );
    });
  };

  return (
    <>
      <Sidebar
        {...props}
        routes={routes}
        logo={{
          innerLink: "/upcoming-launches",
          imgSrc: require("../assets/img/brand/spacex-logo.png"),
          imgAlt: "..."
        }}
      />
      <div className="main-content" ref={mainContent}>
        <AppNavbar/>
        <Switch>
          {getRoutes(routes)}
          <Redirect from="*" to="/upcoming-launches" />
        </Switch>
      </div>
    </>
  );
};

export default AppLayout;
