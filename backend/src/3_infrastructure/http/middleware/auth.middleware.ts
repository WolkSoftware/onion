import { Request } from "express";
import { CustomerId } from "@org/domain-model/Customer";

export interface AuthenticatedRequest extends Request {
  customerNumber: CustomerId;
}
