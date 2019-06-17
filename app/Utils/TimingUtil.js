'use strict'

class TimingUtil {
	static sleep(timeout) {
		return new Promise(resolve => setTimeout(resolve, timeout));
	}

	static delay(timeout, callback) {
		setTimeout(callback, timeout);
	}
}

module.exports = TimingUtil;