// ============================================================================
export class Heap<NodeType> {
  public array: NodeType[] = [];

  public constructor(
    private readonly prioritize: (me: NodeType, over: NodeType) => boolean
  ) {}

  public push(node: NodeType) {
    this.array.push(node);

    for (let i = this.array.length - 1; i !== 0; i = this.parent_i(i)) {
      const parent_i = this.parent_i(i);

      this.prioritize(this.array[i], this.array[parent_i]) &&
        this.switch(i, parent_i);
    }
  }

  public pop() {
    const value = this.array.shift();

    const lastValue = this.array.pop();

    if (!lastValue) return value;

    this.array.unshift(lastValue);

    this.heapify();

    return value;
  }

  private heapify(i: number = 0) {
    let best = i;

    const l = this.left_i(i);
    const r = this.right_i(i);

    const n = this.array.length;

    if (l < n && this.array[l] > this.array[i]) best = l;

    if (r < n && this.array[r] > this.array[best]) best = r;

    if (best != i) {
      this.switch(i, best);

      this.heapify(best);
    }
  }

  private parent_i(i: number) {
    return Math.floor((i - 1) / 2);
  }

  private left_i(i: number) {
    return i * 2 + 1;
  }

  private right_i(i: number) {
    return i * 2 + 2;
  }

  private switch(a_i: number, b_i: number) {
    const a = this.array[a_i];
    const b = this.array[b_i];

    this.array[a_i] = b;
    this.array[b_i] = a;
  }
}
