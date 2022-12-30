export interface FieldDescriptor {
  property: string;
  index: number;
  type: "header" | "tagline" | "body" | "link" | "error";
  text: string;
  href?: string;
}
