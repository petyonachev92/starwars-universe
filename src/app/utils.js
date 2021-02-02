/**
 * Here you can define helper functions to use across your app.
 */

import Entity from './custom/Entity'


export default async function populate(uni, app) {
    const universeData = await uni.init()
    for( const [name, data] of Object.entries(universeData)) {
      const ent = new Entity(name, data)
      uni.entities.push(ent)
    }

    console.log(uni.entities)

    app.data.universe = uni
}