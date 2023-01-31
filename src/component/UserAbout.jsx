import "./../CSS/UserAbout.css";
import FotoProfil from "../assets/Mohammad-Rozakul.png";
import Zaq from "../assets/zaq-red.png";

const UserAbout = ({ name, namePage }) => {
    return (
        <>
            <div className="d-flex align-items-center gap-3">
                <img src={Zaq} alt="" height={80} className="userProfile" />
                <div className="mt-3">
                    <h4 className="fw-semibold">{name}</h4>
                    <p>{namePage}</p>
                </div>
            </div>
        </>
    );
};

export default UserAbout;
