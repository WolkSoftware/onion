import { CustomerId } from "@org/domain-model/Customer";
import { ACCOUNT_TYPE } from "@org/domain-model/Account";
import {
  AccountRepository,
  AccountRepositorySymbols,
} from "@org/domain-services/AccountRepository";
import { Inject } from "@nestjs/common";

export const AccountServiceSymbols = {
  AccountService: Symbol.for("AccountService"),
};

export class AccountService {
  constructor(
    @Inject(AccountRepositorySymbols.AccountRepository)
    private readonly accountRepository: AccountRepository
  ) {}
  async openCurrentAccount(customerId: CustomerId, branchIdentifier: number) {
    await this.accountRepository.createAccount({
      branchIdentifier,
      accountType: ACCOUNT_TYPE.DEBIT,
      customerId,
    });
  }
  async listCustomerAccounts(customerId: CustomerId) {
    return await this.accountRepository.listCostumerAccounts(customerId);
  }
}
