package conversion;
import java.util.Date;

public class SqlDate {
public  java.sql.Date longToDate(long num) {
	Date utilDate= new Date();
	utilDate.setTime(num);
	java.sql.Date sqlDate=new java.sql.Date(utilDate.getTime());
		return sqlDate;
}
}
