package thread;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import bean.Reaction;
import bean.User;
import conversion.Json;
import dao.PostReactionDAO;

/**
 * Servlet implementation class RectionCheck
 */
@WebServlet("/RectionCheck")
public class RectionCheck extends HttpServlet {
	private static final long serialVersionUID = 1L;

    /**
     * @see HttpServlet#HttpServlet()
     */
    public RectionCheck() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
 List<Reaction> list=null;
		HttpSession session = request.getSession();
		//もしすでにsessionが発行されていたらそのIDを獲得,発行されていなかったら新たに発行
	User user=(User)session.getAttribute("user");
	int userId=user.getUserId();
	int postId=Integer.parseInt(request.getParameter("postId"));
	PostReactionDAO dao=new PostReactionDAO();

	try {
		 list=dao.check(postId, userId);
	} catch (Exception e) {
		// TODO 自動生成された catch ブロック
		e.printStackTrace();
	}
	conversion.Json json = new Json();
	String List = json.toJson(list);
	//JSONの出力
	response.setContentType("text/html;charset=UTF-8");
	response.getWriter().write(List);//responseに渡された値をセットする。



	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
