import './../CSS/ListCertif.css'

const ListCertif = () => {
    const Certificate = [
        {
            id: 1,
            name: 'Skivul Badge HTML Dasar',
            Picture: '/src/assets/Skilvul-HTML-Dasar.png',
            Link: ''
        },
        {
            id: 2,
            name: 'Skivul Badge CSS Dasar',
            Picture: '/src/assets/Skilvul-css-dasar.png',
            Link: ''
        },
        {
            id: 3,
            name: 'Skivul Badge Javascript Dasar',
            Picture: '/src/assets/Skilvul-Javascript-Dasar.png',
            Link: ''
        },
        {
            id: 4,
            name: 'Skivul Badge Web Development Pemula',
            Picture: '/src/assets/Skilvul-development-pemula.png',
            Link: ''
        },

    ]

    return (
        <>
            <div className="list-sertif d-flex py-3 gap-3 flex-wrap">
                {Certificate.map((item) => (
                    <div key={item.id}>
                        <a href={item.Link}>
                            <img src={item.Picture} alt={item.name} height={180} className='berbayang sertif' />
                        </a>
                    </div>
                ))}
            </div>

        </>
    )
}

export default ListCertif