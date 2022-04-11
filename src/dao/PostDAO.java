package dao;

import java.sql.Connection;
import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import bean.Post;

public class PostDAO extends DAO {

	private final int postMax = 5;
	//	何件まで返すかの指定

	private final static int reactionMax = 4;//ractionの種類

	//投稿をするメソッド
	public int insert(String title, String content, int postCategory, int userId) throws Exception {
		//接続開始
		Connection con = getConnection();
		//postsテーブルにINSERTをする
		PreparedStatement st = con.prepareStatement(
				"INSERT INTO posts(post_title,post_content,post_category,user_id) VALUES(?,?,?,?)");
		st.setString(1, title);
		st.setString(2, content);
		st.setInt(3, postCategory);
		st.setInt(4, userId);

		//データベースで更新する
		int line = st.executeUpdate();

		//接続切断
		st.close();
		con.close();

		return line;
	}

	//投稿を編集したいときに、データを呼び出すメソッド
	public Post select(Post post) throws Exception {
		//接続開始
		Connection con = getConnection();

		int postId = post.getPostId();

		PreparedStatement st;
		//postsテーブルでpost_idが一致したら、post_titleとpost_contentを呼び出す
		st = con.prepareStatement(
				"SELECT post_title, post_content FROM posts WHERE post_id=?");
		st.setInt(1, postId);

		//データベースでSELECT命令を実行する
		ResultSet rs = st.executeQuery();

		while (rs.next()) {
			post = new Post();
			post.setPostTitle(rs.getString("post_title"));
			post.setPostContent(rs.getString("post_content"));
		}
		//接続切断
		st.close();
		con.close();

		return post;
	}

	//投稿が編集できたときに処理するメソッド
	public int update(Post post, String title, String content) throws Exception {
		//接続開始
		Connection con = getConnection();

		int postId = post.getPostId();
		//postsテーブルにUPDATEをする
		PreparedStatement st = con.prepareStatement(
				"UPDATE posts SET post_title = ?, post_content = ? WHERE post_id = ?");
		st.setString(1, title);
		st.setString(2, content);
		st.setInt(3, postId);

		//データベースで更新する
		int line = st.executeUpdate();
		//接続切断
		st.close();
		con.close();
		//成功したときに1、失敗したときに0で返す
		return line;
	}

	//投稿を削除するメソッド
	public int delete(Post post) throws Exception {
		//接続開始
		Connection con = getConnection();
		//postIdの値を受け取る
		int postId = post.getPostId();

		//postIdが一致したときにその行を削除する
		PreparedStatement st = con.prepareStatement(
				"DELETE FROM posts WHERE post_id = ?");
		st.setInt(1, postId);
		//データベースで更新する
		int line = st.executeUpdate();
		//接続切断
		st.close();
		con.close();
		//成功したときに1、失敗したときに0で返す
		return line;

	}

	//	投稿を文字列で検索するメソッド
	public List<Post> searchKeyword(String keyword) throws Exception {
		//接続開始
		Connection con = getConnection();
		List<Post> post_List = new ArrayList<Post>();

		PreparedStatement st;

		//postsテーブルでpost_titleで指定した文字を検索する
		st = con.prepareStatement(
				"SELECT post_id,u.user_id,user_name,post_title,post_content,category_name,post_date"
						+ ",(SELECT COUNT(*) FROM post_reaction_status pr WHERE pr.post_id=p.post_id AND reaction_status=0"
						+ " GROUP BY reaction_status) AS reactionX"
						+ ",(SELECT COUNT(*) FROM post_reaction_status pr WHERE pr.post_id=p.post_id AND reaction_status=1"
						+ " GROUP BY reaction_status) AS reactionY"
						+ ",(SELECT COUNT(*) FROM post_reaction_status pr WHERE pr.post_id=p.post_id AND reaction_status=2"
						+ " GROUP BY reaction_status) AS reactionZ"
						+ ",(SELECT COUNT(*) FROM post_reaction_status pr WHERE pr.post_id=p.post_id AND reaction_status=3"
						+ " GROUP BY reaction_status) AS reactionR"
						+ " FROM posts p INNER JOIN users u ON p.user_id=u.user_id "
						+ "INNER JOIN category c ON c.post_category=p.post_category"
						+ " WHERE post_date < SYSDATE AND post_title LIKE ?"
						+ " ORDER BY post_date DESC FETCH FIRST ? ROWS ONLY");
		st.setString(1, "%"+keyword+"%");
		st.setInt(2, postMax);

		//データベースでSELECT命令を実行する
		ResultSet rs = st.executeQuery();

		while (rs.next()) {
			//max件までpostインスタンスを返す
			Post post = null;
			PostReactionDAO pr = null;
			post = new Post();
			post.setPostId(rs.getInt("post_id"));
			post.setUserId(rs.getInt("user_id"));
			post.setUserName(rs.getString("user_name"));
			post.setPostTitle(rs.getString("post_title"));
			post.setPostContent(rs.getString("post_content"));
			post.setPostCategory(rs.getString("post_title"));
			post.setPostDate(rs.getDate("post_date"));
			post.setReactionX(rs.getInt("reactionX"));
			post.setReactionY(rs.getInt("reactionY"));
			post.setReactionZ(rs.getInt("reactionZ"));
			post.setReactionR(rs.getInt("reactionR"));
			post_List.add(post);

		}

		//close()を実行するとResultSetも破棄される
		st.close();
		con.close();
		return post_List;
		//postをmax件格納した配列を返す
	}

