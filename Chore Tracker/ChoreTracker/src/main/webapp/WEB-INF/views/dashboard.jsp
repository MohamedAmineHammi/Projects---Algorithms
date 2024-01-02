<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ page isErrorPage="true"%>
<!DOCTYPE html>
<html>
<head>
<link
	href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
	rel="stylesheet"
	integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
	crossorigin="anonymous">
<link rel="stylesheet" href="css/mdb.min.css" />
<title>&#128197; Chore Tracker DASHBOARD</title>
<!-- for Bootstrap CSS -->
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />

<!-- YOUR own local CSS -->
<link rel="stylesheet" type="text/css" href="/css/style.css">

<!-- For any Bootstrap that uses JS -->
<script src="/webjars/bootstrap/js/bootstrap.min.js"></script>



</head>
<body>
	<section class="vh-100"
		style="background-image: url('https://c4.wallpaperflare.com/wallpaper/975/24/883/the-sun-clouds-mountains-house-wallpaper-preview.jpg'); height: 100vh; background-repeat: no-repeat; background-size: cover;">

		<div class="container-fluid vh-100 custom-width align-items-center">
			<div class="form-group d-flex justify-content-between">
				<div>
					<br>
					<nav class="navbar navbar-expand-xl navbar-dark"
						style="background-color: #292836;">
						<div class="container-fluid vh-90">
							<h1 class="navbar-brand">Welcome ${user.userName}</h1>
							<button class="navbar-toggler" type="button"
								data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
								aria-controls="offcanvasNavbar">
								<span class="navbar-toggler-icon"></span>
							</button>
							<div class="offcanvas offcanvas-end" tabindex="-1"
								id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
								<div class="offcanvas-header">
									<h5 class="offcanvas-title" id="offcanvasNavbarLabel">Chore
										Tracker</h5>
									<button type="button" class="btn-close text-reset"
										data-bs-dismiss="offcanvas" aria-label="Close"></button>
								</div>
								<div class="offcanvas-body">
									<ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
										<li class="nav-item"><a class="nav-link active"
											aria-current="page" href="/dashboard">Home</a></li>
										<li class="nav-item"><a class="nav-link" href="/jobs/new">ADD
												New Job</a></li>
										<li class="nav-item"><a class="nav-link" href="/logout">Log
												Out</a></li>
								</div>
							</div>
						</div>
					</nav>

				</div>

			</div>
			<br> <br>

			<div class="form-group mt-3 d-flex justify-content-between">
				<div>
					<h3>
						<span class="badge bg-secondary">ALL Jobs :</span>
					</h3>



				</div>

			</div>



			<table class="table table-dark table-striped">

				<thead>
					<tr>
						<th><h4>Job</h4></th>
						<th><h4>Location</h4></th>
						<th><h4>Actions</h4></th>
					</tr>
				</thead>
				<tbody>
					<c:forEach var="oneJob" items="${jobsUserNotIn}">
						<tr>
							<td><c:out value="${oneJob.title}"></c:out></td>
							<td><c:out value="${oneJob.location}"></c:out></td>

							<td><div class="btn-group" role="group" aria-label="Basic example">

									<a href="/jobs/${oneJob.id}"
										class="btn btn-outline-warning btn-sm"><c:out value="View"></c:out></a>
									<a href="/jobs/join/${oneJob.id}/${user.id}"
										class="btn btn-outline-warning btn-sm">Add</a>
										
										<c:set var="isUser" value="${oneJob.lead.id == user.id}" />
									<c:choose>
										<c:when test="${isUser}">

											<a href="/jobs/edit/${oneJob.id}"
												class="btn btn-outline-warning btn-sm">Edit</a>
										<a href="/dashboard"
												class="btn btn-outline-warning btn-sm">Cancel</a>
										</c:when>

									</c:choose>
										
										
								</div></td>


						</tr>
					</c:forEach>
				</tbody>
			</table>
			<br>

			<h3>
				<span class="badge bg-secondary">My Jobs :</span>
			</h3>

			<table class="table table-dark table-striped">

				<thead>
					<tr>
						<th><h4>Job</h4></th>
						<th><h4>Actions</h4></th>
					</tr>
				</thead>
				<tbody>
					<c:forEach var="oneJob" items="${jobsUserIn}">
						<tr>
							<td><c:out value="${oneJob.title}"></c:out></td>

							<td><div class="btn-group" role="group" aria-label="Basic example">



											<a href="/jobs/${oneJob.id}"
												class="btn btn-outline-warning btn-sm"><c:out
													value="View"></c:out></a>
											
											<a href="/delete/${oneJob.id}"
												class="btn btn-outline-warning btn-sm"> <c:out
													value="Done" />
											</a>
					
								</div></td>

						</tr>
					</c:forEach>
				</tbody>
			</table>


		</div>
</body>
</html>