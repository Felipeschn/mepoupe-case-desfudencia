import { AverageCalc } from "../../models/averageCalc";
import {
  AverageDate,
  IAverageCalculationLogRepository,
} from "../IAverageCalculationLog-repository";

export class MongoAverageCalculationLog
  implements IAverageCalculationLogRepository
{
  async registerLog(averageDate: AverageDate): Promise<void> {
    await AverageCalc.create(averageDate);
  }
}
