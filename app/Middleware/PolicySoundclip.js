'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

// I'm keeping this here as an example of how one would implement a policy

class PolicySoundclip {
	/**
	 * @param {object} ctx
	 * @param {Request} ctx.request
	 * @param {Function} next
	 */
	async handle ({ request, auth }, next, properties) {
		// call next to advance the request
		await next()
	}
}

module.exports = PolicySoundclip
