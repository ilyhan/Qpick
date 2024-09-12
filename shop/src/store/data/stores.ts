export interface IAccessibleStores {
    address: string;
    dataWork: string;
    openHours: string;
    mall?: string;
};  

export const accessibleStores: IAccessibleStores[] = [
    {
        address: "Воронеж, ул. Кольцовская, д. 35A",
        dataWork: "Пн - Вс",
        openHours: "10:00 - 22:00",
        mall: "Центр Галереи Чижова",
    },

    {
        address: "Воронеж, Ленинский пр-т, д. 174П",
        dataWork: "Пн - Вс",
        openHours: "10:00 - 21:00",
        mall: "ТЦ «Максимир»",
    },

    {
        address: "Воронеж, б-р Победы, д. 23Б",
        dataWork: "Пн - Вс",
        openHours: "10:00 - 22:00",
        mall: "ТРК «Арена»",
    },
];