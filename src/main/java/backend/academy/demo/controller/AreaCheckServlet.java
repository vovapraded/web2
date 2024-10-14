package backend.academy.demo.controller;

import backend.academy.demo.model.Checker;
import backend.academy.demo.model.Params;


import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
//import jakarta.servlet.RequestDispatcher;
//import jakarta.servlet.ServletException;
//import jakarta.servlet.annotation.WebServlet;
//import jakarta.servlet.http.HttpServlet;
//import jakarta.servlet.http.HttpServletRequest;
//import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
@WebServlet("/area-check")
public class AreaCheckServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        System.out.println("ABOBA");
        var x = req.getParameter("x");
        var y = req.getParameter("y");
        var r = req.getParameter("R");

        // Создание и валидация параметров
        Params params = new Params(x, y, r);
        Checker checker = new Checker();
        boolean result = checker.check(params.x(), params.y(), params.r());

        // Сохраняем результат в атрибут запроса
        req.setAttribute("result", result);

        // Перенаправляем на JSP
        RequestDispatcher dispatcher = req.getRequestDispatcher("/views/check.jsp");
        dispatcher.forward(req, resp);
    }
}