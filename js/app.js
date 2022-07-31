const nvdata = document.querySelector("#nv-data");
const nvaccount = document.querySelector("#nv-account");
const nvnotification = document.querySelector("#nv-notification");
const nvintegration = document.querySelector("#nv-integration");
const nvpassword = document.querySelector("#nv-password");
const nvitem = document.querySelector("#nv-item");

const data = document.querySelector("#data");
const account = document.querySelector("#accounts");
const notification = document.querySelector("#notifications");
const integration = document.querySelector("#integrations");
const password = document.querySelector("#password");
const item = document.querySelector("#item");

// upload button
Array.prototype.forEach.call(
  document.querySelectorAll(".file-upload__button"),
  function(button) {
    const hiddenInput = button.parentElement.querySelector(
      ".file-upload__input"
    );
    const label = button.parentElement.querySelector(".file-upload__label");
    const defaultLabelText = "No file(s) selected";

    // Set default text for label
    label.textContent = defaultLabelText;
    label.title = defaultLabelText;

    button.addEventListener("click", function() {
      hiddenInput.click();
    });

    hiddenInput.addEventListener("change", function() {
      const filenameList = Array.prototype.map.call(hiddenInput.files, function(
        file
      ) {
        return file.name;
      });

      label.textContent = filenameList.join(", ") || defaultLabelText;
      label.title = label.textContent;
    });
  }
);

// end of upload button

nvdata.addEventListener("click", function () {
  // adding and removing active class
  this.classList.add("active");
  nvnotification.classList.remove("active");
  nvintegration.classList.remove("active");
  nvpassword.classList.remove("active");
  nvitem.classList.remove("active");
  nvaccount.classList.remove("active");
  //  show and hide elements
  account.classList.add("hide");
  account.classList.remove("show");
  //The above two lines is used to remove default style of account page
  notification.classList.remove("show");
  integration.classList.remove("show");
  password.classList.remove("show");
  item.classList.remove("show");
  data.classList.add("show");
  
});

nvaccount.addEventListener("click", function () {
  // adding and removing active class
  this.classList.add("active");
  nvdata.classList.remove("active");
  nvnotification.classList.remove("active");
  nvintegration.classList.remove("active");
  nvpassword.classList.remove("active");
  nvitem.classList.remove("active");
  // show and hide elements
  account.classList.add("show");
  notification.classList.remove("show");
  integration.classList.remove("show");
  password.classList.remove("show");
  item.classList.remove("show");
  data.classList.remove("show");
  
});

nvnotification.addEventListener("click", function () {
  // adding and removing active class
  this.classList.add("active");
  nvdata.classList.remove("active");
  nvaccount.classList.remove("active");
  nvintegration.classList.remove("active");
  nvpassword.classList.remove("active");
  nvitem.classList.remove("active");
  // show and hide elements
  account.classList.add("hide");
  account.classList.remove("show");
   //The above two lines is used to remove default style of account page
  notification.classList.add("show");
  integration.classList.remove("show");
  password.classList.remove("show");
  item.classList.remove("show");
  data.classList.remove("show");
  
});


nvintegration.addEventListener("click", function () {
  // adding and removing active class
  this.classList.add("active");
  nvnotification.classList.remove("active");
  nvdata.classList.remove("active");
  nvpassword.classList.remove("active");
  nvitem.classList.remove("active");
  nvaccount.classList.remove("active");
  // show and hide elements
  account.classList.add("hide");
  account.classList.remove("show");
   //The above two lines is used to remove default style of account page
  notification.classList.remove("show");
  integration.classList.add("show");
  password.classList.remove("show");
  item.classList.remove("show");
  data.classList.remove("show");
  
});

nvpassword.addEventListener("click", function () {
  // adding and removing active class
  this.classList.add("active");
  nvdata.classList.remove("active");
  nvnotification.classList.remove("active");
  nvintegration.classList.remove("active");
  nvaccount.classList.remove("active");
  nvitem.classList.remove("active");
  // show and hide elements
  account.classList.add("hide");
  account.classList.remove("show");
   //The above two lines is used to remove default style of account page
  notification.classList.remove("show");
  integration.classList.remove("show");
  password.classList.add("show");
  item.classList.remove("show");
  data.classList.remove("show");
  
});

nvitem.addEventListener("click", function () {
  // adding and removing active class
  this.classList.add("active");
  nvdata.classList.remove("active");
  nvaccount.classList.remove("active");
  nvintegration.classList.remove("active");
  nvpassword.classList.remove("active");
  nvnotification.classList.remove("active");
  // show and hide elements
  account.classList.add("hide");
  account.classList.remove("show");
   //The above two lines is used to remove default style of account page
  notification.classList.remove("show");
  integration.classList.remove("show");
  password.classList.remove("show");
  item.classList.add("show");
  data.classList.remove("show");
});