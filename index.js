const MAX = 100;
const data = [];
for(let i = 1;i <= MAX;i++){
  data.push(col(i));
}


function col(n){
  let i = n;
  if(i === 1)return [1,0,1,1];//[n,2^i-1_count,sq,max]
  const two = 0;
  const sq = [];
  let max = i;
  while(i !== 1){
    sq.push(i);
    if(Math.ceil(Math.log2(i + 1)) === Math.log2(i + 1)two++;
    if(i > max)max = i;
    if(i % 2 === 0){
      i /= 2;
    } else {
      i = (3 * i + 1) / 2;
    }
  }
  return [n,two,sq,max];
}

window.alert(col(5));
