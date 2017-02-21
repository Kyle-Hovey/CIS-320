package edu.simpson.cis320firstproject;


import com.google.gson.Gson;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.*;
import java.util.logging.Level;
import java.util.logging.Logger;

@WebServlet(name = "NameListEdit")
public class NameListEdit extends HttpServlet {
    private final static Logger log = Logger.getLogger(NameListEdit.class.getName());
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        log.log(Level.SEVERE, "This may work.");
        response.setContentType("text/plain");
        PrintWriter out = response.getWriter();

        // Print that this is a post
        out.println("Post");

        // Grab the data we got via a parameter
        String firstName = request.getParameter("first");
        String lastName = request.getParameter("last");
        String phone = request.getParameter("phone");
        String email = request.getParameter("email");
        String birthday = request.getParameter("birthday");

        phone = phone.substring(0,3) + phone.substring(4,7) + phone.substring(8,12);
        birthday = birthday.substring(6,10)+ "-" + birthday.substring(0,2) + "-" + birthday.substring(3,5);

        // Just print the data out to confirm we got it.
        out.println("firstName='"+firstName+"',"+"lastName='"+lastName+"',"+
                "phone='"+phone+"',"+"email='"+email+"',"+
                "birthday='"+birthday+"'");

        PersonDAO.setPeople(firstName,lastName,email,phone,birthday);
    }
}
