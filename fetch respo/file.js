let inputValue=document.querySelector(".username");
let submitButton=document.querySelector(".submit");
let Repositories=document.querySelector(".Repositories");

submitButton.onclick=function(){
    getUserdata();
}
function getUserdata(){
    if(inputValue.value===""){
        Repositories.innerHTML="Please Enter UserName";
    }
    else{
        Repositories.innerHTML="";
        fetch(`https://api.github.com/users/${inputValue.value}/repos`).then(
        res=>  {  let data=res.json()
           return data
        }
        ).then(Userdata=>{
            showRepos(Userdata)
        }).catch(()=>{
            Repositories.innerHTML="";
            let errormessage=document.createElement("h1")
            errormessagetext=document.createTextNode("This User Not Found")
            errormessage.appendChild(errormessagetext)
                        Repositories.appendChild(errormessage)

            errormessage.style.color="red";
        })
    }
}
function showRepos(Repos){
    Repos.forEach(element => {
        //create repose div
        let RepositorieDiv=document.createElement("div");
        //create Repos title
        let RepositorieTitle=document.createElement("p");
                //create visit button
        visitButton=document.createElement("a")
        visitButton.href=`https://github.com/${inputValue.value}/${element["name"]}`
        visitButton.innerHTML="Visit"
        visitButton.className="visit"
        //add title
        RepositorieTitle.appendChild(document.createTextNode(element["name"]))
        RepositorieDiv.appendChild(RepositorieTitle);
                RepositorieDiv.appendChild(visitButton)

        Repositories.appendChild(RepositorieDiv)


    });
}