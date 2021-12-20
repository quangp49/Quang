const fs=require("fs");
const res=fs.readFileSync('sample.json');
const data=JSON.parse(res);
let arr=[];

const ConvertDate=(str)=>{
    const newStr=str.substr(0,10);
    timeArr=newStr.split('-');
    const year=timeArr[0];
    const month=timeArr[1];
    const day=timeArr[2];
    return `${day}-${month}-${year}`
}
data.forEach(el=>{
    const item={
        secCd:el.secCd,
        alloDate:ConvertDate(el.alloDate),
        price:el.price
    }
    arr.push(item);
})
fs.writeFile('data.json',JSON.stringify(arr),(err, data)=>{
    if(err) throw err
    console.log('done');
})