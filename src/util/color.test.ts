import { generateAltColor, generateRandomColor } from './color';

describe('generateRandomColor', () => {
  test('returns a hex color', () => {
    const color = generateRandomColor();
    expect(color).toMatch(/^#[0-9a-f]{3,6}$/i);
  });

  test('returns a randome hex color every time', () => {
    const color1 = generateRandomColor();
    const color2 = generateRandomColor();
    expect(color1).toMatch(/^#[0-9a-f]{3,6}$/i);
    expect(color2).toMatch(/^#[0-9a-f]{3,6}$/i);
    expect(color1).not.toEqual(color2);
  });
});

describe('generateAltColor', () => {
  test('returns the alternative color (white or black)', () => {
    const color1 = '#0000ff'; // blue color
    const altColor1 = generateAltColor(color1);
    const color2 = '#add8e6'; // light blue color
    const altColor2 = generateAltColor(color2);
    expect(altColor1).toEqual('#FFFFFF');
    expect(altColor2).toEqual('#000000');
  });

  test('returns the alternative color', () => {
    const color1 = '#0000ff'; // blue color
    const altColor1 = generateAltColor(color1, false);
    const color2 = '#add8e6'; // light blue color
    const altColor2 = generateAltColor(color2, false);
    expect(altColor1).toEqual('#FFFF00');
    expect(altColor2).toEqual('#522719');
  });

  test('returns the alternative color for a 3 letter hex color', () => {
    const color = '#145';
    const altColor = generateAltColor(color);
    expect(altColor).toMatch(/^#[0-9a-f]{3,6}$/i);
  });

  test('throws an exception when color it not a valid hex color', () => {
    expect(() => {
      generateAltColor('notAColor');
    }).toThrow('Invalid HEX color.');
  });
});
