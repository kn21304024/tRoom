package dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import bean.Reaction;

public class PostReactionDAO extends DAO {
	private final int max = 4;

	//riaction追加  //home
	public int insert(int postId, int userId, int reaction) throws Exception {

		//connection
		Connection con = getConnection();

		PreparedStatement st = con.prepareStatement(
				"INSERT INTO post_reaction_status(post_id,user_id,reaction_status) VALUES(?,?,?)");
		st.setInt(1, postId);
		st.setInt(2, userId);
		st.setInt(3, reaction);
		int line = st.executeUpdate();

		return line;
	}

	public List<Reaction> check(int postId, int userId) throws Exception {

		//connection
		Connection con = getConnection();

		PreparedStatement st = con.prepareStatement(
				"SELECT REACTION_STATUS FROM  post_reaction_status WHERE post_id=? AND user_id=?");
		st.setInt(1, postId);
		st.setInt(2, userId);

		//データベースでSELECT命令を実行する
		ResultSet rs = st.executeQuery();
		List<Reaction> reaction = new ArrayList<Reaction>();
		while (rs.next()) {
			//max件までpostインスタンスを返す
			Reaction rect=new Reaction();
			rect.setReactionStatas(rs.getInt("REACTION_STATUS"));
			reaction.add(rect);
		}
		//close()を実行するとResultSetも破棄される
		st.close();
		con.close();
		return reaction;
		//postをmax件格納した配列を返す
	}



	//	投稿に対するリアクションの削除
	public int delete(int postId, int userId) throws Exception {
		Connection con = getConnection();

		PreparedStatement st = con.prepareStatement(
				"DELETE FROM post_reaction_status WHERE post_id = ? AND user_id=?");
		st.setInt(1, postId);
		st.setInt(2, userId);
		int line = st.executeUpdate();

		st.close();
		con.close();

		return line;

	}
}
