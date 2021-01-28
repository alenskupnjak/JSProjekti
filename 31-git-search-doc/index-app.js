//Init github
const github = new Github();
// Init UI
const ui = new UI();

//Serach input
const searchUser = document.getElementById('searchUser');

// Search input event lisener
searchUser.addEventListener('keyup', (e) => {
  //Get input text
  const userText = e.target.value;

  if (userText !== '') {
    // Make http calll
    github.getUser(userText).then((data) => {
      if (data.profile.message === 'Not Found') {
        ui.showAlert('User not found', 'alert alert-danger');
      } else {
        // Show profile
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
        ui.showAlert('Pronašao', 'alert alert-success');
      }
    });
  } else {
    // Clear profile
    ui.clearProfile();
  }
});


function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}