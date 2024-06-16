<%-- 
    Document   : index
    Created on : 15 jun 2024, 10:06:51 p. m.
    Author     : jhord
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    <body>
        <h1>Hello World desde HTML!</h1>
        <% String hola = "Hola mundo desde java"; %>
        <%= hola %>
        <form action="" method="post">
            <h2>Nombre:</h2>
            <input type="text" id="palabra" name="palabra">
            <br>
            <input type="submit" value="Enviar">
        </form>

        <% 
        // Procesamiento del formulario cuando se envía
        if ("POST".equalsIgnoreCase(request.getMethod())) {
            String palabra = request.getParameter("palabra");
        %>
        <h3>Valor ingresado:</h3>
        <p><%= palabra %></p>
        <% } %>
    </body>
</html>
