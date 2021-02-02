export default class StarWarsUniverse {
    constructor() {
        this.entities = []

        /* this.init().then(res => {
            res.forEach(element => {
                this.entities.push(element)
                console.log(element)
            });
        }) */
    };

    

    async init() {
        const root = await fetch('https://swapi.booost.bg/api/')
        .then(r => r.json())
        return root;
    }
}