export type MetaType = {
    current_page: number;
    from: number;
    last_page: number;
    links: LinksType[];
};

export type LinksType = {
    url: string;
    label: string;
    active: boolean;
};

export type LinkType = {
    first: string;
    last: string;
    next: string;
    prev: string;
};
