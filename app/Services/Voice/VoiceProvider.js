const { ServiceProvider } = require('@adonisjs/fold')

class VoiceProvider extends ServiceProvider {
    register () {
        this.app.singleton('Oumie/Voice', () => {
            const config = this.app.use('Adonis/Src/Config');

            return new (require('./NexmoVoice'))({ config });
        })
    }
}

module.exports = VoiceProvider