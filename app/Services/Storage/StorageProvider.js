const { ServiceProvider } = require('@adonisjs/fold')

class StorageProvider extends ServiceProvider {
    register () {
        this.app.singleton('Oumie/Storage', () => {
            const config = this.app.use('Adonis/Src/Config');

            return new (require('./GoogleStorage'))({ config });
        })
    }
}

module.exports = StorageProvider