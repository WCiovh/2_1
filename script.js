(function () {
  const example = document.getElementById('example')
  const cw1 = document.getElementById('cw1')
  const cw2 = document.getElementById('cw2')
  const cw3 = document.getElementById('cw3')
  const answer = document.getElementById('answer')

  example.addEventListener("click", function () {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(array => {
        console.log(array)
        answer.innerHTML = JSON.stringify(array);
      })
  })

  cw1.addEventListener("click", function () {
    cw1.addEventListener("click", function () {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(posts => {
          console.log(posts)
          let html = '<h2>Lista postów:</h2><ul>';
          posts.forEach(post => {
            html += `<li>
              <strong>Post ${post.id}: ${post.title}</strong><br>
              ${post.body}
            </li>`;
          });
          html += '</ul>';
          answer.innerHTML = html;
        })
    })
  })

  cw2.addEventListener("click", function () {
    //TODO
  })

  cw3.addEventListener("click", function () {
    //TODO
  })

})();
