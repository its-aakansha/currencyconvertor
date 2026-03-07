const dropdown = document.querySelectorAll(".dropdown select");
const baseurl = `https://latest.currency-api.pages.dev/v1/currencies/eur.json`;
const fromvalue = document.querySelector(".from");
const tovalue = document.querySelector(".to");
const updatedmsg = document.querySelector(".msg");
for (let select of dropdown) {
    for (codes in countryList) {
        let newoption = document.createElement("option");
        newoption.innerText = codes;
        select.append(newoption);
    }
    select.addEventListener("change", (evt) => {
        updateflag(evt.target);
    })
}
const updateflag = (element) => {
    let currcode = element.value;
    let countrycode = countryList[currcode];
    let newsrc = `https://flagsapi.com/${countrycode}/flat/64.png`;
    let imgsrc = element.previousElementSibling;
    imgsrc.src = newsrc;
}
const btn = document.querySelector(".buttondiv");
btn.addEventListener("click", async () => {
    let amt = document.querySelector(".main input");
    let amtvalue = amt.value;
    const url = `https://latest.currency-api.pages.dev/v1/currencies/${fromvalue.value.toLowerCase()}.json`;
    let response = await fetch(url);
    let data = await response.json();
    let rate = data[fromvalue.value.toLowerCase()][tovalue.value.toLowerCase()];
    let finalamount = amtvalue * rate;
    updatedmsg.innerText = `${amtvalue} ${fromvalue.value} = ${finalamount} ${tovalue.value}`;
})