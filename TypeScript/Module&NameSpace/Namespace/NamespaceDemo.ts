namespace Demo {
  export interface AddSub {
    add(a: number, b: number): number;
    sub(a: number, b: number): number;
  }

  export interface DivMul {
    div(a: number, b: number): number;
    mul(a: number, b: number): number;
  }
}
