import { Container, Navbar } from "react-bootstrap";

const Header = () => {
    return (
        <div>
            <Navbar className="bg-body-tertiary">
                <Container>
                    <h1 className="display-5 fw-normal py-3">Knowledge Cafe</h1>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
