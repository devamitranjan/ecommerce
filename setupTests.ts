/* eslint-disable import/no-extraneous-dependencies */
import '@testing-library/jest-dom/vitest';
import { cleanup } from '@testing-library/react';
import { afterEach, beforeEach } from 'vitest';

const originalLocation = window.location;

beforeEach(() => {
  window.location = originalLocation;
});

afterEach(() => {
  cleanup();
});
