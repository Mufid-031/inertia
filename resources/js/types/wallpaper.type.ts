export type WallpapersType = {
    id: number;
    title: string;
    image: string;
    user: {
        id: number;
        name: string;
        email: string;
    };
    category: {
        id: number;
        name: string;
    };
};
