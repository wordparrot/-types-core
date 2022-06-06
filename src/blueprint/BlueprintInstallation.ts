import { Pipeline } from "../pipeline";
import { Webhook } from "../webhook";
import { Listener } from "../listener";

export interface BlueprintInstallation {
  id: string;
  title: string;
  name: string;
  author: string;
  version: string;

  status: string;
  data: any;

  createdAt: string;
  updatedAt: string;
}
