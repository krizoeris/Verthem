export interface Template {
  id: number;
  name: string;
  template: string;
  status: "active" | "inactive";
  type: "user" | "free" | "pro";
  created_at: number;
  updated_at: number;
}
