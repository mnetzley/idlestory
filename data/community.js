class PlayerItems {
    constructor () {
        this.wheat = 0;
        this.rice = 0;
        this.barley = 0;
        this.corn = 0;
        this.soyBeans = 0;
        this.potatoes = 0;
        this.pumpkins = 0;
        this.eggplant = 0;
        this.berries = 0;
        this.grapes = 0;
        this.apples = 0;
        this.herbs = 0;
        this.tabacco = 0;
        this.flowers = 0;
        this.compost = 0;
        this.shovel = 0;
        this.lightPlow = 0;
        this.hoe = 0;
        this.heavyPlow = 0;
        this.rake = 0;
    }
}


class PlayerItems {
    constructor () {
        this.wheat = {
            name = "wheat",
            cost = 1,
            aP = 2,
            count = 0,
            type = "food",
            inputs = [],
            users = ["farmer"],
            divider = 10000,
        };
        this.rice = {
            name = "wheat",
            cost = 1,
            aP = 2,
            count = 0,
            type = "food",
            inputs = [],
            users = ["farmer"],
            divider = 10000,
        };
        this.barley = {
            name = "wheat",
            cost = 1,
            aP = 2,
            count = 0,
            type = "food",
            inputs = [],
            users = ["farmer"],
            divider = 10000,
        };
        this.corn = {
            name = "wheat",
            cost = 1,
            aP = 2,
            count = 0,
            type = "food",
            inputs = [],
            users = ["farmer"],
            divider = 10000,
        };
        this.soyBeans = {
            name = "wheat",
            cost = 1,
            aP = 2,
            count = 0,
            type = "food",
            inputs = [],
            users = ["farmer"],
            divider = 10000,
        };
        this.potatoes = {
            name = "wheat",
            cost = 1,
            aP = 2,
            count = 0,
            type = "food",
            inputs = [],
            users = ["farmer"],
            divider = 10000,
        };
        this.pumpkins = {
            name = "wheat",
            cost = 1,
            aP = 2,
            count = 0,
            type = "food",
            inputs = [],
            users = ["farmer"],
            divider = 10000,
        };
        this.eggplant = {
            name = "wheat",
            cost = 1,
            aP = 2,
            count = 0,
            type = "food",
            inputs = [],
            users = ["farmer"],
            divider = 10000,
        };
        this.berries = {
            name = "wheat",
            cost = 1,
            aP = 2,
            count = 0,
            type = "food",
            inputs = [],
            users = ["farmer"],
            divider = 10000,
        };
        this.grapes = {
            name = "wheat",
            cost = 1,
            aP = 2,
            count = 0,
            type = "food",
            inputs = [],
            users = ["farmer"],
            divider = 10000,
        };
        this.apples = {
            name = "wheat",
            cost = 1,
            aP = 2,
            count = 0,
            type = "food",
            inputs = [],
            users = ["farmer"],
            divider = 10000,
        };
        this.herbs = {
            name = "wheat",
            cost = 1,
            aP = 2,
            count = 0,
            type = "food",
            inputs = [],
            users = ["farmer"],
            divider = 10000,
        };
        this.tabacco = {
            name = "wheat",
            cost = 1,
            aP = 2,
            count = 0,
            type = "food",
            inputs = [],
            users = ["farmer"],
            divider = 10000,
        };
        this.flowers = {
            name = "wheat",
            cost = 1,
            aP = 2,
            count = 0,
            type = "food",
            inputs = [],
            users = ["farmer"],
            divider = 10000,
        };
        this.compost = {
            name = "wheat",
            cost = 1,
            aP = 2,
            count = 0,
            type = "food",
            inputs = [],
            users = ["farmer"],
            divider = 10000,
        };
        this.shovel = {
            name = "wheat",
            cost = 1,
            aP = 2,
            count = 0,
            type = "food",
            inputs = [],
            users = ["farmer"],
            divider = 10000,
        };
        this.lightplow = {
            name = "wheat",
            cost = 1,
            aP = 2,
            count = 0,
            type = "food",
            inputs = [],
            users = ["farmer"],
            divider = 10000,
        };
        this.hoe = {
            name = "wheat",
            cost = 1,
            aP = 2,
            count = 0,
            type = "food",
            inputs = [],
            users = ["farmer"],
            divider = 10000,
        };
        this.heavyPlow = {
            name = "wheat",
            cost = 1,
            aP = 2,
            count = 0,
            type = "food",
            inputs = [],
            users = ["farmer"],
            divider = 10000,
        };
        this.rake = {
            name = "wheat",
            cost = 1,
            aP = 2,
            count = 0,
            type = "food",
            inputs = [],
            users = ["farmer"],
            divider = 10000,
        };
    }
}

const commun = new Community
const matthew = new Community

commun.wheat = 20;


endDay = (community, character) => {
    for (key in community) {
        console.log(key)
        character[key] += community[key]/10000
    }
}


endDay(commun, matthew);

console.log(commun);
console.log(matthew)
