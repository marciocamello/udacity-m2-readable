import React, {Component} from 'react';
import Octicon, {Book} from '@githubprimer/octicons-react'
import {NavLink} from "react-router-dom";

class HeaderContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <header>
                <div className="navbar navbar-dark bg-dark shadow-sm">
                    <div className="container d-flex justify-content-between">
                        <NavLink to='/' exact className="navbar-brand d-flex align-items-center">
                            <strong><Octicon icon={Book} className="mr-1" size={20}/> Readble</strong>
                        </NavLink>
                        <div className="col-4 d-flex justify-content-end align-items-center">
                            <a className="btn btn-sm btn-outline-secondary" href="#">Sign up</a>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default HeaderContainer;