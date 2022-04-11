package thread;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import bean.Post;
import dao.PostDAO;

@WebServlet("/categoryTop")
public class CategoryTopServlet extends HttpServlet {

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String categoryId = request.getParameter("categoryId");
		int category = Integer.parseInt(categoryId);

		PostDAO postdao = new PostDAO();
		try {
			List<Post> list = postdao.category(category);
			request.getRequestDispatcher("").forward(request, response);
		}catch(Exception e) {

		}

	}

}
