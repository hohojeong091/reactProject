package com.ohgiraffers.chap05responselecturesource.section01.response.response;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet("/response")
public class ResponseTestServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
     /* 서블릿에서 해야하는 일은 크게 3가지 이다.
     1. 요청을 받아 처리 -parameter로 전달 받은 데이터를 꺼내올 수 있다.
     2. 비지니스 로직 처리 - DB 접속 및 CRUD에 대한 로직 처리
     3. 응답처리 - 문자열로 동적인 웹(HTML 문서) 페이지를 만들고 스트림을 이용해 내보낸다.
     * */
        /*사용자 브라우저에 응답하기 위해 출력 스트림을 HttpServletResponse 객체에서 반환받는다.
        * BufferedWriter와 형제격인 클래스 PrintWriter (더 많은 생성자를 제공하는 범용성) */
        //PrintWriter out = resp.getWriter();

        /* 문자열을 이용해 사용자에게 내보낼 페이지를 작성한다*/
        StringBuilder responseBuilder = new StringBuilder();
        responseBuilder.append("<!doctype html>")
                .append("<html>")
                .append("<head>")
                .append("<body>")
                .append("<h1>안녕 servlet response</h1>")
                .append("</body>")
                .append("</html>");

        System.out.println("default response type : " + resp.getContentType());
        resp.setContentType("text/html");
        System.out.println("default response encoding : " + resp.getCharacterEncoding());
        resp.setCharacterEncoding("UTF-8");

        /*위의 두 가지 설정을 한 번에 처리할 수 있다. */
        resp.setContentType("text/html; charset=UTF-8");

        /*사용자 브라우저에 응답하기 위해 출력 스트림을 HttpServletResponse 객체에서 반환받는다.
         * BufferedWriter와 형제격인 클래스 PrintWriter (더 많은 생성자를 제공하는 범용성) */
        PrintWriter out = resp.getWriter();

        /*스트림을 이용해 응답할 문서 내용을 내보낸다. */
        out.print(responseBuilder);

        out.flush(); //버퍼에 잔류한 데이터 내보내기

        out.close(); //스트림 반환

        //sql

    }
}
// 요청에도 get 방식, 포스트 방식이 있었는데, 응답에도 겟과 포스트방식으로 나뉘는가?
// 요청일 때는 JSP 페이지에서 ul 방식을 안썻는데 응답에선 왜 ul을 쓰는가..