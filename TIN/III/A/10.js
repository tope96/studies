function search(search, tab){
    var l = 0;
    var r = (tab.length)-1;
    
    while(l<=r){
        var mid = Math.floor((l+r)/2);
        
        if(tab[mid] === search){
            return 'I found it on position: ' + (mid+1);
        }else if(search<tab[mid]){
            r = mid-1;
        }else if(search>tab[mid]){
            l = mid+1;
        }
    }
    return 'I did not found ' + search + ' in this array';
}

console.log(search(5, [1, 2, 5, 8, 9, 11, 15, 20]));
