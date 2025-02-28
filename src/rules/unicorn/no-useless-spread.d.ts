import type { RuleConfig } from '../rule-config';

/**
 * Disallow unnecessary spread.
 *
 * @see [no-useless-spread](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v47.0.0/docs/rules/no-useless-spread.md)
 */
export type NoUselessSpreadRuleConfig = RuleConfig<[]>;

/**
 * Disallow unnecessary spread.
 *
 * @see [no-useless-spread](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v47.0.0/docs/rules/no-useless-spread.md)
 */
export interface NoUselessSpreadRule {
  /**
   * Disallow unnecessary spread.
   *
   * @see [no-useless-spread](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v47.0.0/docs/rules/no-useless-spread.md)
   */
  'unicorn/no-useless-spread': NoUselessSpreadRuleConfig;
}
