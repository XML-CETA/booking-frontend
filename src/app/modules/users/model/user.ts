import { Address } from './address';

export interface User {
	name: string;
	surname: string;
	email: string;
	password: string;
	address: Address;
	role: string;
}

export interface UserData {
	name: string;
	surname: string;
	email: string;
	password: string;
	address: Address;
	role: string;
  isProminent: boolean;
}
