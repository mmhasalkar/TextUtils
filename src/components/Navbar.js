// import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'



export default function Navbar({title, aboutText, theme, changeTheme}) {

    return (
        <nav className={`navbar navbar-expand-lg navbar-${theme} bg-${theme}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">{aboutText}</Link>
                        </li>
                    </ul>
                    <div className="d-flex">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Change Theme
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><span className="dropdown-item" onClick={() => changeTheme('dark')}>Dark</span></li>
                                    <li><span className="dropdown-item" onClick={() => changeTheme('light')}>Light</span></li>
                                    <li><span className="dropdown-item" onClick={() => changeTheme('success')}>Green</span></li>
                                    <li><span className="dropdown-item" onClick={() => changeTheme('info')}>Blue</span></li>
                                    <li><span className="dropdown-item" onClick={() => changeTheme('warning')}>Orange</span></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

// Navbar.prototype = {
//     title: PropTypes.string.isRequired,
//     aboutText: PropTypes.string
// }

// Navbar.defaultProps = {
//     title: "Type title here",
//     aboutText: "About text here"
// }