package user;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import bean.User;
import dao.UserDAO;
@WebServlet(urlPatterns = { "/Register" })
public class RegisterServlet extends HttpServlet {
	@Override
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO 自動生成されたメソッド・スタブ

		response.setContentType("text/html; charset=UTF-8");
		request.setCharacterEncoding("UTF-8");

		String userName=request.getParameter("userName");
		String loginId = request.getParameter("loginId");
		String pass = request.getParameter("pass");
		int flag = 0;

		User user=new User();
		user.setLoginId(loginId);
		user.setLoginPassword(pass);
		user.setUserName(userName);

		if(userName.isEmpty()||loginId.isEmpty()||pass.isEmpty()) {
			String errorMessage = "空欄があります。";
			request.setAttribute("errorMessage", errorMessage);
			request.getRequestDispatcher("./user/register-error.jsp").forward(request, response);
		}else if(pass.length() < 6 ) {
			String errorMessage = "パスワードは6文字以上です。";
			request.setAttribute("errorMessage", errorMessage);
			request.getRequestDispatcher("./user/register-error.jsp").forward(request, response);
		}else if(!loginId.contains("@ga.ttc.ac.jp")) {
			String errorMessage = "東京テクニカルカレッジのメールのみです。";
			request.setAttribute("errorMessage", errorMessage);
			request.getRequestDispatcher("./user/register-error.jsp").forward(request, response);
		}

		UserDAO userdao=new UserDAO();
		try {
			User inspectUser = userdao.inspection(loginId);
			if(inspectUser != null){
				String errorMessage = "既に登録されているメールアドレスです。";
				request.setAttribute("errorMessage", errorMessage);
				request.getRequestDispatcher("./user/register-error.jsp").forward(request, response);
			}

			flag=userdao.insert(user);
			if(flag==1){
				 response.sendRedirect("./user/login-input.jsp");
			}

		} catch (Exception e) {
			// TODO 自動生成された catch ブロック
			e.printStackTrace();
		}



	}
}
