package dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import bean.Comment;
import bean.User;

public class CommentReactionDAO extends DAO {

	private final static int max = 4;//リアクションの種類

	public int insert(Comment comment, User user, int reaction) throws Exception {

		//接続開始...
		Connection con = getConnection();

		//データベースのcomment_reaction_statusにinsertするコード......
		PreparedStatement st = con.prepareStatement(
				"INSERT INTO comment_reaction_status(post_id, user_id,reaction_status) VALUES(?,?,?)");
		//valueを追加する....
		st.setInt(1, comment.getCommentId());
		st.setInt(2, user.getUserId());
		st.setInt(3, reaction);

		//データを変更するコード
		int line = st.executeUpdate();
		//データベースを終了
		st.close();
		//接続を終了.....
		con.close();
		//sqlが実行されたら必ず切断のメソッドが必要
		//変更を成功だったら１、失敗したら0;
		return line;
	}

	//	コメントに対するリアクションをカウント(
	public int[] showCount(Comment comment) throws Exception {

		int[] reactions = new int[max];
		//接続開始...
		Connection con = getConnection();
		//データベースのcomment_idを探してくれるコード......
		PreparedStatement st;
		st = con.prepareStatement(
				"SELECT COUNT(*) FROM comment_reaction_status WHERE comment_id=? "
						+ "GROUP BY reqction_status");
		//CommentIdのvalueを追加する....
		st.setInt(1, comment.getCommentId());

		//sqlを実行して結果がResultSet型のrsに保存される.....
		ResultSet rs = st.executeQuery();

		while (rs.next()) {

			//			リアクションの数をそれぞれ配列にカウントUP
			while (rs.next()) {
				int status = rs.getInt("reaction_status");
				int count = rs.getInt("count(*)");
				reactions[status] = count;
			}

		}
		//データベースを終了
		st.close();
		//接続を終了.....
		con.close();
		//sqlが実行されたら必ず切断のメソッドが必要
		//変更を成功だったら１、失敗したら0;
		return reactions;

	}

	//	コメントに対するリアクションの削除
	public int delete(Comment comment, User user) throws Exception {
		//接続開始...
		Connection con = getConnection();
		//comment.getCommentIdメソッドを実行してint型のcommentIdに渡す...
		int commentId = comment.getCommentId();
		//user.getUserIdメソッドを実行してint型のuserIdに渡す....
		int userId = user.getUserId();
		//データベースのcomment_reaction_statusにあるcomment_idをdeleteするコード.....
		PreparedStatement st = con.prepareStatement(
				"DELETE FROM comment_reaction_status WHERE comment_id = ? AND user_id=?");

		st.setInt(1, commentId);
		st.setInt(2, userId);
		int line = st.executeUpdate();
		//データベースを終了
		st.close();
		//接続を終了.....
		con.close();
		//sqlが実行されたら必ず切断のメソッドが必要
		//変更を成功だったら１、失敗したら0;
		return line;

	}

}
