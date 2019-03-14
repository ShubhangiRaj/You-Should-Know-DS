// For a given node, its inorder predecssor is the max elem in left subtree and 
// inorder successor is the min elem in right subtree.

// first search for the node 
// check if the node has left and right children
// if yes, the findMax in left subtree
// and findMin in right subtree

function findSuccessor(root, node){
    if(root == null){
        return
    } else {
        let temp;
        if(node.right !== null){
            temp = node.right;
            while(temp.left !== null){
                temp = temp.left;
            }
            console.log(temp);
            return temp;
        }
    }
}

function findPredecessor(root, node){
    if(root == null){
        return
    } else {
        let temp; 
        if(node.left !== null){
            temp = node.left;
            while(temp.right !== null){
                temp = temp.right
            }
            console.log(temp);
            return temp
        }
    }
}