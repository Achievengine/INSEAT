declare module '@vapi-ai/web' {
    export default class Vapi {
      constructor(publicKey: string);
      start(assistantId: string): Promise<void>;
      stop(): void;
      on(event: string, callback: Function): void;
      off(event: string, callback: Function): void;
    }
  }