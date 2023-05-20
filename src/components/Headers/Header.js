import { Container, Row, Col } from "reactstrap";

const Header = (props) => {
  return (
    <>
      <div 
        className="header pb-8 d-flex align-items-center"
        style={{
          height: "380px",
          backgroundImage:
            "url(" + require("../../assets/img/theme/rocket-cover.png") + ")",
          backgroundSize: "cover",
          backgroundPosition: "center top"
        }}>

        <span className="mask bg-gradient-default opacity-8" />
        <Container fluid>
          <Row>
            <Col lg="12" md="12">
              <h1 className="display-2 text-white">{props.title}</h1>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Header;
