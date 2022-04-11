/**
 *
 */


const email=document.getElementById("email");
const pass=document.getElementById("pass");


const emailnput=email.innerText;
const passInput=pass.innerText;
const str="@ga.ttc.ac.jp"




//何らかの文字が入力されたら実行
email.addEventListener('keypress', (e) => {
    if (5 <= e.target.value.length) {
      let mess=document.getElementById("mess");
        console.log(e.target.value.length);
   
    let value=e.target.value;
    const button=document.getElementById("submit");

    if(value.endsWith(str)){

        //value.lastIndexOf(str)+str.le ngth===value.length)&&(str.length<=value.length)
        // 後方一致のときの処理

        button.disabled = false;  

        if(document.getElementById("mess").innerText!=null){
          document.getElementById("mess").innerText="";
       }
      }else{
        if(document.getElementById("mess")!=null){
          
       }else{mess.innerText="@ga.ttc.ac.jpを含むメールアドレスを入力してください";}
         

      }
    }

  })

