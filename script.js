let nameList = [];


const initButtons =()=>{


    const addButton = document.querySelector('#addbtn');
    addButton.addEventListener('click', () => { 
        const inputName = document.querySelector('#name');
        const ul = document.querySelector('#storeNames');
            if (inputName.value.length > 0) {
                nameList.push(inputName.value);
                const li = document.createElement('li');
                li.innerHTML = inputName.value;
                ul.appendChild(li);
                inputName.value = '';
                // listNames();
            }

        
 

    })

    const divideInGroups = document.querySelector('#dividebtn');
    divideInGroups.addEventListener('click', () => {
        const nb = document.querySelector('#nmbPpl').value;
        let result =[];
        while(nameList.length){
            let group = nameList.splice(0,nb);
            result.push(group)
        }
        showResult(result);
    })

}

const showResult=(nameList) => {
    const resultDiv = document.querySelector('#result');
    for(let group of nameList){
        const groupDiv = document.createElement('div');
        groupDiv.classList.add("group");
        let groupList = document.createElement('ul');
        groupDiv.appendChild(groupList);
        for(let person of group){
            const li = document.createElement('li');
            li.innerHTML= person;
            groupList.appendChild(li);
        }

        resultDiv.appendChild(groupDiv);
    }
    
}

initButtons();



// NB! Working shuffle function, just have to figure out where to call it from


const shuffle = (array) => {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1; 
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
}
    
    return array;
}



// let shuffledList = shuffle(nameList);
// console.log("names: ", shuffle(nameList));
    
    














