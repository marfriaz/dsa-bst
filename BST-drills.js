"use strict";
const BinarySearchTree = require("./BinarySearchTree");

//=== 3. Create a BST class ===//
/* * Create a binary search tree called BST and insert 3,1,4,6,9,2,5,7 into your tree. 
Compare your result with the result from the 1st exercise.
 * Create a binary search tree called BST and insert E A S Y Q U E S T I O N into your tree. 
 Compare your result with the result from the 1st exercise. */

//=== 4. What does this program do? ===//
//  Without running this code in your code editor, explain what the following program does.
//  Show with an example the result of executing this program.
//  What is the runtime of this algorithm?

function tree(t) {
  if (!t) {
    return 0;
  }
  return tree(t.left) + t.value + tree(t.right);
}

//=== 5. Height of a BST ===//
// Write an algorithm to find the height of a binary search tree.
// What is the time complexity of your algorithm?
