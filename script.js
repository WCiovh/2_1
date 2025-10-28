(function() {
  const example = document.getElementById('example')
  const cw1 = document.getElementById('cw1')
  const cw2 = document.getElementById('cw2')
  const cw3 = document.getElementById('cw3')
  const answer = document.getElementById('answer')

  example.addEventListener("click", function() {
    const cw2Form = document.getElementById('cw2-form');
    cw2Form.style.display = 'none';
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(array => {
        console.log(array)
        answer.innerHTML = JSON.stringify(array);
      })
  })

  cw1.addEventListener("click", function() {
    const cw2Form = document.getElementById('cw2-form');
    cw2Form.style.display = 'none';
    answer.innerHTML = 'Loading...';
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(posts => {
          console.log(posts);
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
    }, 1000);
  })

  cw2.addEventListener("click", function() {
    const cw2Form = document.getElementById('cw2-form');
    cw2Form.style.display = 'block';
    answer.innerHTML = '';
  })

  const fetchPostBtn = document.getElementById('fetchPost');
  fetchPostBtn.addEventListener("click", function() {
    const postSelect = document.getElementById('postSelect');
    const selectedId = postSelect.value;
    answer.innerHTML = 'Loading...';

    fetch(`https://jsonplaceholder.typicode.com/posts/${selectedId}`)
      .then(response => response.json())
      .then(post => {
        console.log(post);
        let html = `<h2>Wybrany post:</h2>
          <div style="padding: 10px; border: 1px solid #ccc; margin: 10px 0;">
            <strong>Post ${post.id}: ${post.title}</strong><br>
            ${post.body}
          </div>`;
        answer.innerHTML = html;
      })
  })

  cw3.addEventListener("click", function() {
    //TODO
  })

})();
