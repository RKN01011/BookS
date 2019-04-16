import { GET_ALL, GET_ALLBEST, GET_ALLFANTASY, GET_ALLNOVELS, GET_ALLCLASSICS, GET_ALLMODERN } from "../hellpers/const.base";

export const getAll = async ()=>{
    const base = [
        {
            src: require(`../../img/clockwork.jpg`),
            name: "A Clockwork Orange",
            id: 0,
            price: 9.99
        },
        {
            src: require(`../../img/lolita.jpg`),
            name: "Lolita",
            id: 1,
            price: 9.99
        },
        {
            src: require(`../../img/meta.jpg`),
            name: "Metamorphosis",
            id: 2,
            price: 9.99
        },
        {
            src: require(`../../img/b1984.jpg`),
            name: "1984",
            id: 3,
            price: 9.99
        },
        {
            src: require(`../../img/alice.jpg`),
            name: "Alice's Adventures In Wonderland",
            id: 4,
            price: 9.99
        },
        {
            src: require(`../../img/f451.jpg`),
            name: "Fahrenheit 451",
            id: 5,
            price: 9.99
        },
        {
            src: require(`../../img/cather.jpg`),
            name: "The Catcher In The Rye",
            id: 6,
            price: 9.99
        },
        {
            src: require(`../../img/kafka.jpg`),
            name: "Kafka On The Shore",
            id: 7,
            price: 9.99
        },
        {
            src: require(`../../img/gatsby.jpg`),
            name: "The Great Gatsby",
            id: 8,
            price: 9.99
        },
        {
            src: require(`../../img/oldman.jpg`),
            name: "The Old Man And The Sea",
            id: 9,
            price: 9.99
        },
    ];
    return{
        type: GET_ALL,
        payload: base
    };
};

export const getAllBest = async ()=>{
    const base = [
        {
            src: require(`../../img/clockwork.jpg`),
            name: "A Clockwork Orange",
            id: 0,
            price: 9.99
        },
        {
            src: require(`../../img/lolita.jpg`),
            name: "Lolita",
            id: 1,
            price: 9.99
        },
        {
            src: require(`../../img/meta.jpg`),
            name: "Metamorphosis",
            id: 2,
            price: 9.99
        },
        {
            src: require(`../../img/b1984.jpg`),
            name: "1984",
            id: 3,
            price: 9.99
        },
    ];
    return{
        type: GET_ALLBEST,
        payload: base
    };
};

export const getAllFantasy = async ()=>{
    const base = [
        {
            src: require(`../../img/clockwork.jpg`),
            name: "A Clockwork Orange",
            id: 0,
            price: 9.99
        },
        {
            src: require(`../../img/b1984.jpg`),
            name: "1984",
            id: 3,
            price: 9.99
        },
        {
            src: require(`../../img/alice.jpg`),
            name: "Alice's Adventures In Wonderland",
            id: 4,
            price: 9.99
        },
        {
            src: require(`../../img/f451.jpg`),
            name: "Fahrenheit 451",
            id: 5,
            price: 9.99
        },
    ];
    return{
        type: GET_ALLFANTASY,
        payload: base
    };
};

export const getAllNovels= async ()=>{
    const base = [
        {
            src: require(`../../img/alice.jpg`),
            name: "Alice's Adventures In Wonderland",
            id: 4,
            price: 9.99
        },
        {
            src: require(`../../img/cather.jpg`),
            name: "The Catcher In The Rye",
            id: 6,
            price: 9.99
        },
        {
            src: require(`../../img/kafka.jpg`),
            name: "Kafka On The Shore",
            id: 7,
            price: 9.99
        },
        {
            src: require(`../../img/lolita.jpg`),
            name: "Lolita",
            id: 1,
            price: 9.99
        },
        {
            src: require(`../../img/gatsby.jpg`),
            name: "The Great Gatsby",
            id: 8,
            price: 9.99
        },
        {
            src: require(`../../img/oldman.jpg`),
            name: "The Old Man And The Sea",
            id: 9,
            price: 9.99
        },
    ];
    return{
        type: GET_ALLNOVELS,
        payload: base
    };
};

export const getAllClassics = async ()=>{
    const base = [
        {
            src: require(`../../img/lolita.jpg`),
            name: "Lolita",
            id: 1,
            price: 9.99
        },
        {
            src: require(`../../img/meta.jpg`),
            name: "Metamorphosis",
            id: 2,
            price: 9.99
        },
        {
            src: require(`../../img/alice.jpg`),
            name: "Alice's Adventures In Wonderland",
            id: 4,
            price: 9.99
        },
        {
            src: require(`../../img/f451.jpg`),
            name: "Fahrenheit 451",
            id: 5,
            price: 9.99
        },
        {
            src: require(`../../img/oldman.jpg`),
            name: "The Old Man And The Sea",
            id: 9,
            price: 9.99
        },
    ];
    return{
        type: GET_ALLCLASSICS,
        payload: base
    };
};

export const getAllModern = async ()=>{
    const base = [
        {
            src: require(`../../img/gatsby.jpg`),
            name: "The Great Gatsby",
            id: 8,
            price: 9.99
        },
        {
            src: require(`../../img/kafka.jpg`),
            name: "Kafka On The Shore",
            id: 7,
            price: 9.99
        },
    ];
    return{
        type: GET_ALLMODERN,
        payload: base
    };
};


