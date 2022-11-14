import './../CSS/ButtonNav.css'
import { Link } from "react-router-dom"

const ButtonNav = () => {

    return (
        <>
            <div className="button-Nav d-flex justify-content-center gap-3 p-5">
                <Link to='' className="card text-decoration-none px-5 py-1">About Me</Link>
                <Link to='my-skill' className="card text-decoration-none px-5 py-2">My Skill</Link>
                <Link to='my-certif' className="card text-decoration-none px-5 py-2">Certificate</Link>
            </div>
        </>
    )

}

export default ButtonNav