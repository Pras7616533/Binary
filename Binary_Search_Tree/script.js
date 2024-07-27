class TreeNode {
    constructor(key) {
        this.left = null;
        this.right = null;
        this.val = key;
    }
}

let root = null;

function insertNode() {
    const value = parseInt(document.getElementById("value").value);
    root = insert(root, value);
    drawTree();
}

function deleteNode() {
    const value = parseInt(document.getElementById("value").value);
    root = deleteNodeHelper(root, value);
    drawTree();
}

function insert(root, key) {
    if (!root) return new TreeNode(key);
    if (key < root.val) {
        root.left = insert(root.left, key);
    } else {
        root.right = insert(root.right, key);
    }
    return root;
}

function deleteNodeHelper(root, key) {
    if (!root) return root;
    if (key < root.val) {
        root.left = deleteNodeHelper(root.left, key);
    } else if (key > root.val) {
        root.right = deleteNodeHelper(root.right, key);
    } else {
        if (!root.left) return root.right;
        if (!root.right) return root.left;
        root.val = minValue(root.right).val;
        root.right = deleteNodeHelper(root.right, root.val);
    }
    return root;
}

function minValue(root) {
    while (root.left) root = root.left;
    return root;
}

function drawTree() {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawNode(ctx, root, canvas.width / 2, 30, canvas.width / 4);
}

function drawNode(ctx, node, x, y, offset) {
    if (!node) return;
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, 2 * Math.PI);
    ctx.fillStyle = "lightblue";
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = "black";
    ctx.fillText(node.val, x - 6, y + 4);
    if (node.left) {
        ctx.moveTo(x, y);
        ctx.lineTo(x - offset, y + 60);
        ctx.stroke();
        drawNode(ctx, node.left, x - offset, y + 60, offset / 2);
    }
    if (node.right) {
        ctx.moveTo(x, y);
        ctx.lineTo(x + offset, y + 60);
        ctx.stroke();
        drawNode(ctx, node.right, x + offset, y + 60, offset / 2);
    }
}