	//	投稿を上から順に表示するメソッド(現在時刻→古いもの)
	public List<Post> searchFirst() throws Exception {
		//接続開始
		Connection con = getConnection();
		List<Post> postList = new ArrayList<Post>();

		PreparedStatement st;
		//postsテーブルでpost_dateで現在より古い投稿を検索する
		st = con.prepareStatement(
				"SELECT post_id,u.user_id,user_name,post_title,post_content,category_name,post_date"
						+ ",(SELECT COUNT(*) FROM post_reaction_status pr WHERE pr.post_id=p.post_id AND reaction_status=0"
						+ " GROUP BY reaction_status) AS reactionX"
						+ ",(SELECT COUNT(*) FROM post_reaction_status pr WHERE pr.post_id=p.post_id AND reaction_status=1"
						+ " GROUP BY reaction_status) AS reactionY"
						+ ",(SELECT COUNT(*) FROM post_reaction_status pr WHERE pr.post_id=p.post_id AND reaction_status=2"
						+ " GROUP BY reaction_status) AS reactionZ"
						+ ",(SELECT COUNT(*) FROM post_reaction_status pr WHERE pr.post_id=p.post_id AND reaction_status=3"
						+ " GROUP BY reaction_status) AS reactionR"
						+ " FROM posts p INNER JOIN users u ON p.user_id=u.user_id "
						+ "INNER JOIN category c ON c.post_category=p.post_category"
						+ " WHERE post_date < SYSDATE"
						+ " ORDER BY post_date DESC FETCH FIRST ? ROWS ONLY");
		//index0→一番最新　inexlast→一番古い
		st.setInt(1, postMax);

		//データベースでSELECT命令を実行する
		ResultSet rs = st.executeQuery();

		while (rs.next()) {
			//max件までpostインスタンスを返す
			Post post = null;
			//			PostReactionDAO pr = null;
			post = new Post();
			post.setPostId(rs.getInt("post_id"));
			post.setUserId(rs.getInt("user_id"));
			post.setUserName(rs.getString("user_name"));
			post.setPostTitle(rs.getString("post_title"));
			post.setPostContent(rs.getString("post_content"));
			post.setPostCategory(rs.getString("category_name"));
			post.setPostDate(rs.getDate("post_date"));
			post.setReactionX(rs.getInt("reactionX"));
			post.setReactionY(rs.getInt("reactionY"));
			post.setReactionZ(rs.getInt("reactionZ"));
			post.setReactionR(rs.getInt("reactionR"));
			postList.add(post);
			//			1件１件格納

		}

		//close()を実行するとResultSetも破棄される
		st.close();
		con.close();
		return postList;
		//postをmax件格納した配列を返す
	}

