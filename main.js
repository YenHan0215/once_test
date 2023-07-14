const mealList = [
    {
        "name": "食在一方",
        "category": ["brunch"],
        "filter": false
    },
    {
        "name": "日十",
        "category": ["brunch"],
        "filter": false
    },
    {
        "name": "鹽行站",
        "category": ["buffet", "rice"],
        "filter": false
    },
    {
        "name": "鍋燒意麵",
        "category": ["noodle"],
        "filter": false
    },
    {
        "name": "炒飯",
        "category": ["rice"],
        "filter": false
    },
    {
        "name": "八方雲集",
        "category": ["others"],
        "filter": false
    },
    {
        "name": "火鍋",
        "category": ["others"],
        "filter": false
    },
    {
        "name": "韓式料理",
        "category": ["rice", "noodle"],
        "filter": false
    },
    {
        "name": "小飯糰大飯糰",
        "category": ["rice"],
        "filter": false
    },
    {
        "name": "後校門滷肉飯",
        "category": ["rice", "noodle"],
        "filter": false
    },
    {
        "name": "魚耶",
        "category": ["brunch", "rice", "noodle"],
        "filter": false
    },
    {
        "name": "吳家鴨香飯",
        "category": ["rice", "noodle"],
        "filter": false
    },
    {
        "name": "施家雞肉飯",
        "category": ["rice"],
        "filter": false
    },
    {
        "name": "黑盤",
        "category": ["rice", "noodle"],
        "filter": false
    },
    {
        "name": "神武拉麵",
        "category": ["noodle"],
        "filter": false
    },
    {
        "name": "森井丼飯",
        "category": ["rice"],
        "filter": false
    },
    {
        "name": "雙醬咖哩",
        "category": ["rice"],
        "filter": false
    },
    {
        "name": "麺や青鈴",
        "category": ["noodle"],
        "filter": false
    },
    {
        "name": "金拱門",
        "category": ["noodle", "rice"],
        "filter": false
    }
]

//checkbox
const brunchEl = document.getElementById("brunch");
const riceEl = document.getElementById("rice");
const noodleEl = document.getElementById("noodle");
const buffetEl = document.getElementById("buffet");
const othersEl = document.getElementById("others");

// 組成 DOM LIST
const checkList = [brunchEl,riceEl,noodleEl,buffetEl,othersEl];
//button
const btnEl = document.querySelector("#roll");
// order
const orderEl = document.getElementById("order");



//監聽事件
btnEl.addEventListener("click", () => {
    //有打勾的類型字串名稱的陣列
    let checkedList=[];
    //                  ["noodle","rice"]
    //                 item =>checkbox的節點
    checkList.forEach((item) =>{
        if(item.checked) {
            checkedList.push(item.value);
        }
        // else{
        //     const nothing= "空氣";
        //     orderEl.innerHTML = nothing;
        // }
        
    })

    // 最終目的 拿這個做random
    const filterList = [] ;
//  勾選的類別名稱  類別名稱
//                       "noodle"   
    checkedList.forEach((category)=> {
    // 餐廳資料 篩選    店面資料
        mealList.forEach((store)=>{
            //["noodle"]
            if(store.category.includes(category)){
                filterList.push(store);
            }
            //console.log(filterList);
           
        })
    })

     //console.log(filterList);
    //拿 filterList 做隨機抽樣
    // const newList =  new Set(filterList);//從filterlist抓出重複的
    // console.log(newList);

    const randomNum = Math.floor(Math.random() * filterList.length);
    console.log(randomNum);
    if( randomNum === 0){
        const nothing = "空氣";
        orderEl.innerText =nothing;
    }
    else{
        const result =filterList[randomNum].name;
        orderEl.innerText = result;
    }    
})
