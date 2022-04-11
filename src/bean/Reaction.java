package bean;

import java.io.Serializable;

public class Reaction implements Serializable {

	private static final long serialVersionUID = 1L;//記述が必要

private int reactionStatas;

public int getReactionStatas() {
	return reactionStatas;
}

public void setReactionStatas(int reactionStatas) {
	this.reactionStatas = reactionStatas;
}


}
