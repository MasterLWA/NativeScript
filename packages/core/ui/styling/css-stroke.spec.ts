import { parseCSSStroke } from './css-stroke';
import { CoreTypes } from '../../core-types';
import { Length } from './style-properties';
import { Color } from '../../color';

describe('css-text-stroke', () => {
	it('empty', () => {
		const stroke = parseCSSStroke('');
		expect(stroke.width).toBe(CoreTypes.zeroLength);
		expect(stroke.color).toEqual(new Color('black'));
	});

	it('1px navy', () => {
		const stroke = parseCSSStroke('1px navy');
		expect(stroke.width).toEqual(Length.parse('1px'));
		expect(stroke.color).toEqual(new Color('navy'));
	});

	it('5 green', () => {
		const stroke = parseCSSStroke('5 green');
		expect(stroke.width).toEqual(Length.parse('5'));
		expect(stroke.color).toEqual(new Color('green'));
	});

	it('2px #999', () => {
		const stroke = parseCSSStroke('2px #999');
		expect(stroke.width).toEqual(Length.parse('2px'));
		expect(stroke.color).toEqual(new Color('#999'));
	});
});
