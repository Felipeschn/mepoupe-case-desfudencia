import { Schema, Document, model } from "mongoose";

export interface IAverageCalcLogModel extends Document {
  firstGrade: number;
  secondGrade: number;
  result: string;
  createdAt: Date;
}

const schema = new Schema<IAverageCalcLogModel>(
  {
    firstGrade: {
      type: Number,
      required: true,
    },
    secondGrade: {
      type: Number,
      required: true,
    },
    result: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: {
      transform: (_, ret): void => {
        ret.id = ret.id;
        delete ret._id;
        delete ret.__v;
      },
    },
  }
);

export const AverageCalc = model<IAverageCalcLogModel>(
  "averageCalc_log",
  schema
);
