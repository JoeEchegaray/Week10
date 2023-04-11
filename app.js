let id = 0;

//document.getElementById("newIssueBtn").addEventListener('click', () => {
 // console.log("Button is working!")
//});

console.log('JS Showing Up?')

document.getElementById("newIssueBtn").addEventListener('click', () => {
    console.log("testing");
    let table = document.getElementById('issueTable');
    let row = table.insertRow(1);
    row.setAttribute('id', `item-${id}`);
    row.insertCell(0).innerHTML = document.getElementById('issueReported').value;
    row.insertCell(1).innerHTML = document.getElementById('assetName').value;
    row.insertCell(2).innerHTML = document.getElementById('reportedDate').value;
    row.insertCell(3).innerHTML = document.getElementById('reportedBy').value;
    let deleteIssue = row.insertCell(4);
    deleteIssue.appendChild(deleteItem(id++));
    document.getElementById('issueReported').value = '';
    document.getElementById('assetName').value = '';
    document.getElementById('reportedDate').value = '';
    document.getElementById('reportedBy').value = '';
});


function deleteItem(id) {
    let deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger'
    deleteBtn.id = id;
    deleteBtn.innerHTML = "Delete"
    deleteBtn.onclick = () => {
        let deleteIssue = document.getElementById(`item-${id}`)
        deleteIssue.parentNode.removeChild(deleteIssue)
    };
    return deleteBtn;
};





