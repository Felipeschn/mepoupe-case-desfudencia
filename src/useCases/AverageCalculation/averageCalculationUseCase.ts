import { IAverageCalculationLogRepository } from "../../repositories/IAverageCalculationLog-repository";
import { IAverageCalculationRequestDTO } from "./averageCalculationDTO";

export class AverageCalculationUseCase {
  constructor(
    private averageCalculationRepository: IAverageCalculationLogRepository
  ) {}

  async execute(data: IAverageCalculationRequestDTO) {
    const { firstGrade, secondGrade } = data;
    var result = Math.round((firstGrade + secondGrade) / 2).toFixed(2);

    await this.averageCalculationRepository.registerLog({
      firstGrade,
      secondGrade,
      result,
    });

    return result;
  }
}
