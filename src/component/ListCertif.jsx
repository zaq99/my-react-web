import { sertfikatHtml, sertifikatCSS, sertifikatJs, sertifikatWeb } from '../assets'
import './../CSS/ListCertif.css'

const ListCertif = () => {
    const Certificate = [
        {
            id: 1,
            name: 'Skivul Badge HTML Dasar',
            Picture: sertfikatHtml,
            Link: ''
        },
        {
            id: 2,
            name: 'Skivul Badge CSS Dasar',
            Picture: sertifikatCSS,
            Link: ''
        },
        {
            id: 3,
            name: 'Skivul Badge Javascript Dasar',
            Picture: sertifikatJs,
            Link: ''
        },
        {
            id: 4,
            name: 'Skivul Badge Web Development Pemula',
            Picture: sertifikatWeb,
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