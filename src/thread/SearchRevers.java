package thread;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import bean.Post;
import conversion.Json;
import conversion.SqlDate;
import dao.PostDAO;

/**
 * Servlet implementation class SearchRevers
 */
@WebServlet("/SearchRevers")
public class SearchRevers extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		PostDAO postdao = new PostDAO();
		SqlDate sqldate=new SqlDate();

		List<Post> postList = null;
		try {
			postList = postdao.searchRevers(sqldate.longToDate(Long.parseLong(request.getParameter("lastDate"))));
		} catch (Exception e) {

			e.printStackTrace();
		}
		//jsonの型を作ってJSONで書かれたPostListの配列を渡している。
		//この時文字列で返ってくるためStringで返す。
		conversion.Json json = new Json();
		String jsonPostList = json.toJson(postList);
		//JSONの出力
		response.setContentType("text/html;charset=UTF-8");
		response.getWriter().write(jsonPostList);//responseに渡された値をセットする。
	}
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		doGet(request, response);
	}

}
