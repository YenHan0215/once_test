//object 物件
let person ={ 
    // key:   value pair
       firstName: "John",
       lastName: "Doe",
       tel:[
           886912345678,
           886024567896
       ],
       isMarried:false,
       arrdress:"台南市永康區...",
       child:{
           tim:{
               tel:886012345
           },
           tom:{
               tel:88623060203
           }
       },
       //方法 
       getName: ()=>{
           console.log(firstName);
       }
   };
   
   //函式 / 函數
   // funtion  add(){}
   
   //假使要抓物件裡的名字 
   //同理 要取號碼 將lastName改為tel[1 >>看為第幾筆資料輸入中括號裏]
   //console.log(person.lastName);
   // console.log(person["firstName"]);
   
   
   //const abc = "firstName"
                 //動態選擇
   //console.log(person[abc]);
   //index 0 1 2 3
   //let arr = [ 1 ,2 ,3, 4];
   
   const obj = {};
   const arr =[] ;
   
   //所有東西 都是由物件組成的
   // 
   
   //陣列:是一種物件
   
   
   // const inputEl = document.querySelector("#input");
   
   // console.dir(inputEl);
   
   //DOM node