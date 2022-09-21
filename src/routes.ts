import { Router } from "express";
import { averageCalculationController } from "./useCases/AverageCalculation";

const router = Router();

router.get("/average", (req, resp) => {
  return averageCalculationController.handle(req, resp);
});

export { router };
