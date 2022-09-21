import { IConsultZipCodeProvider } from "../../providers/IConsultZipCodeProvider";
import { IConsultZipCodeRequestDTO } from "./consultZipCodeDTO";

export class ConsultZipCodeUseCase {
  constructor(private consultZipCodeProvider: IConsultZipCodeProvider) {}

  async execute(data: IConsultZipCodeRequestDTO) {
    const { zipCode } = data;
    try {
      const zipCodeReponse = await this.consultZipCodeProvider.consult(zipCode);

      if (zipCodeReponse && !zipCodeReponse.bairro) {
        zipCodeReponse.bairro = "Bairro não existe";
      }

      return zipCodeReponse;
    } catch (error) {
      return error.message;
    }
  }
}
