let input_box = document.querySelector("#input_box");
let list_item = document.querySelector("#list");
let cross = list_item.querySelector("i")

//code for 'On Enter click' entering the data in list
input_box.addEventListener("keypress", function (e) {
    if (e.key == "Enter") {
        toadd(this.value);
        this.value = " ";
    }
});
function toadd(item) {
    let new_list = document.createElement("li");
    new_list.innerHTML = `${item}
        <span><i class="fa fa-times"></i></span>`;
    console.log(new_list)
    list_item.appendChild(new_list)

    //Code to cross the event

    new_list.addEventListener("click", function(){

new_list.classList.toggle("done");
    });

    new_list.querySelector("i").addEventListener("click", function (e) {
        console.log("hiii")
        new_list.remove();
    })
    list_item.appendChild(new_list)

}
