package dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;



public class CategoryDAO extends DAO {

	public List<String> categorySearch() throws Exception {

			//接続開始...
			Connection con = getConnection();
			List<String> category_list = new ArrayList<String>();
			PreparedStatement st = con.prepareStatement(
					"SELECT category_name,post_category FROM category ORDER BY post_category ASC ");

			//データベースにSELECT命令を実行する
			ResultSet rs = st.executeQuery();

			while (rs.next()) {
				//max件までpostインスタンスを返す
				category_list.add(rs.getString("category_name"));
				//			1件１件格納
			}

			//データベースを終了
			st.close();
			//接続を終了.....
			con.close();
			//sqlが実行されたら必ず切断のメソッドが必要
			return category_list;
		}

}



