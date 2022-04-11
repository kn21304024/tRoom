package bean;

import java.io.Serializable;

public class Comment implements Serializable {
	private static final long serialVersionUID = 1L;//記述が必要

	private int commentId;
	private int userId;
	private String userName;
	private String commentContent;
	private String commentDate;
	private String postId;
	private int reactionX;//riactionXの投稿に対する総数を保存する変数
	private int reactionY;//riactionYの投稿に対する総数を保存する変数
	private int reactionZ;//riactionZの投稿に対する総数を保存する変数
	private int reactionR;//riactionRの投稿に対する総数を保存する変数

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public String getPostId() {
		return postId;
	}

	public void setPostId(String postId) {
		this.postId = postId;
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

	public int getCommentId() {
		return commentId;
	}

	public void setCommentId(int commentId) {
		this.commentId = commentId;
	}

	public String getCommentContent() {
		return commentContent;
	}

	public void setCommentContent(String commentContent) {
		this.commentContent = commentContent;
	}

	public String getCommentDate() {
		return commentDate;
	}

	public void setCommentDate(String commentDate) {
		this.commentDate = commentDate;
	}
}
