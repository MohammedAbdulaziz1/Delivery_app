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
    ar_name: string;
    dial_cod: string;
    phone:string;
    email: string;
    password:string;
    password_confirmation:string;
    role:string;
    status: string;
};

export interface Restaurant {
    id: number;
    en_name: string;
    ar_name: string;
    dial_cod: string;
    phone:string;
    password:string;
    password_confirmation:string;
};


export interface BreadcrumbItem {
    title: string;
    href: string;
}
