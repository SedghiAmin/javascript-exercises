
fetch(`https://api.github.com/users/sedghiamin`)
  // Load the response as json
  .then(response => response.json())
  // Show the avatar image (githubUser.avatar_url) 
  .then(function (githubUser){
    let img = document.createElement('img');
    img.src = githubUser.avatar_url;
    document.body.append(img);
  });