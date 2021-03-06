package edu.simpson.cis320firstproject;

/**
 * Created by kyle.hovey on 3/28/2017.
 */
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Enumeration;

@WebServlet(name = "GetLoginServlet")
public class GetLoginServlet extends HttpServlet{
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/plain");
        PrintWriter out = response.getWriter();

        // --- Sessions ---

        // - This example uses a session to keep count of client requests.
        HttpSession session = request.getSession();

        // - This example lists every session variable

        Enumeration<String> attributes = session.getAttributeNames();
        if (attributes.hasMoreElements()) {
            String attribute = attributes.nextElement();
            out.print("You are logged in as: '");
            out.print(String.format(session.getAttribute(attribute).toString()) + "'");
        }

        else {
            out.print("You are not logged in.");
        }

    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}
