import { bmiKalkulator } from '../assets'
import './../CSS/ListPortofolio.css'

const ListPortoFolio = () => {
    const Portofolio = [
        {
            id: 1,
            name: 'Project 1',
            Picture: '/src/assets/bandai.png',
            Link: ''
        },
        {
            id: 2,
            name: 'Project 2',
            Picture: '/src/assets/airBnb.png',
            Link: ''
        },
        {
            id: 3,
            name: 'Project 3',
            Picture: '/src/assets/cocaCola.png',
            Link: ''
        },
        {
            id: 4,
            name: 'Project 4',
            Picture: '/src/assets/tafsirQ.png',
            Link: ''
        },
        {
            id: 5,
            name: 'Project 5',
            Picture: '/src/assets/vetor-1.png',
            Link: ''
        },
        {
            id: 6,
            name: 'Project 6',
            Picture: '/src/assets/sunrisePay.png',
            Link: ''
        },
        {
            id: 7,
            name: 'Project 7',
            Picture: '/src/assets/personal-web.png',
            Link: ''
        },
        {
            id: 8,
            name: 'Project 8',
            Picture: bmiKalkulator,
            Link: ''
        },

    ]

    return (
        <>
            <div className="d-flex flex-wrap gap-4 p-2">
                {Portofolio.map((item) => (
                    <div key={item.id}>
                        <a href={item.Link}>
                            <img src={item.Picture} alt={item.name} height={200} className='berbayang porto' />
                        </a>
                    </div>
                ))}
            </div>
        </>
    )
}

export default ListPortoFolio