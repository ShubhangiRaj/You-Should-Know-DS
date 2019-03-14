function deleteNode(root, elem){
    if(root == null){
        return
    }
    else if(elem < root.data){
        root.left = deleteNode(root.left, elem);
    } else if(elem > root.data){
        root.right = deleteNode(root.right, elem)
    }
    else {
        // case 1: no children
        if(root.left == null && root.right == null){
            root = null; 
            return root;
        }
        // case 2: either one child
        else if(root.left == null){
            root = root.right;
            return root;
        }
        else if(root.right == null){
            root = root.left;
            return root;
        }
        // case 3: both children
        else {
            let temp = findMin(root.right);
            root.data = temp.data;
            root.right = delete(root.right, temp.data);
        }
    }
}
function findMin(root){
    let currNode = root;
    if(currNode.left == null){
        console.log(currNode.data);
        return currNode
    } else {
        return findMin(currNode.left);
    }
}

// Time complexity O(n)