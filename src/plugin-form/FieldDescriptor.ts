export interface FieldDescriptor {
  property: string;
  index: number;
  type: "header" | "tagline" | "body" | "link";
  text: string;
  href?: string;
}
