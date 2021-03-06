export function isPresent(obj: {}): boolean {
	return obj != null;
}

export function isBlank(obj: {}): boolean {
	return obj == null;
}

export class NumberWrapper {
	static parseIntAutoRadix(text: string): number {
		const result: number = parseInt(text, 10);
		if (isNaN(result)) {
			throw new Error('Invalid integer literal when parsing ' + text);
		}
		return result;
	}

	static isNumeric(value: any): boolean { return !isNaN(value - parseFloat(value)); }
}