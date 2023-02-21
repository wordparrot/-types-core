export interface FieldDescriptor {
  property: string;
  index: number;
  type: "header" | "tagline" | "body" | "link" | "error" | "youtube";
  text: string;
  href?: string;
}
