//取得 data-timezone 所有的國家
const countries = [...document.querySelectorAll('[data-timezone]')];

//建立得到日期function
function tick(){
    countries.forEach(item=>{
        console.log(item);
        //取得 國家time  toLocalesString 選擇給予語言標記當參數，再依照不同的「語言」與「區域標識符(區域設置)」顯示不同的輸出結果。
        const countryTime = new Date().toLocaleString("en-US",{
            timeZone: item.dataset.timezone
        });
        const dateTime = new Date(countryTime);
        console.log(dateTime)

        // 取得 年月日
        const month = new Intl.DateTimeFormat("en-US", { month: "long" })//它提供對語言敏感的字串比較、支援數字格式化以及日期和時間的格式化。
         .format(dateTime) //得到 dateTime ->November
         .substring(0, 3); //切割後得到 NAV
        console.log(month)
        //將它畫到 HTML
        const date = `${dateTime.getDate()} ${month}.${dateTime.getFullYear()}` 
        


        // 取得 時分 原本是得到是"4"如果要"04" 先+0 雙位數e.g 16:00 會變成 "016"，用slice 取前面
        const hours = ("0" +  dateTime.getHours()).slice(-2);
        console.log(hours)
        const minutes = ("0" + dateTime.getMinutes()).slice(-2);
        console.log(minutes)
        //將時跟分併起來
        const time = `${hours}:${minutes}`;

          // 寫入資料
        const domDate = item.querySelector(".date");
        const domTime = item.querySelector(".time");
        domDate.innerText = date;
        domTime.innerText = time;

    })
}

tick()
setInterval(tick, 1000);
