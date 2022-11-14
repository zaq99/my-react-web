import UserAbout from "../component/UserAbout"
import ListSkill from "../component/ListSkill"

const AboutMySkill = ({ name }) => {
    console.log(name)

    return (
        <>
            <UserAbout name={name} namePage='My Skill' />
            <ListSkill />

        </>
    )
}

export default AboutMySkill