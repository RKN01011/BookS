import { GET_ALL, GET_ALLBEST, GET_ALLFANTASY, GET_ALLNOVELS, GET_ALLCLASSICS, GET_ALLMODERN } from "../component/hellpers/const.base";






const initState = [{
    src: require(`../img/clockwork.jpg`),
    name: "A Clockwork Orange",
    id: 0,
    price: 9.99
},
{
    src: require(`../img/lolita.jpg`),
    name: "Lolita",
    id: 1,
    price: 9.99 
},
{
    src: require(`../img/meta.jpg`),
    name: "Metamorphosis",
    id: 2,
    price: 9.99
},
{
    src: require(`../img/b1984.jpg`),
    name: "1984",
    id: 3,
    price: 9.99
},
{
    src: require(`../img/alice.jpg`),
    name: "Alice's Adventures In Wonderland",
    id: 4,
    price: 9.99
},
{
    src: require(`../img/f451.jpg`),
    name: "Fahrenheit 451",
    id: 5,
    price: 9.99
},
{
    src: require(`../img/cather.jpg`),
    name: "The Catcher In The Rye",
    id: 6,
    price: 9.99
},
{
    src: require(`../img/kafka.jpg`),
    name: "Kafka On The Shore",
    id: 7,
    price: 9.99
},
{
    src: require(`../img/gatsby.jpg`),
    name: "The Great Gatsby",
    id: 8,
    price: 9.99
},
{
    src: require(`../img/oldman.jpg`),
    name: "The Old Man And The Sea",
    id: 9,
    price: 9.99
},];
export default function store (state = initState, action){
    switch(action.type){
        case GET_ALL:
        return [...action.payload];
        case GET_ALLBEST:
        return [...action.payload];
        case GET_ALLFANTASY:
        return [...action.payload];
        case GET_ALLNOVELS:
        return [...action.payload];
        case GET_ALLCLASSICS:
        return [...action.payload];
        case GET_ALLMODERN:
        return [...action.payload];
        default:
        return state;
    }
}

export {initState};