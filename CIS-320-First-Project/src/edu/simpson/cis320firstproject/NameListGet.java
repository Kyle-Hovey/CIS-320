package edu.simpson.cis320firstproject;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.lang.reflect.Array;
import java.util.LinkedList;
import java.util.List;
import com.google.gson.Gson;
import java.util.logging.Level;
import java.util.logging.Logger;
import sun.rmi.runtime.Log;
import java.util.logging.*;

/**
 * Created by Kyle on 1/26/2017.
 */
@WebServlet(name = "NameListGet")
public class NameListGet extends javax.servlet.http.HttpServlet {
    private final static Logger log = Logger.getLogger(NameListGet.class.getName());
    protected void doPost(javax.servlet.http.HttpServletRequest request, javax.servlet.http.HttpServletResponse response) throws javax.servlet.ServletException, IOException {

    }

    protected void doGet(javax.servlet.http.HttpServletRequest request, javax.servlet.http.HttpServletResponse response) throws javax.servlet.ServletException, IOException {
        response.setContentType("application/json");
        PrintWriter out = response.getWriter();
        List <Person> peopleList = PersonDAO.getPeople();
        Gson gson = new Gson();
        String json = gson.toJson(peopleList);
        out.print(json);
        log.log(Level.SEVERE, "Plz Show Up");
    }
}
