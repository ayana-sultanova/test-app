import {DataType} from "../types/types";

export const data: DataType[] = [
    {
        key: '1',
        number: 'Маршрут №1',
        params_1: '59.84660399,30.29496392',
        params_2: '59.82934196,30.42423701',
        params_3: '59.83567701,30.38064206'
    },
    {
        key: '2',
        number: 'Маршрут №2',
        params_1: '59.82934196,30.42423701',
        params_2: '59.82761295,30.41705607',
        params_3: '59.84660399,30.29496392'
    },
    {
        key: '3',
        number: 'Маршрут №3',
        params_1: '59.83567701,30.38064206',
        params_2: '59.84660399,30.29496392',
        params_3: '59.82761295,30.41705607'
    },
];

export const defaultPosition: { lat: number; lng: number; zoom: number } = {
    lat: 42.87747891902528,
    lng: 74.61470350557674,
    zoom: 14,
};
