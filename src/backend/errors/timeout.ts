// ============================================================================
export class TimeoutError extends Error {
  constructor(message?: string) {
    super(message || 'Time limit exceeded!');

    Object.setPrototypeOf(this, TimeoutError.prototype);
  }
}
