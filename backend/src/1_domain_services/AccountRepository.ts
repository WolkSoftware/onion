import { CustomerId } from "@org/domain-model/Customer";
import {
  AccountNumber,
  AccountType,
  AccountDetails,
} from "@org/domain-model/Account";

export interface CreateAccountArgs {
  branchIdentifier: number;
  accountType: AccountType;
  customerId: CustomerId;
}

export const AccountRepositorySymbols = {
  AccountRepository: Symbol.for("AccountRepository"),
};

export interface AccountRepository {
  createAccount(createAccountArgs: CreateAccountArgs): Promise<AccountNumber>;
  listCostumerAccounts(customerId: CustomerId): Promise<AccountDetails[]>;
}
