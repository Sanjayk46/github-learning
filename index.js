// var col = document.createElement("div")
// col.innerHTML="this is col"
// col.style.color="brown"
//  var row = document.createElement("div")
//  var container = document.createElement("div")
//  col.setAttribute("class","col-1")
//  row.setAttribute("class","row")
//  container.setAttribute("class","container")
//  row.append(col)
//  container.append(row)
//  document.body.append(container)


    // function submit(){
    // //    let email = document.getElementById("email").value;
    // //    console.log(email);
    // var Firstname = document.getElementById("firstname").value;
    // console.log(Firstname);
    // var Middlename = document.getElementById("middlename").value;
    // console.log(Middlename);
    // var Lastname = document.getElementById("Lastname").value;

    // console.log(Lastname);
    // var Email = document.getElementById("email").value;
    // console.log(Email);
    // var Pincode = document.getElementById("pincode").value;
    // console.log(Pincode);
    // }
    function createlabel(tagname, attributename, attributevalue, content)
     { 
        var ele = document.createElement(tagname);

        ele.setAttribute(attributename, attributevalue);
        
         ele.innerHTML=content;
        
        return ele;
        
     }
        
         function inputele(tagname, attributename, attributevalue, attributename1, attributevalue1) {
          var inputele = document.createElement(tagname)
        
         inputele.setAttribute(attributename, attributevalue);
        
         inputele.setAttribute(attributename1, attributevalue1);
        
         return inputele;
        
         }
        
         function br(tagname) {
        
         var res = document.createElement(tagname);
        
         return res
        
        }
        
         var email = createlabel("label", "for", "email", "Email");
        
         var br1= br("br");
        
         var input = inputele ("input","type", "email","id", "email");
        
         var br2 = br("br")
         
         var firstname = createlabel("lable","for","firstname","FirstName");
         var br3 = br("br");
         var firstnameinput = inputele("input","type","firstname","id","firstname");
         var br4 = br("br")
         var middlename = createlabel("lable","for","middlename","MiddleName");
         var br5 = br("br");
         var middlenameinput = inputele("input","type","middlename","id","middlename");
         var br6 = br("br");

         var lastname = createlabel("lable","for","lastname","LastName");
         var br7 = br("br");
         var lastnameinput = inputele("input","type","lastname","id","lastname");
         var br8 = br("br");

         var submit = createlabel("button","submit","onclick","click");
         var br9 =br("br");
         var br10 = br("br");
         document.body.append(firstname,br3,firstnameinput,br4);
         document.body.append(middlename,br5,middlenameinput,br6);
         document.body.append(lastname,br7,lastnameinput,br8);
         document.body.append(email,br1,input,br2);
         document.body.append(submit,br9,br10);

