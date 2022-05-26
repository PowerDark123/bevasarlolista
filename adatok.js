adatok=[
    {id:1,
    nev:"alma",
    mennyiseg:"2kg"},
    {id:2,
    nev:"rozskenyér",
    mennyiseg:"negyed"},
    {id:3,
    nev:"joghurt",
    mennyiseg:"2 darab"},
    {id:4,
    nev:"sajt",
    mennyiseg:"300g"},
]

 function render(){
     for(let obj of adatok){
    document.querySelector('.lista').innerHTML+=`
    <div class="d-flex justify-space-between termekek rounded">
    <div>
        ${obj.nev} - ${obj.mennyiseg}
    </div>
    <div class="ml-auto">
        <span><i id="${obj.id}" onclick="torles(this)" class="fa-solid fa-trash-can fa-xl text-danger btn"></i></span>
    </div>
    </div>`
 
        }
 }
render()


function add(){
    let termek = document.querySelector('#termek').value
    let mennyiseg = document.querySelector('#mennyiseg').value
    let maxid2=adatok.reduce((maxid2,obj)=>obj.id>maxid2?obj.id:maxid2,0)
    console.log(maxid2)
    let obj={}
    obj.id=maxid2+1
    obj.nev=termek
    obj.mennyiseg=mennyiseg
    console.log(obj)
    document.querySelector('.lista').innerHTML+=`
    <div class="d-flex justify-space-between termekek rounded">
    <div>
        ${termek} - ${mennyiseg}
    </div>
    <div class="ml-auto">
        <span ><i id="${obj.id}" onclick="torles(this)" class="fa-solid fa-trash-can fa-xl text-danger btn"></i></span>
    </div>
</div>`
adatok.push(obj)
console.log(adatok)
}

function torles(o){
    let id=o.id
    let newArr=adatok.filter(obj=>obj.id!=id)
    adatok=newArr
    document.querySelector('.lista').innerHTML=""
    render(adatok)
    console.log(o.id)
}
 
function deletall(){
    adatok =[]
    document.querySelector('.lista').innerHTML=""
    render()
}