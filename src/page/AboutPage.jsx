import { Button } from "bootstrap"
import { Link, Outlet, useParams } from "react-router-dom"
import ButtonNav from "../component/ButtonNav"
import UserAbout from "../component/UserAbout"

const AboutPage = () => {

    return (
        <>
            <div className="container">
                <Outlet />
            </div>
            <ButtonNav />
        </>
    )
}

export default AboutPage