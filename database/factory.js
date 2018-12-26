'use strict'

const Factory = use('Factory')
const Hash = use('Hash')
const User = use('Oumie/Models/User')
const Drive = use('Drive')
const Storage = use('Oumie/Storage')
const Helpers = use('Helpers');
const _ = use('lodash')

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */

// Users
Factory.blueprint('Oumie/Models/User', async (faker) => {
    return {
        name: faker.first(),
        surname: faker.last(),
        mobile: faker.phone({formatted:false}),
        password: 'Password'
    };
});

// Soundclips
Factory.blueprint('Oumie/Models/Soundclip', async (faker) => {
    let ids = await User.ids();
    let user = {};
    let name = ``;

    // Get an associated user, if there are no users then create one
    if (ids.length)
        user = await User.find(_.sample(ids));
    else
        user = await Factory.model('Oumie/Models/User').create();
    
    name = `soundclips/` + Date.now() + `_${user.id}.m4a`;
    await Storage.upload(`${Helpers.tmpPath()}/Recording.m4a`, name);

    return {
        user_id: user.id,
        url: name
    };
});
