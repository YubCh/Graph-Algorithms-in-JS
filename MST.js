

graph = [
 //0,1,2,3,4,5
  [0,5,8,3,4,5], //0
  [5,0,8,4,5,3], //1
  [8,8,0,4,4,2], //2
  [3,4,4,0,1,3], //3
  [4,5,4,1,0,5], //4
  [5,3,2,3,5,0]  //5
]

function mst(graph){
// Kanten sollen immer V-1 sein
  let k,l;
  let vertex_arr = new Array(graph.length);
  let edges = 0;

  vertex_arr.fill(false,0,vertex_arr.length);
  //startvalue
  vertex_arr[0] = true;

  while(edges < graph.length - 1){
    let min = Number.MAX_VALUE;
    k,l = 0;
    for(let i = 0; i < graph.length; i++){
      if(vertex_arr[i]){
        for(let j = 0; j < graph.length; j++){
          if(!vertex_arr[j] && graph[i][j] > 0){
            if(min > graph[i][j]){
              min = graph[i][j]
              k = i;
              l = j;
            }
          }
        }
      }
    }
    console.log("Weight between Node " + k + " and Node " + l + ": " + graph[k][l]);
    vertex_arr[l] = true;
    edges++;
  }
}
mst(graph);