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

it('a tree is created with from an unsorted array with duplicates', () => {
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