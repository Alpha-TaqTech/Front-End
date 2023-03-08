export class Color {
  public static readonly Black = { base: '#1F1923', hover: '#2F2A35' };
  public static readonly White = { base: '#FFFFF0', hover: '#FFFFF0' };
  public static readonly Grey = { base: '#9A9A95', hover: '#B2B2AD' };
  public static readonly Coal = { base: '#36454F', hover: '#2F3E47' };
  public static readonly Red = { base: '#B60000', hover: '#D60000' };
  public static readonly Brown = { base: '#8B5A2B', hover: '#A66D3D' };
  public static readonly DarkBrown = { base: '#9B2C1B', hover: '#B23D1C' };
  public static readonly Gold = { base: '#D4AF37', hover: '#E6C04D' };
  public static readonly Green = { base: '#1E760F', hover: '#2E8B1F' };

  public static readonly Background = { base: '#FEEFDA', hover: '#FEEFDA' };
  public static readonly TrasnparentBlack = {
    base: 'rgba(31, 25, 35, 0.5)',
    hover: 'rgba(31, 25, 35, 0.5)',
  };
  public static readonly InputText = { base: '#353535', hover: '#353535' };
}

export enum FontFamily {
  Primary = 'Roboto mono, monospace',
}

export enum FontWeight {
  Regular = 400,
  Medium = 500,
}

export enum FontSizeDesktop {
  XLarge = '36px',
  Large = '24px',
  Medium = '16px',
  Small = '14px',
  XSmall = '10px',
}

export enum FontSizeMobile {
  XLarge = '24px',
  Large = '16px',
  Medium = '12px',
  Small = '10px',
  XSmall = '6px',
}

export enum Breakpoints {
  Mobile = '600px',
}
