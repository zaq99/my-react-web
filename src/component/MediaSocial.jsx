import IconWA from '../assets/icon-wa.png'
import IconIg from '../assets/icon-ig.png'
import IconLinkedin from '../assets/icon-linkedin.png'
import IconGithub from '../assets/icon-github.png'
import 'animate.css'

const MediaSocial = () => {
    const linkSocialMedia = [
        {
            id: 1,
            icon: '/src/assets/icon-github.png',
            nameLink: 'Github',
            link: 'https://github.com/zaq99/'
        },
        {
            id: 2,
            icon: '/src/assets/icon-ig.png',
            nameLink: 'Instagram',
            link: 'https://www.instagram.com/4r_razaq'
        },
        {
            id: 3,
            icon: '/src/assets/icon-wa.png',
            nameLink: 'Whatsapp',
            link: 'https://wa.me/089688745529'
        },
        {
            id: 4,
            icon: '/src/assets/icon-linkedin.png',
            nameLink: 'LinkedIn',
            link: 'https://linkedin.com/in/mohammad-rozakul-munir'
        }
    ]

    return (
        <>
            <div className=' d-flex gap-2'>
                {linkSocialMedia.map((item) => (
                    <div key={item.id} className="icon-media bg-secondary">
                        <img src={item.icon} alt={item.nameLink} />
                    </div>

                    // setTimeout(() => {
                    //     <div key={item.id} className="icon-media bg-secondary animate__animated animate__fadeInUpBig animate__delay-{item.id}s">
                    //         <img src={item.icon} alt={item.nameLink} />
                    //     </div>
                    // }, 2000);
                ))}





                {/* <div className="icon-media bg-secondary animate__animated animate__fadeInUpBig animate__delay-1s">
                    <img src={IconIg} alt="icon-ig" />
                </div>
                <div className="icon-media bg-secondary animate__animated animate__fadeInUpBig animate__delay-2s">
                    <img src={IconWA} alt="icon-wa" />
                </div>
                <div className="icon-media bg-secondary animate__animated animate__fadeInUpBig animate__delay-3s">
                    <img src={IconLinkedin} alt="icon-linkedin" />
                </div>
                <div className="icon-media bg-secondary animate__animated animate__fadeInUpBig animate__delay-4s">
                    <img src={IconGithub} alt="icon-github" /> */}
            </div>
        </>
    )
}

export default MediaSocial