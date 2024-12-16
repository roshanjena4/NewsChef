import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

    return (
        // <>
        //     <nav className="navbar navbar-expand-lg bg-dark fixed-top mb-2 " data-bs-theme="dark">
        //         <div className="container-fluid">
        //             <NavLink className="navbar-brand" to="/">News chef</NavLink>
        //             <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        //                 <span className="navbar-toggler-icon"></span>
        //             </button>
        //             <div className="collapse navbar-collapse" id="navbarNav">
        //                 <ul className="navbar-nav">
        //                     <li className="nav-item">
        //                         <NavLink className="nav-link " to="/">Home</NavLink>
        //                     </li>

        //                     <li className="nav-item">
        //                         <NavLink className="nav-link " to="/business">Business</NavLink>
        //                     </li>
        //                     <li className="nav-item">
        //                         <NavLink className="nav-link " to="/entertainment">Entertainment</NavLink>
        //                     </li>
        //                     <li className="nav-item">
        //                         <NavLink className="nav-link " to="/general">General</NavLink>
        //                     </li>
        //                     <li className="nav-item">
        //                         <NavLink className="nav-link " to="/health">Health</NavLink>
        //                     </li>
        //                     <li className="nav-item">
        //                         <NavLink className="nav-link " to="/science">Science</NavLink>
        //                     </li>
        //                     <li className="nav-item">
        //                         <NavLink className="nav-link " to="/sports">Sports</NavLink>
        //                     </li>
        //                     <li className="nav-item">
        //                         <NavLink className="nav-link " to="/technology">Technology.</NavLink>
        //                     </li>


        //                 </ul>
        //             </div>
        //         </div>
        //     </nav>
        // </>
        <nav className="navbar navbar-expand-lg bg-dark fixed-top mb-3" data-bs-theme="dark">
        <div className="container-fluid">
            <NavLink className="navbar-brand fw-bold fs-3" to="/">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    className="bi bi-newspaper"
                    viewBox="0 0 16 16"
                >
                    <path d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5z" />
                    <path d="M2 3h10v2H2zm0 3h4v3H2zm0 4h4v1H2zm0 2h4v1H2zm5-6h2v1H7zm3 0h2v1h-2zM7 8h2v1H7zm3 0h2v1h-2zm-3 2h2v1H7zm3 0h2v1h-2zm-3 2h2v1H7zm3 0h2v1h-2z" />
                </svg>{" "}
                News Chef
            </NavLink>
            <button
                className="navbar-toggler collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/business">Business</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/entertainment">Entertainment</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/general">General</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/health">Health</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/science">Science</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/sports">Sports</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/technology">Technology</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    


    )
}

export default Navbar
