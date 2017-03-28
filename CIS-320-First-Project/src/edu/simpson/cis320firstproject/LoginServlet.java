package edu.simpson.cis320firstproject;

/**
 * Created by kyle.hovey on 3/28/2017.
 */

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet(name = "LoginServlet")
public class LoginServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/plain");
        PrintWriter out = response.getWriter();

        String loginID = request.getParameter("loginID");

        HttpSession login = request.getSession();
        login.setAttribute(loginID, loginID);

        out.println("Done setting the session variable");
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}
