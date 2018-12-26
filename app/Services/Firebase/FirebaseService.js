'use strict'

const firebase = use('firebase-admin')
const Logger = use('Logger')

class FirebaseService {
    constructor({ config }) {
        this.config = config;
        this.client = firebase;

        let certfile = require(this.config.get(`services.firebase.certfile`));
        this.client.initializeApp({
            credential: this.client.credential.cert(certfile),
        });
    }
}

module.exports = FirebaseService