import '../App.css';
import logo from '../assets/logo.png';

const Navbar = () => {

    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark nav-bg">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img src={logo} className="logo mx-3 me-5" alt='Logo'></img>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="navigation-link nav-div me-3 " href="/">OUR PRODUCTS</a>
                        <a className="navigation-link nav-div me-3" href="/">ABOUT US</a>
                        <a className="navigation-link nav-div me-3" href="/">LIVE BETTER</a>
                        <a className="navigation-link nav-div me-3" href="/">CLAIMS & SUPPORT</a>
                        <a className="navigation-link nav-div" href="/">MY ACCOUNT</a>
                    </div>
                    </div>
                </div>
            </nav>
            <div className='underNav'>
                DISTRICT MANAGER
            </div>
        </div>
    );

};

export default Navbar;