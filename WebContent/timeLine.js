const center = document.getElementById("center");
const navLeft = document.getElementById("navLeft");
let lastDate = null;
let recentlyDate = null;
let i = 0;
let recentlyPostId = 0;
let lastPostId = 0;
let clickFlug = 0;
// 画面上にある投稿一覧を管理する配列
const postList = new Array();

//出力文字列をエスケープ
function escapeHtml(str) {
  if (typeof str == "string") {
    str = str.replace(/&/g, "&amp;");
    str = str.replace(/</g, "&lt;");
    str = str.replace(/>/g, "&gt;");
    str = str.replace(/"/g, "&quot;");
    str = str.replace(/'/g, "&#39;");
    return str;
  }
}

function resLoadNext(i,x,y,z,r,flag,Rflag,Xflag,Yflag,Zflag,sc1chgks123deCReZ,postId) {
  const expressions=document.createElement("div");
expressions.className="expressions";
expressions.id="expressions";


const Like=document.createElement("div");
Like.className="emoji face-normal-color";
Like.id="Like";
expressions.appendChild(Like);

const LikeCareemoji=document.createElement("div");
LikeCareemoji.className="care-emoji";
Like.appendChild(LikeCareemoji);

const LikeemojiHead=document.createElement("div");
LikeemojiHead.className="emoji-head";
LikeCareemoji.appendChild(LikeemojiHead);

const Likeeyes=document.createElement("div");
Likeeyes.className="eyes";
LikeemojiHead.appendChild(Likeeyes);

const LikeeyeEyeLeft=document.createElement("div");
LikeeyeEyeLeft.className="eye eye-left";
Likeeyes.appendChild(LikeeyeEyeLeft);

const LikeeyeEyeRight=document.createElement("div");
LikeeyeEyeRight.className="eye eye-right";
Likeeyes.appendChild(LikeeyeEyeRight);

const LikeMouth=document.createElement("div");
LikeMouth.className="mouth";
LikeemojiHead.appendChild(LikeMouth);

const LikeHeart=document.createElement("div");
LikeHeart.className="heart";
LikeCareemoji.appendChild(LikeHeart);

const LikeArms=document.createElement("div");
LikeArms.className="arms";
LikeCareemoji.appendChild(LikeArms);

const LikearmArmLeft=document.createElement("div");
LikearmArmLeft.className="arm arm-left";
LikeArms.appendChild(LikearmArmLeft);
const LikearmArmRight=document.createElement("div");
LikearmArmRight.className="arm arm-left";
LikeArms.appendChild(LikearmArmRight);

const LikeEmojiTitle=document.createElement("div");
LikeEmojiTitle.className="emoji-title";
Like.appendChild(LikeEmojiTitle);



// ---Hahaha---

const Hahaha=document.createElement("div");
Hahaha.className="emoji face-normal-color";
Hahaha.id="Hahaha";
expressions.appendChild(Hahaha);

const hahaEmoji=document.createElement("div");
hahaEmoji.className="haha-emoji";
Hahaha.appendChild(hahaEmoji);

const hahaEye=document.createElement("div");
hahaEye.className="eye";
hahaEmoji.appendChild(hahaEye);

const hahaMouth=document.createElement("div");
hahaMouth.className="mouth";
hahaEmoji.appendChild(hahaMouth);

const hahaEmojiTitle=document.createElement("div");
hahaEmojiTitle.className="emoji-title";
Hahaha.appendChild(hahaEmojiTitle);

// --------Wow---

const Wow=document.createElement("div");
Wow.className="emoji face-normal-color";
Wow.id="Wow";
expressions.appendChild(Wow);

const WowAmazingEmoji=document.createElement("div");
WowAmazingEmoji.className="amazing-emoji";
Wow.appendChild(WowAmazingEmoji);

const WowEyebrows=document.createElement("div");
WowEyebrows.className="eyebrows";
WowAmazingEmoji.appendChild(WowEyebrows);

const WoweyebrowEyebrowLeft=document.createElement("div");
WoweyebrowEyebrowLeft.className="eyebrow eyebrow-left";
WowEyebrows.appendChild(WoweyebrowEyebrowLeft);

const WoweyebrowEyebrowRight=document.createElement("div");
WoweyebrowEyebrowRight.className="eyebrow eyebrow-right";
WowEyebrows.appendChild(WoweyebrowEyebrowRight);

const Woweyes=document.createElement("div");
Woweyes.className="eyes";
WowAmazingEmoji.appendChild(Woweyes);

const WoweyeEyeLeft=document.createElement("div");
WoweyeEyeLeft.className="eye eye-left";
Woweyes.appendChild(WoweyeEyeLeft);

const WOweyeEyeRight=document.createElement("div");
WOweyeEyeRight.className="eye eye-right";
Woweyes.appendChild(WOweyeEyeRight);

const WowMouth=document.createElement("div");
WowMouth.className="mouth";
WowAmazingEmoji.appendChild(WowMouth);

const WowEmojiTitle=document.createElement("div");
WowEmojiTitle.className="emoji-title";
WowEmojiTitle.innerText="Wow";
Wow.appendChild(WowEmojiTitle);



// ----------sad---





const Sad=document.createElement("div");
Sad.className="emoji face-normal-color";
Sad.id="Sad";
expressions.appendChild(Sad);

const SadEmoji=document.createElement("div");
SadEmoji.className="Sad-emoji";
Wow.appendChild(SadEmoji);

const Sadeyes=document.createElement("div");
Sadeyes.className="eyes";
SadEmoji.appendChild(Sadeyes);

const tear=document.createElement("div");
tear.className="tear";
Sadeyes.appendChild(tear);

const SadeyeEyeLeft=document.createElement("div");
SadeyeEyeLeft.className="eye eye-left";
Sadeyes.appendChild(SadeyeEyeLeft);

const SadeyeEyeRight=document.createElement("div");
SadeyeEyeRight.className="eye eye-right";
Sadeyes.appendChild(SadeyeEyeRight);

const SadMouth=document.createElement("div");
SadMouth.className="mouth";
SadEmoji.appendChild(SadMouth);

const SadEmojiTitle=document.createElement("div");
SadEmojiTitle.className="emoji-title";
SadEmojiTitle.innerText="Sad";
Wow.appendChild(SadEmojiTitle);

sc1chgks123deCReZ.appendChild(expressions);








expressions.style.display = "none";
 i = 0;


reactionBtn.addEventListener("click", async function () {
  if (i % 2 == 0 && flag % 2 == 0) {
    expressions.style.display = "block";
    console.log("open");
    i = 1;
    flag = x + y + z + r;
    Rflag = x + y + z;
    Xflag = r + y + z;
    Yflag = x + r + z;
    Zflag = x + y + r;
  } else if (i % 2 != 0 && flag % 2 == 0) {
    //開いて何も選択しなかった場合
    expressions.style.display = "none";
    i = 0;
    console.log("close");
    flag = x + y + z + r;
    Rflag = x + y + z;
    Xflag = r + y + z;
    Yflag = x + r + z;
    Zflag = x + y + r;
  } else if (i == 0 && flag % 2 != 0) {
    reactionBtn.innerText = "";
    reactionBtn.innerText = "reaction";

    // ----reactionを取り消す操作
    if(flag==1){
    const likeRes= await fetch("ReactionDelete?postId="+postId);
    console.log(likeRes); 
    console.log("リアクション削除");
    }
    i = 0;
    r=0;
    x = 0;
    y = 0;
    z = 0;
    flag = x + y + z + r;
    Rflag = x + y + z;
    Xflag = r + y + z;
    Yflag = x + r + z;
    Zflag = x + y + r;
  }
});

Like.addEventListener("click", async function () {
  if (Rflag % 2 == 0 && x % 2 == 0) {
    //他を選択していなくてかつこれを選択した場合
    const resLike= await fetch("ReactionAdd?postId="+postId+"&reactionId=1");
    reactionBtn.innerText = "";
    reactionBtn.innerText = "Likeを取り消す";
    expressions.style.display = "none"; //1//1
    i = 0;
    r = 1;
    flag = x + y + z + r;
    Rflag = x + y + z;
    Xflag = r + y + z;
    Yflag = x + r + z;
    Zflag = x + y + r;
    console.log("i="+i+"r="+r+"flag="+flag+"Rflag="+Rflag+"Xflag="+Xflag+"Yflag="+Yflag+"Zflag="+Zflag);
  }
});

Sad.addEventListener("click", async function () {
  if (Yflag % 2 == 0 && x % 2 == 0) {
    //他を選択していなくてかつこれを選択した場合
    const resLike= await fetch("ReactionAdd?postId="+postId+"&reactionId=2");

    reactionBtn.innerText = "";
    reactionBtn.innerText = "sadを取り消す";
    expressions.style.display = "none"; //1//1
    i = 0;
    y = 1;
    flag = x + y + z + r;
    Rflag = x + y + z;
    Xflag = r + y + z;
    Yflag = x + r + z;
    Zflag = x + y + r;
    console.log("i="+i+"r="+r+"flag="+flag+"Rflag="+Rflag+"Xflag="+Xflag+"Yflag="+Yflag+"Zflag="+Zflag);

  }
});

Hahaha.addEventListener("click", async function () {
  if (Xflag % 2 == 0 && x % 2 == 0) {
    //他を選択していなくてかつこれを選択した場合
    const resLike= await fetch("ReactionAdd?postId="+postId+"&reactionId=3");


    reactionBtn.innerText = "";
    reactionBtn.innerText = "Hahahaを取り消す";
    expressions.style.display = "none"; //1//1
    i = 0;
    x = 1;
    flag = x + y + z + r;
    Rflag = x + y + z;
    Xflag = r + y + z;
    Yflag = x + r + z;
    Zflag = x + y + r;
    console.log("i="+i+"r="+r+"flag="+flag+"Rflag="+Rflag+"Xflag="+Xflag+"Yflag="+Yflag+"Zflag="+Zflag);

  }
});

Wow.addEventListener("click", async function () {
  if (Zflag % 2 == 0 && x % 2 == 0) {
    //他を選択していなくてかつこれを選択した場合
    const resLike= await fetch("ReactionAdd?postId="+postId+"&reactionId=4");


    reactionBtn.innerText = "";
    reactionBtn.innerText = "Wowを取り消す";
    expressions.style.display = "none"; //1//1
    i = 0;
    z = 1;
    flag = x + y + z + r;
    Rflag = x + y + z;
    Xflag = r + y + z;
    Yflag = x + r + z;
    Zflag = x + y + r;
    console.log("i="+i+"r="+r+"flag="+flag+"Rflag="+Rflag+"Xflag="+Xflag+"Yflag="+Yflag+"Zflag="+Zflag);

  }
});
};



async function recLoad (postId,sc1chgks123deCReZ,i,x,y,z,r,flag,Rflag,Xflag,Yflag,Zflag) {
  const rectionCheckRes=await fetch("RectionCheck?postId="+postId);
  console.log(rectionCheckRes);
  let exeflag=0;
  console.log("reactionFetch Ok");
  const rs= await rectionCheckRes.json();
  rs.forEach((rs)=>{
    const reaction=rs.reactionStatas;
    console.log(reaction);
if(reaction==1){
  const reactionsA=document.createElement("a");
reactionsA.href="#";
reactionsA.className="hover-me";
reactionsA.id="reactionBtn";
const reactionsI=document.createElement("i");
reactionsI.className="far fa-thumbs-up";
reactionsA.appendChild(reactionsI);
reactionsA.innerText="Likeを取り消す";
console.log("reactionsA-ok");
sc1chgks123deCReZ.appendChild(reactionsA);
console.log("reactionsA-appendChildok");


  i = 0;
  r = 1;
  flag = x + y + z + r;
  Rflag = x + y + z;
  Xflag = r + y + z;
  Yflag = x + r + z;
  Zflag = x + y + r;
  
  console.log("i="+i+"r="+r+"flag="+flag+"Rflag="+Rflag+"Xflag="+Xflag+"Yflag="+Yflag+"Zflag="+Zflag);
  exeflag=1;
  resLoadNext(i,x,y,z,r,flag,Rflag,Xflag,Yflag,Zflag,sc1chgks123deCReZ,postId);
}else if(reaction==2){

  const reactionsA=document.createElement("a");
reactionsA.href="#";
reactionsA.className="hover-me";
reactionsA.id="reactionBtn";
const reactionsI=document.createElement("i");
reactionsI.className="far fa-thumbs-up";
reactionsA.appendChild(reactionsI);
reactionsA.innerText="sadを取り消";
sc1chgks123deCReZ.appendChild(reactionsA);
    i = 0;
    y = 1;
    flag = x + y + z + r;
    Rflag = x + y + z;
    Xflag = r + y + z;
    Yflag = x + r + z;
    Zflag = x + y + r;
    console.log("i="+i+"r="+r+"flag="+flag+"Rflag="+Rflag+"Xflag="+Xflag+"Yflag="+Yflag+"Zflag="+Zflag);
  exeflag=1;

  resLoadNext(i,x,y,z,r,flag,Rflag,Xflag,Yflag,Zflag,sc1chgks123deCReZ,postId);

}else if(reaction==3){
  const reactionsA=document.createElement("a");
  reactionsA.href="#";
  reactionsA.className="hover-me";
  reactionsA.id="reactionBtn";
  const reactionsI=document.createElement("i");
  reactionsI.className="far fa-thumbs-up";
  reactionsA.appendChild(reactionsI);
  reactionsA.innerText="Hahahaを取り消す";
  sc1chgks123deCReZ.appendChild(reactionsA);

  i = 0;
  x = 1;
  flag = x + y + z + r;
  Rflag = x + y + z;
  Xflag = r + y + z;
  Yflag = x + r + z;
  Zflag = x + y + r;
  console.log("i="+i+"r="+r+"flag="+flag+"Rflag="+Rflag+"Xflag="+Xflag+"Yflag="+Yflag+"Zflag="+Zflag);
  exeflag=1;

  resLoadNext(i,x,y,z,r,flag,Rflag,Xflag,Yflag,Zflag,sc1chgks123deCReZ,postId);


}else if(reaction==4){
  const reactionsA=document.createElement("a");
  reactionsA.href="#";
  reactionsA.className="hover-me";
  reactionsA.id="reactionBtn";
  const reactionsI=document.createElement("i");
  reactionsI.className="far fa-thumbs-up";
  reactionsA.appendChild(reactionsI);
  reactionsA.innerText="Wowを取り消す";
  sc1chgks123deCReZ.appendChild(reactionsA);
  i = 0;
  z = 1;
  flag = x + y + z + r;
  Rflag = x + y + z;
  Xflag = r + y + z;
  Yflag = x + r + z;
  Zflag = x + y + r;
  exeflag=1;
  console.log("i="+i+"r="+r+"flag="+flag+"Rflag="+Rflag+"Xflag="+Xflag+"Yflag="+Yflag+"Zflag="+Zflag);
  resLoadNext(i,x,y,z,r,flag,Rflag,Xflag,Yflag,Zflag,sc1chgks123deCReZ,postId);

}
});

if (exeflag==0){
  const reactionsA=document.createElement("a");
  reactionsA.href="#";
  reactionsA.className="hover-me";
  reactionsA.id="reactionBtn";
  const reactionsI=document.createElement("i");
  reactionsI.className="far fa-thumbs-up";
  reactionsA.appendChild(reactionsI);
  reactionsA.innerText="reaction";
  sc1chgks123deCReZ.appendChild(reactionsA);
  console.log("i="+i+"r="+r+"flag="+flag+"Rflag="+Rflag+"Xflag="+Xflag+"Yflag="+Yflag+"Zflag="+Zflag);
  i = 0;
  z = 0;
  flag = x + y + z + r;
  Rflag = x + y + z;
  Xflag = r + y + z;
  Yflag = x + r + z;
  Zflag = x + y + r;
  resLoadNext(i,x,y,z,r,flag,Rflag,Xflag,Yflag,Zflag,sc1chgks123deCReZ,postId);


}

};


let firstScroll = function (posts) {};

window.addEventListener("load", async function () {
  // ページが読み込みされた段階でfetchする
  console.log("OK-2");
  const res1 = await fetch("FirstTimeLine");
  const posts = await res1.json();
  const res2 = await fetch("SerchCategory");
  const categorys = await res2.json();
  console.log("OK-3");
  recentlyDate = posts[0].postDate;
  // const realTime = new Date();
  //一番う上の投稿の日付を保存
  //   postsをjson形式で受け取っている

  // riactionの数を受け取り、上位3つのriactionの画像を表示+riaction総数を表示
  posts.forEach((post) => {
    const realTime = new Date();

    console.log("OK-4");
    const title = post.postTitle;
    const date = post.postDate;
    const postId = post.postId;
    postList.push(postId);
    lastDate = date;
    const d = new Date(date);
    const userName = post.userName;
    const content = post.postContent;
    const reactionX = post.reactionX;
    const reactionY = post.reactionY;
    const reactionZ = post.reactionZ;
    const reactionR = post.reactionR;
    let reactionX_rank = 0;
    let reactionY_rank = 0;
    let reactionZ_rank = 0;
    let reactionR_rank = 0;
    let array = [reactionX, reactionY, reactionZ, reactionR];
    const reactionCount = reactionX + reactionY + reactionZ + reactionR;

    //降順に並び変える
    array.sort(function (first, second) {
      return second - first;
    });
    // 数のランクを格納数が0の場合ランクを0にする
    reactionX_rank = reactionX == 0 ? 0 : array.indexOf(reactionX) + 1;
    reactionY_rank = reactionY == 0 ? 0 : array.indexOf(reactionY) + 1;
    reactionZ_rank = reactionZ == 0 ? 0 : array.indexOf(reactionZ) + 1;
    reactionR_rank = reactionR == 0 ? 0 : array.indexOf(reactionR) + 1;

    console.log(reactionX_rank, reactionY_rank, reactionZ_rank, reactionR_rank);


    const TimeLineMain = document.getElementById("TimeLineMain");
    const dataKey = document.createElement("div");
    dataKey.id = "post" + postId;
    TimeLineMain.appendChild(dataKey);

    const timeLineArticle = document.createElement("article");
    timeLineArticle.className = "tgn9uw-0 dRhFWg";
    timeLineArticle.role = "article";
    dataKey.appendChild(timeLineArticle);

    const tgn9uw1ItrBFL = document.createElement("div");
    tgn9uw1ItrBFL.className = "tgn9uw-1 itrBFL";
    timeLineArticle.appendChild(tgn9uw1ItrBFL);

    const euk31c0HdYiSW = document.createElement("div");
    euk31c0HdYiSW.className = "euk31c-0 hdYiSW";
    tgn9uw1ItrBFL.appendChild(euk31c0HdYiSW);

    const euk31c4EjYptt = document.createElement("div");
    euk31c4EjYptt.className = "euk31c-4 ejYptt";
    euk31c0HdYiSW.appendChild(euk31c4EjYptt);

    const yj50et0JKuksFEuk31c5InywTo = document.createElement("div");
    yj50et0JKuksFEuk31c5InywTo.className = "yj50et-1 elnXzl eisivb-2 jrKKZX";

    yj50et0JKuksFEuk31c5InywTo.size = "32";
    yj50et0JKuksFEuk31c5InywTo.role = "img";

    yj50et0JKuksFEuk31c5InywTo.innerText = escapeHtml(userName).slice(0, 1);
    euk31c4EjYptt.appendChild(yj50et0JKuksFEuk31c5InywTo);
    // アイコン画像
    // の意ほど追加

    // 投稿者
    const euk31c1KjzXMk = document.createElement("div");
    euk31c1KjzXMk.className = "euk31c-1 kjzXMk";
    euk31c0HdYiSW.appendChild(euk31c1KjzXMk);

    const euk31c2TWWmz = document.createElement("div");
    euk31c2TWWmz.className = "euk31c-2 TWWmz";
    euk31c1KjzXMk.appendChild(euk31c2TWWmz);

    const userNameTimeLine = document.createElement("div");
    userNameTimeLine.className = "euk31c-3 ebZiNx";
    // 投稿の名前
    userNameTimeLine.innerText = escapeHtml(userName);
    userNameTimeLine.id = "TimeLineUsserName" + postId;
    euk31c2TWWmz.appendChild(userNameTimeLine);

    const dateTimeLine = document.createElement("div");
    dateTimeLine.className = "euk31c-3 ebZiNx";
    // 投稿の時間
    dateTimeLine.id = "date" + postId;
    const year = d.getFullYear();
    const month = d.getMonth() + 1;
    const newDate = d.getDate();
    const hours = d.getHours();
    const min = d.getMinutes();
    const sec = d.getSeconds();
    const def = realTime.getTime() - d.getTime();
    console.log(d);
    if (def < 60000) {
      dateTimeLine.innerText = Math.floor(def / 1000) + "秒前";
    } else if (def < 3600000) {
      dateTimeLine.innerText = Math.floor(def / 60000) + "分前";
    } else if (def < 86400000) {
      dateTimeLine.innerText = Math.floor(def / 3600000)+ "時間前";
    } else {
      dateTimeLine.innerText = "投稿日:" + year + "/" + month + "/" + newDate;
    }
    euk31c2TWWmz.appendChild(dateTimeLine);

    const tgn9uw2BqeEAL = document.createElement("h2");
    tgn9uw2BqeEAL.className = "tgn9uw-2 bqeEAL";
    timeLineArticle.appendChild(tgn9uw2BqeEAL);

    const tgn9uw3BJQtxM = document.createElement("a");
    tgn9uw3BJQtxM.className = "tgn9uw-3 bJQtxM";
    // 投稿のリンクコメントを読みむリスナー
    // 投稿のリンクコメントを読みむリスナー
    // 投稿のリンクコメントを読みむリスナー
    tgn9uw3BJQtxM.href = "#";
    tgn9uw3BJQtxM.addEventListener("click", async function () {
      const portal = document.getElementById("__portal");

      document.getElementById("element").style =
        "padding-right: 16px; overflow: hidden;";
      const modaloverlay = document.createElement("div");
      modaloverlay.id = "overlay";
      modaloverlay.className = "sc-ct3fdn gNDOWz overlay-enter-done";
      modaloverlay.tabindex = "0";
      portal.appendChild(modaloverlay);

      const overlayBackdrop = document.createElement("div");
      overlayBackdrop.id = "overlay-backdrop";
      overlayBackdrop.className = "sc-1bckb9 idQkWe";

      modaloverlay.appendChild(overlayBackdrop);

      const pup2eh0EdtyEf = document.createElement("div");
      pup2eh0EdtyEf.className = "pup2eh-0 edtyEf";
      modaloverlay.appendChild(pup2eh0EdtyEf);

      const scQz0f8bDCgfWNSimplebarScrollableY = document.createElement("div");
      scQz0f8bDCgfWNSimplebarScrollableY.className =
        "sc-qz0f8b dCgfWN simplebar-scrollable-y";
      // scQz0f8bDCgfWNSimplebarScrollableY.setAttribute(data-simplebar,"init");
      pup2eh0EdtyEf.appendChild(scQz0f8bDCgfWNSimplebarScrollableY);

      const simplebarWrapper = document.createElement("div");
      simplebarWrapper.className = "simplebar-wrapper";
      simplebarWrapper.style = "margin: 0px";
      scQz0f8bDCgfWNSimplebarScrollableY.appendChild(simplebarWrapper);

      const simplebarHeightAutoObserverWrapper = document.createElement("div");
      simplebarHeightAutoObserverWrapper.className =
        "simplebar-height-auto-observer-wrapper";
      simplebarWrapper.appendChild(simplebarHeightAutoObserverWrapper);

      const simplebarHeightAutoObserver = document.createElement("div");
      simplebarHeightAutoObserver.className = "simplebar-height-auto-observer";
      simplebarHeightAutoObserverWrapper.appendChild(
        simplebarHeightAutoObserver
      );

      const simplebarMask = document.createElement("div");
      simplebarMask.className = "simplebar-mask";
      simplebarWrapper.appendChild(simplebarMask);

      const simplebarOffset = document.createElement("div");
      simplebarOffset.className = "simplebar-offset";
      simplebarOffset.style = "right: 0px; bottom: 0px";
      simplebarMask.appendChild(simplebarOffset);

      const simplebarContentWrapper = document.createElement("div");
      simplebarContentWrapper.className = "simplebar-content-wrapper";
      simplebarContentWrapper.style = "height: 100%; overflow: hidden scroll";
      simplebarOffset.appendChild(simplebarContentWrapper);

      const simplebarContent = document.createElement("div");
      simplebarContent.className = "simplebar-content";
      simplebarContent.style = "padding: 0px";
      simplebarContentWrapper.appendChild(simplebarContent);

      const sc1wisey80DRDKvl = document.createElement("div");
      sc1wisey80DRDKvl.className = "sc-1wisey8-0 dRDKvl";
      simplebarContent.appendChild(sc1wisey80DRDKvl);

      const sc1bx44oc0FIEEMl = document.createElement("div");
      sc1bx44oc0FIEEMl.className = "sc-1bx44oc-0 fIEEMl";
      sc1wisey80DRDKvl.appendChild(sc1bx44oc0FIEEMl);

      const sc2yjare0XrlpA = document.createElement("div");
      sc2yjare0XrlpA.className = "sc-2yjare-0 xrlpA";
      sc1bx44oc0FIEEMl.appendChild(sc2yjare0XrlpA);

      const sc2yjare3ECSGMJ = document.createElement("div");
      sc2yjare3ECSGMJ.className = "sc-2yjare-3 eCSGMJ";
      sc1bx44oc0FIEEMl.appendChild(sc2yjare3ECSGMJ);

      const auv9sk0DkklUr = document.createElement("div");
      auv9sk0DkklUr.className = "auv9sk-0 dkklUr";
      sc1bx44oc0FIEEMl.appendChild(auv9sk0DkklUr);

      const sc1oj78p70GjnISi = document.createElement("div");
      sc1oj78p70GjnISi.className = "sc-1oj78p7-0 gjnISi";
      auv9sk0DkklUr.appendChild(sc1oj78p70GjnISi);

      const sc1oj78p71JtFfzg = document.createElement("div");
      sc1oj78p71JtFfzg.className = "sc-1oj78p7-1 jtFfzg";
      sc1oj78p70GjnISi.appendChild(sc1oj78p71JtFfzg);

      const rt56oo1FQaFWY = document.createElement("div");
      rt56oo1FQaFWY.className = "rt56oo-1 fQaFWY";
      sc1oj78p71JtFfzg.appendChild(rt56oo1FQaFWY);

      const sc1x2m678DJCRke = document.createElement("div");
      sc1x2m678DJCRke.className = "sc-1x2m678 dJCRke";
      rt56oo1FQaFWY.appendChild(sc1x2m678DJCRke);

      const rt56oo0KNCquy = document.createElement("div");
      rt56oo0KNCquy.className = "rt56oo-0 kNCquy";
      sc1x2m678DJCRke.appendChild(rt56oo0KNCquy);

      const xrkql23EWfhXC = document.createElement("a");
      xrkql23EWfhXC.className = "xrkql2-3 eWfhXC";
      xrkql23EWfhXC.href = "/@dcardsurveygirl";
      rt56oo0KNCquy.appendChild(xrkql23EWfhXC);

      const eisivb0GSzasn = document.createElement("div");
      eisivb0GSzasn.className = "eisivb-0 gSzasn";
      xrkql23EWfhXC.appendChild(eisivb0GSzasn);

      const eisivb1FCTtDp = document.createElement("div");
      eisivb1FCTtDp.className = "eisivb-1 fCTtDp";
      eisivb0GSzasn.appendChild(eisivb1FCTtDp);

      const yj50et0JKuksFEisivb2JrKKZX = document.createElement("div");
      yj50et0JKuksFEisivb2JrKKZX.className = "yj50et-0 jKuksF eisivb-2 jrKKZX";
      eisivb1FCTtDp.appendChild(yj50et0JKuksFEisivb2JrKKZX);

      const yj50et1ElnXzlEisivb2JrKKZX = document.createElement("div");
      yj50et1ElnXzlEisivb2JrKKZX.className = "yj50et-1 elnXzl eisivb-2 jrKKZX";
      yj50et1ElnXzlEisivb2JrKKZX.size = "32";
      yj50et1ElnXzlEisivb2JrKKZX.role = "img";
      // yj50et1ElnXzlEisivb2JrKKZX.setAttribute(aria-label,"dcardsurveygirl");
      yj50et1ElnXzlEisivb2JrKKZX.innerText = escapeHtml(userName).slice(0, 1);
      // 先頭文字をアイコン化
      yj50et0JKuksFEisivb2JrKKZX.appendChild(yj50et1ElnXzlEisivb2JrKKZX);

      const eisivb3JWnTRG = document.createElement("div");
      eisivb3JWnTRG.className = "eisivb-3 jWnTRG";
      eisivb0GSzasn.appendChild(eisivb3JWnTRG);

      const eisivb4EcJeYq = document.createElement("div");
      eisivb4EcJeYq.className = "eisivb-4 ecJeYq";
      eisivb3JWnTRG.appendChild(eisivb4EcJeYq);

      const modalUserName = document.createElement("div");
      modalUserName.className = "xrkql2-0 eQtTCJ";
      modalUserName.id = "modalUserName";
      modalUserName.innerText = "投稿者:" + escapeHtml(userName);
      eisivb4EcJeYq.appendChild(modalUserName);

      const modalClose = document.createElement("button");
      modalClose.type = "button";
      modalClose.innerText = "×";
      modalClose.href="http://localhost:8080/t_room/timeLine.html";
      modalClose.addEventListener("click", function () {
        document.getElementById("element").style = "";
        const overlay = document.getElementById("overlay");
        overlay.remove();
      });

      modalClose.className = "sc-1oj78p7-2 exWEIU";

      sc1oj78p70GjnISi.appendChild(modalClose);

      tgn9uw2BqeEAL.appendChild(tgn9uw3BJQtxM);

      const sc1eorkjw0BtVgIMArticle = document.createElement("article");
      sc1eorkjw0BtVgIMArticle.className = "sc-1eorkjw-0 btVgIM";
      sc1bx44oc0FIEEMl.appendChild(sc1eorkjw0BtVgIMArticle);

      const modlTitle = document.createElement("div");
      modlTitle.className = "sc-1eorkjw-1 ccTaOU";
      sc1eorkjw0BtVgIMArticle.appendChild(modlTitle);

      const sc1eorkjw2BKTUZH = document.createElement("div");
      sc1eorkjw2BKTUZH.className = "sc-1eorkjw-2 bKTUZH";
      modlTitle.appendChild(sc1eorkjw2BKTUZH);

      const sc1932jlp0FdtUau = document.createElement("h1");
      sc1932jlp0FdtUau.className = "sc-1932jlp-0 fdtUau";
      sc1932jlp0FdtUau.innerText = escapeHtml(title);
      sc1eorkjw2BKTUZH.appendChild(sc1932jlp0FdtUau);

      const sc1eorkjw3JJbLey = document.createElement("div");
      sc1eorkjw3JJbLey.className = "sc-1eorkjw-3 jJbLey";
      sc1eorkjw0BtVgIMArticle.appendChild(sc1eorkjw3JJbLey);

      const sc1eorkjw4IDjmxJ = document.createElement("div");
      sc1eorkjw4IDjmxJ.className = "sc-1eorkjw-4 iDjmxJ";
      sc1eorkjw3JJbLey.appendChild(sc1eorkjw4IDjmxJ);

      const modalCategory = document.createElement("a");
      modalCategory.innerText = "カテゴリー:"+post.postCategory;
      sc1eorkjw4IDjmxJ.appendChild(modalCategory);

      const sc1eorkjw4IDjmxJ1 = document.createElement("div");
      sc1eorkjw4IDjmxJ1.className = "sc-1eorkjw-4 iDjmxJ";
      sc1eorkjw4IDjmxJ1.id = "innerDate" + postId;
      sc1eorkjw4IDjmxJ1.innerText=document.getElementById("date"+postId).innerText;

// <<<<<<< HEAD
      // if (def < 60000) {
      //   sc1eorkjw4IDjmxJ1.innerText =
      //    Math.floor(def / 1000) + "秒前";
      // } else if (def < 3600000) {
      //   sc1eorkjw4IDjmxJ1.innerText =
      //     Math.floor(def / 60000) + "分前"+"2"; console.log(Math.floor(def / 60000));
      // } else if (def < 86400000) {
      //   sc1eorkjw4IDjmxJ1.innerText =
      //     Math.floor(def / 3600000) + "時間前";
      // } else {
      //   sc1eorkjw4IDjmxJ1.innerText =
      //     "投稿日:" + year + "/" + month + "/" + newDate;
      // }
// =======
      if (def < 60000) {
        sc1eorkjw4IDjmxJ1.innerText =
         Math.floor(def / 1000) + "秒前";
      } else if (def < 3600000) {
        sc1eorkjw4IDjmxJ1.innerText =
          Math.floor(def / 60000) + "分前"; console.log(Math.floor(def / 60000));
      } else if (def < 86400000) {
        sc1eorkjw4IDjmxJ1.innerText =
          Math.floor(def / 3600000) + "時間前";
      } else {
        sc1eorkjw4IDjmxJ1.innerText =
          "投稿日:" + year + "/" + month + "/" + newDate;
      }
// >>>>>>> 513f37cc19d41f292d7c257df21fc0a506ee08b7
      sc1eorkjw3JJbLey.appendChild(sc1eorkjw4IDjmxJ1);

      const sc1eorkjw5HKSyLQ = document.createElement("div");
      sc1eorkjw5HKSyLQ.className = "sc-1eorkjw-5 hKSyLQ";
      sc1eorkjw0BtVgIMArticle.appendChild(sc1eorkjw5HKSyLQ);

      const sc1npvbtq0GjzOFC = document.createElement("div");
      sc1npvbtq0GjzOFC.className = "sc-1npvbtq-0 gjzOFC";
      sc1eorkjw5HKSyLQ.appendChild(sc1npvbtq0GjzOFC);

      const phqjxq0IJJmxb = document.createElement("div");
      phqjxq0IJJmxb.className = "phqjxq-0 iJJmxb";
      sc1npvbtq0GjzOFC.appendChild(phqjxq0IJJmxb);

      const modalContent = document.createElement("span");
      modalContent.className = "phqjxq-0 iJJmxb";
      if(content==null){   phqjxq0IJJmxb.innerText ="" ;}
        else{phqjxq0IJJmxb.innerText =escapeHtml(content);}
      phqjxq0IJJmxb.appendChild(modalContent);

      const modalContentblank = document.createElement("span");
      phqjxq0IJJmxb.appendChild(modalContentblank);

      // ---------------------------------------
      // <!-- ------------------------------ -->

      sc1bx44oc0FIEEMl.appendChild(document.createElement("div"));

      const reations = document.createElement("div");
      reations.id = "reations";
      sc1bx44oc0FIEEMl.appendChild(reations);

      const fiw2dr0GmWbuW = document.createElement("div");
      fiw2dr0GmWbuW.className = "fiw2dr-0 gmWbuW";
      reations.appendChild(fiw2dr0GmWbuW);

      const fiw2dr1EVsNoo = document.createElement("div");
      fiw2dr1EVsNoo.className = "fiw2dr-1 eVsNoo";
      fiw2dr0GmWbuW.appendChild(fiw2dr1EVsNoo);

      const fiw2dr2EuXXTa = document.createElement("div");
      fiw2dr2EuXXTa.className = "fiw2dr-2 euXXTa";
      fiw2dr1EVsNoo.appendChild(fiw2dr2EuXXTa);

      const fiw2dr4GQIutf = document.createElement("div");
      fiw2dr4GQIutf.className = "fiw2dr-4 gQIutf";
      fiw2dr2EuXXTa.appendChild(fiw2dr4GQIutf);

      const cgoejl0EMdDUDXv9ecr0GbGfpOFiw2dr5JNIkLW =
        document.createElement("div");
      cgoejl0EMdDUDXv9ecr0GbGfpOFiw2dr5JNIkLW.className =
        "cgoejl-0 eMdDUD xv9ecr-0 gbGfpO fiw2dr-5 jNIkLW";
        cgoejl0EMdDUDXv9ecr0GbGfpOFiw2dr5JNIkLW.id=postId+"modalImg"+postId;
      fiw2dr4GQIutf.appendChild(cgoejl0EMdDUDXv9ecr0GbGfpOFiw2dr5JNIkLW);

      // riaction画像の表示
      if (1 <= reactionX_rank && reactionX_rank <= 3) {
        const img_elementX = document.createElement("img");
        img_elementX.src = "img/1.jpg"; // 画像パス
        img_elementX.alt = "riaction"; // 代替テキスト
        img_elementX.width = 20; // 横サイズ（px）
        img_elementX.height = 20; // 縦サイズ（px）
        img_elementX.id = "img_elementX" + postId;
        img_elementX.style = "z-index: 4";
        img_elementX.className = "cgoejl-1 eUYbaa";
        cgoejl0EMdDUDXv9ecr0GbGfpOFiw2dr5JNIkLW.appendChild(img_elementX); //画像追加
      }
      if (1 <= reactionY_rank && reactionY_rank <= 3) {
        const img_elementY = document.createElement("img");
        img_elementY.src = "img/2.jpg"; // 画像パス
        img_elementY.alt = "riaction"; // 代替テキスト
        img_elementY.width = 20; // 横サイズ（px）
        img_elementY.height = 20; // 縦サイズ（px）
        img_elementY.id = "Modalimg_elementY" + postId;
        img_elementY.style = "z-index: 3";
        img_elementY.className = "cgoejl-1 eUYbaa";
        cgoejl0EMdDUDXv9ecr0GbGfpOFiw2dr5JNIkLW.appendChild(img_elementY); //画像追加
      }
      if (1 <= reactionZ_rank && reactionZ_rank <= 3) {
        const img_elementZ = document.createElement("img");
        img_elementZ.src = "img/3.jpg"; // 画像パス
        img_elementZ.alt = "riaction"; // 代替テキスト
        img_elementZ.width = 20; // 横サイズ（px）
        img_elementZ.height = 20; // 縦サイズ（px）
        img_elementZ.id = "Modalimg_elementZ" + postId;
        img_elementZ.style = "z-index: 2";
        img_elementZ.className = "cgoejl-1 eUYbaa";
        cgoejl0EMdDUDXv9ecr0GbGfpOFiw2dr5JNIkLW.appendChild(img_elementZ); //画像追加
      }
      if (1 <= reactionR_rank && reactionR_rank <= 3) {
        const img_elementR = document.createElement("img");
        img_elementR.src = "img/4.jpg"; // 画像パス
        img_elementR.alt = "riaction"; // 代替テキスト
        img_elementR.width = 20; // 横サイズ（px）
        img_elementR.height = 20; // 縦サイズ（px）
        img_elementR.id = "Modalimg_elementR" + postId;
        img_elementR.style = "z-index: 1";
        img_elementR.className = "cgoejl-1 eUYbaa";
        cgoejl0EMdDUDXv9ecr0GbGfpOFiw2dr5JNIkLW.appendChild(img_elementR); //画像追加
      }

      // リアクション数

      if (0 < reactionCount) {
        const cgoejl3IVJAZc = document.createElement("div");
        cgoejl3IVJAZc.innerText = reactionCount;
        cgoejl3IVJAZc.className = "cgoejl-3 iVJAZc";
        cgoejl3IVJAZc.id = "modalReactionCount" + postId;
        cgoejl0EMdDUDXv9ecr0GbGfpOFiw2dr5JNIkLW.appendChild(cgoejl3IVJAZc); //riactionの総数を表示
      }
      //   リアクション関連終わり
      // -------------------------------------
      const fiw2dr3EQtIoK = document.createElement("div");
      fiw2dr3EQtIoK.className = "fiw2dr-3 eQtIoK";
      fiw2dr1EVsNoo.appendChild(fiw2dr3EQtIoK);

      const sc1sxph3j0HRgZpf = document.createElement("div");
      sc1sxph3j0HRgZpf.className = "sc-1sxph3j-0 hRgZpf";
      fiw2dr3EQtIoK.appendChild(sc1sxph3j0HRgZpf);

      const sc1chgks10GYkhli = document.createElement("div");
      sc1chgks10GYkhli.className = "sc-1chgks1-0 gYkhli";
      sc1sxph3j0HRgZpf.appendChild(sc1chgks10GYkhli);

      const sc1chgks11LknWx = document.createElement("canvas");
      sc1chgks11LknWx.className = "sc-1chgks1-1 LknWx";
      sc1chgks11LknWx.width = "108";
      sc1chgks11LknWx.height = "108";
      sc1chgks10GYkhli.appendChild(sc1chgks11LknWx);

      const sc1chgks11LknWx1 = document.createElement("canvas");
      sc1chgks11LknWx1.className = "sc-1chgks1-1 LknWx";
      sc1chgks11LknWx1.width = "108";
      sc1chgks11LknWx1.height = "108";
      sc1chgks10GYkhli.appendChild(sc1chgks11LknWx1);

      const sc1chgks123deCReZ = document.createElement("div");
      sc1chgks123deCReZ.className = "sc-1chgks1-2 dECReZ";
      sc1chgks10GYkhli.appendChild(sc1chgks123deCReZ);
      // <!-- 以下riaction実装 -->

    // <!-- 以下riaction実装 -->


    


// modalの中のリアクション表示ボタン
let x = 0,
  y = 0,
  z = 0,
  r = 0;
let flag = x + y + z + r;
let Rflag = x + y + z; //選択中かどうか
let Xflag = r + y + z; //選択中かどうか
let Yflag = x + r + z; //選択中かどうか
let Zflag = x + y + r; //選択中かどうか


// 最初にすでに読み込んでいるかどうか




 


recLoad(postId,sc1chgks123deCReZ,i,x,y,z,r,flag,Rflag,Xflag,Yflag,Zflag);







      // ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー

      // reactionボタン実装

      const commentWakaugumi = document.createElement("div");
      commentWakaugumi.id = "commentWakaugumi";
      sc1bx44oc0FIEEMl.appendChild(commentWakaugumi);

      const fub27c0fbJmE = document.createElement("div");
      fub27c0fbJmE.className = "fub27c-0 fDbJmE";
      commentWakaugumi.appendChild(fub27c0fbJmE);

      const fub27c1bXMPVq = document.createElement("div");
      fub27c1bXMPVq.className = "fub27c-1 bXMPVq";
      fub27c0fbJmE.appendChild(fub27c1bXMPVq);

      const fub27c2gjDRWf = document.createElement("div");
      fub27c2gjDRWf.className = "fub27c-2 gjDRWf";
      fub27c2gjDRWf.innerText = "";
      fub27c1bXMPVq.appendChild(fub27c2gjDRWf);

      const sc1bx44oc3gtyQXa = document.createElement("div");
      sc1bx44oc3gtyQXa.className = "sc-1bx44oc-3 gtyQXa";
      sc1bx44oc0FIEEMl.appendChild(sc1bx44oc3gtyQXa);

      const zw1zyy0EDxBzm = document.createElement("div");
      zw1zyy0EDxBzm.className = "zw1zyy-0 eDxBzM";
      sc1bx44oc3gtyQXa.appendChild(zw1zyy0EDxBzm);

      const zw1zyy0EDxBzmElement = document.createElement("div");
      zw1zyy0EDxBzmElement.id = "zw1zyy0EDxBzmElement";
      zw1zyy0EDxBzm.appendChild(zw1zyy0EDxBzmElement);

 
      // cu81fo0DPWSiZ.appendChild(commentBtn);

      // const cu81fo2jTfkun = document.createElement("div");
      // cu81fo2jTfkun.className = "cu81fo-2 jTfkun";
      // cu81fo0DPWSiZ.appendChild(cu81fo2jTfkun);

      const sc1sxph3j0HRgZpf1 = document.createElement("div");
      sc1sxph3j0HRgZpf1.className = "sc-1sxph3j-0 hRgZpf";
      // cu81fo2jTfkun.appendChild(sc1sxph3j0HRgZpf1);

      const sc1chgks10GYwkhli = document.createElement("div");
      sc1chgks10GYwkhli.className = "sc-1chgks1-0 gYkhli";
      sc1sxph3j0HRgZpf.appendChild(sc1chgks10GYwkhli);

      const canvas101 = document.createElement("canvas");
      canvas101.className = "sc-1chgks1-1 LknWx";
      canvas101.width = 108;
      canvas101.height = 108;
      sc1chgks10GYwkhli.appendChild(canvas101);

      const canvas102 = document.createElement("canvas");
      canvas102.className = "sc-1chgks1-1 LknWx";
      canvas101.width = 108;
      canvas101.height = 108;
      sc1chgks10GYwkhli.appendChild(canvas102);


    });
    tgn9uw2BqeEAL.appendChild(tgn9uw3BJQtxM);

    const timelineTitle = document.createElement("span");
    timelineTitle.class = "title";
    timelineTitle.innerText = escapeHtml(title);
    console.log(title, escapeHtml(title));
    tgn9uw3BJQtxM.appendChild(timelineTitle);

    const uj732l0FiyggF = document.createElement("div");
    uj732l0FiyggF.className = "uj732l-0 fiyggF";
    timeLineArticle.appendChild(uj732l0FiyggF);

    const tgn9uw4PmuXC = document.createElement("div");
    tgn9uw4PmuXC.className = "tgn9uw-4 pmuXC";
    uj732l0FiyggF.appendChild(tgn9uw4PmuXC);

    const timelineContent = document.createElement("span");
    timelineContent.className = "content";
// <<<<<<< HEAD
//     if(content==null){timelineContent.innerText ="";}else{ timelineContent.innerText = escapeHtml(content);}
   
// =======
    if(content!=null){timelineContent.innerText = escapeHtml(content);}else{timelineContent.innerText = "";}
// >>>>>>> 513f37cc19d41f292d7c257df21fc0a506ee08b7
    tgn9uw4PmuXC.appendChild(timelineContent);

 // --------------------

 const uj732l1Ixtzgq = document.createElement("div");
 uj732l1Ixtzgq.className = "uj732l-1 ixtzgq";
 timeLineArticle.appendChild(uj732l1Ixtzgq);

 // リアクション関連
 const uj732l2JWxgsr = document.createElement("div");
 uj732l2JWxgsr.className = "uj732l-2 jWxgsr";
 uj732l1Ixtzgq.appendChild(uj732l2JWxgsr);
 const cgoejl0EMdDUD = document.createElement("div");
 cgoejl0EMdDUD.className = "cgoejl-0 eMdDUD";
 cgoejl0EMdDUD.id="reactions"+postId; 
 uj732l2JWxgsr.appendChild(cgoejl0EMdDUD);

 // リアクション画像

 const cgoejl2CeqRpS = document.createElement("div");
 cgoejl2CeqRpS.className = "cgoejl-2 ceqRpS";
 cgoejl2CeqRpS.id = "reactionsImg" + postId;
 cgoejl0EMdDUD.appendChild(cgoejl2CeqRpS);

 if (1 <= reactionX_rank && reactionX_rank <= 3) {
   const img_elementX = document.createElement("img");
   img_elementX.src = "img/1.jpg"; // 画像パス
   img_elementX.alt = "riaction"; // 代替テキスト
   img_elementX.width = 20; // 横サイズ（px）
   img_elementX.height = 20; // 縦サイズ（px）
   img_elementX.id = "img_elementX" + postId;
   img_elementX.style = "z-index: 4";
   img_elementX.className = "cgoejl-1 eUYbaa";
   cgoejl2CeqRpS.appendChild(img_elementX); //画像追加
 }
 if (1 <= reactionY_rank && reactionY_rank <= 3) {
   const img_elementY = document.createElement("img");
   img_elementY.src = "img/2.jpg"; // 画像パス
   img_elementY.alt = "riaction"; // 代替テキスト
   img_elementY.width = 20; // 横サイズ（px）
   img_elementY.height = 20; // 縦サイズ（px）
   img_elementY.id = "img_elementY" + postId;
   img_elementY.style = "z-index: 3";
   img_elementY.className = "cgoejl-1 eUYbaa";
   cgoejl2CeqRpS.appendChild(img_elementY); //画像追加
 }
 if (1 <= reactionZ_rank && reactionZ_rank <= 3) {
   const img_elementZ = document.createElement("img");
   img_elementZ.src = "img/3.jpg"; // 画像パス
   img_elementZ.alt = "riaction"; // 代替テキスト
   img_elementZ.width = 20; // 横サイズ（px）
   img_elementZ.height = 20; // 縦サイズ（px）
   img_elementZ.id = "img_elementZ" + postId;
   img_elementZ.style = "z-index: 2";
   img_elementZ.className = "cgoejl-1 eUYbaa";
   cgoejl2CeqRpS.appendChild(img_elementZ); //画像追加
 }
 if (1 <= reactionR_rank && reactionR_rank <= 3) {
   const img_elementR = document.createElement("img");
   img_elementR.src = "img/4.jpg"; // 画像パス
   img_elementR.alt = "riaction"; // 代替テキスト
   img_elementR.width = 20; // 横サイズ（px）
   img_elementR.height = 20; // 縦サイズ（px）
   img_elementR.id = "img_elementR" + postId;
   img_elementR.style = "z-index: 1";
   img_elementR.className = "cgoejl-1 eUYbaa";
   cgoejl2CeqRpS.appendChild(img_elementR); //画像追加
 }

 // リアクション数

 if (0 < reactionCount) {
   const cgoejl3IVJAZc = document.createElement("div");
   cgoejl3IVJAZc.innerText = reactionCount;
   cgoejl3IVJAZc.className = "cgoejl-3 iVJAZc";
   cgoejl3IVJAZc.id = "reactionCount" + postId;
   cgoejl0EMdDUD.appendChild(cgoejl3IVJAZc); //riactionの総数を表示
 }


  });

  console.log(postList);
});

setInterval("autoUpdate()", 5000);


async function autoUpdate() {
  const realTime = new Date();
  const res1 = await fetch(
    "Interval?recentlyPostId=" +
      postList[0] +
      "&lastPostId=" +
      postList[postList.length - 1]
  );
  const posts = await res1.json();
  posts.forEach((post) => {
    const date1 = post.postDate;
    const d = new Date(date1);
    const postId=post.postId;

    const dateElement = document.getElementById("date"+postId);
    // const innerDateElement = document.getElementById("innerDate" + postId);



    const reactionX = post.reactionX;
    const reactionY = post.reactionY;
    const reactionZ = post.reactionZ;
    const reactionR = post.reactionR;
    let reactionX_rank = 0;
    let reactionY_rank = 0;
    let reactionZ_rank = 0;
    let reactionR_rank = 0;
    let array = [reactionX, reactionY, reactionZ, reactionR];
    const reactionCount = reactionX + reactionY + reactionZ + reactionR;

    //降順に並び変える
    array.sort(function (first, second) {
      return second - first;
    });
    // 数のランクを格納数が0の場合ランクを0にする
    reactionX_rank = reactionX == 0 ? 0 : array.indexOf(reactionX) + 1;
    reactionY_rank = reactionY == 0 ? 0 : array.indexOf(reactionY) + 1;
    reactionZ_rank = reactionZ == 0 ? 0 : array.indexOf(reactionZ) + 1;
    reactionR_rank = reactionR == 0 ? 0 : array.indexOf(reactionR) + 1;

    console.log(reactionX_rank, reactionY_rank, reactionZ_rank, reactionR_rank);

    // riaction数の要素がすでにあり数が1以上の場合値を更新するだけ
    if (
      document.getElementById("reactionCount" + postId) != null &&
      reactionCount > 0
    ) {
      document.getElementById("reactionCount" + postId).innerText =
        reactionCount;
    } else if (
      document.getElementById("reactionCount" + postId) == null &&
      reactionCount > 0
    ) {
      // riaction数の要素がなくて数が1以上の場合値を新たに要素を作る
      const reactionNumberDiv = document.createElement("div");
      reactionNumberDiv.innerText = reactionCount;
      reactionNumberDiv.id = "reactionCount" + postId;
      document
        .getElementById("reactions" + postId)
        .appendChild(reactionNumberDiv); //riactionの総数を表示
    } else if (
      document.getElementById("reactions" + postId) != null &&
      reactionCount == 0
    ) {
      // riaction数の要素があって数が0の場合要素を削除する
      document.getElementById("reactionCount" + postId).innerText="";

    } else {
    }

    imgElement = document.getElementById("reactionsImg" + postId);
    imgElementX = document.getElementById("img_elementX" + postId);
    imgElementY = document.getElementById("img_elementY" + postId);
    imgElementZ = document.getElementById("img_elementZ" + postId);
    imgElementR = document.getElementById("img_elementR" + postId);

       // ランク外で要素がある場合要素を削除する----------------

    if (reactionX_rank==0 || reactionX_rank ==4) {
      const imgElement=document.getElementById("img_elementX" + postId) ;

      if (imgElement != null) {
        imgElement.remove();
      }
    }

    if (reactionY_rank==0 || reactionY_rank ==4) {
      const imgElement=document.getElementById("img_elementY" + postId) ;

      if (imgElement != null) {
        imgElement.remove();
      }
    }

    if (reactionZ_rank==0 || reactionZ_rank ==4) {
      const imgElement=document.getElementById("img_elementZ" + postId) ;

      if (imgElement != null) {
        imgElement.remove();
      }
    }

    if (reactionR_rank==0 || reactionR_rank ==4) {
      const imgElement=document.getElementById("img_elementR" + postId) ;

      if (imgElement != null) {
        imgElement.remove();
      }
    }

    if (1 <= reactionX_rank && reactionX_rank <= 3) {
      // ランク中なのにまだ要素がなかったら新たに作る
      if (imgElementX == null) {
        const img_elementX = document.createElement("img");
        img_elementX.src = "img/1.jpg"; // 画像パス
        img_elementX.alt = "riaction"; // 代替テキスト
        img_elementX.width = 20; // 横サイズ（px）
        img_elementX.height = 20; // 縦サイズ（px）
        img_elementX.id = "img_elementX" + postId;
        document.getElementById("reactionsImg"+postId).appendChild(img_elementX); //画像追加
      }
    }

    if (1 <= reactionY_rank && reactionY_rank <= 3) {
      // ランク中なのにまだ要素がなかったら新たに作る
      if (imgElementY == null) {
        const img_elementY = document.createElement("img");
        img_elementY.src = "img/2.jpg"; // 画像パス
        img_elementY.alt = "riaction"; // 代替テキスト
        img_elementY.width = 20; // 横サイズ（px）
        img_elementY.height = 20; // 縦サイズ（px）
        img_elementY.id = "img_elementY" + postId;
        document.getElementById("reactionsImg"+postId).appendChild(img_elementY); //画像追加
      }
    }

    if (1 <= reactionZ_rank && reactionZ_rank <= 3) {
      // ランク中なのにまだ要素がなかったら新たに作る
      if (imgElementZ == null) {
        const img_elementZ = document.createElement("img");
        img_elementZ.src = "img/3.jpg"; // 画像パス
        img_elementZ.alt = "riaction"; // 代替テキスト
        img_elementZ.width = 20; // 横サイズ（px）
        img_elementZ.height = 20; // 縦サイズ（px）
        img_elementZ.id = "img_elementZ" + postId;
        document.getElementById("reactionsImg"+postId).appendChild(img_elementZ); //画像追加
      }
    }

    if (1 <= reactionR_rank && reactionR_rank <= 3) {
      // ランク中なのにまだ要素がなかったら新たに作る
      if (imgElementR == null) {
        const img_elementR = document.createElement("img");
        img_elementR.src = "img/4.jpg"; // 画像パス
        img_elementR.alt = "riaction"; // 代替テキスト
        img_elementR.width = 20; // 横サイズ（px）
        img_elementR.height = 20; // 縦サイズ（px）
        img_elementR.id = "img_elementR" + postId;
        document.getElementById("reactionsImg"+postId).appendChild(img_elementR); //画像追加
      }
    }

    const year = d.getFullYear();
    const month = d.getMonth() + 1;
    const newDate = d.getDate();
    const hours = d.getHours();
    const min = d.getMinutes();
    const sec = d.getSeconds();
    const def = realTime.getTime() - d.getTime();
    if (def < 60000) {
      dateElement.innerText = Math.floor(def / 1000) + "秒前";
      // innerDateElement.innerText = Math.floor(def / 1000) + "秒前";
    } else if (def < 3600000) {
      dateElement.innerText = Math.floor(def / 60000) + "分前";
      // innerDateElement.innerText = Math.floor(def / 60000) + "分前";
    } else if (def < 86400000) {
      console.log(def);
      console.log(Math.floor(def / 3600000) );
      console.log(dateElement);
      dateElement.innerText = Math.floor(def / 3600000) + "時間前";
      console.log(Math.floor(def / 3600000) );
      
      // innerDateElement.innerText = Math.floor(def / 3600000) + "時間前";
    } else {
      dateElement.innerText = "投稿日:" + year + "/" + month + "/" + newDate;
      // innerDateElement.innerText =
      //   "投稿日:" + year + "/" + month + "/" + newDate;
    }
  });
}




window.addEventListener("scroll", async function () {
  const bodyHeight = document.body.clientHeight;
  const windowHeght = window.innerHeight;
  const bottomPoint = bodyHeight - windowHeght;
  const currentPos = window.pageYOffset;
  console.log("pageYOffset:" + window.pageYOffset);
  const realTime = new Date();

  // 下までスクロールした時に読む込む
  if (bottomPoint <= currentPos) {
    console.log("OK-3bottom1");
    const reversUrl = "SearchRevers";
    console.log(lastDate);
    const res = await fetch(reversUrl + "?lastDate=" + lastDate);
    console.log(res);
    const posts = await res.json();
    console.log(posts);

    console.log("OK-5bottom");
    //   postsをjson形式で受け取っている
    const realTime = new Date();
    posts.forEach((post) => {
      const realTime = new Date();

      console.log("OK-4");
      const title = post.postTitle;
      const date = post.postDate;
      const postId = post.postId;
      postList.push(postId);
      lastDate = date;
      const d = new Date(date);
      const userName = post.userName;
      const content = post.postContent;
      const reactionX = post.reactionX;
      const reactionY = post.reactionY;
      const reactionZ = post.reactionZ;
      const reactionR = post.reactionR;
      let reactionX_rank = 0;
      let reactionY_rank = 0;
      let reactionZ_rank = 0;
      let reactionR_rank = 0;
      let array = [reactionX, reactionY, reactionZ, reactionR];
      const reactionCount = reactionX + reactionY + reactionZ + reactionR;
  
      //降順に並び変える
      array.sort(function (first, second) {
        return second - first;
      });
      // 数のランクを格納数が0の場合ランクを0にする
      reactionX_rank = reactionX == 0 ? 0 : array.indexOf(reactionX) + 1;
      reactionY_rank = reactionY == 0 ? 0 : array.indexOf(reactionY) + 1;
      reactionZ_rank = reactionZ == 0 ? 0 : array.indexOf(reactionZ) + 1;
      reactionR_rank = reactionR == 0 ? 0 : array.indexOf(reactionR) + 1;
  
      console.log(reactionX_rank, reactionY_rank, reactionZ_rank, reactionR_rank);


      const TimeLineMain = document.getElementById("TimeLineMain");
      const dataKey = document.createElement("div");
      dataKey.id = "post" + postId;
      TimeLineMain.appendChild(dataKey);

      const timeLineArticle = document.createElement("article");
      timeLineArticle.className = "tgn9uw-0 dRhFWg";
      timeLineArticle.role = "article";
      dataKey.appendChild(timeLineArticle);

      const tgn9uw1ItrBFL = document.createElement("div");
      tgn9uw1ItrBFL.className = "tgn9uw-1 itrBFL";
      timeLineArticle.appendChild(tgn9uw1ItrBFL);

      const euk31c0HdYiSW = document.createElement("div");
      euk31c0HdYiSW.className = "euk31c-0 hdYiSW";
      tgn9uw1ItrBFL.appendChild(euk31c0HdYiSW);

      const euk31c4EjYptt = document.createElement("div");
      euk31c4EjYptt.className = "euk31c-4 ejYptt";
      euk31c0HdYiSW.appendChild(euk31c4EjYptt);

      const yj50et0JKuksFEuk31c5InywTo = document.createElement("div");
      yj50et0JKuksFEuk31c5InywTo.className = "yj50et-1 elnXzl eisivb-2 jrKKZX";

      yj50et0JKuksFEuk31c5InywTo.size = "32";
      yj50et0JKuksFEuk31c5InywTo.role = "img";

      yj50et0JKuksFEuk31c5InywTo.innerText = escapeHtml(userName).slice(0, 1);
      euk31c4EjYptt.appendChild(yj50et0JKuksFEuk31c5InywTo);
      // アイコン画像
      // の意ほど追加

      // 投稿者
      const euk31c1KjzXMk = document.createElement("div");
      euk31c1KjzXMk.className = "euk31c-1 kjzXMk";
      euk31c0HdYiSW.appendChild(euk31c1KjzXMk);

      const euk31c2TWWmz = document.createElement("div");
      euk31c2TWWmz.className = "euk31c-2 TWWmz";
      euk31c1KjzXMk.appendChild(euk31c2TWWmz);

      const userNameTimeLine = document.createElement("div");
      userNameTimeLine.className = "euk31c-3 ebZiNx";
      // 投稿の名前
      userNameTimeLine.innerText = escapeHtml(userName);
      userNameTimeLine.id = "TimeLineUsserName" + postId;
      euk31c2TWWmz.appendChild(userNameTimeLine);

      const dateTimeLine = document.createElement("div");
      dateTimeLine.className = "euk31c-3 ebZiNx";
      // 投稿の時間
      dateTimeLine.id = "date" + postId;
      const year = d.getFullYear();
      const month = d.getMonth() + 1;
      const newDate = d.getDate();
      const hours = d.getHours();
      const min = d.getMinutes();
      const sec = d.getSeconds();
      const def = realTime.getTime() - d.getTime();
      console.log(d);
      if (def < 60000) {
        dateTimeLine.innerText = Math.floor(def / 1000) + "秒前";
      } else if (def < 3600000) {
        dateTimeLine.innerText = Math.floor(def / 60000) + "分前";
      } else if (def < 86400000) {
        dateTimeLine.innerText =
          Math.floor(def / 3600000) + "時間前";
      } else {
        dateTimeLine.innerText = "投稿日:" + year + "/" + month + "/" + newDate;
      }
      euk31c2TWWmz.appendChild(dateTimeLine);

      const tgn9uw2BqeEAL = document.createElement("h2");
      tgn9uw2BqeEAL.className = "tgn9uw-2 bqeEAL";
      timeLineArticle.appendChild(tgn9uw2BqeEAL);

      const tgn9uw3BJQtxM = document.createElement("a");
      tgn9uw3BJQtxM.className = "tgn9uw-3 bJQtxM";
      // 投稿のリンクコメントを読みむリスナー
      // 投稿のリンクコメントを読みむリスナー
      // 投稿のリンクコメントを読みむリスナー
      tgn9uw3BJQtxM.href = "#";
      tgn9uw3BJQtxM.addEventListener("click", async function () {
        const portal = document.getElementById("__portal");

        document.getElementById("element").style =
          "padding-right: 16px; overflow: hidden;";
        const modaloverlay = document.createElement("div");
        modaloverlay.id = "overlay";
        modaloverlay.className = "sc-ct3fdn gNDOWz overlay-enter-done";
        modaloverlay.tabindex = "0";
        portal.appendChild(modaloverlay);

        const overlayBackdrop = document.createElement("div");
        overlayBackdrop.id = "overlay-backdrop";
        overlayBackdrop.className = "sc-1bckb9 idQkWe";

        modaloverlay.appendChild(overlayBackdrop);

        const pup2eh0EdtyEf = document.createElement("div");
        pup2eh0EdtyEf.className = "pup2eh-0 edtyEf";
        modaloverlay.appendChild(pup2eh0EdtyEf);

        const scQz0f8bDCgfWNSimplebarScrollableY =
          document.createElement("div");
        scQz0f8bDCgfWNSimplebarScrollableY.className =
          "sc-qz0f8b dCgfWN simplebar-scrollable-y";
        // scQz0f8bDCgfWNSimplebarScrollableY.setAttribute(data-simplebar,"init");
        pup2eh0EdtyEf.appendChild(scQz0f8bDCgfWNSimplebarScrollableY);

        const simplebarWrapper = document.createElement("div");
        simplebarWrapper.className = "simplebar-wrapper";
        simplebarWrapper.style = "margin: 0px";
        scQz0f8bDCgfWNSimplebarScrollableY.appendChild(simplebarWrapper);

        const simplebarHeightAutoObserverWrapper =
          document.createElement("div");
        simplebarHeightAutoObserverWrapper.className =
          "simplebar-height-auto-observer-wrapper";
        simplebarWrapper.appendChild(simplebarHeightAutoObserverWrapper);

        const simplebarHeightAutoObserver = document.createElement("div");
        simplebarHeightAutoObserver.className =
          "simplebar-height-auto-observer";
        simplebarHeightAutoObserverWrapper.appendChild(
          simplebarHeightAutoObserver
        );

        const simplebarMask = document.createElement("div");
        simplebarMask.className = "simplebar-mask";
        simplebarWrapper.appendChild(simplebarMask);

        const simplebarOffset = document.createElement("div");
        simplebarOffset.className = "simplebar-offset";
        simplebarOffset.style = "right: 0px; bottom: 0px";
        simplebarMask.appendChild(simplebarOffset);

        const simplebarContentWrapper = document.createElement("div");
        simplebarContentWrapper.className = "simplebar-content-wrapper";
        simplebarContentWrapper.style = "height: 100%; overflow: hidden scroll";
        simplebarOffset.appendChild(simplebarContentWrapper);

        const simplebarContent = document.createElement("div");
        simplebarContent.className = "simplebar-content";
        simplebarContent.style = "padding: 0px";
        simplebarContentWrapper.appendChild(simplebarContent);

        const sc1wisey80DRDKvl = document.createElement("div");
        sc1wisey80DRDKvl.className = "sc-1wisey8-0 dRDKvl";
        simplebarContent.appendChild(sc1wisey80DRDKvl);

        const sc1bx44oc0FIEEMl = document.createElement("div");
        sc1bx44oc0FIEEMl.className = "sc-1bx44oc-0 fIEEMl";
        sc1wisey80DRDKvl.appendChild(sc1bx44oc0FIEEMl);

        const sc2yjare0XrlpA = document.createElement("div");
        sc2yjare0XrlpA.className = "sc-2yjare-0 xrlpA";
        sc1bx44oc0FIEEMl.appendChild(sc2yjare0XrlpA);

        const sc2yjare3ECSGMJ = document.createElement("div");
        sc2yjare3ECSGMJ.className = "sc-2yjare-3 eCSGMJ";
        sc1bx44oc0FIEEMl.appendChild(sc2yjare3ECSGMJ);

        const auv9sk0DkklUr = document.createElement("div");
        auv9sk0DkklUr.className = "auv9sk-0 dkklUr";
        sc1bx44oc0FIEEMl.appendChild(auv9sk0DkklUr);

        const sc1oj78p70GjnISi = document.createElement("div");
        sc1oj78p70GjnISi.className = "sc-1oj78p7-0 gjnISi";
        auv9sk0DkklUr.appendChild(sc1oj78p70GjnISi);

        const sc1oj78p71JtFfzg = document.createElement("div");
        sc1oj78p71JtFfzg.className = "sc-1oj78p7-1 jtFfzg";
        sc1oj78p70GjnISi.appendChild(sc1oj78p71JtFfzg);

        const rt56oo1FQaFWY = document.createElement("div");
        rt56oo1FQaFWY.className = "rt56oo-1 fQaFWY";
        sc1oj78p71JtFfzg.appendChild(rt56oo1FQaFWY);

        const sc1x2m678DJCRke = document.createElement("div");
        sc1x2m678DJCRke.className = "sc-1x2m678 dJCRke";
        rt56oo1FQaFWY.appendChild(sc1x2m678DJCRke);

        const rt56oo0KNCquy = document.createElement("div");
        rt56oo0KNCquy.className = "rt56oo-0 kNCquy";
        sc1x2m678DJCRke.appendChild(rt56oo0KNCquy);

        const xrkql23EWfhXC = document.createElement("a");
        xrkql23EWfhXC.className = "xrkql2-3 eWfhXC";
        xrkql23EWfhXC.href = "/@dcardsurveygirl";
        rt56oo0KNCquy.appendChild(xrkql23EWfhXC);

        const eisivb0GSzasn = document.createElement("div");
        eisivb0GSzasn.className = "eisivb-0 gSzasn";
        xrkql23EWfhXC.appendChild(eisivb0GSzasn);

        const eisivb1FCTtDp = document.createElement("div");
        eisivb1FCTtDp.className = "eisivb-1 fCTtDp";
        eisivb0GSzasn.appendChild(eisivb1FCTtDp);

        const yj50et0JKuksFEisivb2JrKKZX = document.createElement("div");
        yj50et0JKuksFEisivb2JrKKZX.className =
          "yj50et-0 jKuksF eisivb-2 jrKKZX";
        eisivb1FCTtDp.appendChild(yj50et0JKuksFEisivb2JrKKZX);

        const yj50et1ElnXzlEisivb2JrKKZX = document.createElement("div");
        yj50et1ElnXzlEisivb2JrKKZX.className =
          "yj50et-1 elnXzl eisivb-2 jrKKZX";
        yj50et1ElnXzlEisivb2JrKKZX.size = "32";
        yj50et1ElnXzlEisivb2JrKKZX.role = "img";
        // yj50et1ElnXzlEisivb2JrKKZX.setAttribute(aria-label,"dcardsurveygirl");
        yj50et1ElnXzlEisivb2JrKKZX.innerText = escapeHtml(userName).slice(0, 1);
        // 先頭文字をアイコン化
        yj50et0JKuksFEisivb2JrKKZX.appendChild(yj50et1ElnXzlEisivb2JrKKZX);

        const eisivb3JWnTRG = document.createElement("div");
        eisivb3JWnTRG.className = "eisivb-3 jWnTRG";
        eisivb0GSzasn.appendChild(eisivb3JWnTRG);

        const eisivb4EcJeYq = document.createElement("div");
        eisivb4EcJeYq.className = "eisivb-4 ecJeYq";
        eisivb3JWnTRG.appendChild(eisivb4EcJeYq);

        const modalUserName = document.createElement("div");
        modalUserName.className = "xrkql2-0 eQtTCJ";
        modalUserName.id = "modalUserName";
        modalUserName.innerText = "投稿者:" + escapeHtml(userName);
        eisivb4EcJeYq.appendChild(modalUserName);

        const modalClose = document.createElement("button");
        modalClose.type = "button";
        modalClose.innerText = "×";
        modalClose.addEventListener("click", function () {
          document.getElementById("element").style = "";
          const overlay = document.getElementById("overlay");
          overlay.remove();
        });

        modalClose.className = "sc-1oj78p7-2 exWEIU";

        sc1oj78p70GjnISi.appendChild(modalClose);

        tgn9uw2BqeEAL.appendChild(tgn9uw3BJQtxM);

        const sc1eorkjw0BtVgIMArticle = document.createElement("article");
        sc1eorkjw0BtVgIMArticle.className = "sc-1eorkjw-0 btVgIM";
        sc1bx44oc0FIEEMl.appendChild(sc1eorkjw0BtVgIMArticle);

        const modlTitle = document.createElement("div");
        modlTitle.className = "sc-1eorkjw-1 ccTaOU";
        sc1eorkjw0BtVgIMArticle.appendChild(modlTitle);

        const sc1eorkjw2BKTUZH = document.createElement("div");
        sc1eorkjw2BKTUZH.className = "sc-1eorkjw-2 bKTUZH";
        modlTitle.appendChild(sc1eorkjw2BKTUZH);

        const sc1932jlp0FdtUau = document.createElement("h1");
        sc1932jlp0FdtUau.className = "sc-1932jlp-0 fdtUau";
        sc1932jlp0FdtUau.innerText = escapeHtml(title);
        sc1eorkjw2BKTUZH.appendChild(sc1932jlp0FdtUau);

        const sc1eorkjw3JJbLey = document.createElement("div");
        sc1eorkjw3JJbLey.className = "sc-1eorkjw-3 jJbLey";
        sc1eorkjw0BtVgIMArticle.appendChild(sc1eorkjw3JJbLey);

        const sc1eorkjw4IDjmxJ = document.createElement("div");
        sc1eorkjw4IDjmxJ.className = "sc-1eorkjw-4 iDjmxJ";
        sc1eorkjw3JJbLey.appendChild(sc1eorkjw4IDjmxJ);

        const modalCategory = document.createElement("a");
        modalCategory.innerText = "カテゴリー:"+post.postCategory;
        sc1eorkjw4IDjmxJ.appendChild(modalCategory);
 

        const sc1eorkjw4IDjmxJ1 = document.createElement("div");
        sc1eorkjw4IDjmxJ1.className = "sc-1eorkjw-4 iDjmxJ";
        sc1eorkjw4IDjmxJ1.id = "innerDate" + postId;

        if (def < 60000) {
          sc1eorkjw4IDjmxJ1.innerText =
            Math.floor(def / 1000) + "秒前";
        } else if (def < 3600000) {
          sc1eorkjw4IDjmxJ1.innerText =
            Math.floor(def / 60000) + "分前";
        } else if (def < 86400000) {
          sc1eorkjw4IDjmxJ1.innerText =
            Math.floor(def / 3600000) + "時間前";
        } else {
          sc1eorkjw4IDjmxJ1.innerText =
            "投稿日:" + year + "/" + month + "/" + newDate;
        }
        sc1eorkjw3JJbLey.appendChild(sc1eorkjw4IDjmxJ1);

        const sc1eorkjw5HKSyLQ = document.createElement("div");
        sc1eorkjw5HKSyLQ.className = "sc-1eorkjw-5 hKSyLQ";
        sc1eorkjw0BtVgIMArticle.appendChild(sc1eorkjw5HKSyLQ);

        const sc1npvbtq0GjzOFC = document.createElement("div");
        sc1npvbtq0GjzOFC.className = "sc-1npvbtq-0 gjzOFC";
        sc1eorkjw5HKSyLQ.appendChild(sc1npvbtq0GjzOFC);

        const phqjxq0IJJmxb = document.createElement("div");
        phqjxq0IJJmxb.className = "phqjxq-0 iJJmxb";
        sc1npvbtq0GjzOFC.appendChild(phqjxq0IJJmxb);

        const modalContent = document.createElement("span");
        modalContent.className = "phqjxq-0 iJJmxb";
        if(content!=null){phqjxq0IJJmxb.innerText = escapeHtml(content);}else{phqjxq0IJJmxb.innerText ="";}
        phqjxq0IJJmxb.appendChild(modalContent);

        const modalContentblank = document.createElement("span");
        phqjxq0IJJmxb.appendChild(modalContentblank);

        // ---------------------------------------
        // <!-- ------------------------------ -->

        sc1bx44oc0FIEEMl.appendChild(document.createElement("div"));

        const reations = document.createElement("div");
        reations.id = "reations";
        sc1bx44oc0FIEEMl.appendChild(reations);

        const fiw2dr0GmWbuW = document.createElement("div");
        fiw2dr0GmWbuW.className = "fiw2dr-0 gmWbuW";
        reations.appendChild(fiw2dr0GmWbuW);

        const fiw2dr1EVsNoo = document.createElement("div");
        fiw2dr1EVsNoo.className = "fiw2dr-1 eVsNoo";
        fiw2dr0GmWbuW.appendChild(fiw2dr1EVsNoo);

        const fiw2dr2EuXXTa = document.createElement("div");
        fiw2dr2EuXXTa.className = "fiw2dr-2 euXXTa";
        fiw2dr1EVsNoo.appendChild(fiw2dr2EuXXTa);

        const fiw2dr4GQIutf = document.createElement("div");
        fiw2dr4GQIutf.className = "fiw2dr-4 gQIutf";
        fiw2dr2EuXXTa.appendChild(fiw2dr4GQIutf);

        const cgoejl0EMdDUDXv9ecr0GbGfpOFiw2dr5JNIkLW =
          document.createElement("div");
        cgoejl0EMdDUDXv9ecr0GbGfpOFiw2dr5JNIkLW.className =
          "cgoejl-0 eMdDUD xv9ecr-0 gbGfpO fiw2dr-5 jNIkLW";
          cgoejl0EMdDUDXv9ecr0GbGfpOFiw2dr5JNIkLW.id=postId+"modalImg"+postId;
        fiw2dr4GQIutf.appendChild(cgoejl0EMdDUDXv9ecr0GbGfpOFiw2dr5JNIkLW);

        // riaction画像の表示
        // riaction画像の表示
      if (1 <= reactionX_rank && reactionX_rank <= 3) {
        const img_elementX = document.createElement("img");
        img_elementX.src = "img/1.jpg"; // 画像パス
        img_elementX.alt = "riaction"; // 代替テキスト
        img_elementX.width = 20; // 横サイズ（px）
        img_elementX.height = 20; // 縦サイズ（px）
        img_elementX.id = "img_elementX" + postId;
        img_elementX.style = "z-index: 4";
        img_elementX.className = "cgoejl-1 eUYbaa";
        cgoejl0EMdDUDXv9ecr0GbGfpOFiw2dr5JNIkLW.appendChild(img_elementX); //画像追加
      }
      if (1 <= reactionY_rank && reactionY_rank <= 3) {
        const img_elementY = document.createElement("img");
        img_elementY.src = "img/2.jpg"; // 画像パス
        img_elementY.alt = "riaction"; // 代替テキスト
        img_elementY.width = 20; // 横サイズ（px）
        img_elementY.height = 20; // 縦サイズ（px）
        img_elementY.id = "Modalimg_elementY" + postId;
        img_elementY.style = "z-index: 3";
        img_elementY.className = "cgoejl-1 eUYbaa";
        cgoejl0EMdDUDXv9ecr0GbGfpOFiw2dr5JNIkLW.appendChild(img_elementY); //画像追加
      }
      if (1 <= reactionZ_rank && reactionZ_rank <= 3) {
        const img_elementZ = document.createElement("img");
        img_elementZ.src = "img/3.jpg"; // 画像パス
        img_elementZ.alt = "riaction"; // 代替テキスト
        img_elementZ.width = 20; // 横サイズ（px）
        img_elementZ.height = 20; // 縦サイズ（px）
        img_elementZ.id = "Modalimg_elementZ" + postId;
        img_elementZ.style = "z-index: 2";
        img_elementZ.className = "cgoejl-1 eUYbaa";
        cgoejl0EMdDUDXv9ecr0GbGfpOFiw2dr5JNIkLW.appendChild(img_elementZ); //画像追加
      }
      if (1 <= reactionR_rank && reactionR_rank <= 3) {
        const img_elementR = document.createElement("img");
        img_elementR.src = "img/4.jpg"; // 画像パス
        img_elementR.alt = "riaction"; // 代替テキスト
        img_elementR.width = 20; // 横サイズ（px）
        img_elementR.height = 20; // 縦サイズ（px）
        img_elementR.id = "Modalimg_elementR" + postId;
        img_elementR.style = "z-index: 1";
        img_elementR.className = "cgoejl-1 eUYbaa";
        cgoejl0EMdDUDXv9ecr0GbGfpOFiw2dr5JNIkLW.appendChild(img_elementR); //画像追加
      }

      // リアクション数

      if (0 < reactionCount) {
        const cgoejl3IVJAZc = document.createElement("div");
        cgoejl3IVJAZc.innerText = reactionCount;
        cgoejl3IVJAZc.className = "cgoejl-3 iVJAZc";
        cgoejl3IVJAZc.id = "modalReactionCount" + postId;
        cgoejl0EMdDUDXv9ecr0GbGfpOFiw2dr5JNIkLW.appendChild(cgoejl3IVJAZc); //riactionの総数を表示
      }
       
        //   リアクション関連終わり
        // -------------------------------------
        const fiw2dr3EQtIoK = document.createElement("div");
        fiw2dr3EQtIoK.className = "fiw2dr-3 eQtIoK";
        fiw2dr1EVsNoo.appendChild(fiw2dr3EQtIoK);

        const sc1sxph3j0HRgZpf = document.createElement("div");
        sc1sxph3j0HRgZpf.className = "sc-1sxph3j-0 hRgZpf";
        fiw2dr3EQtIoK.appendChild(sc1sxph3j0HRgZpf);

        const sc1chgks10GYkhli = document.createElement("div");
        sc1chgks10GYkhli.className = "sc-1chgks1-0 gYkhli";
        sc1sxph3j0HRgZpf.appendChild(sc1chgks10GYkhli);

        const sc1chgks11LknWx = document.createElement("canvas");
        sc1chgks11LknWx.className = "sc-1chgks1-1 LknWx";
        sc1chgks11LknWx.width = "108";
        sc1chgks11LknWx.height = "108";
        sc1chgks10GYkhli.appendChild(sc1chgks11LknWx);

        const sc1chgks11LknWx1 = document.createElement("canvas");
        sc1chgks11LknWx1.className = "sc-1chgks1-1 LknWx";
        sc1chgks11LknWx1.width = "108";
        sc1chgks11LknWx1.height = "108";
        sc1chgks10GYkhli.appendChild(sc1chgks11LknWx1);

        const sc1chgks123deCReZ = document.createElement("div");
        sc1chgks123deCReZ.className = "sc-1chgks1-2 dECReZ";
        sc1chgks10GYkhli.appendChild(sc1chgks123deCReZ);

// <!-- 以下riaction実装 -->

// modalの中のリアクション表示ボタン
let x = 0,
  y = 0,
  z = 0,
  r = 0;
let flag = x + y + z + r;
let Rflag = x + y + z; //選択中かどうか
let Xflag = r + y + z; //選択中かどうか
let Yflag = x + r + z; //選択中かどうか
let Zflag = x + y + r; //選択中かどうか

recLoad(postId,sc1chgks123deCReZ,i,x,y,z,r,flag,Rflag,Xflag,Yflag,Zflag);


    // riactionボタン未来実装
      // ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー

   
        const commentWakaugumi = document.createElement("div");
        commentWakaugumi.id = "commentWakaugumi";
        sc1bx44oc0FIEEMl.appendChild(commentWakaugumi);

        const fub27c0fbJmE = document.createElement("div");
        fub27c0fbJmE.className = "fub27c-0 fDbJmE";
        commentWakaugumi.appendChild(fub27c0fbJmE);

        const fub27c1bXMPVq = document.createElement("div");
        fub27c1bXMPVq.className = "fub27c-1 bXMPVq";
        fub27c0fbJmE.appendChild(fub27c1bXMPVq);

        const fub27c2gjDRWf = document.createElement("div");
        fub27c2gjDRWf.className = "fub27c-2 gjDRWf";
        fub27c2gjDRWf.innerText = "";
        fub27c1bXMPVq.appendChild(fub27c2gjDRWf);


        // const zw1zyy0EDxBzm = document.createElement("div");
        // zw1zyy0EDxBzm.className = "zw1zyy-0 eDxBzM";
        // sc1bx44oc3gtyQXa.appendChild(zw1zyy0EDxBzm);

        // const zw1zyy0EDxBzmElement = document.createElement("div");
        // zw1zyy0EDxBzmElement.id = "zw1zyy0EDxBzmElement";
        // zw1zyy0EDxBzm.appendChild(zw1zyy0EDxBzmElement);


        // const cu81fo2jTfkun = document.createElement("div");
        // cu81fo2jTfkun.className = "cu81fo-2 jTfkun";
        // cu81fo0DPWSiZ.appendChild(cu81fo2jTfkun);

        const sc1sxph3j0HRgZpf1 = document.createElement("div");
        // sc1sxph3j0HRgZpf1.className = "sc-1sxph3j-0 hRgZpf";
        // cu81fo2jTfkun.appendChild(sc1sxph3j0HRgZpf1);

        const sc1chgks10GYwkhli = document.createElement("div");
        sc1chgks10GYwkhli.className = "sc-1chgks1-0 gYkhli";
        sc1sxph3j0HRgZpf.appendChild(sc1chgks10GYwkhli);

        const canvas101 = document.createElement("canvas");
        canvas101.className = "sc-1chgks1-1 LknWx";
        canvas101.width = 108;
        canvas101.height = 108;
        sc1chgks10GYwkhli.appendChild(canvas101);

        const canvas102 = document.createElement("canvas");
        canvas102.className = "sc-1chgks1-1 LknWx";
        canvas101.width = 108;
        canvas101.height = 108;
        sc1chgks10GYwkhli.appendChild(canvas102);

        // -----------------------コメントの画面
        const commentsElement = document.createElement("div");
        commentsElement.className = "commentsElement";
        sc1bx44oc0FIEEMl.appendChild(commentsElement);

        const commentPopular = document.createElement("div");
        commentPopular.id = "comment-popular";
        commentsElement.className = "hu2j89-0 o6jhm9-0 jzSyLu hzGenW";
        commentsElement.appendChild(commentPopular);


        // 以下がコメント動的生成

        const res3 = await fetch("FirstLoadComment?postId=" + postId);
        const comments = await res3.json();


      });
      tgn9uw2BqeEAL.appendChild(tgn9uw3BJQtxM);

      const timelineTitle = document.createElement("span");
      timelineTitle.class = "title";
      timelineTitle.innerText = escapeHtml(title);
      tgn9uw3BJQtxM.appendChild(timelineTitle);

      const uj732l0FiyggF = document.createElement("div");
      uj732l0FiyggF.className = "uj732l-0 fiyggF";
      timeLineArticle.appendChild(uj732l0FiyggF);

      const tgn9uw4PmuXC = document.createElement("div");
      tgn9uw4PmuXC.className = "tgn9uw-4 pmuXC";
      uj732l0FiyggF.appendChild(tgn9uw4PmuXC);

      const timelineContent = document.createElement("span");
      timelineContent.className = "content";
      if(content!=null){timelineContent.innerText = escapeHtml(content);}else{timelineContent.innerText = "";}
      
      tgn9uw4PmuXC.appendChild(timelineContent);
      // --------------------

      const uj732l1Ixtzgq = document.createElement("div");
      uj732l1Ixtzgq.className = "uj732l-1 ixtzgq";
      timeLineArticle.appendChild(uj732l1Ixtzgq);

      // リアクション関連
      const uj732l2JWxgsr = document.createElement("div");
      uj732l2JWxgsr.className = "uj732l-2 jWxgsr";
      uj732l1Ixtzgq.appendChild(uj732l2JWxgsr);
      const cgoejl0EMdDUD = document.createElement("div");
      cgoejl0EMdDUD.className = "cgoejl-0 eMdDUD";
      cgoejl0EMdDUD.id="reactions"+postId;
      uj732l2JWxgsr.appendChild(cgoejl0EMdDUD);

      // リアクション画像

      const cgoejl2CeqRpS = document.createElement("div");
      cgoejl2CeqRpS.className = "cgoejl-2 ceqRpS";
      cgoejl2CeqRpS.id = "reactionsImg" + postId;
      cgoejl0EMdDUD.appendChild(cgoejl2CeqRpS);


      if (1 <= reactionX_rank && reactionX_rank <= 3) {
        const img_elementX = document.createElement("img");
        img_elementX.src = "img/1.jpg"; // 画像パス
        img_elementX.alt = "riaction"; // 代替テキスト
        img_elementX.width = 20; // 横サイズ（px）
        img_elementX.height = 20; // 縦サイズ（px）
        img_elementX.id = "img_elementX" + postId;
        img_elementX.style = "z-index: 4";
        img_elementX.className = "cgoejl-1 eUYbaa";
        cgoejl2CeqRpS.appendChild(img_elementX); //画像追加
      }
      if (1 <= reactionY_rank && reactionY_rank <= 3) {
        const img_elementY = document.createElement("img");
        img_elementY.src = "img/2.jpg"; // 画像パス
        img_elementY.alt = "riaction"; // 代替テキスト
        img_elementY.width = 20; // 横サイズ（px）
        img_elementY.height = 20; // 縦サイズ（px）
        img_elementY.id = "img_elementY" + postId;
        img_elementY.style = "z-index: 3";
        img_elementY.className = "cgoejl-1 eUYbaa";
        cgoejl2CeqRpS.appendChild(img_elementY); //画像追加
      }
      if (1 <= reactionZ_rank && reactionZ_rank <= 3) {
        const img_elementZ = document.createElement("img");
        img_elementZ.src = "img/3.jpg"; // 画像パス
        img_elementZ.alt = "riaction"; // 代替テキスト
        img_elementZ.width = 20; // 横サイズ（px）
        img_elementZ.height = 20; // 縦サイズ（px）
        img_elementZ.id = "img_elementZ" + postId;
        img_elementZ.style = "z-index: 2";
        img_elementZ.className = "cgoejl-1 eUYbaa";
        cgoejl2CeqRpS.appendChild(img_elementZ); //画像追加
      }
      if (1 <= reactionR_rank && reactionR_rank <= 3) {
        const img_elementR = document.createElement("img");
        img_elementR.src = "img/4.jpg"; // 画像パス
        img_elementR.alt = "riaction"; // 代替テキスト
        img_elementR.width = 20; // 横サイズ（px）
        img_elementR.height = 20; // 縦サイズ（px）
        img_elementR.id = "img_elementR" + postId;
        img_elementR.style = "z-index: 1";
        img_elementR.className = "cgoejl-1 eUYbaa";
        cgoejl2CeqRpS.appendChild(img_elementR); //画像追加
      }
     
      // リアクション数
     
      if (0 < reactionCount) {
        const cgoejl3IVJAZc = document.createElement("div");
        cgoejl3IVJAZc.innerText = reactionCount;
        cgoejl3IVJAZc.className = "cgoejl-3 iVJAZc";
        cgoejl3IVJAZc.id = "reactionCount" + postId;
        cgoejl0EMdDUD.appendChild(cgoejl3IVJAZc); //riactionの総数を表示
      }
    });
  

    i = 0;

    console.log(postList);
    console.log(lastDate);
  }

    console.log(lastDate);
  // }
  // 下までスクロールした時に読む込む




  // 上までスクロールした時に読む込む

  if (currentPos == 0) {
    console.log("OK-3Top");
    const reversUrl = "SearchFoward";
    const res = await fetch(reversUrl + "?recentlyDate=" + recentlyDate);
    console.log(res);
    const posts = await res.json();
    const postListRevers=new Array();
    //古い順に来ている
    console.log(posts);

    console.log("OK-4Top");
    //   postsをjson形式で受け取っている
    posts.forEach((post) => {
      const realTime = new Date();

      console.log("OK-4");
      const title = post.postTitle;
      const date = post.postDate;
      recentlyDate = date;
      const postId = post.postId;
      postListRevers.push(postId);
      recentlyDate = date;
      const d = new Date(date);
      const reactionX = post.reactionX;
      const reactionY = post.reactionY;
      const reactionZ = post.reactionZ;
      const reactionR = post.reactionR;
      let reactionX_rank = 0;
      let reactionY_rank = 0;
      let reactionZ_rank = 0;
      let reactionR_rank = 0;
      let array = [reactionX, reactionY, reactionZ, reactionR];
      const reactionCount = reactionX + reactionY + reactionZ + reactionR;
  
      //降順に並び変える
      array.sort(function (first, second) {
        return second - first;
      });
      // 数のランクを格納数が0の場合ランクを0にする
      reactionX_rank = reactionX == 0 ? 0 : array.indexOf(reactionX) + 1;
      reactionY_rank = reactionY == 0 ? 0 : array.indexOf(reactionY) + 1;
      reactionZ_rank = reactionZ == 0 ? 0 : array.indexOf(reactionZ) + 1;
      reactionR_rank = reactionR == 0 ? 0 : array.indexOf(reactionR) + 1;
  
      console.log(reactionX_rank, reactionY_rank, reactionZ_rank, reactionR_rank);
      const userName = post.userName;
      const content = post.postContent;


      const TimeLineMain = document.getElementById("TimeLineMain");
      const dataKey = document.createElement("div");
      dataKey.id = "post" + postId;
      TimeLineMain.insertBefore(dataKey, TimeLineMain.firstChild);

      const timeLineArticle = document.createElement("article");
      timeLineArticle.className = "tgn9uw-0 dRhFWg";
      timeLineArticle.role = "article";
      dataKey.appendChild(timeLineArticle);

      const tgn9uw1ItrBFL = document.createElement("div");
      tgn9uw1ItrBFL.className = "tgn9uw-1 itrBFL";
      timeLineArticle.appendChild(tgn9uw1ItrBFL);

      const euk31c0HdYiSW = document.createElement("div");
      euk31c0HdYiSW.className = "euk31c-0 hdYiSW";
      tgn9uw1ItrBFL.appendChild(euk31c0HdYiSW);

      const euk31c4EjYptt = document.createElement("div");
      euk31c4EjYptt.className = "euk31c-4 ejYptt";
      euk31c0HdYiSW.appendChild(euk31c4EjYptt);

      const yj50et0JKuksFEuk31c5InywTo = document.createElement("div");
      yj50et0JKuksFEuk31c5InywTo.className = "yj50et-1 elnXzl eisivb-2 jrKKZX";

      yj50et0JKuksFEuk31c5InywTo.size = "32";
      yj50et0JKuksFEuk31c5InywTo.role = "img";

      yj50et0JKuksFEuk31c5InywTo.innerText = escapeHtml(userName).slice(0, 1);
      euk31c4EjYptt.appendChild(yj50et0JKuksFEuk31c5InywTo);
      // アイコン画像
      // の意ほど追加

      // 投稿者
      const euk31c1KjzXMk = document.createElement("div");
      euk31c1KjzXMk.className = "euk31c-1 kjzXMk";
      euk31c0HdYiSW.appendChild(euk31c1KjzXMk);

      const euk31c2TWWmz = document.createElement("div");
      euk31c2TWWmz.className = "euk31c-2 TWWmz";
      euk31c1KjzXMk.appendChild(euk31c2TWWmz);

      const userNameTimeLine = document.createElement("div");
      userNameTimeLine.className = "euk31c-3 ebZiNx";
      // 投稿の名前
      userNameTimeLine.innerText = escapeHtml(userName);
      userNameTimeLine.id = "TimeLineUsserName" + postId;
      euk31c2TWWmz.appendChild(userNameTimeLine);

      const dateTimeLine = document.createElement("div");
      dateTimeLine.className = "euk31c-3 ebZiNx";
      // 投稿の時間
      dateTimeLine.id = "date" + postId;
      const year = d.getFullYear();
      const month = d.getMonth() + 1;
      const newDate = d.getDate();
      const hours = d.getHours();
      const min = d.getMinutes();
      const sec = d.getSeconds();
      const def = realTime.getTime() - d.getTime();
      console.log(d);
      if (def < 60000) {
        dateTimeLine.innerText = Math.floor(def / 1000) + "秒前";
      } else if (def < 3600000) {
        dateTimeLine.innerText = Math.floor(def / 60000) + "分前";
      } else if (def < 86400000) {
        dateTimeLine.innerText =
          Math.floor(def / 3600000) + "時間前";
      } else {
        dateTimeLine.innerText = "投稿日:" + year + "/" + month + "/" + newDate;
      }
      euk31c2TWWmz.appendChild(dateTimeLine);

      const tgn9uw2BqeEAL = document.createElement("h2");
      tgn9uw2BqeEAL.className = "tgn9uw-2 bqeEAL";
      timeLineArticle.appendChild(tgn9uw2BqeEAL);

      const tgn9uw3BJQtxM = document.createElement("a");
      tgn9uw3BJQtxM.className = "tgn9uw-3 bJQtxM";
      // 投稿のリンクコメントを読みむリスナー
      // 投稿のリンクコメントを読みむリスナー
      // 投稿のリンクコメントを読みむリスナー
      tgn9uw3BJQtxM.href = "#";
      tgn9uw3BJQtxM.addEventListener("click", async function () {
        const portal = document.getElementById("__portal");

        document.getElementById("element").style =
          "padding-right: 16px; overflow: hidden;";
        const modaloverlay = document.createElement("div");
        modaloverlay.id = "overlay";
        modaloverlay.className = "sc-ct3fdn gNDOWz overlay-enter-done";
        modaloverlay.tabindex = "0";
        portal.appendChild(modaloverlay);

        const overlayBackdrop = document.createElement("div");
        overlayBackdrop.id = "overlay-backdrop";
        overlayBackdrop.className = "sc-1bckb9 idQkWe";

        modaloverlay.appendChild(overlayBackdrop);

        const pup2eh0EdtyEf = document.createElement("div");
        pup2eh0EdtyEf.className = "pup2eh-0 edtyEf";
        modaloverlay.appendChild(pup2eh0EdtyEf);

        const scQz0f8bDCgfWNSimplebarScrollableY =
          document.createElement("div");
        scQz0f8bDCgfWNSimplebarScrollableY.className =
          "sc-qz0f8b dCgfWN simplebar-scrollable-y";
        // scQz0f8bDCgfWNSimplebarScrollableY.setAttribute(data-simplebar,"init");
        pup2eh0EdtyEf.appendChild(scQz0f8bDCgfWNSimplebarScrollableY);

        const simplebarWrapper = document.createElement("div");
        simplebarWrapper.className = "simplebar-wrapper";
        simplebarWrapper.style = "margin: 0px";
        scQz0f8bDCgfWNSimplebarScrollableY.appendChild(simplebarWrapper);

        const simplebarHeightAutoObserverWrapper =
          document.createElement("div");
        simplebarHeightAutoObserverWrapper.className =
          "simplebar-height-auto-observer-wrapper";
        simplebarWrapper.appendChild(simplebarHeightAutoObserverWrapper);

        const simplebarHeightAutoObserver = document.createElement("div");
        simplebarHeightAutoObserver.className =
          "simplebar-height-auto-observer";
        simplebarHeightAutoObserverWrapper.appendChild(
          simplebarHeightAutoObserver
        );

        const simplebarMask = document.createElement("div");
        simplebarMask.className = "simplebar-mask";
        simplebarWrapper.appendChild(simplebarMask);

        const simplebarOffset = document.createElement("div");
        simplebarOffset.className = "simplebar-offset";
        simplebarOffset.style = "right: 0px; bottom: 0px";
        simplebarMask.appendChild(simplebarOffset);

        const simplebarContentWrapper = document.createElement("div");
        simplebarContentWrapper.className = "simplebar-content-wrapper";
        simplebarContentWrapper.style = "height: 100%; overflow: hidden scroll";
        simplebarOffset.appendChild(simplebarContentWrapper);

        const simplebarContent = document.createElement("div");
        simplebarContent.className = "simplebar-content";
        simplebarContent.style = "padding: 0px";
        simplebarContentWrapper.appendChild(simplebarContent);

        const sc1wisey80DRDKvl = document.createElement("div");
        sc1wisey80DRDKvl.className = "sc-1wisey8-0 dRDKvl";
        simplebarContent.appendChild(sc1wisey80DRDKvl);

        const sc1bx44oc0FIEEMl = document.createElement("div");
        sc1bx44oc0FIEEMl.className = "sc-1bx44oc-0 fIEEMl";
        sc1wisey80DRDKvl.appendChild(sc1bx44oc0FIEEMl);

        const sc2yjare0XrlpA = document.createElement("div");
        sc2yjare0XrlpA.className = "sc-2yjare-0 xrlpA";
        sc1bx44oc0FIEEMl.appendChild(sc2yjare0XrlpA);

        const sc2yjare3ECSGMJ = document.createElement("div");
        sc2yjare3ECSGMJ.className = "sc-2yjare-3 eCSGMJ";
        sc1bx44oc0FIEEMl.appendChild(sc2yjare3ECSGMJ);

        const auv9sk0DkklUr = document.createElement("div");
        auv9sk0DkklUr.className = "auv9sk-0 dkklUr";
        sc1bx44oc0FIEEMl.appendChild(auv9sk0DkklUr);

        const sc1oj78p70GjnISi = document.createElement("div");
        sc1oj78p70GjnISi.className = "sc-1oj78p7-0 gjnISi";
        auv9sk0DkklUr.appendChild(sc1oj78p70GjnISi);

        const sc1oj78p71JtFfzg = document.createElement("div");
        sc1oj78p71JtFfzg.className = "sc-1oj78p7-1 jtFfzg";
        sc1oj78p70GjnISi.appendChild(sc1oj78p71JtFfzg);

        const rt56oo1FQaFWY = document.createElement("div");
        rt56oo1FQaFWY.className = "rt56oo-1 fQaFWY";
        sc1oj78p71JtFfzg.appendChild(rt56oo1FQaFWY);

        const sc1x2m678DJCRke = document.createElement("div");
        sc1x2m678DJCRke.className = "sc-1x2m678 dJCRke";
        rt56oo1FQaFWY.appendChild(sc1x2m678DJCRke);

        const rt56oo0KNCquy = document.createElement("div");
        rt56oo0KNCquy.className = "rt56oo-0 kNCquy";
        sc1x2m678DJCRke.appendChild(rt56oo0KNCquy);

        const xrkql23EWfhXC = document.createElement("a");
        xrkql23EWfhXC.className = "xrkql2-3 eWfhXC";
        xrkql23EWfhXC.href = "/@dcardsurveygirl";
        rt56oo0KNCquy.appendChild(xrkql23EWfhXC);

        const eisivb0GSzasn = document.createElement("div");
        eisivb0GSzasn.className = "eisivb-0 gSzasn";
        xrkql23EWfhXC.appendChild(eisivb0GSzasn);

        const eisivb1FCTtDp = document.createElement("div");
        eisivb1FCTtDp.className = "eisivb-1 fCTtDp";
        eisivb0GSzasn.appendChild(eisivb1FCTtDp);

        const yj50et0JKuksFEisivb2JrKKZX = document.createElement("div");
        yj50et0JKuksFEisivb2JrKKZX.className =
          "yj50et-0 jKuksF eisivb-2 jrKKZX";
        eisivb1FCTtDp.appendChild(yj50et0JKuksFEisivb2JrKKZX);

        const yj50et1ElnXzlEisivb2JrKKZX = document.createElement("div");
        yj50et1ElnXzlEisivb2JrKKZX.className =
          "yj50et-1 elnXzl eisivb-2 jrKKZX";
        yj50et1ElnXzlEisivb2JrKKZX.size = "32";
        yj50et1ElnXzlEisivb2JrKKZX.role = "img";
        // yj50et1ElnXzlEisivb2JrKKZX.setAttribute(aria-label,"dcardsurveygirl");
        yj50et1ElnXzlEisivb2JrKKZX.innerText = escapeHtml(userName).slice(0, 1);
        // 先頭文字をアイコン化
        yj50et0JKuksFEisivb2JrKKZX.appendChild(yj50et1ElnXzlEisivb2JrKKZX);

        const eisivb3JWnTRG = document.createElement("div");
        eisivb3JWnTRG.className = "eisivb-3 jWnTRG";
        eisivb0GSzasn.appendChild(eisivb3JWnTRG);

        const eisivb4EcJeYq = document.createElement("div");
        eisivb4EcJeYq.className = "eisivb-4 ecJeYq";
        eisivb3JWnTRG.appendChild(eisivb4EcJeYq);

        const modalUserName = document.createElement("div");
        modalUserName.className = "xrkql2-0 eQtTCJ";
        modalUserName.id = "modalUserName";
        modalUserName.innerText = "投稿者:" + escapeHtml(userName);
        eisivb4EcJeYq.appendChild(modalUserName);

        const modalClose = document.createElement("button");
        modalClose.type = "button";
        modalClose.innerText = "×";
        modalClose.addEventListener("click", function () {
          document.getElementById("element").style = "";
          const overlay = document.getElementById("overlay");
          overlay.remove();
        });

        modalClose.className = "sc-1oj78p7-2 exWEIU";

        sc1oj78p70GjnISi.appendChild(modalClose);

        tgn9uw2BqeEAL.appendChild(tgn9uw3BJQtxM);

        const sc1eorkjw0BtVgIMArticle = document.createElement("article");
        sc1eorkjw0BtVgIMArticle.className = "sc-1eorkjw-0 btVgIM";
        sc1bx44oc0FIEEMl.appendChild(sc1eorkjw0BtVgIMArticle);

        const modlTitle = document.createElement("div");
        modlTitle.className = "sc-1eorkjw-1 ccTaOU";
        sc1eorkjw0BtVgIMArticle.appendChild(modlTitle);

        const sc1eorkjw2BKTUZH = document.createElement("div");
        sc1eorkjw2BKTUZH.className = "sc-1eorkjw-2 bKTUZH";
        modlTitle.appendChild(sc1eorkjw2BKTUZH);

        const sc1932jlp0FdtUau = document.createElement("h1");
        sc1932jlp0FdtUau.className = "sc-1932jlp-0 fdtUau";
        sc1932jlp0FdtUau.innerText = escapeHtml(title);
        sc1eorkjw2BKTUZH.appendChild(sc1932jlp0FdtUau);

        const sc1eorkjw3JJbLey = document.createElement("div");
        sc1eorkjw3JJbLey.className = "sc-1eorkjw-3 jJbLey";
        sc1eorkjw0BtVgIMArticle.appendChild(sc1eorkjw3JJbLey);

        const sc1eorkjw4IDjmxJ = document.createElement("div");
        sc1eorkjw4IDjmxJ.className = "sc-1eorkjw-4 iDjmxJ";
        sc1eorkjw3JJbLey.appendChild(sc1eorkjw4IDjmxJ);

      const modalCategory = document.createElement("a");
      modalCategory.innerText = "カテゴリー:"+post.postCategory;
      sc1eorkjw4IDjmxJ.appendChild(modalCategory);

        const sc1eorkjw4IDjmxJ1 = document.createElement("div");
        sc1eorkjw4IDjmxJ1.className = "sc-1eorkjw-4 iDjmxJ";
        sc1eorkjw4IDjmxJ1.id = "innerDate" + postId;

        if (def < 60000) {
          sc1eorkjw4IDjmxJ1.innerText =
            Math.floor(def / 1000) + "秒前";
        } else if (def < 3600000) {
          sc1eorkjw4IDjmxJ1.innerText =
            Math.floor(def / 60000) + "分前";
        } else if (def < 86400000) {
          sc1eorkjw4IDjmxJ1.innerText =
            Math.floor(def / 3600000) + "時間前";
        } else {
          sc1eorkjw4IDjmxJ1.innerText =
            "投稿日:" + year + "/" + month + "/" + newDate;
        }
        sc1eorkjw3JJbLey.appendChild(sc1eorkjw4IDjmxJ1);

        const sc1eorkjw5HKSyLQ = document.createElement("div");
        sc1eorkjw5HKSyLQ.className = "sc-1eorkjw-5 hKSyLQ";
        sc1eorkjw0BtVgIMArticle.appendChild(sc1eorkjw5HKSyLQ);

        const sc1npvbtq0GjzOFC = document.createElement("div");
        sc1npvbtq0GjzOFC.className = "sc-1npvbtq-0 gjzOFC";
        sc1eorkjw5HKSyLQ.appendChild(sc1npvbtq0GjzOFC);

        const phqjxq0IJJmxb = document.createElement("div");
        phqjxq0IJJmxb.className = "phqjxq-0 iJJmxb";
        sc1npvbtq0GjzOFC.appendChild(phqjxq0IJJmxb);

        const modalContent = document.createElement("span");
        modalContent.className = "phqjxq-0 iJJmxb";
        
        if(content!=null){phqjxq0IJJmxb.innerText = escapeHtml(content);}else{phqjxq0IJJmxb.innerText ="";}
        phqjxq0IJJmxb.appendChild(modalContent);

        const modalContentblank = document.createElement("span");
        phqjxq0IJJmxb.appendChild(modalContentblank);

        // ---------------------------------------
        // <!-- ------------------------------ -->

        sc1bx44oc0FIEEMl.appendChild(document.createElement("div"));

        const reations = document.createElement("div");
        reations.id = "reations";
        sc1bx44oc0FIEEMl.appendChild(reations);

        const fiw2dr0GmWbuW = document.createElement("div");
        fiw2dr0GmWbuW.className = "fiw2dr-0 gmWbuW";
        reations.appendChild(fiw2dr0GmWbuW);

        const fiw2dr1EVsNoo = document.createElement("div");
        fiw2dr1EVsNoo.className = "fiw2dr-1 eVsNoo";
        fiw2dr0GmWbuW.appendChild(fiw2dr1EVsNoo);

        const fiw2dr2EuXXTa = document.createElement("div");
        fiw2dr2EuXXTa.className = "fiw2dr-2 euXXTa";
        fiw2dr1EVsNoo.appendChild(fiw2dr2EuXXTa);

        const fiw2dr4GQIutf = document.createElement("div");
        fiw2dr4GQIutf.className = "fiw2dr-4 gQIutf";
        fiw2dr2EuXXTa.appendChild(fiw2dr4GQIutf);

        const cgoejl0EMdDUDXv9ecr0GbGfpOFiw2dr5JNIkLW =
          document.createElement("div");
        cgoejl0EMdDUDXv9ecr0GbGfpOFiw2dr5JNIkLW.className =
          "cgoejl-0 eMdDUD xv9ecr-0 gbGfpO fiw2dr-5 jNIkLW";
          cgoejl0EMdDUDXv9ecr0GbGfpOFiw2dr5JNIkLW.id=postId+"modalImg"+postId;
        fiw2dr4GQIutf.appendChild(cgoejl0EMdDUDXv9ecr0GbGfpOFiw2dr5JNIkLW);

        // riaction画像の表示
       
      // riaction画像の表示
      if (1 <= reactionX_rank && reactionX_rank <= 3) {
        const img_elementX = document.createElement("img");
        img_elementX.src = "img/1.jpg"; // 画像パス
        img_elementX.alt = "riaction"; // 代替テキスト
        img_elementX.width = 20; // 横サイズ（px）
        img_elementX.height = 20; // 縦サイズ（px）
        img_elementX.id = "img_elementX" + postId;
        img_elementX.style = "z-index: 4";
        img_elementX.className = "cgoejl-1 eUYbaa";
        cgoejl0EMdDUDXv9ecr0GbGfpOFiw2dr5JNIkLW.appendChild(img_elementX); //画像追加
      }
      if (1 <= reactionY_rank && reactionY_rank <= 3) {
        const img_elementY = document.createElement("img");
        img_elementY.src = "img/2.jpg"; // 画像パス
        img_elementY.alt = "riaction"; // 代替テキスト
        img_elementY.width = 20; // 横サイズ（px）
        img_elementY.height = 20; // 縦サイズ（px）
        img_elementY.id = "Modalimg_elementY" + postId;
        img_elementY.style = "z-index: 3";
        img_elementY.className = "cgoejl-1 eUYbaa";
        cgoejl0EMdDUDXv9ecr0GbGfpOFiw2dr5JNIkLW.appendChild(img_elementY); //画像追加
      }
      if (1 <= reactionZ_rank && reactionZ_rank <= 3) {
        const img_elementZ = document.createElement("img");
        img_elementZ.src = "img/3.jpg"; // 画像パス
        img_elementZ.alt = "riaction"; // 代替テキスト
        img_elementZ.width = 20; // 横サイズ（px）
        img_elementZ.height = 20; // 縦サイズ（px）
        img_elementZ.id = "Modalimg_elementZ" + postId;
        img_elementZ.style = "z-index: 2";
        img_elementZ.className = "cgoejl-1 eUYbaa";
        cgoejl0EMdDUDXv9ecr0GbGfpOFiw2dr5JNIkLW.appendChild(img_elementZ); //画像追加
      }
      if (1 <= reactionR_rank && reactionR_rank <= 3) {
        const img_elementR = document.createElement("img");
        img_elementR.src = "img/4.jpg"; // 画像パス
        img_elementR.alt = "riaction"; // 代替テキスト
        img_elementR.width = 20; // 横サイズ（px）
        img_elementR.height = 20; // 縦サイズ（px）
        img_elementR.id = "Modalimg_elementR" + postId;
        img_elementR.style = "z-index: 1";
        img_elementR.className = "cgoejl-1 eUYbaa";
        cgoejl0EMdDUDXv9ecr0GbGfpOFiw2dr5JNIkLW.appendChild(img_elementR); //画像追加
      }

      // リアクション数

      if (0 < reactionCount) {
        const cgoejl3IVJAZc = document.createElement("div");
        cgoejl3IVJAZc.innerText = reactionCount;
        cgoejl3IVJAZc.className = "cgoejl-3 iVJAZc";
        cgoejl3IVJAZc.id = "modalReactionCount" + postId;
        cgoejl0EMdDUDXv9ecr0GbGfpOFiw2dr5JNIkLW.appendChild(cgoejl3IVJAZc); //riactionの総数を表示
      }
        //   リアクション関連終わり
        // -------------------------------------
        const fiw2dr3EQtIoK = document.createElement("div");
        fiw2dr3EQtIoK.className = "fiw2dr-3 eQtIoK";
        fiw2dr1EVsNoo.appendChild(fiw2dr3EQtIoK);

        const sc1sxph3j0HRgZpf = document.createElement("div");
        sc1sxph3j0HRgZpf.className = "sc-1sxph3j-0 hRgZpf";
        fiw2dr3EQtIoK.appendChild(sc1sxph3j0HRgZpf);

        const sc1chgks10GYkhli = document.createElement("div");
        sc1chgks10GYkhli.className = "sc-1chgks1-0 gYkhli";
        sc1sxph3j0HRgZpf.appendChild(sc1chgks10GYkhli);

        const sc1chgks11LknWx = document.createElement("canvas");
        sc1chgks11LknWx.className = "sc-1chgks1-1 LknWx";
        sc1chgks11LknWx.width = "108";
        sc1chgks11LknWx.height = "108";
        sc1chgks10GYkhli.appendChild(sc1chgks11LknWx);

        const sc1chgks11LknWx1 = document.createElement("canvas");
        sc1chgks11LknWx1.className = "sc-1chgks1-1 LknWx";
        sc1chgks11LknWx1.width = "108";
        sc1chgks11LknWx1.height = "108";
        sc1chgks10GYkhli.appendChild(sc1chgks11LknWx1);

        const sc1chgks123deCReZ = document.createElement("div");
        sc1chgks123deCReZ.className = "sc-1chgks1-2 dECReZ";
        sc1chgks10GYkhli.appendChild(sc1chgks123deCReZ);

           // <!-- 以下riaction実装 -->

           
// modalの中のリアクション表示ボタン
let x = 0,
y = 0,
z = 0,
r = 0;
let flag = x + y + z + r;
let Rflag = x + y + z; //選択中かどうか
let Xflag = r + y + z; //選択中かどうか
let Yflag = x + r + z; //選択中かどうか
let Zflag = x + y + r; //選択中かどうか

recLoad(postId,sc1chgks123deCReZ,i,x,y,z,r,flag,Rflag,Xflag,Yflag,Zflag);

   
        const commentWakaugumi = document.createElement("div");
        commentWakaugumi.id = "commentWakaugumi";
        sc1bx44oc0FIEEMl.appendChild(commentWakaugumi);

        const fub27c0fbJmE = document.createElement("div");
        fub27c0fbJmE.className = "fub27c-0 fDbJmE";
        commentWakaugumi.appendChild(fub27c0fbJmE);

        const fub27c1bXMPVq = document.createElement("div");
        fub27c1bXMPVq.className = "fub27c-1 bXMPVq";
        fub27c0fbJmE.appendChild(fub27c1bXMPVq);

        const fub27c2gjDRWf = document.createElement("div");
        fub27c2gjDRWf.className = "fub27c-2 gjDRWf";
        fub27c2gjDRWf.innerText = "";
        fub27c1bXMPVq.appendChild(fub27c2gjDRWf);


        // const zw1zyy0EDxBzm = document.createElement("div");
        // zw1zyy0EDxBzm.className = "zw1zyy-0 eDxBzM";
        // sc1bx44oc3gtyQXa.appendChild(zw1zyy0EDxBzm);

        // const zw1zyy0EDxBzmElement = document.createElement("div");
        // zw1zyy0EDxBzmElement.id = "zw1zyy0EDxBzmElement";
        // zw1zyy0EDxBzm.appendChild(zw1zyy0EDxBzmElement);


        // const cu81fo2jTfkun = document.createElement("div");
        // cu81fo2jTfkun.className = "cu81fo-2 jTfkun";
        // cu81fo0DPWSiZ.appendChild(cu81fo2jTfkun);

        const sc1sxph3j0HRgZpf1 = document.createElement("div");
        sc1sxph3j0HRgZpf1.className = "sc-1sxph3j-0 hRgZpf";
        // cu81fo2jTfkun.appendChild(sc1sxph3j0HRgZpf1);

        const sc1chgks10GYwkhli = document.createElement("div");
        sc1chgks10GYwkhli.className = "sc-1chgks1-0 gYkhli";
        sc1sxph3j0HRgZpf.appendChild(sc1chgks10GYwkhli);

        const canvas101 = document.createElement("canvas");
        canvas101.className = "sc-1chgks1-1 LknWx";
        canvas101.width = 108;
        canvas101.height = 108;
        sc1chgks10GYwkhli.appendChild(canvas101);

        const canvas102 = document.createElement("canvas");
        canvas102.className = "sc-1chgks1-1 LknWx";
        canvas101.width = 108;
        canvas101.height = 108;
        sc1chgks10GYwkhli.appendChild(canvas102);

        // -----------------------コメントの画面
        const commentsElement = document.createElement("div");
        commentsElement.className = "commentsElement";
        sc1bx44oc0FIEEMl.appendChild(commentsElement);

        const commentPopular = document.createElement("div");
        commentPopular.id = "comment-popular";
        commentsElement.className = "hu2j89-0 o6jhm9-0 jzSyLu hzGenW";
        commentsElement.appendChild(commentPopular);


        // 以下がコメント動的生成



      });
      tgn9uw2BqeEAL.appendChild(tgn9uw3BJQtxM);

      const timelineTitle = document.createElement("span");
      timelineTitle.className = "title";
      console.log(title);
      timelineTitle.innerText = escapeHtml(title);
      console.log(escapeHtml(title));
      tgn9uw3BJQtxM.appendChild(timelineTitle);

      const uj732l0FiyggF = document.createElement("div");
      uj732l0FiyggF.className = "uj732l-0 fiyggF";
      timeLineArticle.appendChild(uj732l0FiyggF);

      const tgn9uw4PmuXC = document.createElement("div");
      tgn9uw4PmuXC.className = "tgn9uw-4 pmuXC";
      uj732l0FiyggF.appendChild(tgn9uw4PmuXC);

      const timelineContent = document.createElement("span");
      timelineContent.className = "content";
      if(content!=null){timelineContent.innerText = escapeHtml(content);}else{timelineContent.innerText = "";}
// <<<<<<< HEAD
// =======
      
// >>>>>>> 513f37cc19d41f292d7c257df21fc0a506ee08b7
      tgn9uw4PmuXC.appendChild(timelineContent);
      // --------------------

      const uj732l1Ixtzgq = document.createElement("div");
      uj732l1Ixtzgq.className = "uj732l-1 ixtzgq";
      timeLineArticle.appendChild(uj732l1Ixtzgq);

      // リアクション関連
      const uj732l2JWxgsr = document.createElement("div");
      uj732l2JWxgsr.className = "uj732l-2 jWxgsr";
      uj732l1Ixtzgq.appendChild(uj732l2JWxgsr);
      const cgoejl0EMdDUD = document.createElement("div");
      cgoejl0EMdDUD.className = "cgoejl-0 eMdDUD";
      cgoejl0EMdDUD.id="reactions"+postId;

      uj732l2JWxgsr.appendChild(cgoejl0EMdDUD);

      // リアクション画像

      const cgoejl2CeqRpS = document.createElement("div");
      cgoejl2CeqRpS.className = "cgoejl-2 ceqRpS";
      cgoejl2CeqRpS.id = "reactionsImg" + postId;
      cgoejl0EMdDUD.appendChild(cgoejl2CeqRpS);

      if (1 <= reactionX_rank && reactionX_rank <= 3) {
        const img_elementX = document.createElement("img");
        img_elementX.src = "img/1.jpg"; // 画像パス
        img_elementX.alt = "riaction"; // 代替テキスト
        img_elementX.width = 20; // 横サイズ（px）
        img_elementX.height = 20; // 縦サイズ（px）
        img_elementX.id = "img_elementX" + postId;
        img_elementX.style = "z-index: 4";
        img_elementX.className = "cgoejl-1 eUYbaa";
        cgoejl2CeqRpS.appendChild(img_elementX); //画像追加
      }
      if (1 <= reactionY_rank && reactionY_rank <= 3) {
        const img_elementY = document.createElement("img");
        img_elementY.src = "img/2.jpg"; // 画像パス
        img_elementY.alt = "riaction"; // 代替テキスト
        img_elementY.width = 20; // 横サイズ（px）
        img_elementY.height = 20; // 縦サイズ（px）
        img_elementY.id = "img_elementY" + postId;
        img_elementY.style = "z-index: 3";
        img_elementY.className = "cgoejl-1 eUYbaa";
        cgoejl2CeqRpS.appendChild(img_elementY); //画像追加
      }
      if (1 <= reactionZ_rank && reactionZ_rank <= 3) {
        const img_elementZ = document.createElement("img");
        img_elementZ.src = "img/3.jpg"; // 画像パス
        img_elementZ.alt = "riaction"; // 代替テキスト
        img_elementZ.width = 20; // 横サイズ（px）
        img_elementZ.height = 20; // 縦サイズ（px）
        img_elementZ.id = "img_elementZ" + postId;
        img_elementZ.style = "z-index: 2";
        img_elementZ.className = "cgoejl-1 eUYbaa";
        cgoejl2CeqRpS.appendChild(img_elementZ); //画像追加
      }
      if (1 <= reactionR_rank && reactionR_rank <= 3) {
        const img_elementR = document.createElement("img");
        img_elementR.src = "img/4.jpg"; // 画像パス
        img_elementR.alt = "riaction"; // 代替テキスト
        img_elementR.width = 20; // 横サイズ（px）
        img_elementR.height = 20; // 縦サイズ（px）
        img_elementR.id = "img_elementR" + postId;
        img_elementR.style = "z-index: 1";
        img_elementR.className = "cgoejl-1 eUYbaa";
        cgoejl2CeqRpS.appendChild(img_elementR); //画像追加
      }
     
      // リアクション数
     
      if (0 < reactionCount) {
        const cgoejl3IVJAZc = document.createElement("div");
        cgoejl3IVJAZc.innerText = reactionCount;
        cgoejl3IVJAZc.className = "cgoejl-3 iVJAZc";
        cgoejl3IVJAZc.id = "reactionCount" + postId;
        cgoejl0EMdDUD.appendChild(cgoejl3IVJAZc); //riactionの総数を表示
      }
    });

    postList.concat(postListRevers.reverse) ;
    console.log(recentlyDate);
  }

  // 上までスクロールした時に読む込む
});
//
