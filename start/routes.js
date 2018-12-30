'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')
const User = use('Oumie/Models/User')

Route.get('/', async () => {
	return `Currently ${(await User.getCount())} Oumie happiness collaborators`
})

// Authentication
Route.group(() => {
	// Login
	Route.post('login', 'Oumie/Api/Http/Controllers/Auth/AuthController.login').as('auth.login');
	// Register
	Route.post('register', 'Oumie/Api/Http/Controllers/Auth/AuthController.register')
		.as('auth.register')
		.validator('RegisterUser');
	// Self
	Route.get('self', 'Oumie/Api/Http/Controllers/Auth/AuthController.self')
		.as('user.self')
		.middleware('auth');
}).prefix('auth');
