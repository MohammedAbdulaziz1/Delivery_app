export interface User {
    id: number;
    en_name: string;
    email: string;
    email_verified_at?: string;
    status: string;
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
    auth: {
        user: User;
    };
};

export interface Customer {
    id: number;
    en_name: string;
    email: string;
    status: string;
};