	//	投稿を日付で検索するメソッド(timeLineの一番下の日付→古いもの)
	public List<Post> searchRevers(Date lastDate) throws Exception {
		//接続開始
		Connection con = getConnection();
		List<Post> postList = new ArrayList<Post>();

		PreparedStatement st;
		//postsテーブルでpost_dateで現在より古い投稿を検索する
		st = con.prepareStatement(
				"SELECT post_id,u.user_id,user_name,post_title,post_content,category_name,post_date"
						+ ",(SELECT COUNT(*) FROM post_reaction_status pr WHERE pr.post_id=p.post_id AND reaction_status=0"
						+ " GROUP BY reaction_status) AS reactionX"
						+ ",(SELECT COUNT(*) FROM post_reaction_status pr WHERE pr.post_id=p.post_id AND reaction_status=1"
						+ " GROUP BY reaction_status) AS reactionY"
						+ ",(SELECT COUNT(*) FROM post_reaction_status pr WHERE pr.post_id=p.post_id AND reaction_status=2"
						+ " GROUP BY reaction_status) AS reactionZ"
						+ ",(SELECT COUNT(*) FROM post_reaction_status pr WHERE pr.post_id=p.post_id AND reaction_status=3"
						+ " GROUP BY reaction_status) AS reactionR"
						+ " FROM posts p INNER JOIN users u ON p.user_id=u.user_id "
						+ "INNER JOIN category c ON c.post_category=p.post_category"
						+ " WHERE post_date < ?"
						+ " ORDER BY post_date DESC FETCH FIRST ? ROWS ONLY");
		//index0→一番最新　inexlast→一番古い
		st.setDate(1, lastDate);//現在表示されている中で最も古い投稿
		st.setInt(2, postMax);

		//データベースでSELECT命令を実行する
		ResultSet rs = st.executeQuery();

		while (rs.next()) {
			//max件までpostインスタンスを返す
			Post post = null;
			post = new Post();
			post.setPostId(rs.getInt("post_id"));
			post.setUserId(rs.getInt("user_id"));
			post.setUserName(rs.getString("user_name"));
			post.setPostTitle(rs.getString("post_title"));
			post.setPostContent(rs.getString("post_content"));
			post.setPostCategory(rs.getString("category_name"));
			post.setPostDate(rs.getDate("post_date"));
			post.setReactionX(rs.getInt("reactionX"));
			post.setReactionY(rs.getInt("reactionY"));
			post.setReactionZ(rs.getInt("reactionZ"));
			post.setReactionR(rs.getInt("reactionR"));
			postList.add(post);
			//			1件１件格納
		}
		//close()を実行するとResultSetも破棄される
		st.close();
		con.close();
		return postList;
		//postをmax件格納した配列を返す
	}

	//	投稿を日付で検索するメソッド（timeLineの一番上の日付→新しい)
	public List<Post> searchFoward(Date recentlyDate) throws Exception {
		//接続開始
		Connection con = getConnection();
		List<Post> postList = new ArrayList<Post>();

		PreparedStatement st;
		//postsテーブルでpost_dateで現在より新しい投稿を検索する
		st = con.prepareStatement(
				"SELECT post_id,u.user_id,user_name,post_title,post_content,category_name,post_date"
						+ ",(SELECT COUNT(*) FROM post_reaction_status pr WHERE pr.post_id=p.post_id AND reaction_status=0"
						+ " GROUP BY reaction_status) AS reactionX"
						+ ",(SELECT COUNT(*) FROM post_reaction_status pr WHERE pr.post_id=p.post_id AND reaction_status=1"
						+ " GROUP BY reaction_status) AS reactionY"
						+ ",(SELECT COUNT(*) FROM post_reaction_status pr WHERE pr.post_id=p.post_id AND reaction_status=2"
						+ " GROUP BY reaction_status) AS reactionZ"
						+ ",(SELECT COUNT(*) FROM post_reaction_status pr WHERE pr.post_id=p.post_id AND reaction_status=3"
						+ " GROUP BY reaction_status) AS reactionR"
						+ " FROM posts p INNER JOIN users u ON p.user_id=u.user_id "
						+ "INNER JOIN category c ON c.post_category=p.post_category"
						+ " WHERE post_date > ?"
						+ " ORDER BY post_date DESC FETCH FIRST ? ROWS ONLY");
		//index0→一番古いinexlast→一番最新
		st.setDate(1, recentlyDate);//現在表示されている中で最も新し投稿
		st.setInt(2, postMax);

		//データベースにSELECT命令を実行する
		ResultSet rs = st.executeQuery();

		while (rs.next()) {
			//max件までpostインスタンスを返す
			Post post = null;
			post = new Post();
			post.setPostId(rs.getInt("post_id"));
			post.setUserId(rs.getInt("user_id"));
			post.setUserName(rs.getString("user_name"));
			post.setPostTitle(rs.getString("post_title"));
			post.setPostContent(rs.getString("post_content"));
			post.setPostCategory(rs.getString("category_name"));
			post.setPostDate(rs.getDate("post_date"));
			post.setReactionX(rs.getInt("reactionX"));
			post.setReactionY(rs.getInt("reactionY"));
			post.setReactionZ(rs.getInt("reactionZ"));
			post.setReactionR(rs.getInt("reactionR"));
			postList.add(post);
			//			1件１件格納
			//			UNIXTIMEのがあってそれを→long型
		}
		//close()を実行するとResultSetも破棄される
		st.close();
		con.close();
		return postList;
		//postをmax件格納した配列を返す
	}







//	投稿を日付で検索するメソッド(timeLineの一番下の日付→古いもの)
	public List<Post> searchInterval(int recentlyPostId,int lastPostId) throws Exception {
		//接続開始
		Connection con = getConnection();
		List<Post> postList = new ArrayList<Post>();

		PreparedStatement st;
		//postsテーブルでpost_dateで現在より古い投稿を検索する
		st = con.prepareStatement(
				"SELECT post_id,u.user_id,user_name,post_title,post_content,category_name,post_date"
						+ ",(SELECT COUNT(*) FROM post_reaction_status pr WHERE pr.post_id=p.post_id AND reaction_status=0"
						+ " GROUP BY reaction_status) AS reactionX"
						+ ",(SELECT COUNT(*) FROM post_reaction_status pr WHERE pr.post_id=p.post_id AND reaction_status=1"
						+ " GROUP BY reaction_status) AS reactionY"
						+ ",(SELECT COUNT(*) FROM post_reaction_status pr WHERE pr.post_id=p.post_id AND reaction_status=2"
						+ " GROUP BY reaction_status) AS reactionZ"
						+ ",(SELECT COUNT(*) FROM post_reaction_status pr WHERE pr.post_id=p.post_id AND reaction_status=3"
						+ " GROUP BY reaction_status) AS reactionR"
						+ " FROM posts p INNER JOIN users u ON p.user_id=u.user_id "
						+ "INNER JOIN category c ON c.post_category=p.post_category"
						+ " WHERE post_id <= ? AND post_id>=?"
						+ " ORDER BY post_date DESC ");
		//index0→一番最新　inexlast→一番古い
		st.setInt(1, recentlyPostId);//現在表示されている中で最も古い投稿
		st.setInt(2, lastPostId);

		//データベースでSELECT命令を実行する
		ResultSet rs = st.executeQuery();

		while (rs.next()) {
			//max件までpostインスタンスを返す
			Post post = null;
			post = new Post();
			post.setPostId(rs.getInt("post_id"));
			post.setUserId(rs.getInt("user_id"));
			post.setUserName(rs.getString("user_name"));
			post.setPostTitle(rs.getString("post_title"));
			post.setPostContent(rs.getString("post_content"));
			post.setPostCategory(rs.getString("post_title"));
			post.setPostDate(rs.getDate("post_date"));
			post.setReactionX(rs.getInt("reactionX"));
			post.setReactionY(rs.getInt("reactionY"));
			post.setReactionZ(rs.getInt("reactionZ"));
			post.setReactionR(rs.getInt("reactionR"));
			postList.add(post);
			//			1件１件格納
		}
		//close()を実行するとResultSetも破棄される
		st.close();
		con.close();
		return postList;
		//postをmax件格納した配列を返す
	}

