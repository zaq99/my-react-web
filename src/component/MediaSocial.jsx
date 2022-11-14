import IconWA from '../assets/icon-wa.png'
import IconIg from '../assets/icon-ig.png'
import IconLinkedin from '../assets/icon-linkedin.png'
import IconGithub from '../assets/icon-github.png'
import 'animate.css'

const MediaSocial = () => {
    const linkSocialMedia = [
        {
            id: 1,
            icon: `${IconGithub}`,
            link: 'https://github.com/zaq99/'
        },
        {
            id: 2,
            icon: `${IconIg}`,
            link: 'https://www.instagram.com/4r_razaq'
        },
        {
            id: 3,
            icon: `${IconWA}`,
            link: 'https://wa.me/089688745529'
        },
        {
            id: 4,
            icon: `${IconLinkedin}`,
            link: 'https://linkedin.com/in/mohammad-rozakul-munir'
        }
    ]

    return (
        <>
            <div className=' d-flex gap-2'>
                {linkSocialMedia.map((item) => (
                    <a key={item.id} className="icon-media bg-secondary">
                        <img src={item.icon} alt={item.nameLink} />
                    </a>
                ))}
            </div>
        </>
    )
}

export default MediaSocial