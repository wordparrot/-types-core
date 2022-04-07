export interface Webhook {
  id: string;
  title: string;
  content: string;
  provider: string;
  status: string;
  methods: string[];
  route: string;

  siteId: string;
  pipelines: string[];

  createdAt: string;
  updatedAt: string;
}
