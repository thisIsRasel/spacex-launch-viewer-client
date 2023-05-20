import {
  Container,
  Row
} from "reactstrap";

import Header from "components/Headers/Header.js";
import DataTable from "./DataTable";
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getUpcomingLaunches } from "services/SpaceXService";

const Tables = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const page = queryParams.get('page') || 1;
  let [pageNumber, setPageNumber] = useState(page);
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    getUpcomingLaunches(pageNumber)
      .then(response => {
        setLaunches(response);
      });
  }, [pageNumber]);

  return (
    <>
      <Header title="Upcoming Launches"/>
      
      <Container className="mt--7" fluid>
        <Row>
          <DataTable 
            data={launches} 
            pageNumber={pageNumber} 
            setPageNumber={setPageNumber}>
          </DataTable>
        </Row>
      </Container>
    </>
  );
};

export default Tables;
