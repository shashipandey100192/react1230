import React from 'react'
// import Button from 'react-bootstrap/Button';
import { Button, Card } from 'react-bootstrap';

function Myreactbootstrap() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-12'>
          <button className='btn btn-primary'>bootstrap button</button>

          <Button variant="primary">Primary</Button>
          <Card>
            <Card.Img variant="top" src="photo/img2.jpg" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>

        </div>
      </div>
    </div>
  )
}

export default Myreactbootstrap