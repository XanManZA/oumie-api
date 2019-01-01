'use strict'

const Factory = use('Factory')
const Hash = use('Hash')
const User = use('Oumie/Models/User')
const Beneficiary = use ('Oumie/Models/Beneficiary')
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

// Benificaries
Factory.blueprint('Oumie/Models/Beneficiary', async (faker, i, data) => {
    let ids = await User.ids();
    let user = {};

    // Get an associated user, if there are none then create one
    if (ids.length)
        user = await User.find(_.sample(ids));
    else
        user = await Factory.model('Oumie/Models/User').create();

    return {
        name: faker.first(),
        mobile: faker.phone({formatted:false}),
        user_id: data.user_id || user.id
    };
});

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
    let ids = await Beneficiary.ids();
    let beneficiary = {};
    let name = ``;

    // Get an associated benificiary, if there are none then create one
    if (ids.length)
        beneficiary = await Beneficiary.find(_.sample(ids));
    else
        beneficiary = await Factory.model('Oumie/Models/Beneficiary').create();
    
    name = `soundclips/` + Date.now() + `_${beneficiary.id}.m4a`;
    await Storage.upload(`${Helpers.tmpPath()}/Recording.m4a`, name);

    return {
        beneficiary_id: beneficiary.id,
        url: name
    };
});
