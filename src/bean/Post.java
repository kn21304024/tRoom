package bean;

import java.io.Serializable;
import java.util.Date;

public class Post implements Serializable {

	private static final long serialVersionUID = 1L;//記述が必要

	private int postId;
	private Date postDate;
	private String postTitle;
	private String postCategory;
	private String postContent;
	private String userName;
	private int userId;
	private int reactionX;//riactionXの投稿に対する総数を保存する変数
	private int reactionY;//riactionYの投稿に対する総数を保存する変数
	private int reactionZ;//riactionZの投稿に対する総数を保存する変数
	private int reactionR;//riactionRの投稿に対する総数を保存する変数

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public int getReactionX() {
		return reactionX;
	}

	public void setReactionX(int reactionX) {
		this.reactionX = reactionX;
	}

	public int getReactionY() {
		return reactionY;
	}

	public void setReactionY(int reactionY) {
		this.reactionY = reactionY;
	}

	public int getReactionZ() {
		return reactionZ;
	}

	public void setReactionZ(int reactionZ) {
		this.reactionZ = reactionZ;
	}

	public int getReactionR() {
		return reactionR;
	}

	public void setReactionR(int reactionR) {
		this.reactionR = reactionR;
	}

	public int getPostId() {
		return postId;
	}

	public void setPostId(int postId) {
		this.postId = postId;
	}

	public Date getPostDate() {
		return postDate;
	}

	public void setPostDate(Date postDate) {
		this.postDate = postDate;
	}

	public String getPostTitle() {
		return postTitle;
	}

	public void setPostTitle(String postTitle) {
		this.postTitle = postTitle;
	}

	public String getPostCategory() {
		return postCategory;
	}

	public void setPostCategory(String postCategory) {
		this.postCategory = postCategory;
	}

	public String getPostContent() {
		return postContent;
	}

	public void setPostContent(String postContent) {
		this.postContent = postContent;
	}

}
