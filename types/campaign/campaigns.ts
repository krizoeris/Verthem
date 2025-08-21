export interface Campaign {
  id: number;
  title: string;
  domain: string;
  status: string;
  workspaceId: number;
  updatedAt: Date | null;
  createdAt: Date | null;
}
