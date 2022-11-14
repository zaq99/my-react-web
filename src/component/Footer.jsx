import MediaSocial from "./MediaSocial"
import './../CSS/Footer.css'

const Footer = () => {
    return (
        <>
            <div className="footer container-fluid d-flex align-items-center ">
                <div className="container d-flex justify-content-between align-items-center">
                    <div>Copyright@2022</div>
                    <MediaSocial />
                </div>
            </div>
        </>
    )
}

export default Footer