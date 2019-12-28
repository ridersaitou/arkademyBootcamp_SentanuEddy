var jsonobj ='{ "name":"Eddy","age":30,"address":"Pesona Vilamas Bekasi","hobbies":[ "Renang","ModelKit","Belajar" ],"is_married":true,"list_school":[ { "name":"Politeknik Negeri Bandung","year_in":2006,"year_out":2010,"major":"Telecommunication" },{ "name":"SMA Krida Nusantara","year_in":2003,"year_out":2006,"major":"Science" },{ "name":"SMP 1 Bekasi","year_in":2000,"year_out":2003,"major":"-" } ],"skills":[ { "skill_name":"DevOps","level":"advanced" },{ "skill_name":"Testing","level":"expert" },{ "skill_name":"Integration","level":"advanced" } ],"interest_in_coding":true }'; 
  
// Here we convert JSON to object 
var obj = JSON.parse(jsonobj); 
  
document.getElementById("output").innerHTML =  
                     obj.name + ", is " 
                     + obj.age + ", years old." 
document.getElementById("source").innerHTML =jsonobj;