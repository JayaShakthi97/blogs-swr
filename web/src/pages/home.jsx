import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import Card from "react-bootstrap/Card";

import { usePlanetList } from "../api/planets";

const HomePage = () => {
  const { data, error, isLoading } = usePlanetList();

  // show spinner when data is loading
  if (isLoading) {
    return (
      <div className="pt-2 text-center">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  // show error when there is a error in data fetch
  if (error) {
    <div className="pt-2 text-center">
      <Alert className="mx-auto" variant="danger">
        Something went wrong
      </Alert>
    </div>;
  }

  // render planets list
  return (
    <div>
      {data.map((planet) => (
        <Card key={planet.id} className="m-1">
          <Card.Body className="d-flex">
            <Card.Img style={{ height: 60, width: 60, marginRight: 20 }} src={planet.image} />
            <div >
              <Card.Title>{planet.name.toUpperCase()}</Card.Title>
              <Card.Text>{planet.description}</Card.Text>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default HomePage;
