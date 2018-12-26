const { ServiceProvider } = require('@adonisjs/fold')

class FirebaseProvider extends ServiceProvider {
    register () {
        this.app.singleton('Oumie/Firebase', () => {
            const config = this.app.use('Adonis/Src/Config');

            return new (require('./FirebaseService'))({ config });
        })
    }
}

module.exports = FirebaseProvider