package com.google.sps.servlets;

import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;

/** Handles requests sent to the /hello URL. Try running a server and navigating to /hello! */
@WebServlet("/hello")
public class HelloWorldServlet extends HttpServlet {

    
    private String convertToJson(ArrayList<String> places) {
        String json = "{";
        json += "\"place1\": ";
        json += "\"" + places.get(0) + "\"";
        json += ", ";
        json += "\"place2\": ";
        json += "\"" + places.get(1) + "\"";
        json += ", ";
        json += "\"place3\": ";
        json += "\"" + places.get(2) + "\"";
        json += ", ";
        json += "\"place4\": ";
        json += "\"" + places.get(3) + "\"";
        json += "}";
        return json;
      }
        //modify it so it is returned as a JSON string

    @Override
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
      //response.setContentType("text/html;");
      //response.getWriter().println("Hello Sophia!");
      //servlet should contain an ArrayList
    ArrayList<String> places = new ArrayList<String>();
    places.add("California!");
    places.add("New York City!");
    places.add("London!");
    places.add("Madrid!");

      String json = convertToJson(places);
      response.setContentType("application/json;");
      response.getWriter().println(json);
    } 
  }
  