/*CREATE TABLE*/
create table category (
	post_category NUMBER(2)
,	category_name VARCHAR2(24) NOT NULL
,	CONSTRAINT pk_post_category_ca PRIMARY KEY(post_category)
);
create table users (
	user_id NUMBER(4) GENERATED ALWAYS AS IDENTITY
,	login_id VARCHAR2(24) NOT NULL
,	user_name VARCHAR2(24) NOT NULL
,	login_password VARCHAR2(512) NOT NULL
,	CONSTRAINT pk_user_id_us PRIMARY KEY(user_id)
,	CONSTRAINT uq_login_id_us UNIQUE(login_id)
,	CONSTRAINT ck_login_id_us CHECK(login_id LIKE '%@ga.ttc.ac.jp')
);
create table posts (
	post_id NUMBER(4) GENERATED ALWAYS AS IDENTITY
,	post_date DATE DEFAULT SYSDATE NOT NULL
,	post_title VARCHAR2(50) NOT NULL
,	post_category NUMBER(2) DEFAULT 0 NOT NULL/*カテゴリー設定なしは0*/
,	post_content VARCHAR2(2000)
,	user_id NUMBER(20)
,	CONSTRAINT pk_post_id_pt PRIMARY KEY(post_id)
,	CONSTRAINT fk_post_category_pt FOREIGN KEY(post_category) REFERENCES category(post_category)
,	CONSTRAINT fk_user_id_pt FOREIGN KEY(user_id) REFERENCES users(user_id)
);
create table post_reaction_status (
	user_id NUMBER(4)
,	post_id NUMBER(4)
,	reaction_status NUMBER(1) NOT NULL
,	CONSTRAINT pk_post_reaction PRIMARY KEY(user_id,post_id)
,	CONSTRAINT fk_user_id_pt_re FOREIGN KEY(user_id) REFERENCES users(user_id)
,	CONSTRAINT fk_post_id_pt_re FOREIGN KEY(post_id) REFERENCES posts(post_id)
);
create table comments (
	comment_id NUMBER(8) GENERATED ALWAYS AS IDENTITY
,	post_id NUMBER(4) NOT NULL
,	user_id NUMBER(4) NOT NULL
,	comment_date DATE NOT NULL
,	comment_content VARCHAR2(200) NOT NULL
,	CONSTRAINT pk_comment_id_co PRIMARY KEY(comment_id)
,	CONSTRAINT fk_post_id_co FOREIGN KEY(post_id) REFERENCES posts(post_id)
,	CONSTRAINT fk_user_id_co FOREIGN KEY(user_id) REFERENCES users(user_id)
);
create table comment_reaction_status (
	user_id NUMBER(4)
,	comment_id NUMBER(8)
,	reaction_status NUMBER(1) NOT NULL
,	CONSTRAINT pk_comment_reaction PRIMARY KEY(user_id,comment_id)
,	CONSTRAINT fk_user_id_co_re FOREIGN KEY(user_id) REFERENCES users(user_id)
,	CONSTRAINT fk_comment_id_co_re FOREIGN KEY(comment_id) REFERENCES comments(comment_id)
);
/*INSERT USER*/
INSERT INTO users(login_id,login_password,user_name) VALUES('at21304444@ga.ttc.ac.jp','password','とーだ');
commit;
INSERT INTO users(login_id,login_password,user_name) VALUES('ga21304445@ga.ttc.ac.jp','1234567','がっちゃん');
commit;
INSERT INTO users(login_id,login_password,user_name) VALUES('te21304446@ga.ttc.ac.jp','1222222','てるみ');
commit;
INSERT INTO users(login_id,login_password,user_name) VALUES('tu21303737@ga.ttc.ac.jp','1111111','たつや');
commit;
INSERT INTO users(login_id,login_password,user_name) VALUES('mu21304019@ga.ttc.ac.jp','ppppppp','そはん');
commit;
/*INSERT POSTS*/
INSERT INTO posts(post_title,post_content,user_id) VALUES('テストの結果','楽勝楽勝！A判定なんて余裕',1);
commit;
INSERT INTO posts(post_title,post_content,user_id) VALUES('テスト惨敗、、','おれテスト二教科落としちまった(´・ω・｀)	誰か教えてーーー！',2);
commit;
INSERT INTO posts(post_title,post_content,user_id) VALUES('商店街通りの油山の油そば','学校近くの商店街通りに油山があるんだけど、あそこの油そばめちゃくちゃおいしい！お手軽だからみんなにもぜひいってみてほしいな',3);
commit;
INSERT INTO posts(post_title,post_content,user_id) VALUES('春休み、ほぼねえやん。','就活に加えてオラクルマスターシルバーSQLテストがあるおかげで春休み全然休めない。助けてくれーー',4);
commit;
INSERT INTO posts(post_title,post_content,user_id) VALUES('オラクルについて','ALTER文ってなに？',4);
commit;