import {
    Card,
    CardFooter,
    Media,
    Pagination,
    PaginationItem,
    PaginationLink,
    Table
  } from "reactstrap";
  import { Link } from "react-router-dom";
  
  import Moment from 'moment';
  
  const DataTable = (props) => {
    const data = props.data;
    const pageNumber = props.pageNumber;
    const setPageNumber = props.setPageNumber;
    const MAX_RECORDS_PER_PAGE = 10;
  
    const incrementPageNumber = (e) => {
      e.preventDefault();
      setPageNumber(pageNumber+1);
    }
  
    const decrementPageNumber = (e) => {
      e.preventDefault();
      setPageNumber(pageNumber-1);
    }
  
    return (
      <>
        <div className="col">
          <Card className="shadow">
            <Table className="align-items-center table-flush" responsive>
              <thead className="thead-light">
                <tr>
                  <th scope="col">Mission Name</th>
                  <th scope="col">Launch Site</th>
                  <th scope="col" className="text-center">Launch Date (UTC)</th>
                  <th scope="col" className="text-center">Launch Success</th>
                  <th scope="col" />
                </tr>
              </thead>
              <tbody>
                {
                  data.map((launch, key) =>
                    <tr key={key}>
                      <th scope="row">
                        <Media className="align-items-center">
                          <Media>
                            <span className="mb-0 text-sm">
                              {launch.missionName}
                            </span>
                          </Media>
                        </Media>
                      </th>
                      <td>{launch.launchSite?.siteName}</td>
                      <td className="text-center">{Moment(launch.launchDateUtc).format('d MMM, YYYY')}</td>
                      <td className="text-center">{launch.launchSuccess ? 'Yes' : 'No'}</td>
                      <td className="text-center">
                        <Link
                          className="h4 mb-0 d-lg-inline-block"
                          to={`/launches/${launch.flightNumber}`}
                        >
                          Details
                        </Link>
                      </td>
                    </tr>
                  )
                }
              </tbody>
            </Table>
            {data.length === 0 ? <p className="text-center mt-4 mb-4">No data found</p> : ""}

            <CardFooter className="py-4">
              <nav aria-label="...">
                <Pagination
                  className="pagination justify-content-end mb-0"
                  listClassName="justify-content-end mb-0"
                >
                  <PaginationItem className={pageNumber === 1 ? "disabled": ""}>
                    <PaginationLink
                      href="#pablo"
                      onClick={(e) => decrementPageNumber(e)}
                      tabIndex="-1"
                    >
                      <i className="fas fa-angle-left" />
                      <span className="sr-only">Previous</span>
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem className={data.length < MAX_RECORDS_PER_PAGE ? "disabled" : ""}>
                    <PaginationLink
                      href="#pablo"
                      onClick={(e) => incrementPageNumber(e)}
                    >
                      <i className="fas fa-angle-right" />
                      <span className="sr-only">Next</span>
                    </PaginationLink>
                  </PaginationItem>
                </Pagination>
              </nav>
            </CardFooter>
          </Card>
        </div>
      </>
    );
  };
  
  export default DataTable;
  