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
import java.util.regex.Pattern;
import java.util.regex.Matcher;

@WebServlet(name = "NameListEdit")
public class NameListEdit extends HttpServlet {

    private Pattern nameValidationPattern;
    private Pattern phoneValidationPattern;
    private Pattern emailValidationPattern;
    private Pattern birthdayValidationPattern;
    private boolean validFields = true;
    private final static Logger log = Logger.getLogger(NameListEdit.class.getName());

    public NameListEdit(){
        nameValidationPattern = Pattern.compile("^[A-Za-z-.']{1,45}$");
        phoneValidationPattern = Pattern.compile("^[0-9]{3}-[0-9]{3}-[0-9]{4}$");
        emailValidationPattern = Pattern.compile("^(([^<>()\\[\\]\\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$");
        birthdayValidationPattern = Pattern.compile("^(0[1-9]|1[0-2])\\/(0[1-9]|1\\d|2\\d|3[01])\\/(19|20)\\d{2}$");
    }

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

        // Just print the data out to confirm we got it.
        out.println("firstName='"+firstName+"',"+"lastName='"+lastName+"',"+
                "phone='"+phone+"',"+"email='"+email+"',"+
                "birthday='"+birthday+"'");

        Matcher firstNameMatcher = nameValidationPattern.matcher(firstName);
        if (firstNameMatcher.find( )) {
            out.println("First Name is valid");
        }
        else {
            out.println("First Name is not valid");
            validFields = false;
        }
        Matcher lastNameMatcher = nameValidationPattern.matcher(lastName);
        if (lastNameMatcher.find( )) {
            out.println("Last Name is valid");
        }
        else {
            out.println("Last Name is not valid");
            validFields = false;
        }
        Matcher phoneMatcher = phoneValidationPattern.matcher(phone);
        if (phoneMatcher.find( )) {
            out.println("PHone Number is valid");
        }
        else {
            out.println("Phone Number is not valid");
            validFields = false;
        }
        Matcher emailMatcher = emailValidationPattern.matcher(email);
        if (emailMatcher.find( )) {
            out.println("Email Address is valid");
        }
        else {
            out.println("Email Address is not valid");
            validFields = false;
        }
        Matcher birthdayMatcher = birthdayValidationPattern.matcher(birthday);
        if (birthdayMatcher.find( )) {
            out.println("Birthday is valid");
        }
        else {
            out.println("Birthday is not valid");
            validFields = false;
        }
        if (validFields) {
            phone = phone.substring(0,3) + phone.substring(4,7) + phone.substring(8,12);
            birthday = birthday.substring(6,10)+ "-" + birthday.substring(0,2) + "-" + birthday.substring(3,5);
            PersonDAO.setPeople(firstName,lastName,email,phone,birthday);
        }
        else out.println("Check that all fields are valid");
    }
}
