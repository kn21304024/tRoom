package thread;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import bean.Post;
import conversion.Json;
import conversion.SqlDate;
import dao.PostDAO;

/**
 * Servlet implementation class SearchFoward
 */
@WebServlet("/SearchFoward")
public class SearchFoward extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public SearchFoward() {
		super();
		// TODO Auto-generated constructor stub
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		HttpSession session = request.getSession();

		PostDAO postdao = new PostDAO();
		List<Post> postLists = null;
		List<Post> postList = null;
		String jsonPostList = null;
		List<Post> reverseList = new ArrayList<Post>();
		SqlDate sqldate=new SqlDate();

		//jsonの型を作ってJSONで書かれたPostListの配列を渡している。
		//この時文字列で返ってくるためStringで返す。
		conversion.Json json = new Json();
		try {
			postList = postdao.searchFoward(sqldate.longToDate(Long.parseLong(request.getParameter("recentlyDate"))));
			//			画面の上部に一つ一つ追加していきたいから逆にする
			for (int i = postList.size() - 1; i >= 0; i--) {
				reverseList.add(postList.get(i));
			}
			jsonPostList = json.toJson(reverseList);//0が一番古い末尾が一番新しい

			postList.addAll(postLists);//postListsの末尾にpostListを結合
			//			session情報に新たにリストを追加してと保存
			session.setAttribute("postLists", postList);
		} catch (Exception e) {

			e.printStackTrace();
		}

		//JSONの出力
		response.setContentType("text/html;charset=UTF-8");
		response.getWriter().write(jsonPostList);//responseに渡された値をセットする。

	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
