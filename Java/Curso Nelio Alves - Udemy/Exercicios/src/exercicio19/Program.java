package exercicio19;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import exercicio19.Comment;
import exercicio19.Post;

public class Program {
	public static void main(String[] args) throws ParseException {
		System.out.println("oi");
		SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss");
		
		
		Comment c1 = new Comment("QUERO MORRER");
		Comment c2 = new Comment("ME MATEM IMEDIATAMENTE");
		Post p1 = new Post(
				sdf.parse("12/04/2004 14:20"),
				"TITULO MORTE",
				"MORTE MORTE MORTE MORTE MORTE",
				12);
		p1.addComment(c1);
		p1.addComment(c2);
		
		System.out.println(p1);
		
		
		
		
		

	}

}
