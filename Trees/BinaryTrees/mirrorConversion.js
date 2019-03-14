function mirrorConversion(root){
    let temp;
    if(root == null){
        return;
    }
    else {
        mirrorConversion(root.left);
        mirrorConversion(root.right);
        temp = root.left;
        root.left = root.right;
        root.right = temp;
    }
    return root;
}

// Time complexity O(n)