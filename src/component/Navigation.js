import React, { Fragment } from 'react'

function Navigation() {
    return (
        <Fragment>
            <nav className="navbar navbar-expand-lg navbar-light bg-light m-3">
                <div className="container-fluid">
                    <h6 className="navbar-brand" >Navbar</h6>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link active" aria-current="page" >Home</a>
                            <a className="nav-link" >Features</a>
                            <a className="nav-link" >Pricing</a>
                        </div>
                    </div>
                </div>
            </nav>
        </Fragment>
    )
}

export default Navigation;