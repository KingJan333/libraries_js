import "./style.scss";
import moment from "moment";
import lodash from "lodash";
let d3 = require("d3");

moment.locale("ru");

const timeFull = document.querySelector(".time");
const timeLts = document.querySelector(".lts");

setInterval(() => {
  timeFull.innerHTML = moment().format("MMMM Do YYYY, h:mm:ss a");
}, 1000);

setInterval(() => {
  timeLts.innerHTML = moment().format("LTS");
}, 1000);

//console.log(moment('20220101', "YYYYMMDD").fromNow())

const bi = _.chunk(["a", "b", "c", "d"], 3);

const newArr = _.map([{ id: 1 }, { id: 2 }, { id: 3 }], function (item) {
  return item.id;
});

console.log(newArr);

const subArr = _.map({ id: 1, name: "someName" }, function (item) {
  return item;
});

console.log(subArr);

let a = { id: 1, name: "some name" };
let arr = [];
_.each(a, function (item) {
  arr.push(item);
});

console.log(arr);

const isActivePerson = _.some(
  [
    { name: "foo", isActive: false },
    { name: "bar", isActive: true },
  ],
  function (item) {
    return item.isActive;
  }
);

console.log(isActivePerson, "isActivePerson");

const likesQuantity = _.sortBy(
  [
    { name: "Fred", likes: 10 },
    { name: "John", likes: 20 },
    { name: "Alex", likes: 1 },
  ],
  function (item) {
    return item.likes;
  }
);

console.log(likesQuantity, "likes");


const data = [10, 5, 12, 15];

const width = 700,
  scaleFactor = 20,
  barHeight = 30;

const graph = d3
  .select("body")
  .append("svg")
  .attr("width", width)
  .attr("height", barHeight * data.length);

let bar = graph
  .selectAll("g")
  .data(data)
  .enter()
  .append("g")
  .attr("transform", function (d, i) {
    return "translate(0," + i * barHeight + ")";
  });
bar
  .append("rect")
  .attr("width", function (d) {
    return d * scaleFactor;
  })

  .attr("height", barHeight - 1);

bar
  .append("text")
  .attr("x", function (d) {
    return d * scaleFactor;
  })
  .attr("y", barHeight / 2)
  .attr("dy", ".35em")
  .text(function (d) {
    return d;
  });


  