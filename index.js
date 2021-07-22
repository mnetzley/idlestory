



const wheat = new Item ("wheat", 1, 2, 0, "food", [], ["Farmer"]);
const rice = new Item ("rice", 1, 2, 0, "food", [], ["Farmer"]);
const barley = new Item ("barley", 1, 2, 0, "food", [], ["Farmer"]);
const corn = new Item ("corn", 1, 2, 0, "food", [], ["Farmer"]);
const soyBeans = new Item ("soy beans", 1, 2, 0, "food", [], ["Farmer"]);
const potatoes = new Item ("potatoes", 1, 2, 0, "food", [], ["Farmer"]);
const pumpkins = new Item ("pumpkins", 1, 2, 0, "food", [], ["Farmer"]);
const eggplant = new Item ("eggplant", 1, 2, 0, "food", [], ["Farmer"]);
const berries = new Item ("berries", 1, 2, 0, "food", [], ["Farmer"]);
const grapes = new Item ("grapes", 1, 2, 0, "food", [], ["Farmer"]);
const apples = new Item ("apples", 1, 2, 0, "food", [], ["Farmer"]);


const itemsArr = [
    ["wheat", 1, 2, 0, "food", [], ["Farmer"], 1000],
    ["rice", 1, 2, 0, "food", [], ["Farmer"], 1000],
    ["barley", 1, 2, 0, "food", [], ["Farmer"], 1000],
    ["corn", 1, 2, 0, "food", [], ["Farmer"], 1000],
    ["soy beans", 1, 2, 0, "food", [], ["Farmer"], 1000],
    ["potatoes", 1, 2, 0, "food", [], ["Farmer"], 1000],
    ["pumpkins", 1, 2, 0, "food", [], ["Farmer"], 1000],
    ["eggplant", 1, 2, 0, "food", [], ["Farmer"], 1000],
    ["berries", 1, 2, 0, "food", [], ["Farmer"], 1000],
    ["grapes", 1, 2, 0, "food", [], ["Farmer"], 1000],
    ["apples", 1, 2, 0, "food", [], ["Farmer"], 1000],
    ["herbs", 1, 2, 0, "material", [], ["Farmer"], 1000],
    ["tabacco", 1, 2, 0, "material", [], ["Farmer"], 1000],
    ["flowers", 1, 2, 0, "material", [], ["Farmer"], 1000],
    ["compost", 1, 2, 0, "material", [], ["Farmer"], 1000],
    ["shovel", 1, 2, 0, "tool", [], ["Farmer"], 1000],
    ["lightPlow", 1, 2, 0, "tool", [], ["Farmer"], 1000],
    ["hoe", 1, 2, 0, "tool", [], ["Farmer"], 1000],
    ["heavyPlow", 1, 2, 0, "tool", [], ["Farmer"], 1000],
    ["rake", 1, 2, 0, "tool", [], ["Farmer"], 1000],
];


class community {
    constructor () {
    }
}

// const createitemObject = (items) => {
//     const allCommunity
// }


items.push(wheat);
items.push(rice);
console.log(wheat);
console.log(items);

const addItemsToCharacter = (character, items) => {
    let type = character.constructor.name;
    type.toString();
    console.log(typeof type);
    for (let i = 0; i < items.length; i++) {
        let name = [items[i].name]
        if (items[i].users.includes(type)) {
            for (key in items[i]) {
                console.log(key)
                character.items[name] = {};
                character.items[name][key] = items[i][key];
            }
        };
    };
};


addItemsToCharacter(matthew, items);
