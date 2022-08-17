let addItem = document.getElementById('addItem');
count_material_final_percentage = 0

addItem.addEventListener('click', function(){

get_adding_mass = document.getElementById('get_adding_mass');

function getCount(parent, getChildrensChildren){
    var relevantChildren = 0;
    var children = parent.childNodes.length;
    for(var i=0; i < children; i++){
        if(parent.childNodes[i].nodeType != 3){
            if(getChildrensChildren)
                relevantChildren += getCount(parent.childNodes[i],true);
            relevantChildren++;
        }
    }
    return relevantChildren;
};

    count_material_final_percentage = ((getCount(get_adding_mass,false)-10)/7)+1 //number of added sections   

    div = document.createElement("div");
    div.classList.add('ui', 'right', 'large', 'input')
    div.setAttribute("id", "metal_"+count_material_final_percentage);

    div.innerHTML = `<input type="text" id="metal_name_get_percentage" placeholder="Metal"></input>`
    get_adding_mass?.appendChild(div);



    div2 = document.createElement("div");
    div2.classList.add('ui', 'right', 'large','labeled' ,'input');

    input2 = document.createElement("input");
    input2.setAttribute("id", "material_start_percentage_"+count_material_final_percentage);
    input2.setAttribute("type", "text");
    input2.setAttribute("placeholder", "Start");
    div2.appendChild(input2)
    
    div2.innerHTML += `<div class="ui basic label">Start %</div>`
    get_adding_mass?.appendChild(div2);





    div3 = document.createElement("div");
    div3.classList.add('ui', 'right', 'large','labeled' ,'input');

    input3 = document.createElement("input");
    input3.setAttribute("id", "material_adding_percentage_"+count_material_final_percentage);
    input3.setAttribute("type", "text");
    input3.setAttribute("placeholder", "Adding");
    div3.appendChild(input3)
    
    div3.innerHTML += `<div class="ui basic label">Adding %</div>`
    get_adding_mass?.appendChild(div3);



    div4 = document.createElement("div");
    div4.classList.add('ui', 'right', 'big','labeled', 'label')
    div4.setAttribute("id", "material_final_percentage_"+count_material_final_percentage);
    div4.innerText = '-----'
    get_adding_mass?.appendChild(div4);






    br = document.createElement("br");
    get_adding_mass?.appendChild(br);
    br = document.createElement("br");
    get_adding_mass?.appendChild(br);
    hr = document.createElement("hr");
    get_adding_mass?.appendChild(hr);




    // get_adding_mass.innerHTML += 
//     `

//     <div  class="ui right big input">
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
//     `
    
    ;});





//First

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
// console.log(adding_mass);

// rounding to 3 float
adding_mass = Math.round(adding_mass * 1000) / 1000 
adding_mass_label = document.getElementById('adding_mass') ;
total_mass_label = document.getElementById('total_mass') ;

if (adding_mass<=0){
    adding_mass_label.innerText = "Error, please check fields again";

}
else if (adding_mass){
    adding_mass_label.innerText ="Need to add " + adding_mass.toString()+" kg";
    total_mass_label.innerText ="Final mass will be" + (adding_mass+start_mass_get_adding_mass).toString()+" kg";
}

else{
    adding_mass_label.innerText = "Wrong data, please check again";

}




//Second

// console.log(count_material_final_percentage);
// material_final_percentage_




if (count_material_final_percentage){
for (const x of Array(count_material_final_percentage).keys()) {
    start_mass = +document.getElementById('start_mass_get_adding_mass').value;
    start_percentage = +document.getElementById('material_start_percentage_'+(x+1)).value;
    adding_percentage = +document.getElementById('material_adding_percentage_'+(x+1)).value;

    final_percentage = (start_mass * start_percentage + adding_mass * adding_percentage) / (start_mass + adding_mass)
    
    
    final_percentage = Math.round(final_percentage * 1000) / 1000 
    
    material_final_percentage_label = document.getElementById('material_final_percentage_'+(x+1))

    if (final_percentage<=0){
        material_final_percentage_label.innerText = "Error, please check fields again";
    
    }
    else if (final_percentage){
        material_final_percentage_label.innerText = "Final " + final_percentage.toString()+" %";
    
    }
    
    else{
        material_final_percentage_label.innerText = "Wrong data, please check again";
    
    }

    
}
  }

  


});








