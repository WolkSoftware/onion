import { Module } from "@nestjs/common";
import { AccountRepositorySymbols } from "@org/domain-services/AccountRepository";
import { AccountRepositoryImpl } from "@org/infrastructure/dal/repositories/AccountRepositoryImpl";
import { AccountsController } from "@org/infrastructure/http/controllers/accounts.controller";
import { AppServicesModule } from "./appservices.module";

@Module({
  imports: [AppServicesModule],
  controllers: [AccountsController],
  providers: [
    {
      provide: AccountRepositorySymbols.AccountRepository,
      useClass: AccountRepositoryImpl,
    },
  ],
})
export class HttpModule {}
