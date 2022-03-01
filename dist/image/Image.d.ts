export declare type ImageType = 'hosted' | 'external';
export interface Image {
    id?: string;
    uniqId?: number;
    title?: string;
    subtitle?: string;
    url: string;
    size: number;
    height: number;
    width: number;
    order?: number;
    status: string;
    type: ImageType;
    createdAt?: string;
    updatedAt?: string;
}
