package backend.academy.demo.controller;

//import javax.servlet.RequestDispatcher;
//import javax.servlet.ServletException;
//import javax.servlet.annotation.WebServlet;
//import javax.servlet.http.HttpServlet;
//import javax.servlet.http.HttpServletRequest;
//import javax.servlet.http.HttpServletResponse;
import jakarta.servlet.RequestDispatcher;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.*;
import java.util.List;

@WebServlet("/controller")
public class ControllerServlet extends HttpServlet {
    @Override
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException, ServletException {
        var isShot = request.getParameterMap()
                .keySet()
                .containsAll(List.of("x","y","R"));
        RequestDispatcher dispatcher = null;
        if (isShot) {
            dispatcher = request.getRequestDispatcher("/area-check");
        }else{
            dispatcher = request.getRequestDispatcher("/views/home.jsp");
        }
        dispatcher.forward(request,response);
    }
}