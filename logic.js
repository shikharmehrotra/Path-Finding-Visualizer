var restart=document.querySelector('#but');

var squares=document.querySelectorAll('td');
//restarting the blockers
function restarting()
{
    for(var i=0;i<squares.length;i++)
    {
     if(i===0)
     squares[i].textContent='S';
     else if(i===squares.length-1)
     squares[i].textContent='E';
     else
     squares[i].textContent='X';
     squares[i].style.backgroundColor='white';
    }
    
    alert('Clearing');
}
//restarting the blockers

restart.addEventListener('click',restarting);
//block remover's after user input 

function remove_blockers()
{
    if(this.textContent==='X')
    this.textContent=' ';

}
//block remover's after user input
for(var i=0;i<squares.length;i++)
{
    squares[i].addEventListener('click',remove_blockers);
}
//starting the path finder.
var start=document.querySelector('#tut');
function find_path_driver()
{
    var cell=[];
    var maze=[];
    cell.push(1);
    for (var i=1;i<8;i++)
    {
    if(squares[i].textContent===' ')
    {
    cell.push(1);
}
    else{
    cell.push(0);
}
    }
    maze.push(cell);
    for( var j=1;j<=6;j++)
    {
    var cell=[];
    for (var i=0;i<8;i++)
    {
    if(squares[8*j+i].textContent===' ')
    {
    cell.push(1);
    }
    else
    {
    cell.push(0);
    }
    }
    maze.push(cell);
}
    var cell=[];
    for (var i=0;i<7;i++)
    {
    if(squares[8*7+i].textContent===' ')
    cell.push(1);
    else
    cell.push(0);
    }
    cell.push(1);
    maze.push(cell);

    var dx=[-1,1,0,0,1,1,-1,-1];
var dy=[0,0,-1,1,-1,1,-1,1];
var vis=[[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]];
var par=[];
for(var i=0;i<8;i++)
{
    var row=[];
    for(var j=0;j<8;j++)
    {
    var el=[-1,-1];
    row.push(el);
    }
    par.push(row);
}

var queue=[];
queue.push([0,0]);
vis[0][0]=1;
while(queue.length>0)
{
var src=queue.shift();
for(var i=0;i<8;i++)
{
    var ni=src[0]+dx[i];
     var nj=src[1]+dy[i];
     if((ni>=0 && ni<8) && (nj>=0 && nj<8 )&& (vis[ni][nj]===0) )
     {
         if(maze[ni][nj]===1)
         {
         par[ni][nj]=[src[0],src[1]];
         vis[ni][nj]=1;
         queue.push([ni,nj]);
         }
     }
}
}

dest=[7,7];
if(par[dest[0]][dest[1]][0]===-1 && par[dest[0]][dest[1]][1]===-1)
{

alert('IMPOSSIBLE TO REACH');
}
else
{
src=[0,0];
ans=[];
while(!(dest[0]===0 && dest[1]===0) )
{
ans.push([dest[0],dest[1]]);
dest=par[dest[0]][dest[1]];
}
ans.push([0,0]);
ans.reverse();
for(var i=0;i<ans.length;i++)
{
    var index=8*ans[i][0]+ans[i][1];
    squares[index].style.backgroundColor='green';
}
for(var i=0;i<squares.length;i++)
{
    if(squares[i].textContent==='X')
    {
    squares[i].style.backgroundColor='red';
    }
    else
    {
continue;
    }
}
}
}

start.addEventListener('click',find_path_driver);



