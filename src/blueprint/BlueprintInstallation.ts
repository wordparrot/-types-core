import { Pipeline } from "../pipeline";
import { Webhook } from "../webhook";
import { Listener } from "../listener";

export interface BlueprintInstallation {
  id: string;
  blueprintTitle: string;
  plugin: string;
  author: string;
  version: string;

  status: string;
  data: {
    pipelines?: Pipeline[];
    listeners?: Listener[];
    webhooks?: Webhook[];
  };

  createdAt: string;
  updatedAt: string;
}
