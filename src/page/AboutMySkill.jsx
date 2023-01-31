import UserAbout from "../component/UserAbout";
import ListSkill from "../component/ListSkill";
import Skill from "../component/Skill";

const AboutMySkill = ({ name }) => {
    console.log(name);

    return (
        <>
            <UserAbout name={name} namePage="My Skill" />
            <Skill />
            <h5 className="fw-semibold text-center mt-5">Tools</h5>
            <ListSkill />
        </>
    );
};

export default AboutMySkill;
