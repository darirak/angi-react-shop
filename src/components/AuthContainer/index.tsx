import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";

const AuthContainer: React.FunctionComponent<IAuthContainerProps> = (props) => {
  const { header, children } = props;

  return (
    <Container>
      <Row>
        <Col
          xs={{ size: 10, offset: 1 }}
          sm={{ size: 8, offset: 2 }}
          md={{ size: 6, offset: 3 }}
          lg={{ size: 4, offset: 4 }}
        >
          <Card className="mt-5">
            <CardHeader className="bg-primary text-white">{header}</CardHeader>
            <CardBody>{children}</CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export interface IAuthContainerProps {
  children?: React.ReactNode;
  header: any;
}

export default AuthContainer;
