class Node{
	constructor(data, left = null, right = null){
		this.data = data;
		this.left = left;
		this.right = right;
	}
	getData(){
		return this.data
	}
	getLeft(){
		return this.left;
	}
	getRight(){
		return this.right;
	}
}

class BinaryTree{
	constructor(){
		this.root = null;
	}
}

BinaryTree.prototype.insertElem = function(root, elem){
    let newNode = new Node(elem);
    if(root == null){
        this.root = newNode;
        return;
    }
    let temp, queue = [];
    queue.push(root);
    while(queue.length){
        temp = queue.shift();
        if(temp.left !== null){
            queue.push(temp.left);
        } else {
            temp.left = newNode;
            return;
        } 
        if(temp.right !== null){
            queue.push(temp.right);
        } else {
            temp.right = newNode
            return;
        }
    }
}

let bTree = new BinaryTree();
bTree.insertElem(bTree.root, 7);
bTree.insertElem(bTree.root, 4);
bTree.insertElem(bTree.root, 5);
bTree.insertElem(bTree.root, 2);
bTree.insertElem(bTree.root, 1);

function findLevelWithMaxSum(root){
    if(root == null){
        return
    }
    let temp, queue = [];
    queue.push(root);
    queue.push(null);
    let level = 1;
    let maxLevel = currentSum = maxSum = 0;
    while(queue.length){
        // dequeue
        temp = queue.shift();
        // if current level is completed then compare sums
        if(temp == null){
            if(currentSum > maxSum){
                maxSum = currentSum;
                maxLevel = level;
            }
            currentSum = 0;
            if(queue.length){
                queue.push(null);
                level += 1;
            }
        }
        else{
            currentSum += temp.getData();
            if(temp.left !== null){
                queue.push(temp.left);
            }
            if(temp.right !== null){
                queue.push(temp.right);
            }
        }
    }
    console.log(maxLevel);
}

findLevelWithMaxSum(bTree.root);