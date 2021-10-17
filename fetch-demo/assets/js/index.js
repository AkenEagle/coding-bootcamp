const btnFetch = document.getElementById("btn-fetch");

const fetchRepos = function () {
    const reposUrl = 'https://api.github.com/users/akeneagle/repos';

    fetch(reposUrl) 
      .then (function (response) {
          return response.json();
      })
      .then (function (data) {
          console.clear();
          data.forEach((element) => {
              console.log(element.html_url);
          })
      })
}

btnFetch.addEventListener('click', fetchRepos);