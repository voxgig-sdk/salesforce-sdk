import { SalesforceEntityBase } from '../SalesforceEntityBase';
import type { SalesforceSDK } from '../SalesforceSDK';
import type { Control } from '../types';
import type { Account, AccountLoadMatch, AccountListMatch, AccountCreateData, AccountUpdateData, AccountRemoveMatch } from '../SalesforceTypes';
declare class AccountEntity extends SalesforceEntityBase<Account> {
    constructor(client: SalesforceSDK, entopts: any);
    make(this: AccountEntity): AccountEntity;
    load(this: any, reqmatch?: AccountLoadMatch, ctrl?: Control): Promise<AccountEntity>;
    list(this: any, reqmatch?: AccountListMatch, ctrl?: Control): Promise<AccountEntity[]>;
    create(this: any, reqdata?: AccountCreateData, ctrl?: Control): Promise<AccountEntity>;
    update(this: any, reqdata?: AccountUpdateData, ctrl?: Control): Promise<AccountEntity>;
    remove(this: any, reqmatch?: AccountRemoveMatch, ctrl?: Control): Promise<AccountEntity>;
}
export { AccountEntity };
