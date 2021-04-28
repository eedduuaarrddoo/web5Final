import Navbar1 from "../../components/Navbar1" ;
import Footer1 from "../../components/Footer1";
import {Card,ListGroup} from 'react-bootstrap';

function Formularios() {


    return (
        <>
        <Navbar1/>
<h1>Formularios</h1>
<Card style={{ width: '18rem' }}>
  <ListGroup variant="flush">
  <Card.Link href="formulario">Anexo I - FICHA DE REGISTRO DE PRÉ-PROJETO - RESOLUÇÃO Nº 02/2019</Card.Link>
  </ListGroup>
</Card>
        <Footer1/>

        </>
    );
}
export default Formularios;