// let formSubmit = document.querySelector("#button");
let form = document.querySelector(".form-layout");
let listItem = document.getElementById("queue");

const baseURL = `http://13.57.249.61/orders`

function addOrder(event) {
    event.preventDefault();
    
    let personName = document.getElementById("name");
    let personMeal = document.getElementById("main_dish");
    let personSide = document.getElementById("side_dish");
    let personDrink = document.getElementById("drink_id");
    let personHere = document.querySelector("input[name='togo']:checked").value;
    let personTime = document.getElementById("pickup_id");
    let queue = document.getElementById("queue");

    personName = formatTitle(personName.value)
    personMeal = formatTitle(personMeal.value)
    personSide = formatTitle(personSide.value)
    
    let body = {
        name: personName,
        main_dish: personMeal,
        side_dish: personSide,
        drink_id: personDrink.value,
        togo: personHere,
        pickup_id: personTime.value
    };

    axios.post(baseURL, body)
        .then(res => {
            res.data.forEach(element => {
                const newItem = document.createElement('div')
                
                listItem.appendChild(newItem);
            });
            getData();


    }).catch(err => console.log(err))
}

function getData (){
    axios.get(baseURL).then(res => {
        addToView(res.data)}).catch(err => console.log(err));
}

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
            let idBox = document.createElement('div');
            let nameBox = document.createElement('div');
            let mealBox = document.createElement('div');
            let sideBox = document.createElement('div');
            let drinkBox = document.createElement('div');
            let toGoBox = document.createElement('div');
            let timeBox = document.createElement('div');

            let idSection = document.createElement('h2');
            let nameSection = document.createElement('h2');
            let mealSection = document.createElement('h2');
            let sideSection = document.createElement('h2');
            let drinkSection = document.createElement('h2');
            let toGoSection = document.createElement('h2');
            let pickupSection = document.createElement('h2');

            const {order_number, customer_name, main_dish, side_dish, drink, togo, pick_up } = item
            
            idSection.textContent = (order_number)
            nameSection.textContent = (customer_name)
            mealSection.textContent = (main_dish)
            sideSection.textContent = (side_dish)
            drinkSection.textContent = (drink)
            toGoSection.textContent = (togo)
            pickupSection.textContent = (pick_up)
            
            idBox.appendChild(idSection)
            nameBox.appendChild(nameSection)
            mealBox.appendChild(mealSection)
            sideBox.appendChild(sideSection)
            drinkBox.appendChild(drinkSection)
            toGoBox.appendChild(toGoSection)
            timeBox.appendChild(pickupSection)
            
            section.classList.add("queueItem")

            idBox.classList.add('idBox')
            nameBox.classList.add('nameBox')
            mealBox.classList.add('mealBox')
            sideBox.classList.add('sideBox')
            drinkBox.classList.add('drinkBox')
            toGoBox.classList.add('toGoBox')
            timeBox.classList.add('timeBox')            

            idSection.classList.add('innerQueueItem')
            nameSection.classList.add('innerQueueItem')
            mealSection.classList.add('innerQueueItem')
            sideSection.classList.add('innerQueueItem')
            drinkSection.classList.add('innerQueueItem')
            toGoSection.classList.add('innerQueueItem')
            pickupSection.classList.add('innerQueueItem')

            idSection.setAttribute("id", (order_number))
            nameSection.setAttribute("id", (order_number))
            mealSection.setAttribute("id", (order_number))
            sideSection.setAttribute("id", (order_number))
            drinkSection.setAttribute("id", (order_number))
            toGoSection.setAttribute("id", (order_number))
            pickupSection.setAttribute("id", (order_number))
            
            section.appendChild(idBox)
            section.appendChild(nameBox)
            section.appendChild(mealBox)
            section.appendChild(sideBox)
            section.appendChild(drinkBox)
            section.appendChild(toGoBox)
            
            section.appendChild(timeBox)

            section.addEventListener('click', deleteItem)
            
            console.log(item.customer_name)
            console.log(dataObj)
            
            section.setAttribute("id", (order_number))
            queue.appendChild(section)
        })
    }
}

function deleteItem(event){
    let id = event.target.getAttribute('id')
    // console.log(id)
    axios.delete('http://localhost:5501/orders/' + id).then(res => {
        getData();
        alert(`Order #${id} has been deleted`)
    }).catch(err => alert("Could not remove the item."))
}

function formatTitle(str) {
    let split = str.split(' ')
    let titleArr = split.map(word => {
        let firstLetter = word.charAt(0).toUpperCase()
        let remaining = word.slice(1, word.length)
        word = firstLetter + remaining
        return word
    })
    let title = titleArr.join(' ')
    return title
}

getData()
form.addEventListener("submit", addOrder);