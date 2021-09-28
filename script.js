// "Checkboxes" is variable. you can use any valid name.
// "checkAll" is a function which is you writened in your input field. That will be same.

var checkboxes = document.querySelectorAll("input[type = 'checkbox']");

function checkAll(myCheckbox){
    if (myCheckbox.checked == true) {
      checkboxes.forEach(function(checkbox){
        checkbox.checked = true;
      })
    } else {
      checkboxes.forEach(function(checkbox){
        checkbox.checked = false;
      })
    }
};
