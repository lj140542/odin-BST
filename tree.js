import { Node } from './node.js';

const Tree = (array) => {
  let initArray = [...new Set(array)].sort((a, b) => a - b);
  const buildTree = (array, start, end) => {
    if (start > end) return null;
    let middle = Math.floor((start + end) / 2);
    let node = Node(array[middle]);
    node.left = buildTree(array, start, middle - 1);
    node.right = buildTree(array, middle + 1, end);
    return node
  };
  let root = buildTree(initArray, 0, initArray.length - 1);
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
  const insert = (value) => {
    let n = Node(value);
    let checkedNode = root;
    while (checkedNode != null) {
      if (value === checkedNode.data) return root; // no duplicates allowed
      if (value <= checkedNode.data) {
        if (checkedNode.left === null) {
          checkedNode.left = n;
          return root;
        }
        else checkedNode = checkedNode.left;
      }
      else {
        if (checkedNode.right === null) {
          checkedNode.right = n;
          return root;
        }
        else checkedNode = checkedNode.right;
      }
    }
    return root;
  };
  const remove = (value) => {
    let checkedNode = root;
    let parentNode = null;

    // finding the node with the correct value, and its parent
    while (checkedNode != null) {
      if (value < checkedNode.data) {
        if (checkedNode.left === null) return root;
        else {
          parentNode = checkedNode;
          checkedNode = checkedNode.left;
        }
      }
      else if (value > checkedNode.data) {
        if (checkedNode.right === null) return root;
        else {
          parentNode = checkedNode;
          checkedNode = checkedNode.right;
        }
      }
      else break;
    }

    // dealing with the found node
    if (checkedNode.left === null && checkedNode.right === null) {
      checkedNode.data < parentNode.data ? parentNode.left = null : parentNode.right = null;
    }
    else if (checkedNode.left === null) {
      checkedNode.data = checkedNode.right.data;
      checkedNode.data < parentNode.data ? parentNode.left = checkedNode.right : parentNode.right = checkedNode.right;
    }
    else if (checkedNode.right === null) {
      checkedNode.data = checkedNode.left.data;
      checkedNode.data < parentNode.data ? parentNode.left = checkedNode.left : parentNode.left = checkedNode.right;
    }
    else {
      let smallestChild = checkedNode.right;
      let tmpData = null;
      while (smallestChild.left != null) {
        smallestChild = smallestChild.left;
      }
      tmpData = smallestChild.data;
      remove(smallestChild.data);
      checkedNode.data = tmpData;
    }

    return root;
  };
  const find = (value) => {
    let checkedNode = root;
    while (checkedNode != null) {
      if (checkedNode.data === value) return checkedNode;
      checkedNode = value < checkedNode.data ? checkedNode = checkedNode.left : checkedNode = checkedNode.right;
    }
    return null;
  };
  return { root, prettyPrint, insert, remove, find };
};

export { Tree };