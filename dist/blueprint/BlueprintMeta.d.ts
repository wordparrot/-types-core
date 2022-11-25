export interface BlueprintMeta {
    id: string;
    title: string;
    content: string;
    official: boolean;
    allowFork: boolean;
    renderOrder: boolean;
    hubPlugins: any[];
    prices: any[];
    hubUser: any;
    hubUserId: string;
    author: any;
    authorId: string;
    contributors: any[];
    createdAt: string;
    updatedAt: string;
}
