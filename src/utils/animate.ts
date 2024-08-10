import { defaults } from 'lodash/fp';

const ANIMATION_OPTIONS_DEFAULTS = {
  duration: 500,
  fill: 'both',
  composite: 'replace',
  easing: 'ease-out',
} as const;

export const animate = (
  el: HTMLElement,
  animation: Parameters<HTMLElement['animate']>[0],
  options: Parameters<HTMLElement['animate']>[1] = {},
) => {
  if (!el) return Promise.resolve();

  return el.animate(animation, defaults(ANIMATION_OPTIONS_DEFAULTS, options))
    .finished;
};
