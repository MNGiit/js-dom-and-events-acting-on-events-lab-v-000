function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

function retrieveEmployeeInformation() {
  return document.querySelector('input').value;
}

function addNewElementAsLi() {
  const employee = retrieveEmployeeInformation();
  // Element.insertAdjacentHTML(position, text)
  // $("#yo").append("hey hey hey hey!!!!!");
  document.querySelector('.employee-list').insertAdjacentHTML('beforeend', `<li>${employee}</li>`);
}


// function eventHandler(event) {
//   if (event.type == 'fullscreenchange') {
//     /* handle a full screen toggle */
//   } else /* fullscreenerror */ {
//     /* handle a full screen toggle error */
//   }
// }

function addNewLiOnClick() {
  let click = document.querySelector('input[type=submit]');
  // listen for click so use .addEventListener(listen_to_this, function(event)
  // .addEventListener(click, function(event)
  // error, must erase input, use .querySelector
  click.addEventListener('click', function(event){
    addNewElementAsLi();
    document.querySelector('input').value = "";
  });
}

function clearEmployeeListOnLinkClick() {
  let click = document.querySelector('a');
  let clearThis = document.querySelector('ul');
  // 
  // document.getElementById(elementID).innerHTML = "";
  click.addEventListener("click", function(event) {
    clearThis = "";
  });
  
}

