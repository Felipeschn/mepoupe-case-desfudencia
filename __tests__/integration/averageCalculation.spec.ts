import mongoose, { Mongoose } from "mongoose";
import { averageCalculationUseCase } from "../../src/useCases/AverageCalculation";

beforeAll(async () => {
  await mongoose.connect(
    `mongodb+srv://username:10QlUj3JtpWeC5Nw@cluster0.0qpodsr.mongodb.net/?retryWrites=true&w=majority`
  );
});

describe("Average Calculation", () => {
  it("should be able to calculate the average of two given numbers", async () => {
    const actual = {
      firstGrade: 5,
      secondGrade: 10,
    };
    const expected = "8.00";

    const sut = await averageCalculationUseCase.execute(actual);

    expect(sut).toBe(expected);
  });
});
