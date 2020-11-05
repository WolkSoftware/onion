import { AccountNumber, getIban } from "@org/domain-model/Account";

export class AccountDetailsDto {
  public readonly iban: string;
  constructor(
    public readonly accountNumber: AccountNumber,
    public readonly branchIdentifier: number,
    public readonly openingDate: Date
  ) {
    this.iban = getIban(branchIdentifier, accountNumber);
  }
}
