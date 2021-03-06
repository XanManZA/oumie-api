'use strict'

const path = require('path')

/*
|--------------------------------------------------------------------------
| Providers
|--------------------------------------------------------------------------
|
| Providers are building blocks for your Adonis app. Anytime you install
| a new Adonis specific package, chances are you will register the
| provider here.
|
*/
const providers = [
  '@adonisjs/framework/providers/AppProvider',
  '@adonisjs/auth/providers/AuthProvider',
  '@adonisjs/bodyparser/providers/BodyParserProvider',
  '@adonisjs/cors/providers/CorsProvider',
  '@adonisjs/lucid/providers/LucidProvider',
  '@adonisjs/drive/providers/DriveProvider',
  '@adonisjs/validator/providers/ValidatorProvider',

  // Oumie External Services
  path.join(__dirname, '..', 'app', '/Services/Firebase/FirebaseProvider'),
  path.join(__dirname, '..', 'app', '/Services/Storage/StorageProvider'),
  path.join(__dirname, '..', 'app', '/Services/Voice/VoiceProvider'),
  // Oumie Data Objects
  path.join(__dirname, '..', 'app', '/Models/Repositories/RepositoryProvider'),
  // Oumie Business Logic Services
  path.join(__dirname, '..', 'app', '/Services/Oumie/User/UserProvider'),
  path.join(__dirname, '..', 'app', '/Services/Oumie/Beneficiary/BeneficiaryProvider'),
  path.join(__dirname, '..', 'app', '/Services/Oumie/Soundclip/SoundclipProvider'),
  // Custom Extensions
  path.join(__dirname, '..', 'app', '/Validators/ValidatorExtensions'),
]

/*
|--------------------------------------------------------------------------
| Ace Providers
|--------------------------------------------------------------------------
|
| Ace providers are required only when running ace commands. For example
| Providers for migrations, tests etc.
|
*/
const aceProviders = [
  '@adonisjs/lucid/providers/MigrationsProvider'
]

/*
|--------------------------------------------------------------------------
| Aliases
|--------------------------------------------------------------------------
|
| Aliases are short unique names for IoC container bindings. You are free
| to create your own aliases.
|
| For example:
|   { Route: 'Adonis/Src/Route' }
|
*/
const aliases = {}

/*
|--------------------------------------------------------------------------
| Commands
|--------------------------------------------------------------------------
|
| Here you store ace commands for your package
|
*/
const commands = []

module.exports = { providers, aceProviders, aliases, commands }
