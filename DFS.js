



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



function dfs(graph, root){
  let visited = [];
  let stack = [];
  visited.fill(false,0,visited.length);
  visited[root] = true;
  stack.push(root);
  let current_vertex;

  while(stack.length > 0){
    current_vertex = stack.pop();
    console.log(current_vertex + " visited ");

    for(let i = 0; i < graph[current_vertex].length; i++){
      if(graph[current_vertex][i] && !visited[i]){
      visited[i] = true;
      stack.push(i);
      console.log(i + " pushed into the stack");
      console.log("current stack: " + stack);
      }
    }
  }
}

dfs(graph, 0);


