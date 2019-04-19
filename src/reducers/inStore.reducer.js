
const inStore = [
    {
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
];
export default function store (state = inStore, action){
    switch(action.type){
        default:
        return state;
    }
}

export {inStore};