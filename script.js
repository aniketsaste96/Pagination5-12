//Creating and appending required HTML elements

const body = document.body;
const hdiv = document.createElement('div')
hdiv.id = "head"
body.append(hdiv)
const heading = document.createElement("h1")
heading.textContent = "Pagination"
heading.id = "title"

hdiv.appendChild(heading)

const para = document.createElement("p")
para.textContent = "Pagination Task"
para.id = "description"

body.append(para)

const div1 = document.createElement("div")
div1.className = "container table-responsive"
body.append(div1);

const table = document.createElement("table")
table.className = "table table-bordered table-striped"
table.id = "table"

div1.appendChild(table)


const thead = document.createElement("thead")
table.appendChild(thead);

const th1 = document.createElement("th")
th1.textContent = "ID"
const th2 = document.createElement("th")
th2.textContent = "NAME"
const th3 = document.createElement("th")
th3.textContent = "EMAIL"
thead.appendChild(th1)
thead.appendChild(th2)
thead.appendChild(th3)


const tbody = document.createElement("tbody")
tbody.className = "task-list"
tbody.id = "td"
table.appendChild(tbody)


const div2 = document.createElement("div")
div2.className = "tabs buttons d-flex justify-content-center"
div2.id = "buttons"

div1.appendChild(div2)


const btn1 = document.createElement("button")
btn1.className = "first btn btn-primary"
btn1.textContent = "first"

const btn2 = document.createElement("button")
btn2.className = "previous btn btn-primary"
btn2.textContent = "previous"

const btn3 = document.createElement("button")
btn3.className = "next btn btn-primary"
btn3.textContent = "next"

const btn4 = document.createElement("button")
btn4.className = "last btn btn-primary"
btn4.textContent = "Last"

div2.appendChild(btn1)
div2.appendChild(btn2)
div2.appendChild(btn3)
div2.appendChild(btn4)

















//Getting hold of elements
const taskList = document.querySelector(".task-list");
const first = document.querySelector(".first");
const previous = document.querySelector(".previous");
const next = document.querySelector(".next");
const last = document.querySelector(".last");


const url = "https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json"


//fetching json data
fetch(url)
    .then((result) => result.json())
    .then((data) => myFun(data))
    .catch((error) => error);





function myFun(data) {

    let arrayList = [];
    let page = 0;


    for (let i = 1; i <= 100; i++) {
        //Iterate over Fetched json data
        data.forEach(element => {

            let li = document.createElement('tr');
            li.innerHTML =
                `<td>${element.id}</td>
                <td>${element.name}</td> 
                <td>${element.email}</td>
`

                ;
            arrayList.push(li);
        });
        console.log(arrayList);

    }
    //Number of items per page
    for (let i = 0; i < page + 10; i++) {
        taskList.appendChild(arrayList[i]);
    }

    //Click event for next
    next.addEventListener("click", () => {
        page == arrayList.length - 10 ? (page = 0) : (page += 10);
        taskList.innerHTML = "";
        for (let i = page; i < page + 10; i++) {
            taskList.appendChild(arrayList[i])
        }

    })

    //Click event for previous page
    previous.addEventListener("click", () => {

        page == 0 ? (page = arrayList.length - 10) : (page -= 10);
        taskList.innerHTML = "";
        for (let i = page; i < page + 10; i++) {
            taskList.appendChild(arrayList[i])
        }

    })

    //Click event for first page
    first.addEventListener("click", () => {
        page = 0;
        taskList.innerHTML = "";
        for (let i = page; i < page + 10; i++) {
            taskList.appendChild(arrayList[i])
        }

    })

    //Click event for last page
    last.addEventListener("click", () => {
        page = arrayList.length - 10;
        taskList.innerHTML = "";
        for (let i = page; i < page + 10; i++) {
            taskList.appendChild(arrayList[i])
        }

    })
}