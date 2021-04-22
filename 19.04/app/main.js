//IPv4
function Task_1(){
 //ipsBetween("10.0.0.0", "10.0.0.50")  ===   50
 //ipsBetween("10.0.0.0", "10.0.1.0")   ===  256
 //ipsBetween("20.0.0.10", "20.0.1.0")  ===  246
 let mas_1 = prompt("Enter first IPv4: ");
 let mas_2 = prompt("Enter second IPv4: ");
 mas_1 = mas_1.split(".");
 mas_2 = mas_2.split(".");
 //let ans=new Array;
    let diff = 0;
     for (let i = 0; i < 4; i++) {
     diff += (mas_2[i] - mas_1[i]) << (8 * (3-i));//сдвинула двоичное представление diff на (8 * (3-i)) разрядов влево заполняя освободившиеся справа разряды нулями
 }
    alert(diff);
}

//Task 2
function MorseCode()
{
    var message1 = "...   ---   ..."; 
    var ref = { 
      '.-':     'A',
      '-...':   'B',
      '-.-.':   'C',
      '-..':    'D',
      '.':      'E',
      '..-.':   'F',
      '--.':    'G',
      '....':   'H',
      '..':     'I',
      '.---':   'J',
      '-.-':    'K',
      '.-..':   'L',
      '--':     'M',
      '-.':     'N',
      '---':    'O',
      '.--.':   'P',
      '--.-':   'Q',
      '.-.':    'R',
      '...':    'S',
      '-':      'T',
      '..-':    'U',
      '...-':   'V',
      '.--':    'W',
      '-..-':   'X',
      '-.--':   'Y',
      '--..':   'Z',
      '.----':  '1',
      '..---':  '2',
      '...--':  '3',
      '....-':  '4',
      '.....':  '5',
      '-....':  '6',
      '--...':  '7',
      '---..':  '8',
      '----.':  '9',
      '-----':  '0',
    }

    var messageConverted = [];
    
    message1.split("   ").map(function (word) {
        word.split(" ").map(function (index) {
            messageConverted.push(ref[index]);
        });
        messageConverted.push(" ");
    });
    console.log(messageConverted.join(""));
}

function chronos(/** arguments */)    
{
    const year_shift = {//где одна цифра - до 1000-летия, где 2 цифры-после 
        '3': 0,
        '7': 0,
        '11': 0,
        '15': 0,
        '19':	0,
        '4': 6,
        '8': 6,
        '12': 6,
        '16': 6,
        '20':	6,
        '1': 4,
        '5': 4,
        '9': 4,
        '13': 4,
        '17':	4,
        '2': 2,
        '6': 2,
        '10': 2,
        '14': 2,
        '18':	2,
    }

    const month_shift = {
        'January': 0,
        'February': 3,
        'March': 3,
        'April': 6,
        'May':	1,
        'June':	4,
        'July':	6,
        'Augest':	2,
        'September':	5,
        'October':	0,
        'November':	3,
        'December':	5,
    }

    const daysOftheWeek = {
        0: 'Sunday',
        1: 'Monday',
        2: 'Tuesday',
        3: 'Wednesday',
        4: 'Thursday',
        5: 'Friday',
        6: 'Saturday',
    }
    /*Step 1*/
    let d = prompt("The day: ");
    let m = prompt("The month: ");
    let y = prompt("The year: ");   
    /*Step 2 - смещения данного столетия с первой таблицы*/
    let index;
    let len = y.length;
    const y_length = len < 4;
    let l = y_length ? index=(y.slice(0)) : index=(y.slice(0,2));
    //console.log("Step 2"); console.log(year_shift[index]);
    /*Step 3 - смещение лет*/
    let year = Number(y.slice(2,4));
    let shiftForyear = Math.trunc((year + year/4)%7);
    //console.log("Step 3"); console.log(year);console.log(shiftForyear);
    /*Step 4 - значение смещения месяцев со второй таблицы*/
    const indexFormonth = String(m);// console.log("Step 4"); console.log(month_shift[indexFormonth]);
    /*Step 5 - смещение дней*/
    let shiftForday = Math.trunc(d%7);// console.log("Step 5"); console.log(shiftForday);
    /*Step 6 - сложила все 4 числа*/
    let ans = year_shift[index] + shiftForyear + month_shift[indexFormonth] + shiftForday;
    /*Step 7 - разделила 8 по модулю на 7*/
    //console.log("Step 6", ans);
    ans=Math.trunc(ans%7);
    console.log(daysOftheWeek[ans]);

}