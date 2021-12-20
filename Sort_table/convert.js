const data = [
  { secCd: "TIG", alloDate: "24-11-2021", price: 10 },
  { secCd: "AAA", alloDate: "23-11-2021", price: 10 },
  { secCd: "NAB", alloDate: "22-11-2021", price: 10 },
  { secCd: "SBM", alloDate: "22-11-2021", price: 10 },
  { secCd: "ACE", alloDate: "22-11-2021", price: 10 },
  { secCd: "KDC", alloDate: "22-11-2021", price: 10 },
  { secCd: "IDV", alloDate: "21-11-2021", price: 10 },
  { secCd: "TCD", alloDate: "21-11-2021", price: 10 },
  { secCd: "HPP", alloDate: "21-11-2021", price: 10 },
  { secCd: "SEP", alloDate: "21-11-2021", price: 10 },
  { secCd: "TMX", alloDate: "21-11-2021", price: 10 },
  { secCd: "TNW", alloDate: "21-11-2021", price: 10 },
  { secCd: "YBM", alloDate: "21-11-2021", price: 10 },
  { secCd: "SEB", alloDate: "21-11-2021", price: 10 },
  { secCd: "CEN", alloDate: "21-11-2021", price: 10 },
  { secCd: "MA1", alloDate: "21-11-2021", price: 10 },
  { secCd: "LNC", alloDate: "21-11-2021", price: 10 },
  { secCd: "IHK", alloDate: "21-11-2021", price: 10 },
  { secCd: "SAC", alloDate: "21-11-2021", price: 10 },
  { secCd: "GEX", alloDate: "21-11-2021", price: 10 },
  { secCd: "TL4", alloDate: "17-11-2021", price: 10 },
  { secCd: "CMW", alloDate: "16-11-2021", price: 10 },
  { secCd: "HTV", alloDate: "16-11-2021", price: 10 },
  { secCd: "TCT", alloDate: "16-11-2021", price: 10 },
  { secCd: "FCM", alloDate: "16-11-2021", price: 10 },
  { secCd: "FCM", alloDate: "16-11-2021", price: 10 },
  { secCd: "QTC", alloDate: "16-11-2021", price: 10 },
  { secCd: "TBR", alloDate: "16-11-2021", price: 10 },
  { secCd: "TLP", alloDate: "16-11-2021", price: 10 },
  { secCd: "NLG", alloDate: "14-11-2021", price: 10 },
  { secCd: "THP", alloDate: "14-11-2021", price: 10 },
  { secCd: "MCM", alloDate: "14-11-2021", price: 10 },
  { secCd: "KCE", alloDate: "14-11-2021", price: 10 },
  { secCd: "SSE", alloDate: "14-11-2021", price: 10 },
  { secCd: "SPC", alloDate: "14-11-2021", price: 10 },
  { secCd: "DWS", alloDate: "14-11-2021", price: 10 },
  { secCd: "DAR", alloDate: "14-11-2021", price: 10 },
  { secCd: "SGR", alloDate: "14-11-2021", price: 10 },
  { secCd: "SBA", alloDate: "14-11-2021", price: 10 },
  { secCd: "NLG", alloDate: "14-11-2021", price: 10 },
  { secCd: "NLG", alloDate: "14-11-2021", price: 10 },
  { secCd: "ANV", alloDate: "09-11-2021", price: 10 },
  { secCd: "CLC", alloDate: "09-11-2021", price: 10 },
];
const table = document.querySelector(".myTable")
const header = document.querySelector(".table_header_secCd")
data.forEach((el) => {
  const tr = document.createElement("tr");
  const td1 = document.createElement("td");
  const td2 = document.createElement("td");
  const td3 = document.createElement("td");
  td1.innerHTML = el.secCd;
  td2.innerHTML = el.alloDate;
  td3.innerHTML = el.price;
  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  table.appendChild(tr);
});

header.addEventListener("click", ()=> sortTable(0, table))
function sortTable(n, table) {
var rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
switching = true;
//Set the sorting direction to ascending:
dir = "asc"; 
/*Make a loop that will continue until
no switching has been done:*/
while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 1; i < (rows.length - 1); i++) {
    //start by saying there should be no switching:
    shouldSwitch = false;
    /*Get the two elements you want to compare,
    one from current row and one from the next:*/
    x = rows[i].getElementsByTagName("TD")[n];
    y = rows[i + 1].getElementsByTagName("TD")[n];
    /*check if the two rows should switch place,
    based on the direction, asc or desc:*/
    if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        //if so, mark as a switch and break the loop:
        shouldSwitch= true;
        break;
        }
    } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
        //if so, mark as a switch and break the loop:
        shouldSwitch = true;
        break;
        }
    }
    }
    if (shouldSwitch) {
    /*If a switch has been marked, make the switch
    and mark that a switch has been done:*/
    rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
    switching = true;
    //Each time a switch is done, increase this count by 1:
    switchcount ++;      
    } else {
    /*If no switching has been done AND the direction is "asc",
    set the direction to "desc" and run the while loop again.*/
    if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
    }
    }
}
} 