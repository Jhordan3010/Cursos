<%-- 
    Document   : index
    Created on : 20 may 2024, 12:00:51 p. m.
    Author     : jhord
--%>

<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>

<!DOCTYPE html>
<html>
    <head>
        <title>Ejemplo de JSP</title>
    </head>
    <body>
        <h1>Entrada de Texto y Cálculo</h1>

        <% String h = "Hola java"; %>
        <p>Valor inicial: <%= h %></p>

        <form action="procesar.jsp" method="post">
            <input type="text" id="num" name="num" placeholder="Ingrese un número">
            <input type="text" id="num2" name="num2" placeholder="Ingrese otro número">
            <input type="submit" value="Calcular">
        </form>

        

        

       
    </body>
</html>

