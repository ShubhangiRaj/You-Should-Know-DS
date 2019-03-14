function findSize(root){
    if(root == null){
        return 0
    } 
    return findSize(root.left) + 1 + findSize(root.right);
}

// Time Complexity O(n)