import React from 'react';
import '../styles/header.css';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaUser } from 'react-icons/fa';


function Headers() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light px-5 py-2 shadow-bg sticky-left-corner">
            <div className="container-fluid">
                <div className="row w-100">
                    <div className="col-2" style={{ display: 'flex', alignItems: 'center' }}>
                        <Link to="/">
                            <img src="https://ik.imagekit.io/praveenarbs/api-images/business/8/16885585856646014.png" alt="Business Logo" style={{ width: '72px', height: '45px', backgroundColor: 'whitesmoke' }} />
                        </Link>
                        <div className="left-item" style={{ fontFamily: 'Roboto', fontWeight: 'bold', color: 'white', fontSize: '10px', marginLeft: '10px' }}></div>
                    </div>

                    <div className="col-10">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active text-white" aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-white" to="/category">Category</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-white" to="/contact">Contact</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-white" to="/more">More</Link>
                                </li>
                            </ul>
                            <div>
                            </div>

                            <Link to="/Login" style={{ color: 'white', marginRight: '11px', marginLeft: '7px' }}>
                                <FaUser size={22} />
                            </Link>

                            <a href="/" style={{ color: 'white' }}>
                                <FaShoppingCart size={22} />
                            </a>




                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Headers;
