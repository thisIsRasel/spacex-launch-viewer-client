import {
  Card,
  CardBody,
  Form,
  Container,
  Row,
  Col
} from "reactstrap";

import DetailHeader from "components/Headers/DetailHeader";
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getLaunchByFlightNumber } from "services/SpaceXService";
import Moment from 'moment';

function ExternalLink(props) {
  var url = props.url;

  if (!url) {
    return;
  }

  return (
    <div>
      <a href={url}>{url}</a>
    </div>
  );
}

const Profile = () => {
  const { flightNumber } = useParams();
  const [launch, setLaunch] = useState({});

  useEffect(() => {
    getLaunchByFlightNumber(flightNumber)
      .then(response => {
        setLaunch(response);
      });
  }, [flightNumber]);

  return (
    <>
      <DetailHeader launch={launch} />
      
      <Container className="mt--7" fluid>
        <Row>
          <Col className="order-xl-1" xl="10">
            <Card className="bg-secondary shadow">
              <CardBody>
                <Form>
                  <h6 className="heading-small text-muted mb-4">
                    Launch information
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col lg="6 mb-4">
                        <label
                          className="form-control-label"
                          htmlFor="input-username"
                        >
                          Site Name
                        </label>
                        <div>
                          <span>{launch.launchSite?.siteNameLong}</span>
                        </div>
                      </Col>
                      <Col lg="6 mb-4">
                        <label
                          className="form-control-label"
                          htmlFor="input-email"
                        >
                          Launch Date
                        </label>
                        <div>
                          <span>{Moment(launch.launchDateUtc).format('d MMM, YYYY')}</span>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="6 mb-4">
                        <label
                          className="form-control-label"
                          htmlFor="input-last-name"
                        >
                          Launch Window
                        </label>
                        <div>
                          <span>{launch.launchWindow || 0}</span>
                        </div>
                      </Col>
                      <Col lg="6 mb-4">
                        <label
                          className="form-control-label"
                          htmlFor="input-first-name"
                        >
                          Launch Status
                        </label>
                        <div>
                          <span>{launch.launchSuccess ? 'Success' : 'Fail'}</span>
                        </div>
                      </Col>
                    </Row>
                  </div>
                  <hr className="my-4" />
                  {/* Address */}
                  <h6 className="heading-small text-muted mb-4">
                    Rocket information
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col md="6 mb-4">
                        <label
                          className="form-control-label"
                          htmlFor="input-address"
                        >
                          Rocket ID
                        </label>
                        <div>
                          <span>{launch.rocket?.rocketId}</span>
                        </div>
                      </Col>
                      <Col lg="6 mb-4">

                        <label
                          className="form-control-label"
                          htmlFor="input-city"
                        >
                          Rocket Name
                        </label>
                        <div>
                          <span>{launch.rocket?.rocketName}</span>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="12 mb-4">
                        <label
                          className="form-control-label"
                          htmlFor="input-country"
                        >
                          Rocket Type
                        </label>
                        <div>
                          <span>{launch.rocket?.rocketType}</span>
                        </div>
                      </Col>
                    </Row>
                  </div>
                  <hr className="my-4" />
                  {/* Description */}
                  <h6 className="heading-small text-muted mb-4">Links</h6>
                  <div className="pl-lg-4">
                    <ExternalLink url={launch.links?.articleLink}></ExternalLink>
                    <ExternalLink url={launch.links?.videoLink}></ExternalLink>
                    <ExternalLink url={launch.links?.wikipedia}></ExternalLink>
                  </div>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Profile;
