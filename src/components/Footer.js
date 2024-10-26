import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div>

            <footer className="text-center text-lg-start bg-light text-muted">

                <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom " style={{ borderTop: `2px solid black`, backgroundColor: `rgba(0, 0, 0, 0.05)` }}>

                    <div className="me-3 d-none d-lg-block">
                        <span><h4 className='text-dark' >Get connected with us on social networks </h4></span>
                    </div>


                    <div>
                        <Link to="" className="me-4 text-reset">
                            <i class="fa-brands fa-2x fa-facebook" style={{ color: `blue` }} ></i>
                        </Link>
                        <Link to="" className="me-4 text-reset">
                            <i className="fab fa-2x fa-twitter" style={{ color: `skyblue` }}></i>
                        </Link>
                        <Link to="https://google.com/" className="me-4 text-reset">
                            <i className=" fab fa-2x fa-google" style={{ color: ` orange` }}></i>
                        </Link>
                        <Link to="" className="me-4 text-reset">
                            <i className="fab fa-2x fa-instagram" style={{ color: `red` }}></i>
                        </Link>
                        <Link to="" className="me-4 text-reset">
                            <i className="fab fa-2x fa-linkedin" style={{ color: `blue` }}></i>
                        </Link>
                        <Link to="" className="me-4 text-reset">
                            <i className="fab  fa-2x fa-github" style={{ color: `black` }}></i>
                        </Link>
                    </div>

                </section>




                <div className="text-center p-4" style={{ backgroundColor: `rgba(0, 0, 0, 0.05)`, borderTop: '2px solid black' }}>
                    © 2023 Copyright:
                    <Link className="text-reset fw-bold" to="/">mhatrepranay1234@gmail.com</Link>
                </div>

            </footer>

        </div>
    )
}

export default Footer
