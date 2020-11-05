import {
  Controller,
  Get,
  InternalServerErrorException,
  Req,
  Inject,
} from "@nestjs/common";
import {
  AccountService,
  AccountServiceSymbols,
} from "@org/app-services/AccountService";
import { AccountDetailsDto } from "../dtos/AccountDetailsDto";
import { AuthenticatedRequest } from "../middleware/auth.middleware";

@Controller("/api/accounts")
export class AccountsController {
  constructor(
    @Inject(AccountServiceSymbols.AccountService)
    private readonly accountsService: AccountService
  ) {}
  @Get()
  async listCustomerAccounts(@Req() request: AuthenticatedRequest) {
    try {
      const customerNumber = request.customerNumber;
      const domainEntitites = await this.accountsService.listCustomerAccounts(
        customerNumber
      );
      return domainEntitites.map(
        (e) =>
          new AccountDetailsDto(
            e.accountNumber,
            e.branchIdentifier,
            e.openingDate
          )
      );
    } catch (err) {
      console.error(err);
      throw new InternalServerErrorException();
    }
  }
}
