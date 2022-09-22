export interface IAdressZipCode {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
  erro?: string;
}

export interface IConsultZipCodeProvider {
  consult(zipCode: number): Promise<IAdressZipCode>;
}
