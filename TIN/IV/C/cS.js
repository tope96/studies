function add(name, sName){
    if(name == "" || sName == ""){
        alert("Podaj wartości!");
    }else{
        var table = document.getElementById("myTable");
        var row = table.insertRow(-1); //-1 for adding rows at the end of the table
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = name;
        cell2.innerHTML = sName; 
    }
}
