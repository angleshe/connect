// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import { EggAppConfig } from 'egg';

import ExportConfigDefault from '../../config/config.default';
type ConfigDefault = ReturnType<typeof ExportConfigDefault>;
type NewEggAppConfig = ConfigDefault;
declare module 'egg' {
  type EggAppConfig = NewEggAppConfig;
}
