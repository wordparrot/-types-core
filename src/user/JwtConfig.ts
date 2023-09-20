export interface JwtConfig {
  id: string;
  email: string;
  locale: string;
  domain: string;

  siteId?: string;
  userId?: string;
  hubUserId?: string;
  hubSiteId?: string;
}
