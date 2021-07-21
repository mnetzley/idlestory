class Player {
    constructor (){
        this.pA = 1;
        this.pD = 1;
        this.mA = 1;
        this.mD = 1;
        this.fate = 0;
        this.gold = 0;
        this.aP = 3;
        this.aPMax = 3;
        this.skill = 0;
        this.practice = 1;
        this.food = 5
        this.actions = []
    }

    addAction = (func) => {
        if (this.aP > 0) {
            this.actions.push(func);
            this.aP--
        }
    }

    deleteAction = (func) => {
        if (this.aP < this.aPMax) {
            let index = this.actions.indexOf(func);
            this.actions.splice(index, 1);
            this.aP++
        }
    }

    completeDay (community) {
        this.actions.forEach(el, () => {
            el(community)
        })
    }
}

class Farmer extends Player{
    constructor (pA, pD, mA, mD, fate, gold, aP, aPMax, skill, practice, food, actions, items) {
        super(pA, pD, mA, mD, fate, gold, aP, aPMax, skill, practice, food, actions);
        this.items = {};
    }


}

const matthew = new Farmer

class Item {
    constructor (name, cost, aP, count, type, inputs, users) {
        this.name = name
        this.cost = cost;
        this.aP = aP;
        this.count = count;
        this.type = type;
        this.inputs = inputs;
        this.users = users;
    }
}

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

const items = [];
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

// rice.count = 5000;
console.log(matthew)
// console.log(matthew.rice)
// console.log(items)
// console.log(rice)
// console.log(matthew.rice.count)

// const materials = {
//     farm: {
//         herbs: 0,
//         tobacco: 0,
//         flowers: 0,
//         compost: 0,
//     }
// }

// const tools = {
//     shovel: 0,
//     lightPlow: 0,
//     hoe: 0,
//     heavyPlow: 0,
//     pitchfork: 0,
//     rake: 0,
// }

// const buildings = {
//     shed: 0,
//     silo: 0,
// }
