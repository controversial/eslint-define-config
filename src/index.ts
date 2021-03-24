import type { Env } from './env';
import type { Overrides } from './overrides';
import type { ParserOptions } from './parser-options';
import type { Rules } from './rules';
import type { Settings } from './settings';

/**
 *
 */
export interface EslintConfig {
  root?: boolean;
  ignorePatterns?: string[];
  env?: Env;
  extends?: string[];
  parser?: string;
  parserOptions?: ParserOptions;
  plugins?: string[];
  rules?: Rules;
  overrides?: Overrides;
  settings?: Settings;
}

/**
 * Define an eslint config.
 *
 * @param config Eslint config.
 * @returns Eslint config.
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
export function defineConfig(config: EslintConfig) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return config;
}
