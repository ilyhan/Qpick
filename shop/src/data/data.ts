export interface Product {
    id: number; // Убедитесь, что ID уникален для каждого продукта
    title: string;
    img: string;
    price: number;
    rating: number;
}

export interface HeadphoneCategory {
    type: 'wired' | 'wireless'; // Укажите допустимые типы
    title: string;
    productes: Product[];
}

export const headphones: HeadphoneCategory[] = [
    {
        type: "wired",
        title: 'Наушники',
        productes: [
            {
                id: 1,
                title: "Apple BYZ S852I",
                img: "../src/data/images/byz.png",
                price: 2927,
                rating: 4.7,
            },
            {
                id: 2,
                title: "Apple EarPods",
                img: "../src/data/images/earpods1.png",
                price: 2327,
                rating: 4.5,
            },
            {
                id: 3,
                title: "Apple EarPods",
                img: "../src/data/images/earpods2.png",
                price: 2327,
                rating: 4.5,
            },
            {
                id: 4,
                title: "Apple BYZ S852I",
                img: "../src/data/images/byz.png",
                price: 2927,
                rating: 4.7,
            },
            {
                id: 5,
                title: "Apple EarPods",
                img: "../src/data/images/earpods1.png",
                price: 2327,
                rating: 4.5,
            },
            {
                id: 6,
                title: "Apple EarPods",
                img: "../src/data/images/earpods2.png",
                price: 2327,
                rating: 4.5,
            },
        ],
    },

    {
        type: "wireless",
        title: "Беспроводные наушники",
        productes: [
            {
                id: 7,
                title: "Apple AirPods",
                img: "../src/data/images/airpods.png",
                price: 9527,
                rating: 4.7,
            },
            {
                id: 8,
                title: "GERLAX GH-04",
                img: "../src/data/images/gerlax.png",
                price: 6527,
                rating: 4.7,
            },
            {
                id: 9,
                title: "BOROFONE BO4",
                img: "../src/data/images/borofon.png",
                price: 7527,
                rating: 4.7,
            },
        ],
    },
];