export interface Account {
    AnnualRevenue?: number;
    CreatedDate?: string;
    Industry?: string;
    LastModifiedDate?: string;
    Name?: string;
    Phone?: string;
    Website?: string;
    id?: string;
}
export interface AccountLoadMatch {
    id: string;
}
export interface AccountListMatch {
    AnnualRevenue?: number;
    CreatedDate?: string;
    Industry?: string;
    LastModifiedDate?: string;
    Name?: string;
    Phone?: string;
    Website?: string;
    id?: string;
}
export interface AccountCreateData {
    AnnualRevenue?: number;
    CreatedDate?: string;
    Industry?: string;
    LastModifiedDate?: string;
    Name?: string;
    Phone?: string;
    Website?: string;
    id?: string;
}
export interface AccountUpdateData {
    id: string;
    AnnualRevenue?: number;
    CreatedDate?: string;
    Industry?: string;
    LastModifiedDate?: string;
    Name?: string;
    Phone?: string;
    Website?: string;
}
export interface AccountRemoveMatch {
    id: string;
}
