import React, { Component } from 'react';
import {
    Navbar,
    NavbarBrand,
    Nav, NavItem,
    NavbarToggler,
    Collapse,
    Jumbotron,
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false,
            isModalOpen: false
        };

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggleNavbar() {
        this.setState({ isNavOpen: !this.state.isNavOpen});
    }

    toggleModal() {
        this.setState({ isModalOpen: !this.state.isModalOpen});
    }

    handleSubmit(event) {
        this.toggleModal();

        alert(`Username: ${this.username.value}\nPassword: ${this.password.value}\nRemember me: ${this.remember.checked}`);

        event.preventDefault();
    }

    render() {
        return (
            <>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNavbar} />
                        <NavbarBrand className="mr-auto menu" href="/">
                            <img src="./images/logo.png" className="logo" alt="Restorante Con Fusion" />
                        </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav className="ms-auto nav-menu" navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                        <span className="fa fa-home fa-sm" center></span><span>Home</span>
                                    </NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink className="nav-link" to="/menu">
                                        <span className="fa fa-bars fa-sm"></span><span>Menu</span>
                                    </NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink className="nav-link" to="/about">
                                        <span className="fa fa-info fa-sm"></span><span>About Us</span>
                                    </NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink className="nav-link" to="/contact">
                                        <span className="fa fa-share-alt fa-sm"></span><span>Contact Us</span>
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <Nav className="ms-auto" navbar>
                                <NavItem>
                                    <Button color="primary" onClick={this.toggleModal}>
                                        <span className="fa fa-sign-in"></span> Login
                                    </Button>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6 jumbo">
                                <h1 className="name">M Tucci S</h1>
                                <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader closeButton>Login</ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username" innerRef={input => this.username = input} />
                            </FormGroup>
                            <br />
                            <FormGroup>
                                <Label htmlFor="password">Passwrod</Label>
                                <Input type="password" id="password" name="password" innerRef={input => this.password = input} />
                            </FormGroup>
                            <br />
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember" innerRef={input => this.remember = input} />
                                    Remember me
                                </Label>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button type="submit" value="submit" color="primary" onClick={this.handleSubmit}>Login</Button>
                    </ModalFooter>
                </Modal>
            </>
        )
    }
}

export default Header;