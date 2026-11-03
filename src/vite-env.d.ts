/// <reference types="vite/client" />

declare module '*.css' {
  const content: Record<string, string>;
  export default content;
}

declare module 'locomotive-scroll' {
  export default class LocomotiveScroll {
    constructor(options?: any);
    destroy(): void;
    start(): void;
    stop(): void;
    scrollTo(target: any, options?: any): void;
    on(event: string, func: (...args: any[]) => void): void;
  }
}

