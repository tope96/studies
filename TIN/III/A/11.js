var man={
    name:'Jan',
    sName: 'Kowalski',
    height: 170,
    year: 1996,

    getName(){
        return this.name;
    },

    getYear(){
        var old = new Date().getFullYear() - this.year;
        return old;
    }
    
};

function aboutMan(obj){
    var txt = "";
    for (var propName in obj) {

        console.log(obj[propName] + " - " + typeof(obj[propName]));

    }
    return txt;
}

aboutMan(man);
