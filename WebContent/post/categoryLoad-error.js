
let i=0;
const select = document.getElementById("select");
console.log(select);
window.addEventListener("load", async function () {
    // ページが読み込みされた段階でfetchする
    console.log("OK-second");
    const res = await fetch("../t_room/SerchCategory");
    const categorys = await res.json();
    //   postsをjson形式で受け取っている

    categorys.forEach((categoryName) => {
      const option = document.createElement("option");
      option.value=i++;
      option.text=categoryName;
      select.appendChild(option);
    });
    i=0;
    console.log(categorys);
  });
