package thread;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import bean.User;
import dao.PostReactionDAO;

/**
 * Servlet implementation class ReactionAdd
 */
@WebServlet("/ReactionAdd")
public class ReactionAdd extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public ReactionAdd() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		HttpSession session = request.getSession();
		//もしすでにsessionが発行されていたらそのIDを獲得,発行されていなかったら新たに発行
	User user=(User)session.getAttribute("user");
	int userId=user.getUserId();
	int postId=Integer.parseInt(request.getParameter("postId"));
	PostReactionDAO dao=new PostReactionDAO();
	int reaction=Integer.parseInt(request.getParameter("reactionId"));
	
	try {
		dao.insert(postId, userId, reaction);
	} catch (Exception e) {
		// TODO 自動生成された catch ブロック
		e.printStackTrace();
	}
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
