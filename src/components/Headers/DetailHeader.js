import { Container, Row, Col } from "reactstrap";

const DetailHeader = (props) => {
  const launch = props.launch;

  return (
    <>
      <div
        className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
        style={{
          height: "380px",
          backgroundImage:
            "url(" + require("../../assets/img/theme/rocket-cover.png") + ")",
          backgroundSize: "cover",
          backgroundPosition: "center top"
        }}
      >
        {/* Mask */}
        <span className="mask bg-gradient-default opacity-8" />
        {/* Header container */}
        <Container className="d-flex align-items-center" fluid>
          <Row>
            <Col lg="12" md="12">
              <h1 className="display-2 text-white">{launch.missionName}</h1>
              <p className="text-white mt-0 mb-5">{launch.details}</p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default DetailHeader;
