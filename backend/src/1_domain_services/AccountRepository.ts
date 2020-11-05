export interface CreateAccountArgs {
  type: "debit" | "credit" | "deposit";
}

type AccountId = string;

export interface AccountRepository {
  createAccount(createAccountArgs: CreateAccountArgs): Promise<AccountId>;
}
