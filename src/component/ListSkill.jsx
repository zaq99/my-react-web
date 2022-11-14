import { aiLogo, btrLogo, cssLogo, figmaLogo, githubLogo, gitLogo, htmlLogo, jsLogo } from '../assets'
import './../CSS/ListSkill.css'

const ListSkill = () => {
    const logoSkill = [
        {
            id: 1,
            name: 'Figma Logo',
            logo: figmaLogo
        },
        {
            id: 2,
            name: 'HTML Logo',
            logo: htmlLogo
        },
        {
            id: 3,
            name: 'CSS Logo',
            logo: cssLogo
        },
        {
            id: 4,
            name: 'Bootstrap Logo',
            logo: btrLogo
        },
        {
            id: 5,
            name: 'Git Logo',
            logo: gitLogo
        },
        {
            id: 6,
            name: 'Js Logo',
            logo: jsLogo
        },
        {
            id: 7,
            name: 'Github Logo',
            logo: githubLogo
        },
        {
            id: 8,
            name: 'Illuastator Logo',
            logo: aiLogo
        },
    ]

    return (
        <>
            <div className="container list-skill d-flex justify-content-center p-3 gap-3 my-5">
                {logoSkill.map((item) => (
                    <div key={item.id}>
                        <img src={item.logo} alt={item.name} width={80} className='logo-skill' />
                    </div>
                ))}
            </div>

        </>
    )
}

export default ListSkill