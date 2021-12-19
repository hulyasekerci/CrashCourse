//arrays

const fruits = ['apples', 'oranges', 'pears'];

fruits[3] = 'grapes';

fruits.push('mangos');

fruits.unshift('strawberries');

fruits.pop();

console.log(fruits);

console.log(fruits.indexOf(oranges));



const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address:{
        street: '50 main st',
        city: 'Boston',
        state: 'MA'
    }
}

console.log(person.firstName, person.lastName);

console.log(person.hobbies[1]);

const {firstName, lastName} = person;

console.log(firstName);

person.email = 'johnemail.com'

console.log(person)


let hulya = 1


const todos = [
    {
        id: 1,
        text: 'take out trash',
        isCompleted: true,
    },
    {
        id: 2,
        text: 'meeting with boss',
        isCompleted: true,
    }
    {
        id: 3,
        text: 'dentist appt',
        isCompleted: false
    }
];


console.log(todos[1].text)


const todoJSON = JSON.stringify(todos);
console.log(todoJSON);


for(let i = 0; i<10; i++) {
    console.log(`For loop number: ${i}`);
}

for(let todo of todos){
    console.log(todo.text);
    console.log(todo.id);
}

//forEach, map, filter

todos.forEach(function(todo) {
    console.log(todo.text);

})

const x = 10;

if(x === 10) {
    console.log('x is 10');
} else if(x > 10){
    console.log('x is greater than 10')
} else {
    console.log('x is less 10')
}

const x = 10;

const color = x >10 ? 'red' : 'blue';

console.log(color);



switch(color) {
    case 'red':
        console.log('color is red')
        break;
    case 'blue':
        console.log('color is blue')
        break;
    default:
        console.log('color is not red or blue')
        break;

}

function addNums(num1 = 1, num2 = 1){
    return num1 + num2
}

console.log(addNums(5,5));


function Person(firstName, lastName,dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    this.getFullYear = function(){
        return this.dob.getHours();
    }
    }

const person1 = new Person ('John', 'Doe', '4-3-1980')

console.log(person1.dob.getFullYear());

//single element selection

console.log(document.getElementById());

console.log(document.querySelector());

//multiple element selection

console.log(document.querySelectorAll('.item'));
console.log(document. getElementsByClassName('item'));

const ul = document.querySelector(.'items')

ul.firstElementChild.textContent = 'hello '

const btn = document.querySelector('.btn');

btn.addEventListener('click', (e) =>{
    e.preventDefault();
    console.log(e);
} );









 