import { Axios } from "axios";
import { FileUtility, FileUtilityConfig } from "..";
import { ConstructableWithConfig } from "..";

export type SandboxLib = {
  axios: Axios;
  _: any;
  qs: any;
  FormData: any;
  FileUtility: ConstructableWithConfig<FileUtilityConfig, FileUtility>;
};
