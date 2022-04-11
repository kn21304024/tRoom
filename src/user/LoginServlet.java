package user;

import java.io.IOException;
import java.util.Optional;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import bean.User;
import dao.UserDAO;

@WebServlet(urlPatterns = { "/Login" })
public class LoginServlet extends HttpServlet {

	public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		HttpSession session = request.getSession();
		//		もしすでにsessionが発行されていたらそのIDを獲得,発行されていなかったら新たに発行
		String loginId = request.getParameter("loginId");
		String pass = request.getParameter("pass");

		if(loginId.isEmpty()||pass.isEmpty()) {
			String errorMessage = "空欄があります。";
			request.setAttribute("errorMessage", errorMessage);
			request.getRequestDispatcher("./user/login-error.jsp").forward(request, response);
		}

		UserDAO userDao = new UserDAO();
		try {
			User user = userDao.search(loginId, pass);

			if (user != null) {
				//sessionIDの固定化攻撃を防止するためにsessionIDの新規発行
				//			if(session!=null) {session.invalidate();//sessionの破棄
				Optional<HttpSession> op = Optional.ofNullable(session);
				op.ifPresent((arg) -> arg.invalidate());//arg=session

				session = request.getSession();
				session.setAttribute("user", user);
				 response.sendRedirect("./timeLine.html");

			} else{
				Integer tryCount = (Integer) session.getAttribute("tryCount");
				//				ログイン試行回数を記録
				if(tryCount==null) tryCount=0;//nullだった場合は初回接続と考え０をセット
				session.setAttribute("tryCount", ++tryCount);
				//					ゆくゆくはブルートフォース攻撃に備え制限
				String errorMessage = "アカウントかパスワードが間違いました。";
				request.setAttribute("errorMessage", errorMessage);
				request.getRequestDispatcher("./user/login-error.jsp").forward(request, response);
			}

		} catch (Exception e) {

		}

	}
}