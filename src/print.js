import { NODE_ENV } from './env';

/**
 * @param {unknown} message
 * @param  {...unknown[]} args
 * @returns {void}
 */
export function print(message, ...args) {
  if (NODE_ENV === 'testing') return;

  // eslint-disable-next-line no-console
  console.log(message, ...args);
}
