const base_url = "https://open.er-api.com/v6/latest/USD";
const downdrop = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button")
const fromcurr = document.querySelector (".from select")
const tocurr = document.querySelector (".to select")



for(let my_select of downdrop) {
    for (currcode in CountryLister) {
    let newoption = document.createElement("option");
    newoption.innerText = currcode;
    newoption.value = currcode;
    if(my_select.name === "from" && currcode === "USD") {
        newoption.selected = "selected"
    } else if(my_select.name === "to" && currcode === "INR") {
        newoption.selected = "selected"
    }
    my_select.append(newoption);
    }
    my_select.addEventListener("change", (evnt) => {
    update_flag(evnt.target);
    })
}
const update_flag = (elmnt) => {
    let currcode = elmnt.value;
    let country_c = CountryLister[currcode];
    let newsrcL = `https://flagsapi.com/${country_c}/flat/64.png`;
    let imge = elmnt.parentElement.querySelector("img");
    imge.src = newsrcL;
};

btn.addEventListener("click", async (luta) => {
    luta.preventDefault();
    let amount = document.querySelector(".amount input")
    let amtval = amount.value;
    if (amtval === "" || amtval < 1 ) {
        amtval = 1 ;
        amount.value = "1";
    }
// console.log(fromcurr.value,tocurr.value)
const url = `base_url/${fromcurr.value.toLowerCase}/${tocurr.value.toLowerCase}https://open.er-api.com/v6/latest/USD`;  
let responce = await fetch(url)
console.log(responce)
})
