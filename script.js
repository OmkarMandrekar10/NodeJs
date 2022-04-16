function onFormSubmit(){

    var FormData = readFormData();
    insertNewRecord(FormData)

}

function readFormData(){
    var FormData = {};
    FormData["ProductId"] = document.getElementsById("ProductId").value
    FormData["ProductName"] = document.getElementsById("ProductName").value
    FormData["CategoryId"] = document.getElementsById("CategoryId").value
    FormData["CategoryName"] = document.getElementsById("CategoryName").value
    FormData["Category"] = document.getElementsById("Category").value
    FormData["Relationships"] = document.getElementsById("Relationships").value
    FormData["ProductSchema"] = document.getElementsById("ProductSchema").value
    FormData["Pagination"] = document.getElementsById("Pagination").value
    return FormData;

}

function insertNewRecord(data) {
     var table = document.getElementsById("ProductDetails").getElementsByTagName('tbody');
      var newROw = table.insertRow(table.length);
cell1 = newROw.insertCell(0);
cell1.innerHTML = data.ProductId;
cell2 = newROw.insertCell(1);
cell2.innerHTML = data.ProductName;
cell3 = newROw.insertCell(2);
cell3.innerHTML = data.CategoryId;
cell4 = newROw.insertCell(3);
cell4.innerHTML = data.CategoryName;
cell5 = newROw.insertCell(4);
cell5.innerHTML = data.Category;
cell6 = newROw.insertCell(5);
cell6.innerHTML = data.Relationships;
cell7 = newROw.insertCell(6);
cell7.innerHTML = data.ProductSchema;
cell8 = newROw.insertCell(7);
cell8.innerHTML = data.Pagination;
cell9 = newROw.insertCell(8);
cell9.innerHTML = '<a>Edit</a>'
|  |  |  |  | | = '<a>Delete</a>';
}
