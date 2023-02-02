// First solution (recursion)
const findCorrespondingNode = (rootA, rootB, target) => {
  if (rootA == target) return rootB

  for (let i=0; i<rootA.children.length; i++) {
    const result = findCorrespondingNode(rootA.children[i], rootB.children[i], target)

    if (result) return result
  }
}

// Second solution (iterative with queue)
const findCorrespondingNode2 = (rootA, rootB, target) => {
  let queue = [[rootA,rootB]]

  while (queue.length) {
    const next = []

    for (let i=0; i<queue.length; i++) {
      const [a,b] = queue[i]
      if (a == target) {
        return b
      }
      for (let j=0; j<a.children.length; j++) {
        next.push([a.children[j], b.children[j]])
      }
    }

    queue = next
  }
}

// Third solution Using Tree Walker API
const findCorrespondingNode3 = (rootA, rootB, target) => {
  const rootAWalker = document.createTreeWalker(rootA, NodeFilter.SHOW_ELEMENT);
  const rootBWalker = document.createTreeWalker(rootB, NodeFilter.SHOW_ELEMENT);
  
  let currentNodes = [rootAWalker.currentNode, rootBWalker.currentNode];
  
  while (currentNodes[0] !== target) {
      currentNodes = [rootAWalker.nextNode(), rootBWalker.nextNode()];
  }
  
  return currentNodes[1];
}