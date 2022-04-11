package post;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import bean.User;
import dao.CommentDAO;

/**
 * Servlet implementation class CommentServlet
 */
@WebServlet("/CommentServlet")
public class CommentServlet extends HttpServlet {

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		HttpSession session = request.getSession();
		//もしすでにsessionが発行されていたらそのIDを獲得,発行されていなかったら新たに発行
		String comment = request.getParameter("comment");

		User user = (User)session.getAttribute("userId");
		int postId = Integer.parseInt(request.getParameter("postId"));

		CommentDAO commentDao = new CommentDAO();
		try {
			int userComment = commentDao.insert(postId, user.getUserId(), comment);
//			if(userComment == 1) {
//				response.sendRedirect("timeLine.html");
//			}
		}catch(Exception e) {

		}
	}

}
