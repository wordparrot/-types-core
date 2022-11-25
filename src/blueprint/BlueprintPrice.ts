export interface BlueprintPrice {
  id: string;
  title: string;
  content: string;
  type: string;
  currency: string;
  value: number;
  blueprints: any[];

  createdAt: string;
  updatedAt: string;
}
