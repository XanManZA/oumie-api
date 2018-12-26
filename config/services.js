'use strict'

const Env = use('Env')
const Helpers = use('Helpers')

module.exports = {
    firebase: {
        certfile: `${Helpers.appRoot()}/firebase.json`,
        storage: {
            folder: Env.get('FIREBASE_FOLDER')
        }
    },
    
    google: {
        certfile: `${Helpers.appRoot()}/google.json`,
        storage: {
            bucket: Env.get('GOOGLE_BUCKET')
        }
    }
}