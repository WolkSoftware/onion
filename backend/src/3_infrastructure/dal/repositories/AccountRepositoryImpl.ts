import { AccountNumber, AccountType, AccountDetails } from "@org/domain-model/Account";
import { CustomerId } from "@org/domain-model/Customer";
import { AccountRepository, CreateAccountArgs } from "@org/domain-services/AccountRepository";
import { getDbPool } from "../db/db";

interface AccountTableRow {
  accountNumber: AccountNumber;
  branchIdentifier: number;
  accountType: AccountType;
  customerId: CustomerId;
  openingDate: string;
}

export class AccountRepositoryImpl implements AccountRepository {
  async listCostumerAccounts(customerId: CustomerId): Promise<AccountDetails[]> {
    const pool = await getDbPool();
    const queryResult = await pool.query<AccountTableRow>(
      "SELECT * FROM accounts WHERE accountId = $1::text",
      [customerId]
    );
    return queryResult.rows.map(row => ({
      accountNumber: row.accountNumber,
      branchIdentifier: row.branchIdentifier,
      openingDate: new Date(Date.parse(row.openingDate))
    } as AccountDetails));
  }
  async createAccount(createAccountArgs: CreateAccountArgs) {
    const { branchIdentifier, accountType, customerId } = createAccountArgs;
    const pool = await getDbPool();
    const result = await pool.query<AccountTableRow>(
      "INSERT INTO accounts VALUES($1::text, $2::text, $3::text, $3::text) RETURNING",
      [branchIdentifier, accountType, customerId, new Date().toISOString()]
    );
    const accountId = result.rows.map(row => row.accountNumber)[0];
    return accountId;
  }
}