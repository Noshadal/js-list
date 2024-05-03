var inputField = document.getElementById("inpo");
var user = [
    {title:"ahmad",phone:"03232312156456",image:`<img src="./ahmad.jpeg">`},
    {title:"baber",phone:"021654542312",image:`<img src="/baber.jpeg">`}, 
    {title:"waseem",phone:"5451231231231",image:`<img src="/waseem.jpeg">`},
    {title:"salman",phone:"033532132264",image:`<img src="/salman.jpeg">`}, 
    {title:"zara",phone:"021543212312312",image:`<img src="/Zoya_nasir.jpeg">`},
    {title:"mevesh",phone:"0231231231231",image:`<img src="/mavesh.jpeg">`},
    {title:"zoheb",phone:"012312123123",image:`<img src="/ash.jpeg">`}
];

function handle(params) {
    var searchValue = params.target.value.toLowerCase();
    var filterList = user.filter(item => {
        return item.title.toLowerCase().includes(searchValue) || item.phone.includes(searchValue);
    });
    visible(filterList);
}

function remove(index) {
    user.splice(index, 1);
    visible(user);
}

function visible(users) {
    var userlist = document.getElementById("userlist");
    userlist.innerHTML = '';
    users.forEach((item, index) => {
        userlist.innerHTML += `<div class = "box">
        ${item.image}
        <h3>${item.title}</h3>
        <span>${item.phone}</span>
        <button onclick="remove(${index})">x</button>
        <hr>
        </div>`;
    });
}

// Listen for the 'keyup' event instead of 'input'

inputField.addEventListener("keyup", handle);
