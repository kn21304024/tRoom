package post;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import bean.User;
import dao.PostDAO;

@WebServlet(urlPatterns ={"/AddPost"})
public class AddPostServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		response.setContentType("text/html; charset=UTF-8");
		request.setCharacterEncoding("UTF-8");
		HttpSession session = request.getSession();
		//もしすでにsessionが発行されていたらそのIDを獲得,発行されていなかったら新たに発行

		String postTitle = request.getParameter("postTitle");
		String postContent = request.getParameter("postContent");
  	    String category = request.getParameter("category");
 		int cate = Integer.parseInt(category);

		User user = (User)session.getAttribute("user");
		int userId = user.getUserId();

		if(postTitle.isEmpty()) {
			String errorMessage = "タイトルは空白です。";
			request.setAttribute("errorMessage", errorMessage);
			request.getRequestDispatcher("./post/addpost-error.jsp").forward(request, response);
		}
		PostDAO postDao = new PostDAO();
		try {

			int post = postDao.insert(postTitle, postContent, cate, userId);
			if(post == 1){
				 response.sendRedirect("timeLine.html");
//				request.getRequestDispatcher("./timeLine.html").forward(request, response);
			}
		}catch(Exception e) {

		}

	}

}