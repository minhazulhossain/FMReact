import { Offcanvas } from "react-bootstrap";


export default function SideCart(props){
    return(
        <Offcanvas show={props.show} placement={props.placement} onHide={props.close} >
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>{props.title}</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="side-cart-body-wrapper p-0">
                {props.children}
            </Offcanvas.Body>
        </Offcanvas>
    )
}