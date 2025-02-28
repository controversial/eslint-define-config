import type { RuleConfig } from '../rule-config';

/**
 * Option.
 *
 * @deprecated
 */
export interface ImportIndexOption {
  /**
   * @deprecated
   */
  ignoreImports?: boolean;
}

/**
 * Options.
 *
 * @deprecated
 *
 * @see [import-index](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v47.0.0/docs/deprecated-rules.md#import-index)
 */
export type ImportIndexOptions = [ImportIndexOption?];

/**
 * Enforce importing index files with `.`.
 *
 * @deprecated
 *
 * @see [import-index](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v47.0.0/docs/deprecated-rules.md#import-index)
 */
export type ImportIndexRuleConfig = RuleConfig<ImportIndexOptions>;

/**
 * Enforce importing index files with `.`.
 *
 * @deprecated
 *
 * @see [import-index](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v47.0.0/docs/deprecated-rules.md#import-index)
 */
export interface ImportIndexRule {
  /**
   * Enforce importing index files with `.`.
   *
   * @deprecated
   *
   * @see [import-index](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v47.0.0/docs/deprecated-rules.md#import-index)
   */
  'unicorn/import-index': ImportIndexRuleConfig;
}
