import { Module } from "@nestjs/common";
import {
  AccountService,
  AccountServiceSymbols,
} from "@org/app-services/AccountService";
import { DataAccessLayerModule } from "./dal.module";

@Module({
  imports: [DataAccessLayerModule],
  providers: [
    {
      provide: AccountServiceSymbols.AccountService,
      useClass: AccountService,
    },
  ],
  exports: [AccountServiceSymbols.AccountService],
})
export class AppServicesModule {}
