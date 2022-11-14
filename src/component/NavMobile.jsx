import { Link } from 'react-router-dom'
import './../CSS/NavMobile.css'

const NavMobile = () => {
    return (
        <>
            <div id='NavMobile' className='py-2 mb-3'>
                <Link to='/' className="mx-2 text-decoration-none">Home</Link>
                <Link to='/about' className="mx-2 text-decoration-none">About</Link>
                <Link to='/portofolio' className="mx-2 text-decoration-none">Portofolio</Link>
                <Link to='/article' className="mx-2 text-decoration-none">Article</Link>
            </div>
        </>
    )
}

export default NavMobile