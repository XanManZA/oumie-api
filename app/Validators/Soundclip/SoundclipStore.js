'use strict'

const { formatters } = use('Validator')

class SoundclipStore {
	get formatter() {
		return formatters.JsonApi
	}

	get validateAll () {
		return true;
	}

	get rules () {
		return {
            beneficiary_id: 'required|exists:beneficiaries,id',
            soundclip: 'file|file_types:wav,mpeg|file_size:5mb'
		}
	}

	get sanitizationRules () {
		return {
		}
	}
}

module.exports = SoundclipStore
