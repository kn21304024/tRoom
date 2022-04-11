package tool;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import bean.User;

public class CheckLogin {
	 void check(HttpServletRequest request,HttpServletResponse response) throws IOException {
		HttpSession session = request.getSession();
		//		もしすでにsessionが発行されていたらそのIDを獲得,発行されていなかったら新たに発行
		User user=null;
		user=(User)session.getAttribute("user");
		if(user==null)  response.sendRedirect("/user/login-error.jsp");
	}
}
