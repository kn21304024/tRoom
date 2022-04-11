<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>

<head>
  <meta charset="UTF-8">
  <title>会員登録</title>
  <link rel="stylesheet" href="css/register.css">
</head>

<body>
  <div class="container" onclick="onclick">
    <div class="top"></div>
    <div class="bottom"></div>
    <form class="center" action="../Register" method="post">
      <h2> 会員登録 </h2>
      <input type="text" name="userName" maxLength="12" placeholder="名前" />
      <input type="email" name="loginId" placeholder="メール" />
      <input type="password" name="pass" maxLength="256" placeholder="パスワード" />
      <a href="login-input.jsp">既に登録済みの方はこちらから</a>
      <p class="submit"><input type="submit" value="登録" class="submit"></p>
      <h2>&nbsp;</h2>
    </form>
  </div>
</body>

</html>
<%@include file="../html/footer.html"%>