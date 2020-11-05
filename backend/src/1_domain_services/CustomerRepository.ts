export interface CreateCustomerArgs {
  name: string;
  rurname: string;
  address: string;
  country: string;
  postcode: string;
  dateOfBirth: Date;
}

export interface CustomerRepository {
  createCustomer(createCustomerArgs: CreateCustomerArgs): string;
}
