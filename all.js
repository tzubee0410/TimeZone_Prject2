//取得timezone 的取得timezone 的區塊
const timeZone = document.querySelectorAll('.timezone');
const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];


function tick(){
    const nweDate = new Date(); //得到:  Tue Nov 10 2020 14:32:46 GMT+0800 (台北標準時間)
   // console.log(nweDate);
    
    // Array.from()將「類陣列物件」或是「可迭代的物件」轉換成陣列，forEach 將每一個挑出來
    Array.from(timeZone).forEach (item=>{
        //取出 data-timezone 得到國家
        const dataTimeZoneAtrr = item.getAttribute('data-timezone');
       // console.log(dataTimeZoneAtrr)
        
        //將newDate 轉成想要格式，前面先寫要呈現國家，後面 timeZone: 列表列的國家所以是 attribute 得到的:2020/11/10 下午5:54:05
        let mainDate = nweDate.toLocaleString('zh-TW', {timeZone: dataTimeZoneAtrr,hour12: false});    // 用false　拿掉下午
        //console.log(mainDate);

        //分解資料 split:分割字串成字串組   slice:複製開始與結束點（結束點不算）中的內容
        let zoneYear = mainDate.split(" "[0]); //用空白分割出 日年和時間 ["2020/11/10", "18:33:21"] 
        let zoneYearDate= mainDate.split('/'); //用斜線分割出字串 ["2020", "11", "10 18:33:21"]
        let zoneTime = (mainDate.split(' ')[1]).slice(0, 5);
        console.log(zoneYear,zoneYearDate,zoneTime);


        // let zoneYear = mainDate.slice(0,4);
        // let zoneday = mainDate.slice(5,7);
        // let zoneTime = mainDate.slice(11,16);
        // console.log(zoneday,);

        //塞到版面 ${months[zoneYearDate[1] - 1]} = month 裡面的第幾位，因為0開始 所以 -1
        item.querySelector('.zone-date').innerText = `${zoneYearDate[1]} ${months[zoneYearDate[1] - 1]}, ${zoneYearDate[0]}`;
        item.querySelector('.time').innerText = `${zoneTime}`;
        console.log(`${months[zoneYearDate[1]]}`);

        
    });

    


}


tick();


































// var $timezone = document.querySelectorAll('.timezone');

// var months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

// function tick(){
// 	console.log('tick')
// 	var theDate = new Date();

// 	Array.from($timezone).forEach($tz => {
// 		var timezone = $tz.getAttribute('data-timezone');
// 		var d = theDate.toLocaleString('zh-TW', { timeZone: timezone, hour12: false });
// 		console.log(d);

// 		var date = d.split(' ')[0];
// 		var dates = date.split('/');

// 		var time = (d.split(' ')[1]).slice(0, 5);

// 		$tz.querySelector('.zone-date').innerText = `${dates[2]} ${months[dates[1] - 1]}, ${dates[0]}`;
// 		$tz.querySelector('.time').innerText = time;
// 	})
// }

// tick();

// setInterval(tick, 10000);