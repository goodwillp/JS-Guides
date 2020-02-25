// var topics = ["topic1", "topic2"]
// var chapters = [["chapter1", "chapter2", "chapter3"], ["chapter4", "chapter5"]]

class Tree {
    constructor(root) {
        this._root = root || null;
    }

    _traverse(callback) {
        const self = this;
        function goThrough(node) {
            callback(node);
            node.children.forEach((child) => {
                goThrough(child);
            });
        }
        goThrough(this._root);
    }


    _addNode(value, parentValue, isTopic, uuid) {
        const newNode = {
            value,
            isTopic,
            uuid,
            children: []
        };

        if (this._root === null) {
            this._root = newNode;
            return;
        }

        this._traverse((node) => {
            if (node.value === parentValue) {
                node.children.push(newNode);
            }
        });
    }

    _removeNode(value) {
        this._traverse((node) => {
            node.children.forEach((childNode, index) => {
                if (childNode.value === value) {
                    node.children.splice(index, 1);
                }
            });
        })
    }

    _search(value) {
        let returnNode = 'Not Found';
        this._traverse((node) => {
            if (node.value === value) {
                returnNode = node;
            }
        });
        return returnNode;
    }

    _displayLeafs(parentValue) {
        const parentNode = typeof parentValue === 'string' ? this._search(parentValue) : parentValue;
        let leafsRet = [];
        if (parentValue.children && !parentValue.children.length) {
            return parentValue;
        }

        parentNode.children.forEach((child) => {
            leafsRet.push(this._displayLeafs(child));
        });

        return leafsRet.flat();
    }

}

class Node {
    constructor(value, children) {
        this.value = value;
        this.children = children;
    }
}

//Assumes a complete Snippet, so 4 levels of depth in any given branch (NO EXCEPTIONS)
// Root
//  |- Node1
//      |-Node3
//          |-Node8
//              |-Node12
//              |-Node13
//          |-Node9
//              |-Node14
//          |-Node10
//              |-Node15
//      |-Node4
//          |-Node11
//              |-Node16
//  |- Node2
//      |-Node5
//          |-Node6
//              |-Node7

const tree = new Tree();

tree._addNode('Root');

//Level 1
tree._addNode('Node1', 'Root', true, null);
tree._addNode('Node2', 'Root', true, null);

//Level 2
tree._addNode('|..Node3', 'Node1', false, null);
tree._addNode('|..Node4', 'Node1', false, null);
tree._addNode('|..Node5', 'Node2', false, null);

//Level 3
tree._addNode('|..|..Node8', '|..Node3', false, null);
tree._addNode('|..|..Node9', '|..Node3', false, null);
tree._addNode('|..|..Node10', '|..Node3', false, null);
tree._addNode('|..|..Node11', '|..Node4', false, null);
tree._addNode('|..|..Node6', '|..Node5', false, null);

//Level 4
tree._addNode('|..|..|..Node12', '|..|..Node8', false, '12');
tree._addNode('|..|..|..Node13', '|..|..Node8', false, '13');
tree._addNode('|..|..|..Node14', '|..|..Node9', false, '14');
tree._addNode('|..|..|..Node15', '|..|..Node10', false, '15');
tree._addNode('|..|..|..Node16', '|..|..Node11', false, '16');
tree._addNode('|..|..|..Node7', '|..|..Node6', false, '7');

tree._traverse((node) => {
   if (node.uuid != null) {
       console.log('Value: ' + node.value + ', It\'s a Title with ID: ' + node.uuid);       
   }
   else if (node.isTopic === true) {
    console.log('Value: ' + node.value + ', It\'s a Topic');
   }
   else {
       console.log('Value: ' + node.value + ', It\'s an intermediate node');
   }

});

console.log('');
console.log('');
console.log(tree._displayLeafs('Node1'));