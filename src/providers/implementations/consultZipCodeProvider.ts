import axios from "axios";

import {
  IAdressZipCode,
  IConsultZipCodeProvider,
} from "../IConsultZipCodeProvider";

export class ConsultZipCodeProvider implements IConsultZipCodeProvider {
  async consult(zipCode: number): Promise<IAdressZipCode> {
    const { data } = await axios.get<IAdressZipCode>(
      `https://viacep.com.br/ws/${zipCode}/json`
    );
    if (data.erro === "true") {
      throw new Error("Invalid zipcode");
    }
    return data;
  }
}
