export interface Project {
    title: string;
    content: string;
    metadata: {
        url: string;
    };
}

export interface Feature {
    title: string;
    content: string;
    metadata: {
        url: string;
        thumbnail: string;
    };
}
