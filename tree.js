import { Node } from './node.js';

const Tree = (array) => {
  let initArray = [...new Set(array)].sort((a, b) => a - b);
  const buildTree = (array, start, end) => {
    if (start > end) return null;
    let middle = Math.floor((start+end)/2);
    let node = Node(array[middle]);
    node.left = buildTree(array, start, middle-1);
    node.right = buildTree(array, middle+1, end);
    return node
  };
  let root = buildTree(initArray, 0, initArray.length-1);
  const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  };
  return { root, prettyPrint };
};

export { Tree };