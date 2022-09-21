import { Request, Response } from "express";
import { ConsultZipCodeUseCase } from "./consultZipCodeUseCase";

export class ConsultZipCodeController {
  constructor(private consultZipCodeUseCase: ConsultZipCodeUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { zipCode } = request.body;

    try {
      const zipCodeData = await this.consultZipCodeUseCase.execute({ zipCode });

      return response.status(200).json(zipCodeData);
    } catch (err) {
      response.status(400).json({
        error: err.message || "Unexpected error.",
      });
    }
  }
}
