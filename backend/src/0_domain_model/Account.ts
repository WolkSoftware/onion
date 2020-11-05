import { BANK_ID, COUNTRY_CODE, IBAN_CHECK_DIGITS } from "./Constants";

export type AccountNumber = number;

export const enum ACCOUNT_TYPE {
  DEBIT = "debit",
  CREDIT = "credit",
  DEPOSIT = "deposit",
}

export type AccountType = "debit" | "credit" | "deposit";

export interface AccountDetails {
  accountNumber: AccountNumber;
  branchIdentifier: number;
  openingDate: Date;
}

export function getIban(branchIdentifier: number, accountNumber: number) {
  return `${COUNTRY_CODE}${IBAN_CHECK_DIGITS}${BANK_ID}${branchIdentifier}${accountNumber}`;
}

export class Account {}
