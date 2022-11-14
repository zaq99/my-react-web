import UserAbout from "../component/UserAbout"
import ListCertif from "../component/ListCertif"

const AboutMyCertif = ({ name }) => {
    return (
        <>
            <UserAbout name={name} namePage='Certificate' />
            <ListCertif />
        </>
    )
}

export default AboutMyCertif