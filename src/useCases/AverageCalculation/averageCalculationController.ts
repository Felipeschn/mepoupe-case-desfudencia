import { Request, Response } from "express";
import { AverageCalculationUseCase } from "./averageCalculationUseCase";

export class AverageCalculationController {
  constructor(private averageCalculationUseCase: AverageCalculationUseCase) {}

  async handle(req: Request, resp: Response): Promise<Response> {
    const { firstGrade, secondGrade } = req.body;

    if (!firstGrade || !secondGrade) {
      return resp.status(422).send({ error: "There is properties missing!" });
    }
    if (typeof firstGrade !== "number" || typeof secondGrade !== "number") {
      return resp.status(422).send({ error: "Bad request!" });
    }

    try {
      const reponse = await this.averageCalculationUseCase.execute({
        firstGrade,
        secondGrade,
      });
      return resp.status(201).send(reponse);
    } catch (err) {
      return resp.status(400).json({
        error: err.message || "Unexpected error.",
      });
    }
  }
}
