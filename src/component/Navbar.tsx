import { Container, Navbar } from "react-bootstrap"

export const TopNav: Function = (): JSX.Element => {
    return (
        <>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Stock Trading</Navbar.Brand>
                </Container>
            </Navbar>
        </>
    )
}