package post;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import conversion.Json;
import dao.CategoryDAO;

/**
 * Servlet implementation class SerchCaategory
 */
@WebServlet("/SerchCategory")
public class SerchCategory extends HttpServlet {

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		CategoryDAO categoryDao = new CategoryDAO();
		List<String> categoryList = null;
		try {
			categoryList = categoryDao.categorySearch();
		} catch (Exception e) {

			e.printStackTrace();
		}
		//jsonの型を作ってJSONで書かれたPostListの配列を渡している。
		//この時文字列で返ってくるためStringで返す。
		conversion.Json json = new Json();
		String jsonPostList = json.toJson(categoryList);
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
