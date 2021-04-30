export default class View{
    constructor(handleClickGenerate){
        this.dataContainer = document.querySelector('.data');
        document.querySelector('.btn-data-generate').addEventListener('click', handleClickGenerate);
    }
    //view
    renderData(data)
    {
        //console.log(data);
        const {//двойное деструктурирование
        main: {temp, temp_max, temp_min},
        weather,
        name,
        sys: {country}, 
    } = data;
    //стиль карточки
        const dataHTML = `
        <div class="card" style="width: 18rem;">
        <img src="https://openweathermap.org/img/wn/${weather[0]['icon']}@4x.png">
        <div class="card-body">
        <h5 class="card-title">Temperage: ${Math.round(temp-273)}</h5>
        <h6 class="card-title">min: ${Math.round(temp_min-273)} | max: ${Math.round(temp_max-273)} </h6>
        <p class="card-text">${weather[0]['description']} <br> ${country}, ${name}</p>
        </div>
    </div>`;
    //console.log(dataHTML);
    this.dataContainer.innerHTML += dataHTML;
  }
}