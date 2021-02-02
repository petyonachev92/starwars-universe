export default class StarWarsUniverse {
    constructor() {
        this.entities = []

        /* this.init() */
    };

    

    async init() {
        const root = await fetch('https://swapi.booost.bg/api/')
        .then(r => r.json())
        return root;
    }
}