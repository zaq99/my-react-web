import { frontendLogo, uidesignLogo } from "../assets";

const Skill = () => {
    return (
        <div>
            <h5 className="fw-semibold text-center mb-4">Skill</h5>
            <div className="d-flex justify-content-center gap-4">
                <div className="border py-2 px-4 rounded-2  d-flex align-items-center gap-3">
                    <img src={frontendLogo} alt="" width={60} />
                    <h5>UI Design</h5>
                </div>
                <div className="border  py-2 px-4 rounded-2 d-flex align-items-center gap-3">
                    <img src={uidesignLogo} alt="" width={60} />
                    <h5>UI Design</h5>
                </div>
            </div>
        </div>
    );
};

export default Skill;