	//カテゴリごとにデータを取り出す
	public List<Post> category(int postCategory) throws Exception{

		//接続開始
			Connection con = getConnection();
			List<Post> post_List = new ArrayList<Post>();

			PreparedStatement st;

			st = con.prepareStatement(
					"SELECT post_id, u.user_id,post_date, post_title, category_name, post_content, user_name"
					        +",(SELECT COUNT(*) FROM post_reaction_status pr WHERE pr.post_id=p.post_id AND reaction_status=0"
					        +" GROUP BY reaction_status) AS reactionX"
					        +",(SELECT COUNT(*) FROM post_reaction_status pr WHERE pr.post_id=p.post_id AND reaction_status=1"
					        +" GROUP BY reaction_status) AS reactionY"
					        +",(SELECT COUNT(*) FROM post_reaction_status pr WHERE pr.post_id=p.post_id AND reaction_status=2"
					        +" GROUP BY reaction_status) AS reactionZ"
					        +",(SELECT COUNT(*) FROM post_reaction_status pr WHERE pr.post_id=p.post_id AND reaction_status=3"
					        +" GROUP BY reaction_status) AS reactionR"
					        +" FROM posts p INNER JOIN users u ON p.user_id = u.user_id"
					        +" INNER JOIN category c ON c.post_category = p.post_category"
					        +" WHERE c.post_category = ?"
					        +" ORDER BY post_date DESC FETCH FIRST ? ROWS ONLY");
			st.setInt(1, postCategory);
			st.setInt(2, postMax);

			//データベースでSELECT命令を実行する
			ResultSet rs = st.executeQuery();

			while (rs.next()) {
				//max件までpostインスタンスを返す
				Post post = null;
				PostReactionDAO pr = null;
				post = new Post();
				post.setPostId(rs.getInt("post_id"));
				post.setUserId(rs.getInt("user_id"));
				post.setUserName(rs.getString("user_name"));
				post.setPostTitle(rs.getString("post_title"));
				post.setPostContent(rs.getString("post_content"));
				post.setPostCategory(rs.getString("post_title"));
				post.setPostDate(rs.getDate("post_date"));
				post.setReactionX(rs.getInt("reactionX"));
				post.setReactionY(rs.getInt("reactionY"));
				post.setReactionZ(rs.getInt("reactionZ"));
				post.setReactionR(rs.getInt("reactionR"));
				post_List.add(post);

			}

			//close()を実行するとResultSetも破棄される
			st.close();
			con.close();
			return post_List;
	}



}










