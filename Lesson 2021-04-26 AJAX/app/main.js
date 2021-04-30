function loadDoc() {
    const ajax = new XMLHttpRequest();
    ajax.addEventListener('readystatechange', () => {
      if (ajax.readyState == 4 && ajax.status == 200) {
        renderUser(JSON.parse(ajax.responseText).results[0]);
       
      }
    });//настройка что делать когда что-то будет меняться
    ajax.open("GET", "https://randomuser.me/api/", true);//настройка куда мы шлем запрос
    ajax.send();//старт запроса - отправка
  }

  function renderUser(user){
    console.log(user);
    const {
        picture: {large},
        name: {first, last, title}, 
        dob: {age},
        location: {city, country}
        } = user;

    const userHTML = `
    <div class="card" style="width: 18rem;">
    <img src="${ large }" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${title} ${first} ${last} </h5>
      <p class="card-text">${age} ${city} ${country}</p>
    </div>
  </div>`;
  console.log(userHTML);

  usersContainer.innerHTML += userHTML;
  }

  const usersContainer = document.querySelector('.users');
  document.querySelector('.btn-user-generate').addEventListener('click', loadDoc);