

// GRAPHTHEORY 2021 HA 6 rewritten in JS
graph = [
  // 0  |  1  |  2  |  3 |  4  | 5  |  6   |  7
   [false,true,false,true,false,false,false,false],   //0
   [true,false,true,false,false,false,false,false],   //1
   [false,true,false,false,true,true,false,false],    //2
   [true,false,false,false,false,false,false,false],  //3
   [false,false,true,false,false,false,false,false],  //4  
   [false,false,true,false,false,false,true,false],   //5
   [false,false,false,false,false,true,false,true],   //6
   [false,false,false,false,false,false,true,false]   //7
 ];

bfs(graph,0);

function bfs(graph, root){

let visited = [];
let visitedSet = [];
let queue = [];
let traveled =[];


visited.fill(false,0,visited.length);
visited[root] = true;
visitedSet = [];
traveled[root] = 0;
//inserting root in queue 
visitedSet.push(root);
queue.push(root);
//looping until all neighbour vertices are marked
while(queue.length > 0){
  //dequeing current vertex, and visiting neighbour vertices
  let current_vertex = queue.shift();
  //going through all neighbour vertices
  for(let i = 1; i < graph[0].length; i++){
    if(graph[current_vertex][i] && !visited[i]){
      visited[i] = true;
      visitedSet.push(i);
      traveled[i] = traveled[current_vertex] + 1;
      //neighbour vertices stored in queue for next procedure 
      queue.push(i);
    }
  }
}
for(let i = 0; i < traveled.length; i++){
  console.log("Node " + i + " traveled " + traveled[i] + "through Nodes");
}
return traveled;
}


