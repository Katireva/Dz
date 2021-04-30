const ApiKey = '289e6b5e28e14981f0fa10e5d4e2181b';

export default class Model{
    constructor(handleLoadData){
        this.handleLoadData = handleLoadData;
    }

  loadWether() {
    const ajax = new XMLHttpRequest();
    const city = document.querySelector('#city');
  
    ajax.addEventListener('readystatechange', () => {
      try{
        if (ajax.readyState == 4 && ajax.status == 200) 
        this.handleLoadData(JSON.parse(ajax.responseText)) 
        }
        catch (err){
          console.log(err, "No info");
        }
    });//настройка что делать когда что-то будет меняться
    ajax.open("GET", "https://api.openweathermap.org/data/2.5/weather?q=" + city.value + "&appid="+ApiKey+" ", true);//настройка куда мы шлем запрос
    ajax.send();//старт запроса - отправка
  }
}