/**
 * - Filter and replace key/value object to new object
 *
 * @param {object} obj Origin object
 * @param {(key: string, value: any, object: any)} predicate
 * @returns
 */
function getObj(obj, predicate) {
	if (typeof obj !== 'object' && obj) {
		throw new TypeError(`Expected an object, got ${obj}`);
	}

	if (typeof predicate !== 'function') {
		throw new TypeError(`Expected a function, got ${predicate}`);
	}

	const result = {};

	for (let [key, value] of Object.entries(obj)) {
		const resultPredicate = predicate(key, value, obj);

		if (resultPredicate === true) {
			result[key] = value;
			continue;
		}

		if (typeof resultPredicate === 'string') {
			result[resultPredicate] = value;
			continue;
		}

		if (Array.isArray(resultPredicate) && typeof resultPredicate[0] === 'string') {
			result[resultPredicate[0]] = resultPredicate[1];
		}
	}

	return result;
}

module.exports = getObj;
