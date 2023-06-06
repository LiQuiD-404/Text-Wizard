var fin_val = 0;
function hello(event){
    event.preventDefault();
    var value = document.getElementById('tentacles').value
    var val = parseInt(value)
    fin_val = fin_val + val;
    let ele = document.getElementById('result');
        ele.innerHTML = parseInt(fin_val);
}
