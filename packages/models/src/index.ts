import { get } from "lodash";

const a = { a: { b: 1 } };

const c = get(a, "a.b");

console.log(c);
