import { AccountRepository } from "@org/domain-services/AccountRepository";

export class AccountService {
  constructor(private readonly accountRepository: AccountRepository) {}
  async openCurrentAccount() {
    await this.accountRepository.createAccount({
      type: "debit",
    });
  }
}
