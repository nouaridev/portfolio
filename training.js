// /// creating the  heading : 

// let header = document.createElement("div");
// let title = document.createElement("h1"); 
// let titletxt = document.createTextNode("Nouari"); 
// title.appendChild(titletxt);
// title.style="color: green;"

// let  right = document.createElement("ul");
// let  hm = document.createElement("li");
// let  hmtxt = document.createTextNode("home")
// hm.appendChild(hmtxt)
// let  ab = document.createElement("li");
// let  abtxt = document.createTextNode("about")
// ab.appendChild(abtxt)
// let  sr= document.createElement("li");
// let  srtxt = document.createTextNode("services")
// sr.appendChild(srtxt)
// let  cn = document.createElement("li");
// let  cntxt = document.createTextNode("content")
// cn.appendChild(cntxt)

// right.appendChild(hm);
// right.appendChild(ab);
// right.appendChild(sr);
// right.appendChild(cn);
// right.style= " display: flex ; gap : 20px; list-style: none;"


// header.appendChild(title);
// header.appendChild(right);
// header.style="display : flex ;width : 100% ; justify-content: space-between ;align-items: center;padding: 0px 20px;"
// console.log(header); 
// document.querySelector("body").appendChild(header); 


// ///  creating the  main sectiion : 


// let main = document.createElement("div"); 
// for(let  i = 1 ; i<15 ; i++){
//     let pr = document.createElement("div");
//     pr.style= " background-color: #eee; text-align: center; padding: 10px; border-radius: 9px"
//     let nm = document.createElement("h1");
//     let nmtxt = document.createTextNode(`${i}`)
//     let des = document.createElement("p");
//     let destxt = document.createTextNode("product")
//     nm.appendChild(nmtxt);
//     des.appendChild(destxt)
//     pr.appendChild(nm)
//     pr.appendChild(des)
//     main.appendChild(pr)
// }


// main.style= "width: 100%;padding: 20px;  display: grid ;gap: 20px; grid-template-columns: repeat(auto-fill , minmax(150px ,1fr)) ; background-color: #aaa; justify-content: center; "
// document.body.appendChild(main)

