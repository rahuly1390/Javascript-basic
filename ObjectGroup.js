const obj = [
  { key: "Sample1", data: "Data1" },
  { key: "Sample1", data: "Data1" },
  { key: "Sample2", data: "Data1" },
  { key: "Sample1", data: "Data2" },
  { key: "Sample3", data: "Data1" },
  { key: "Sample4", data: "Data2" },
];
const output = {};
obj.forEach((item) => {
  if (output[item.key]) {
    output[item.key].push(item);
  } else {
    output[item.key] = [item];
  }
});
//Reduce function