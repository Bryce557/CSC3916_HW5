import React, { Component } from 'react';
import {Navbar, NavItem, Nav} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'
import {logoutUser} from "../actions/authActions";

class Movieheader extends Component {
    logout() {
        this.props.dispatch(logoutUser())
    }

    render() {
        return (
            <div>
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            Movie App
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav>
                        <LinkContainer to="/movieList">
                            <NavItem eventKey={1} disabled={!this.props.loggedIn}>Movie List</NavItem>
                        </LinkContainer>
                        <LinkContainer to={"/movie/" + (this.props.selectedMovie ? this.props.selectedMovie._id : '')}>
                            <NavItem eventKey={2} disabled={!this.props.loggedIn}>Movie Details</NavItem>
                        </LinkContainer>
                        <LinkContainer to="/signin">
                            <NavItem eventKey={3}>{this.props.loggedIn ? <button onClick={this.logout.bind(this)}>Logout</button> : 'Login'}</NavItem>
                        </LinkContainer>
                    </Nav>
                </Navbar>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        loggedIn : state.auth.loggedIn,
        username : state.auth.username,
        selectedMovie: ''
    }
}