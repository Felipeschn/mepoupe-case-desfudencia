import { ConsultZipCodeProvider } from "../../providers/implementations/consultZipCodeProvider";
import { ConsultZipCodeController } from "./consultZipCodeController";
import { ConsultZipCodeUseCase } from "./consultZipCodeUseCase";

const consultZipCodeProvider = new ConsultZipCodeProvider();

const consultZipCodeUseCase = new ConsultZipCodeUseCase(consultZipCodeProvider);
const consultZipCodeController = new ConsultZipCodeController(
  consultZipCodeUseCase
);

export { consultZipCodeUseCase, consultZipCodeController };
