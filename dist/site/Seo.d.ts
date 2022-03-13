import { Site } from '..';
export interface Seo {
    id: string;
    titleTag: string;
    metaTitle: string;
    metaType: string;
    metaDescription: string;
    metaImage: string;
    metaRobots: string;
    metaViewport: string;
    metaFavicon: string;
    googleSiteVerification: string;
    googleAnalyticsId: string;
    site: Site;
    createdAt: string;
    updatedAt: string;
}
