const { ServiceProvider } = require('@adonisjs/fold')

class UtilProvider extends ServiceProvider {
    register () {
        this.app.singleton('Oumie/Utils/TimingUtil', () => {
            return (require('./TimingUtil'));
        })
    }
}

module.exports = UtilProvider