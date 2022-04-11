<%@ page language="java" contentType="text/html; charset=UTF-8"
pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>新規投稿</title>
    <link
      rel="stylesheet"
      type="text/css"
      href="css/addpost-input.css"
      media="all"
    />
  </head>
  <body>
    <div class="bxef95-0 nnDdP">
      <div class="dz5d85-0 jrWrwC">
        <div class="dz5d85-1 nhmUi">
          <a title="T-Room" class="dqjqtp-0 dKAVTI" href="../timeLine.html"
            ><img class="sc-139xjgq-0 dmPsjJ" src="t-room.jpg" alt="T-Room"
          /></a>
          <div class="bxef95-1 jUIPQC">
            <div class="dj0ioy-0 erGtSy">

            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="addpost">
      <!-- <h2 class="form-title">新規投稿</h2> -->
      <form action="../AddPost" method="post">
        <br />
        <select class="select" name="category" id="select"></select
        ><br /><br />
        <input
          maxLength="25"
          type="text"
          class="title"
          name="postTitle"
          placeholder="タイトル"
          　style="height: 40px;"
        /><br />
        <textarea
          maxLength="2000"
          class="content"
          name="postContent"
          placeholder="本文"
          　
        ></textarea>
        <input class="submit" type="submit" value="投稿" />
      </form>
    </div>
    <script
      type="text/javascript"
      charset="UTF-8"
      src="categoryLoad.js"
    ></script>
    <%@include file="../html/footer.html"%>
  </body>
</html>
