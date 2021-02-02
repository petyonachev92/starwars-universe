/**
 * Here you can define helper functions to use across your app.
 */

import Entity from './custom/Entity'


export default async function populate(uni, app) {
    const universeData = await uni.init()
    for( const [name, data] of Object.entries(universeData)) {
        const resp = await fetch(`https://swapi.booost.bg/api/${name}/`)
        const respData = await resp.json();
        const ent = new Entity(name, respData)
        uni.entities.push(ent)
    }

    console.log(uni.entities)

    app.data.universe = uni
}