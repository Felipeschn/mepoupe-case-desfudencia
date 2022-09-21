import { AverageCalculationController } from "./averageCalculationController";
import { AverageCalculationUseCase } from "./averageCalculationUseCase";
import { MongoAverageCalculationLog } from "../../repositories/implementations/MongoAverageCalculationLog";

const mongoAverageCalculationLog = new MongoAverageCalculationLog();

const averageCalculationUseCase = new AverageCalculationUseCase(
  mongoAverageCalculationLog
);
const averageCalculationController = new AverageCalculationController(
  averageCalculationUseCase
);

export { averageCalculationUseCase, averageCalculationController };
