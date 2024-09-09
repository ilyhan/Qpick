export interface Product {
    id: number; 
    title: string;
    img: string;
    price: number;
    rating: number;
    description: string;
    isFavorite?: boolean;
};

export interface HeadphoneCategory {
    type: 'wired' | 'wireless'; 
    title: string;
    productes: Product[];
};

export const headphones: HeadphoneCategory[] = [
    {
        type: "wired",
        title: 'headfone',
        productes: [
            {
                id: 1,
                title: "Apple BYZ S852I",
                img: "../src/store/data/images/byz.png",
                price: 2927,
                rating: 4.7,
                description: "BYZ S852I - проводное аудиоустройство, благодаря которому можно прослушивать любимую музыку, не мешая окружающим. Вставные вакуумные амбушюры обладают высокой степенью звукоизоляции, что исключает образование посторонних шумов.",
            },
            {
                id: 2,
                title: "Apple EarPods",
                img: "../src/store/data/images/earpods1.png",
                price: 2327,
                rating: 4.5,
                description: "Дизайн новых EarPods полностью переосмыслен: ножка теперь короче, а форма оптимизирована для наилучшего звучания.",
            },
            {
                id: 3,
                title: "Apple EarPods",
                img: "../src/store/data/images/earpods2.png",
                price: 2327,
                rating: 4.5,
                description: "Когда вы слушаете музыку или смотрите фильмы и сериалы, технология пространственного аудио с функцией динамического отслеживания движений головы создаёт по настоящему живую трёхмерную картину звука.",
            },
            {
                id: 4,
                title: "Apple BYZ S852I",
                img: "../src/store/data/images/byz.png",
                price: 2927,
                rating: 4.7,
                description: "BYZ S852I - проводное аудиоустройство, благодаря которому можно прослушивать любимую музыку, не мешая окружающим. Вставные вакуумные амбушюры обладают высокой степенью звукоизоляции, что исключает образование посторонних шумов.",
            },
            {
                id: 5,
                title: "Apple EarPods",
                img: "../src/store/data/images/earpods1.png",
                price: 2327,
                rating: 4.5,
                description: "Дизайн новых EarPods полностью переосмыслен: ножка теперь короче, а форма оптимизирована для наилучшего звучания.",
            },
            {
                id: 6,
                title: "Apple EarPods",
                img: "../src/store/data/images/earpods2.png",
                price: 2327,
                rating: 4.5,
                description: "Когда вы слушаете музыку или смотрите фильмы и сериалы, технология пространственного аудио с функцией динамического отслеживания движений головы создаёт по настоящему живую трёхмерную картину звука.",
            },
        ],
    },

    {
        type: "wireless",
        title: "wirelessHeadphones",
        productes: [
            {
                id: 7,
                title: "Apple AirPods",
                img: "../src/store/data/images/airpods.png",
                price: 9527,
                rating: 4.7,
                description: "Представляем абсолютно новые AirPods.Технология пространственного аудио окружает звуком со всех сторон.1.Адаптивный эквалайзер подстраивает музыку персонально под вас. ",
            },
            {
                id: 8,
                title: "GERLAX GH-04",
                img: "../src/store/data/images/gerlax.png",
                price: 6527,
                rating: 4.7,
                description: "Беспроводные наушники AIR 5 обеспечивают фирменный звук с функцией шумоподавления, защитой от воды , Фирменный звук AIR 5 Пусть каждый день будет необычным. Динамические излучатели размером 6,8 мм обеспечивают превосходный фирменный звук AIR 5. ",
            },
            {
                id: 9,
                title: "BOROFONE BO4",
                img: "../src/store/data/images/borofon.png",
                price: 7527,
                rating: 4.7,
                description: "Динамический драйвер, разработанный Apple, использует специальный усилитель, обеспечивая невероятную детальность звучания. Вы будете чётко слышать весь спектр — от глубоких, насыщенныхбасов до кристально чистых высоких нот.",
            },
        ],
    },
];