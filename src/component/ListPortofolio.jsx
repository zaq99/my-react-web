import {
    airBnb,
    bandaiNamco,
    belajarAbc,
    bmiKalku,
    cocaCola,
    sunrisePay,
    tafsirQ,
    vector,
    pm,
} from "../assets";
import "./../CSS/ListPortofolio.css";

const ListPortoFolio = () => {
    const Portofolio = [
        {
            id: 1,
            name: "Project 1",
            Picture: bandaiNamco,
            Link: "",
        },
        {
            id: 2,
            name: "Project 2",
            Picture: airBnb,
            Link: "",
        },
        {
            id: 3,
            name: "Project 3",
            Picture: cocaCola,
            Link: "",
        },
        {
            id: 4,
            name: "Project 4",
            Picture: tafsirQ,
            Link: "",
        },
        {
            id: 5,
            name: "Project 5",
            Picture: vector,
            Link: "",
        },
        {
            id: 6,
            name: "Project 6",
            Picture: sunrisePay,
            Link: "",
        },
        {
            id: 7,
            name: "Project 7",
            Picture: belajarAbc,
            Link: "",
        },
        {
            id: 8,
            name: "Project 8",
            Picture: bmiKalku,
            Link: "",
        },
        {
            id: 9,
            name: "Project 9",
            Picture: pm,
            Link: "",
        },
    ];

    return (
        <>
            <div className="d-flex flex-wrap gap-4 p-2">
                {Portofolio.map((item) => (
                    <div key={item.id}>
                        <a href={item.Link}>
                            <img
                                src={item.Picture}
                                alt={item.name}
                                height={200}
                                className="berbayang porto"
                            />
                        </a>
                    </div>
                ))}
            </div>
        </>
    );
};

export default ListPortoFolio;
