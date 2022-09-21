export interface AverageDate {
  firstGrade: number;
  secondGrade: number;
  result: string;
}
export interface IAverageCalculationLogRepository {
  registerLog(averageDate: AverageDate): Promise<void>;
}
