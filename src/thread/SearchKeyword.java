package thread;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import bean.Post;
import bean.User;
import conversion.Json;
import dao.PostDAO;
/**
 * Servlet implementation class SerachServlet
 */
@WebServlet("/SerachServlet")
public class SearchKeyword extends HttpServlet {
	private static final long serialVersionUID = 1L;
	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doPost(req, resp);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		HttpSession session = request.getSession();
		//		//		もしすでにsessionが発行されていたらそのIDを獲得,発行されていなかったら新たに発行
				User user=null;
				user=(User)session.getAttribute("user");
//				if(user==null)  response.sendRedirect("user/login-input.jsp");
				 user = (User) session.getAttribute("user");//getAttributeからユーザー情報を受け取り、userに渡す。

		PostDAO postdao = new PostDAO();
		List<Post> postList = null;
		try {
			String keyword = request.getParameter("keyword");
			postList = postdao.searchKeyword(keyword);
			//(request.getParameter("q"))
			session.setAttribute("postLists", postList);
			//			リストをsession情報として保存
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
}

