import React, { Component } from "react";


export default class Navbar extends Component {
    setCategory(args) {
        console.log("Category is being set to:", args);
        this.setState({
            category: args,
        });
    }

    constructor() {
        super()
        this.state = {
            catagory: 'general'
        }
        this.setCategory = this.setCategory.bind(this);

    }

    render() {
        return (

            <div>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="https://www.google.com">Navbar</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <a className="nav-link active" aria-current="page" href="https://www.google.com">Home</a>
                                <a className="nav-link" href="https://www.google.com">Features</a>
                                <a className="nav-link" href="https://www.google.com">Pricing</a>
                            </div>
                        </div>
                    </div>
                </nav>


            </div>
        );
    }
}