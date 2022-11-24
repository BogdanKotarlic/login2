import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <section className="vh-100 gradient-custom">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card bg-dark " style={{ borderRadius: '1rem' }}>
                            <div className="card-body p-5 text-center">

                                <div className="mb-md-5 mt-md-4 pb-5">

                                    <h2 className="fw-bold mb-2 text-uppercase text-white">Login</h2>
                                    <p className="text-white-50 mb-5">Please enter your email and password!</p>

                                    <div className="form-floating mb-3">
                                        <input type="email" id="typeEmail" className="form-control" />
                                        <label htmlFor="typeEmail">Email</label>
                                    </div>

                                    <div className="form-floating mb-3">
                                        <input type="password" id="typePassword" className="form-control" />
                                        <label className="form-label" htmlFor="typePassword">Password</label>
                                    </div>

                                    <p className="small mb-5 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p>

                                    <button className="btn btn-outline-light btn-lg px-5" type="submit">Login</button>

                                    <div className="d-flex justify-content-center text-center mt-4 pt-1">
                                        <a href="#!" className="text-white"><i className="fab fa-facebook-f fa-lg"></i></a>
                                        <a href="#!" className="text-white"><i className="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                                        <a href="#!" className="text-white"><i className="fab fa-google fa-lg"></i></a>
                                    </div>

                                </div>

                                <div>
                                    <p className="mb-0 text-white">Don't have an account? <a href="#!" className="text-white-50 fw-bold">Sign Up</a>
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default App;