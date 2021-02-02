export default class StarWarsUniverse {
    constructor() {
        this.entities = []

        /* this.init() */
    };

    

    async init() {
        const resp = await fetch('https://swapi.booost.bg/api/')
        const data = await resp.json()
        return data;
    }
}