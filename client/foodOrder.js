// let formSubmit = document.querySelector("#button");
let form = document.querySelector(".form-layout");
let listItem = document.getElementById("queue");

const baseURL = `http://localhost:5501/orders`

function addOrder(event) {
    event.preventDefault();
    
    let personName = document.getElementById("name");
    let personMeal = document.getElementById("main_dish");
    let personSide = document.getElementById("side_dish");
    let personDrink = document.getElementById("drink_id");
    let personHere = document.querySelector("input[name='is_togo']:checked").value;
    let personTime = document.getElementById("pickup_id");

    let body = {
        name: personName.value,
        main_dish: personMeal.value,
        side_dish: personSide.value,
        drink_id: personDrink.value,
        is_togo: personHere,
        pickup_id: personTime.value
    };
    // console.log(body)
    axios.post(baseURL, body)
//         .then(res => {
//             // res.data.forEach(element => {
//             //     const newItem = document.createElement('div')
//                 // newItem.setAttribute('value', element)
//             // });

//         console.log("got back from server");
//         // let newItem = listItem.createElement("div");
//         // listItem.appendChild(newItem);
//     }).catch(err => console.log(err.response.data))
}

// function getData (){
//     axios.get(baseURL).then(res => {
//         res.status(200).send()
//     })
// }

// function createOrder(order) {

//     axios.post()

//     // const newOrder = document.createElement('p')
//     // newOrder.setAttribute("id","queue");

//     // newOrder.innerHTML = `<p class="name">${order.name}</p>
//     // <div class="btns-container">
//     //     <button onclick="updateOrder(${order.id}, 'plus')">Edit</button>
//     // </div>
//     // <button onclick="deleteOrder(${order.id})">delete</button>
//     // `
//     // listItem.appendChild(newOrder);
// }

form.addEventListener("submit", addOrder);