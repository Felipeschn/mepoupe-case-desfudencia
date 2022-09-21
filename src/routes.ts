import { Router } from "express";
import { averageCalculationController } from "./useCases/AverageCalculation";
import { consultZipCodeController } from "./useCases/consultZipCode";

const router = Router();

router.get("/average", (req, resp) =>
  averageCalculationController.handle(req, resp)
);

router.get("/cep", (req, resp) => consultZipCodeController.handle(req, resp));

export { router };
