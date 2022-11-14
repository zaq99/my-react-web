
import { Link } from "react-router-dom"
import './../CSS/Nav.css';


const Navbar = () => {

    return (
        <>
            <nav className="container d-flex justify-content-between align-items-center">
                <h5 className="fw-bold warna-utama">Zaq.</h5>
                <div>
                    <Link to='/' className="mx-3 text-decoration-none">Home</Link>
                    <Link to='/about' className="mx-3 text-decoration-none">About</Link>
                    <Link to='/portofolio' className="mx-3 text-decoration-none">Portofolio</Link>
                    <Link to='/article' className="mx-3 text-decoration-none">Article</Link>
                </div>
                <button className="tombol btn btn-primary warna-bg-utama" id="btnKontak">Kontak</button>
            </nav>
        </>
    )
}

export default Navbar