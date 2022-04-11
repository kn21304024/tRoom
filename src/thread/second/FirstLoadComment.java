package thread.second;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import bean.Comment;
import conversion.Json;
import dao.CommentDAO;

/**
 * Servlet implementation class FirstLoadComment
 */
@WebServlet("/FirstLoadComment")
public class FirstLoadComment extends HttpServlet {
	private static final long serialVersionUID = 1L;

    /**
     * @see HttpServlet#HttpServlet()
     */
    public FirstLoadComment() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		HttpSession session = request.getSession();
		//		//		もしすでにsessionが発行されていたらそのIDを獲得,発行されていなかったら新たに発行
//				User user=null;
//				user=(User)session.getAttribute("user");
//				 user = (User) session.getAttribute("user");//getAttributeからユーザー情報を受け取り、userに渡す。

		CommentDAO commentDao = new CommentDAO();
		List<Comment> commentList = null;
		try {
			commentList = commentDao.searchComment(Integer.parseInt(request.getParameter("postId")));

		} catch (Exception e) {
			e.printStackTrace();
		}
		//jsonの型を作ってJSONで書かれたPostListの配列を渡している。
		//この時文字列で返ってくるためStringで返す。
		conversion.Json json = new Json();
		String jsonPostList = json.toJson(commentList);
		//JSONの出力
		response.setContentType("text/html;charset=UTF-8");
		response.getWriter().write(jsonPostList);//responseに渡された値をセットする。
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
