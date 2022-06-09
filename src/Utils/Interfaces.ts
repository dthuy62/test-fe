export interface Movie {
    id: number;
    title: string;
    background_image: string;

}

export interface Comment {
    id: number;
    time: string;
    avatar: string;
    owner: string;
    content: string;
}
