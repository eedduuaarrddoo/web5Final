import Navbar1 from "../../../components/Navbar1" ;
import Footer1 from "../../../components/Footer1";
import {Button,Form, Container} from 'react-bootstrap';


function Formulario1() {


    return (
        <>
        <Navbar1/>


<Container className="py-5 d-flex justify-content-center">
<Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Informe seu Email para receber o formulario</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      
    </Form.Text>
  </Form.Group>

  
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
</Container >


        <Footer1/>

        </>
    );
}
export default Formulario1;