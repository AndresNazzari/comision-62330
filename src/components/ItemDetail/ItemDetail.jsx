/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ItemDetail = ({name, description, price, image, stock}) => {   
    return (
      <Card className="text-center">
        <Card.Header>{name}</Card.Header>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>${price}</Card.Title>
          <Card.Text>
            {description}
          </Card.Text>
          <Button variant="primary">Comprar</Button>
        </Card.Body>
        <Card.Footer className="text-muted">solo quedan {stock}</Card.Footer>
      </Card>
    )
}

export default ItemDetail;