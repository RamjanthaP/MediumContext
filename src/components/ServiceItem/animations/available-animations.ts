export const availableAnimations = [
  { value: 'spin1', name: 'Spin 1' },
  { value: 'spin2', name: 'Spin 2' },
  { value: 'bounce', name: 'Bounce' },
];
export type AvailableAnimations = keyof typeof availableAnimations;