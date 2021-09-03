// let addItem = document.getElementById('addItem');
// addItem.addEventListener('click', function(){
//     let get_adding_mass = document.getElementById('get_adding_mass');
//     get_adding_mass.innerHTML += 

//     `
//     <div class="ui right  big input">
//     <input type="text" placeholder="Մետաղ...">
//   </div>

//   <div class="ui right labeled big input">
//     <input type="text" placeholder="Սկզբնական...">
//     <div class="ui basic label">%</div>
//   </div>

//   <div class="ui right labeled big input">
//     <input type="text" placeholder="Ավելացվող...">
//     <div class="ui basic label">%</div>
//   </div>

//   <div class="ui right labeled big label">12%</div>

// <br><br><br>
//     `;});




let calculate = document.getElementById('calculate');

calculate.addEventListener('click', function(){
let metal_name_get_adding_mass = document.getElementById('metal_name_get_adding_mass').value;
let start_mass_get_adding_mass = +document.getElementById('start_mass_get_adding_mass').value;
let S_get_mass = +document.getElementById('start_percentage_get_adding_mass').value;
let A_get_mass = +document.getElementById('adding_percentage_get_adding_mass').value;
let F_get_mass = +document.getElementById('final_percentage_get_adding_mass').value;

function get_adding_mass(start_percentage, adding_percentage, final_percentage){
adding_mass = start_mass_get_adding_mass * ((start_percentage - final_percentage) / (final_percentage - adding_percentage));
return adding_mass;}

adding_mass=get_adding_mass(S_get_mass,A_get_mass,F_get_mass)
console.log(adding_mass);


// rounding to 3 float
adding_mass = Math.round(adding_mass * 1000) / 1000 
adding_mass_label = document.getElementById('adding_mass') ;


if (adding_mass<=0){
    adding_mass_label.innerText = "Հնարավոր չի ստանալ";

}
else if (adding_mass){
    adding_mass_label.innerText = adding_mass.toString()+"կգ";

}


else{
    adding_mass_label.innerText = "Սխալ տվյալներ";

}

});
