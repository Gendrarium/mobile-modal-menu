declare module 'global' {
  export declare global {
    interface EventTarget {
      closest: (s: string) => Node | undefined;
    }
  }
}
