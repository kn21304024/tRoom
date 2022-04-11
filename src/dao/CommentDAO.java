package dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import bean.Comment;

public class CommentDAO extends DAO {

	final static int commentMax = 50;//commentの最大読み込み数
	final static int reactionMax = 4;//commentの最大読み込み数

	//コメント登録するメソッド
	public int insert(int postId, int userId, String content) throws Exception {
		Connection con = getConnection();
		//		データソースの接続情報を獲得し接続開始
		//		SQL文を読み込むインスタンスを作成
		PreparedStatement st = con.prepareStatement(
				"INSERT INTO comments(post_id, user_id,comment_content) VALUES(?,?,?)");
		//		コメントテーブルにPostインスタンスのpostID,UserインスタンスのusrId,commentの内容を登録するsql
		st.setInt(1, postId);
		st.setInt(2, userId);
		st.setString(3, content);

		int line = st.executeUpdate();
		//		INSERT文やデータを更新したり追加削除するexecuteUpdateメソッドは引数に変更された行数が戻り値としてかえってくる

		st.close();
		con.close();
		//	接続を終了し,データプールに戻す

		return line;
		//成功したら1,失敗したら0
	}

	//コメントを編集したいときに、データを呼び出すメソッド
	public Comment select(Comment comment) throws Exception {
		Connection con = getConnection();
		//		データソースの接続情報を獲得し接続開始
		int commentId = comment.getCommentId();
		//		編集したいコメントIDを変数に格納
		PreparedStatement st;
		//postsテーブルでpost_idが一致したら、post_titleとpost_contentを呼び出す
		st = con.prepareStatement(
				"SELECT comment_content FROM comments WHERE comment_id=?");
		st.setInt(1, commentId);

		//データベースでSELECT命令を実行する
		ResultSet rs = st.executeQuery();

		while (rs.next()) {
			comment = new Comment();
			comment.setCommentContent(rs.getString("comment_content"));
		}
		//接続切断
		st.close();
		con.close();

		return comment;
	}

	//コメント編集ができたときに処理するメソッド
	public int update(Comment comment, String newCommentContent) throws Exception {
		Connection con = getConnection();
		//		データソースの接続情報を獲得し接続開始
		int commentId = comment.getCommentId();
		//		編集したいコメントIDを変数に格納
		//		/		SQL文を読み込むインスタンスを作成
		PreparedStatement st = con.prepareStatement(
				"UPDATE comments SET comment_content = ? WHERE commentID = ?");
		//		commentsテーブルのcommentIDが一致した内容を更新する
		st.setString(1, newCommentContent);
		st.setInt(2, commentId);
		int line = st.executeUpdate();
		//		データを更新したり追加削除するexecuteUpdateメソッドは引数に変更された行数が戻り値としてかえってくる
		st.close();
		con.close();
		//		接続を終了し,データプールに戻す

		return line; //成功したら1,失敗したら0
	}

	//コメント削除を処理するメソッド
	public int delete(Comment comment) throws Exception {
		Connection con = getConnection();

		//		データソースの接続情報を獲得し接続開始
		int commentId = comment.getCommentId();
		//		commentインスタンスのcommentIdを変数に格納

		//		SQL文を読み込むインスタンスを作成
		PreparedStatement st = con.prepareStatement(
				"DELETE FROM comments WHERE comment_id = ?");
		st.setInt(1, commentId);
		//		commentIdが一致したものをcomments表から削除する
		int line = st.executeUpdate();
		//		データを更新したり追加削除するexecuteUpdateメソッドは引数に変更された行数が戻り値としてかえってくる

		st.close();
		con.close();
		//		接続を終了し,データプールに戻す
		return line;
		//成功したら1,失敗したら0
	}

	//	投稿に紐ずいたcommentを一覧で返すメソッド
	//	投稿を日付で検索するメソッド(現在→古いもの)
	public List<Comment> searchComment(int postId) throws Exception {
		Connection con = getConnection();
		List<Comment> comment_List = new ArrayList<Comment>();
		PreparedStatement st;
		//		内部結合(userNameを取得するために)
		st = con.prepareStatement(
				"SELECT comment_id,cm.post_id,cm.user_id,cm.comment_date"
				        + ",comment_content,us.user_name"
				        + ",(SELECT COUNT(*) FROM comment_reaction_status cr WHERE cm.comment_id=cr.comment_id "
				        + " AND reaction_status=1 GROUP BY reaction_status) AS good"
				        + " FROM comments cm"
				        + " INNER JOIN users us ON cm.user_id=us.user_id"
				        + " WHERE post_id=? "
				        + " ORDER BY comment_date DESC FETCH FIRST ?  ROWS ONLY");
		//		index0→一番最新　inexlast→一番古い
		st.setInt(1, postId);//現在表示されている投稿
		st.setInt(2, commentMax);//何件まで表示するのか
		ResultSet rs = st.executeQuery();
		//		select文を実行してresultset型のrsに格納
		while (rs.next()) {
			//			max件までCommentインスタンスを返す
			Comment comment = null;
			//			beanのCommentのインスタンスを作成
			comment = new Comment();
			comment.setCommentId(rs.getInt("comment_id"));
			comment.setUserId(rs.getInt("user_id"));
			comment.setCommentContent(rs.getString("comment_content"));
			comment.setUserName(rs.getString("user_name"));
			comment.setCommentDate(rs.getString("comment_date"));
			//			リアクション数を獲得
			comment.setReactionX(rs.getInt("good"));
			comment_List.add(comment);
			//			1件１件格納
		}
		return comment_List;
		//		commentのインスタンスをリストに格納し戻り値として返還
	}

}
