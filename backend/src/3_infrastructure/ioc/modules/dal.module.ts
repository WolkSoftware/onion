import { Module } from "@nestjs/common";
import { AccountRepositorySymbols } from "@org/domain-services/AccountRepository";
import { AccountRepositoryImpl } from "@org/infrastructure/dal/repositories/AccountRepositoryImpl";

@Module({
  providers: [
    {
      provide: AccountRepositorySymbols.AccountRepository,
      useClass: AccountRepositoryImpl,
    },
  ],
  exports: [AccountRepositorySymbols.AccountRepository],
})
export class DataAccessLayerModule {}
