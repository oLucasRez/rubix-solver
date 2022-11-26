// ============================================================================
export class ImpossibleError extends Error {
  constructor(message?: string) {
    super(message || "It's impossible!");

    Object.setPrototypeOf(this, ImpossibleError.prototype);
  }
}
