export const generateRandomColor = (): string => {
  return `#${((Math.random() * 0xffffff) << 0).toString(16).padStart(6, '0')}`;
};

export const generateAltColor = (color: string, blackOrWhite: boolean = true): string => {
  if (!color.match(/^#[0-9a-f]{3,6}$/i)) {
    throw new Error('Invalid HEX color.');
  }
  const padZero = (str: string, len = 2) => {
    var zeros = new Array(len).join('0');
    return (zeros + str).slice(-len);
  };

  color = color.slice(1);
  // convert 3-digit color to 6-digits.
  if (color.length === 3) {
    color = color[0] + color[0] + color[1] + color[1] + color[2] + color[2];
  }
  var r = parseInt(color.slice(0, 2), 16),
    g = parseInt(color.slice(2, 4), 16),
    b = parseInt(color.slice(4, 6), 16);
  if (blackOrWhite) {
    // https://stackoverflow.com/a/3943023/112731
    return r * 0.299 + g * 0.587 + b * 0.114 > 186 ? '#000000' : '#FFFFFF';
  }
  // invert color components
  const rStr = (255 - r).toString(16);
  const gStr = (255 - g).toString(16);
  const bStr = (255 - b).toString(16);
  // pad each with zeros and return
  return `#${padZero(rStr)}${padZero(gStr)}${padZero(bStr)}`.toUpperCase();
};
