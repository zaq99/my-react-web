import UserAbout from "../component/UserAbout"
import './../CSS/AboutMe.css'

const AboutMe = ({ name }) => {
    console.log(name)

    return (
        <>
            <UserAbout name={name} namePage='About Me' />
            <div className="p-5 my-5">
                <p className="h3 content">I'm very interested in Front-End because I can make art real and useful to many people by coding. I am passionate about Front-End, and I believe that technology is not just a function but an art in itself.</p>
            </div>

        </>
    )
}

export default AboutMe