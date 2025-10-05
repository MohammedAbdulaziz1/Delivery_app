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
    mediaFile?: MediaFile; 
};

export interface Product {
    id: number;
    en_name: string;
    ar_name: string;
    description: string;
    price:number;
    status:string;
    mediaFile?: MediaFile; 
};


export interface RestaurantCard {
    id: number;
    en_name: string;
    media?: MediaFile;
}

export interface MenuCard {
    id: number;
    name: string;
    media?: MediaFile;
    description: string;
    price: number;
    products: Product[];
}

export interface MediaFile {
    id: number,
    model_type: string,
    model_id: number,
    uuid: string,
    collection_name: string,
    name: string,
    file_name: string,
    mime_type: string,
    disk: string,
    conversions_disk: string,
    size: number,
    manipulations: string[],
    custom_properties: string[],
    generated_conversions: string[],
    responsive_images: string[],
    order_column: number,
    created_at: string,
    updated_at: string,
    original_url: string,
    preview_url: string,
}

export interface Driver {
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
    products: Product[];
};

export interface Order {
    id: number;
    customer_id: number;
    restaurant_id: number;
    driver_id: number;
    status: string;
};




export interface BreadcrumbItem {
    title: string;
    href: string;
}

export interface PaginatedResponse<T> {
    current_page: number;
    data: T[];
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    links: {
        url: string | null;
        label: string;
        active: boolean;
    }[];
    next_page_url: string | null;
    path: string;
    per_page: number;
    prev_page_url: string | null;
    to: number;
    total: number;
}


export interface SidebarItem {
    title: string;
    routeName: string;
    icon: string;
}