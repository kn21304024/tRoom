package dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import bean.User;

public class UserDAO extends DAO {

	//アカウント新規登録を行うメソッド
	public int insert(User user) throws Exception {
		//	connectionはsqlの一回ごとに成立するからstaticにはできない

		//	接続開始
		Connection con = getConnection();
		String userId = user.getLoginId();
		String userPass = user.getLoginPassword();
		String userName = user.getUserName();

		PreparedStatement st = con.prepareStatement(
				"INSERT INTO users(login_id,login_password,user_name) VALUES(?,?,?)");
		st.setString(1, userId);
		st.setString(2, userPass);
		st.setString(3, userName);

		int line = st.executeUpdate();

		st.close();
		con.close();
		//	sqlが実行されたら必ず切断のメソッドが必要
		return line;
		//すでにmailaddressが登録されているなどの場合tableのUNIQU制約に反するため更新されない⇒0

	}

	//	ログイン認証をするメソッド
	public User search(String loginId, String password) throws Exception {
		//		個々の段階ではloginId,PWは適当なものが入れらあれている恐れがあり関連があるか確定していないのでBeanに入れた状態で
		//		渡さない
		Connection con = getConnection();
		User user = null;

		PreparedStatement st;
		st = con.prepareStatement(
				"SELECT *FROM users WHERE login_id=? AND login_password=?");
		st.setString(1, loginId);
		st.setString(2, password);

		ResultSet rs = st.executeQuery();

		while (rs.next()) {
			user = new User();
			user.setLoginId(rs.getString("login_id"));
			user.setLoginPassword(rs.getString("login_password"));
			user.setUserName(rs.getString("user_name"));
			user.setUserId(rs.getInt("user_id"));
		}

		//		close()を実行するとResultSetも破棄される
		st.close();
		con.close();
		return user;
	}

	//ユーザー名の編集を行うメソッド

	public int updateName(User user, String newName) throws Exception {

		//				接続開始
		Connection con = getConnection();
		String userId = user.getLoginId();

		PreparedStatement st = con.prepareStatement(
				"UPDATE users SET user_name=? WHERE user_id=?)");
		st.setString(1, newName);
		st.setString(2, userId);

		int line = st.executeUpdate();

		st.close();
		con.close();
		//				sqlが実行されたら必ず切断のメソッドが必要
		return line;
		//すでにmailaddressが登録されているなどの場合tableのUNIQU制約に反するため更新されない⇒0

	}
	public User inspection(String loginId) throws Exception {
		Connection con = getConnection();
		User user = null;

		PreparedStatement st;
		st = con.prepareStatement(
				"SELECT * FROM users WHERE login_id=?");
		st.setString(1, loginId);

		ResultSet rs = st.executeQuery();
		while (rs.next()) {
			user = new User();
			user.setLoginId(rs.getString("login_id"));
		}

		st.close();
		con.close();
		//				sqlが実行されたら必ず切断のメソッドが必要
		return user;
	}

}
