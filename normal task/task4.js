const obj=JSON.parse(`{"name":"xyz","age":"17","dob":"1997-03-14"}`);
console.log(obj.dob);
a = new Date(obj.dob);
console.log(a);