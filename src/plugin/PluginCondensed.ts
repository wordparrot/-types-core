import {
  PluginConfiguration,
  PluginFormConfiguration,
  PluginTranslationConfiguration,
} from "..";

export interface PluginCondensed {
  form: PluginFormConfiguration;
  config: PluginConfiguration;
  translation: PluginTranslationConfiguration;
  index: string;
}
