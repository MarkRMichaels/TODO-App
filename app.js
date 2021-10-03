let tasks = [];

function addNewTask(){
    let task = document.getElementById('newtask').value;
    if(task){
        tasks.push(task);

        let tbodyRef = document.getElementById('tasklist').getElementsByTagName('tbody')[0];

        let newRow = tbodyRef.insertRow(tbodyRef.rows.length);
        newRow.className = 'unchecked';

        let newCell = newRow.insertCell(0)
        newCell.appendChild(document.createTextNode('X'));
        newCell.style.width = '20px';
        newCell.className = 'DeleteButton';
        newCell.setAttribute("onclick","deleteRow(this)");

        newCell = newRow.insertCell(0)
        newCell.appendChild(document.createTextNode('✓'));
        newCell.style.width = '20px';
        newCell.className = 'DeleteButton';
        newCell.setAttribute("onclick","markComplete(this)");

        newCell = newRow.insertCell(0);
        let newTask = document.createTextNode(tasks[tasks.length - 1]);
        newCell.className = 'task';
        newCell.appendChild(newTask);
        document.getElementById('newtask').value = "";
    }
}

function deleteRow(e){
    result = confirm("Delete '" + e.parentNode.firstChild.innerText + "'?");
    if(result){
        rowIndex = e.parentNode.rowIndex;
        document.getElementById('tasklist').deleteRow(rowIndex);
    }
}

function markComplete(e){
    if(e.parentNode.className === 'unchecked'){
        e.parentNode.className = 'checked';
    }
    else{
    e.parentNode.className = 'unchecked';
    }
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