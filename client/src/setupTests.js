// setupTests.js
import { vi } from 'vitest';
import '@testing-library/jest-dom';

// 如果需要全局模拟某些函数
globalThis.someGlobalFunction = vi.fn();