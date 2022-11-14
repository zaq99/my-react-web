import './../CSS/ListSkill.css'

const ListSkill = () => {
    const logoSkill = [
        {
            id: 1,
            name: 'Figma Logo',
            logo: '/src/assets/figma-logo.png'
        },
        {
            id: 2,
            name: 'HTML Logo',
            logo: '/src/assets/html-logo.png'
        },
        {
            id: 3,
            name: 'CSS Logo',
            logo: '/src/assets/css-logo.png'
        },
        {
            id: 4,
            name: 'Bootstrap Logo',
            logo: '/src/assets/btr-logo.png'
        },
        {
            id: 5,
            name: 'Git Logo',
            logo: '/src/assets/git-logo.png'
        },
        {
            id: 6,
            name: 'Js Logo',
            logo: '/src/assets/js-logo.png'
        },
        {
            id: 7,
            name: 'Github Logo',
            logo: '/src/assets/github-logo.png'
        },
        {
            id: 8,
            name: 'Illuastator Logo',
            logo: '/src/assets/ai-logo.png'
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