const MAX = 100;
const theadData = ['n','2^n-1の個数','数列','最大値'];
const max_at_all = 1;
const data = [];
let res = [];
let i = 10000;
while(res[1] !== 3){
  res = col(i);
  data.push(res);
  i++;
}
const table = document.createElement('table');
const thead = document.createElement('thead');
theadData.forEach((thData)=>{
  const th = document.createElement('th');
  th.textContent = thData;
  thead.append(th);
});
table.append(thead);

const tbody = document.createElement('tbody');
data.forEach((rowData)=>{
  const tr = document.createElement('tr');
  rowData.forEach((cellData)=>{
    const td = document.createElement('td');
    td.textContent = cellData;
    tr.append(td);
  });
  tbody.append(tr);
});
table.append(tbody);
document.querySelector('#el').append(table);


function col(n,max_at_all){
  let i = n;
  if(i === 1)return [1,0,1,1];//[n,2^i-1_count,sq,max]
  const sq = [];
  let two = 0;
  let max = i;
  while(i !== 1){
    sq.push(i);
    if(Math.ceil(Math.log2(i + 1)) === Math.log2(i + 1))two++;
    if(i > max)max = i;
    if(i % 2 === 0){
      i /= 2;
    } else {
      i = (3 * i + 1) / 2;
    }
  }
  sq.push(1);
  /*
  let maxa;
  if(max_at_all > max){
    maxa = max_at_all;
  } else {
    maxa = max;
  }
  return [n,two,sq,max,maxa];
  */
  return [n,two,sq,max];
}
