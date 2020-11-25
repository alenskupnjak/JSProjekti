//Init github
const github = new Github;
// Init UI
const ui = new UI;

//Serach input
const searchUser = document.getElementById('searchUser');
// const searchUser = document.getElementById('trazi');

// Search input event lisener
searchUser.addEventListener('keyup', (e) => {
  //Get input text
  const userText = e.target.value;
  // const userText = document.getElementById('searchUser').value;
  console.log(userText);
  

  if( userText !== ''){
    // Make http calll
    
    github.getUser(userText)
    .then( data =>{
      if (data.profile.message === 'Not Found') {
        // show alert
        console.log('fff');
        
        ui.showAlert('User not found', 'alert alert-danger');
      } else {
        // Show profile
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    })
  } else {
    // Clear profile
    ui.clearProfile();
  }
})