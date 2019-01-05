'use strict'

const { formatters } = use('Validator')

class SoundclipCreate {
	get formatter () {
		return formatters.JsonApi
	}

	get validateAll () {
		return true;
	}

	get rules () {
		return {
            beneficiary_id: 'required|exists:beneficiaries,id',
            soundclip: 'file|file_types:m4a,mp4|file_size:5mb'
		}
	}

	get sanitizationRules () {
		return {
		}
	}
}

module.exports = SoundclipCreate
