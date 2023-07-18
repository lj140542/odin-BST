import { Node } from './node.js'
it('a node is created and its data is accessible', () => {
  let n = Node(5);
  expect(n.data).toBe(5);
});