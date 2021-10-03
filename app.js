function addNewTask(){
    let task = document.getElementById('newtask').value;
    if(task){

        let tbodyRef = document.getElementById('tasklist').getElementsByTagName('tbody')[0];

        let newRow = tbodyRef.insertRow(tbodyRef.rows.length);

        let newCell = newRow.insertCell(0)
        newCell.appendChild(document.createTextNode('X'));
        newCell.style.width = '20px';
        newCell.className = 'deletebutton';
        newCell.setAttribute("onclick","deleteRow(this)");

        newCell = newRow.insertCell(0)
        newCell.appendChild(document.createTextNode('❏'));
        newCell.style.width = '20px';
        newCell.className = 'checkbutton';
        newCell.setAttribute("onclick","markComplete(this)");

        newCell = newRow.insertCell(0);
        let newTask = document.createTextNode(task);
        newCell.className = 'task';
        newCell.appendChild(newTask);
        document.getElementById('newtask').value = "";
    }
}

function deleteRow(e){
    result = confirm("Delete '" + e.parentNode.firstChild.innerText + "'?");
    if(result){
        rowIndex = e.parentNode.rowIndex;
        e.parentNode.parentNode.deleteRow(rowIndex);
    }
}

function markComplete(e){
    let itm = e.parentNode;
    e.parentNode.parentNode.deleteRow(e.parentNode.rowIndex);
    console.log(itm)
    itm.cells[1].innerText = '✓';
    itm.cells[1].className = 'uncheckbutton';
    itm.cells[1].setAttribute("onclick","markIncomplete(this)");
    document.getElementById('completed').appendChild(itm); 
}

function markIncomplete(e){
    let itm = e.parentNode;
    e.parentNode.parentNode.deleteRow(e.parentNode.rowIndex);
    itm.cells[1].innerText = '❏';
    itm.cells[1].className = 'checkbutton';
    itm.cells[1].setAttribute("onclick","markComplete(this)");
    document.getElementById('tasklist').appendChild(itm); 
}

function deleteAll(){
    result = confirm("Delete all tasks?");
    if(result){
        tableRowsNum = document.getElementById('tasklist').rows.length;
        for(let i = 0;i < tableRowsNum; i++)
        {
            document.getElementById('tasklist').deleteRow(0);
        }
    }
}

const ExplicitPrevention = function (event) {
    var keyPressed = event.keyCode || event.which;
    if (keyPressed === 13) {
        addNewTask();
    }
}