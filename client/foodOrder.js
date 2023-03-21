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
    let queue = document.getElementById("queue");

    let body = {
        name: personName.value,
        main_dish: personMeal.value,
        side_dish: personSide.value,
        drink_id: personDrink.value,
        is_togo: personHere,
        pickup_id: personTime.value
    };

    axios.post(baseURL, body)
        .then(res => {
            res.data.forEach(element => {
                const newItem = document.createElement('div')
                // newItem.setAttribute('value', element)
                listItem.appendChild(newItem);
            });

//         // let newItem = listItem.createElement("div");
    }).catch(err => console.log(err))
    getData();
}

function getData (){
    axios.get(baseURL).then(res => {
        addToView(res.data)}).catch(err => console.log(err));
}

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

function addToView(dataObj) {
    listItem.innerHTML = null;

    if (dataObj.length === 0) {
        const p = document.createElement('p');
        const t = document.createTextNode("Response came back with no results!");
        p.appendChild(t);

        listItem.appendChild(p)
    } else {
        dataObj.forEach(item => {
            let section = document.createElement('div');
            let idSection = document.createElement('h5')
            let nameSection = document.createElement('h4')
            let mealSection = document.createElement('h5')
            let sideSection = document.createElement('h5')
            let drinkSection = document.createElement('h5')
            let toGoSection = document.createElement('h5')
            let pickupSection = document.createElement('h5')

            section.classList.add("queueItem")
            const {order_number, customer_name, main_dish, side_dish, drink, is_togo, pick_up } = item
            idSection.textContent = (order_number)
            nameSection.textContent = (customer_name)
            mealSection.textContent = (main_dish)
            sideSection.textContent = (side_dish)
            drinkSection.textContent = (drink)
            toGoSection.textContent = (is_togo)
            pickupSection.textContent = (pick_up)

            idSection.classList.add('innerQueueItem')
            nameSection.classList.add('innerQueueItem')
            mealSection.classList.add('innerQueueItem')
            sideSection.classList.add('innerQueueItem')
            drinkSection.classList.add('innerQueueItem')
            toGoSection.classList.add('innerQueueItem')
            pickupSection.classList.add('innerQueueItem')
            // section.appendChild(m);
            // listItem.appendChild(section)
            section.appendChild(idSection)
            section.appendChild(nameSection)
            section.appendChild(mealSection)
            section.appendChild(sideSection)
            section.appendChild(drinkSection)
            section.appendChild(toGoSection)
            section.appendChild(pickupSection)
            
            console.log(item.customer_name)
            console.log(dataObj)
            queue.appendChild(section)
        })
    }
}

getData()
form.addEventListener("submit", addOrder);