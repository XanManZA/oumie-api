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
    },

    nexmo: {
        apiKey: Env.get('NEXMO_KEY'),
        apiSecret: Env.get('NEXMO_SECRET'),
        applicationID: Env.get('NEXMO_APP_ID'),
        privateKey: `${Helpers.appRoot()}/${Env.get('NEXMO_PRIVATE_KEY')}`,
        number: Env.get('NEXMO_NUMBER'),
        answerUrl: Env.get('NEXMO_ANSWER_URL')
    }
}