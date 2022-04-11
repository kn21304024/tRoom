<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>ログイン</title>
<link rel="stylesheet" type="text/css" href="user/css/login.css" media="all" />
</head>
<body>
    <div class="container" onclick="onclick">
        <div class="top"></div>
        <div class="bottom"></div>
        <form class="center" id="formId"  action="Login" method="post" >
          <h2>サインインしてください</h2>
          <p>${errorMessage}</p>
          <input type="email" id="email" name="loginId" placeholder="メール"/>
          <input type="password" name="pass" id="pass" placeholder="パスワード"/>
          <a href="/t_room/user/register-input.jsp">新規登録</a>
          <p class="submit"><input type="submit" value="ログイン" id="submit" ></p>
          <h2>&nbsp;</h2>
          <p id="mess"></p>
        </form>
      </div>
      <script type="text/javascript" charset="UTF-8" src="inputCheck.js"></script>
<%= new java.util.Date() %>

<%@include file="../html/footer.html"%>
