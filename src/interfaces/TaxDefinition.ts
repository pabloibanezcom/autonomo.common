interface TaxBand {
  start: number;
  end?: number;
  rate: number;
}

export default interface TaxDefinition {
  name: string;
  description?: string;
  taxBands: TaxBand[];
}
