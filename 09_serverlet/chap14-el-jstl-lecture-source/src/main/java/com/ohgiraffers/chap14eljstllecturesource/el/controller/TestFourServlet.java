package com.ohgiraffers.chap14eljstllecturesource.el.controller;

import com.ohgiraffers.chap14eljstllecturesource.el.model.dto.MemberDTO;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;

@WebServlet("/test4")
public class TestFourServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        MemberDTO sessionMember = new MemberDTO("홍길동" , 19, "010-3939-2929", "jaja@naver.ocm");
        MemberDTO requestMember = new MemberDTO("유관순" , 16, "010-3858-1313", "joo@naver.ocm");

        HttpSession session = req.getSession();
        session.setAttribute("member", sessionMember);
        req.setAttribute("member", requestMember);

        RequestDispatcher rd = req.getRequestDispatcher("");
        rd.forward(req, resp);
    }
}
