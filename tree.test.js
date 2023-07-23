import { Tree } from './tree.js';

it('a tree is created from an ODD number of value', () => {
  let t = Tree([1, 2, 3, 4, 5, 6, 7]);
  expect(t.root).toStrictEqual({
    "data": 4,
    "left": {
      "data": 2,
      "left": {
        "data": 1,
        "left": null,
        "right": null
      },
      "right": {
        "data": 3,
        "left": null,
        "right": null
      }
    },
    "right": {
      "data": 6,
      "left": {
        "data": 5,
        "left": null,
        "right": null
      },
      "right": {
        "data": 7,
        "left": null,
        "right": null
      }
    }
  })
});

it('a tree is created from an EVEN number of value', () => {
  let t = Tree([1, 2, 3, 4, 5, 6, 7, 8]);
  expect(t.root).toStrictEqual({
    "data": 4,
    "left": {
      "data": 2,
      "left": {
        "data": 1,
        "left": null,
        "right": null
      },
      "right": {
        "data": 3,
        "left": null,
        "right": null
      }
    },
    "right": {
      "data": 6,
      "left": {
        "data": 5,
        "left": null,
        "right": null
      },
      "right": {
        "data": 7,
        "left": null,
        "right": {
          "data": 8,
          "left": null,
          "right": null
        }
      }
    }
  })
});

it('a tree is created from an unsorted array with duplicates', () => {
  let t = Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
  expect(t.root).toStrictEqual(
    {
      "data": 8,
      "left": {
        "data": 4,
        "left": {
          "data": 1,
          "left": null,
          "right": {
            "data": 3,
            "left": null,
            "right": null
          }
        },
        "right": {
          "data": 5,
          "left": null,
          "right": {
            "data": 7,
            "left": null,
            "right": null
          }
        }
      },
      "right": {
        "data": 67,
        "left": {
          "data": 9,
          "left": null,
          "right": {
            "data": 23,
            "left": null,
            "right": null
          }
        },
        "right": {
          "data": 324,
          "left": null,
          "right": {
            "data": 6345,
            "left": null,
            "right": null
          }
        }
      }
    }
  )
});

it('a new node is inserted in the tree', () => {
  let t = Tree([1, 2, 3]);
  // insert() returns the root
  expect(t.insert(4)).toStrictEqual({
    "data": 2,
    "left": {
      "data": 1,
      "left": null,
      "right": null
    },
    "right": {
      "data": 3,
      "left": null,
      "right": {
        "data": 4,
        "left": null,
        "right": null
      }
    }
  });
});

it('a new node is not inserted because the value is duplicated', () => {
  let t = Tree([1, 2, 3]);
  // insert() returns the root
  expect(t.insert(3)).toStrictEqual({
    "data": 2,
    "left": {
      "data": 1,
      "left": null,
      "right": null
    },
    "right": {
      "data": 3,
      "left": null,
      "right": null
    }
  });
});

it('remove a leaf from the tree', () => {
  let t = Tree([1, 2, 3]);
  // remove() returns the root
  expect(t.remove(1)).toStrictEqual({
    "data": 2,
    "left": null,
    "right": {
      "data": 3,
      "left": null,
      "right": null
    }
  });
});

it('remove a node with one child from the tree', () => {
  let t = Tree([1, 2, 3, 4]);
  // remove() returns the root
  expect(t.remove(3)).toStrictEqual({
    "data": 2,
    "left": {
      "data": 1,
      "left": null,
      "right": null
    },
    "right": {
      "data": 4,
      "left": null,
      "right": null
    }
  });
});

it('remove a node with two children from the tree', () => {
  let t = Tree([1, 2, 3, 4, 5, 6]);
  // remove() returns the root
  expect(t.remove(5)).toStrictEqual({
    "data": 3,
    "left": {
      "data": 1,
      "left": null,
      "right": {
        "data": 2,
        "left": null,
        "right": null
      }
    },
    "right": {
      "data": 6,
      "left": {
        "data": 4,
        "left": null,
        "right": null
      },
      "right": null
    }
  });
});

it('remove the root', () => {
  let t = Tree([1, 2, 3, 4, 5, 6]);
  // remove() returns the root
  expect(t.remove(3)).toStrictEqual({
    "data": 4,
    "left": {
      "data": 1,
      "left": null,
      "right": {
        "data": 2,
        "left": null,
        "right": null
      }
    },
    "right": {
      "data": 5,
      "left": null,
      "right": {
        "data": 6,
        "left": null,
        "right": null
      }
    }
  });
});

it('remove nothing because the value is not present in the tree', () => {
  let t = Tree([1, 2, 3]);
  // insert() returns the root
  expect(t.remove(4)).toStrictEqual({
    "data": 2,
    "left": {
      "data": 1,
      "left": null,
      "right": null
    },
    "right": {
      "data": 3,
      "left": null,
      "right": null
    }
  });
});

it('find a node based on a value', () => {
  let t = Tree([1, 2, 3]);
  expect(t.find(1)).toStrictEqual({
    "data": 1,
    "left": null,
    "right": null
  });
});

it('find nothing because the value is not present in the tree', () => {
  let t = Tree([1, 2, 3]);
  expect(t.find(4)).toStrictEqual(null);
});

it('find the root', () => {
  let t = Tree([1, 2, 3]);
  expect(t.find(2)).toStrictEqual({
    "data": 2,
    "left": {
      "data": 1,
      "left": null,
      "right": null
    },
    "right": {
      "data": 3,
      "left": null,
      "right": null
    }
  });
});

it('get the node values in level order', () => {
  let t = Tree([1, 2, 3, 4, 5]);
  expect(t.levelOrder()).toStrictEqual([3, 1, 4, 2, 5]);
});