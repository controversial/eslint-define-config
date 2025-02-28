import type { RuleConfig } from '../rule-config';

/**
 * Enforce no spaces between braces.
 *
 * @see [empty-brace-spaces](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v47.0.0/docs/rules/empty-brace-spaces.md)
 */
export type EmptyBraceSpacesRuleConfig = RuleConfig<[]>;

/**
 * Enforce no spaces between braces.
 *
 * @see [empty-brace-spaces](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v47.0.0/docs/rules/empty-brace-spaces.md)
 */
export interface EmptyBraceSpacesRule {
  /**
   * Enforce no spaces between braces.
   *
   * @see [empty-brace-spaces](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v47.0.0/docs/rules/empty-brace-spaces.md)
   */
  'unicorn/empty-brace-spaces': EmptyBraceSpacesRuleConfig;
}
