type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | Array<JSONValue>;

function chunk(arr: Obj[], size: number): Obj[][] {
  return arr.reduce<Obj[][]>((acc, curr) => {
    if (acc.length == 0 || acc[acc.length - 1].length === size) {
      acc.push([]);
    }
    acc[acc.length - 1].push(curr);
    return acc;
  }, []);
}
