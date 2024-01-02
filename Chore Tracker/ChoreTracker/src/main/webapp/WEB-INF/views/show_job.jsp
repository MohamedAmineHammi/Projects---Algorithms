<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page isErrorPage="true"%>

<!DOCTYPE html>
<html>
<head>
<title>Chore Tracker ${job.title }</title>

<!-- for Bootstrap CSS -->
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />

<!-- YOUR own local CSS -->
<link rel="stylesheet" type="text/css" href="/css/style.css">

<!-- For any Bootstrap that uses JS -->
<script src="/webjars/bootstrap/js/bootstrap.min.js"></script>

<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

<script type="text/javascript" src="/js/clearErrors.js"></script>


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

										<li class="nav-item"><a class="nav-link" href="/logout">Log
												Out</a></li>
								</div>
							</div>
						</div>
					</nav>

				</div>

			</div>
			<br> <br>

			<div class="form-group mt-3 d-flex justify-content-between"></div>
			<div>
				<h3>
					<span class="badge bg-secondary">Job Details</span>
				</h3>



			</div>
			<br>

			<div class="card text-white " style="background-color: #292836;">
				<div class="card-header">
					<h4>
						<span class="badge bg-secondary">${job.title }</span>
					</h4>
				</div>
				<div class="card-body">
					<h5 class="card-title">${job.description}</h5>
					<p class="card-text">
					<h4>
						<span class="badge bg-secondary">location:</span>
					</h4>
					${job.location }
					</p>
					<p class="card-text">
					<h4>
						<span class="badge bg-secondary">Posted By:</span>
					</h4>
					${job.lead.userName }
					</p>
					<p class="card-text">
					<h4>
						<span class="badge bg-secondary">Posted On:</span>
					</h4>
					${job.createdAt }
					</p>

				</div>
				<div class="card-footer text-muted">
				<c:set var="isUser" value="${job.lead.id == user.id}" />
									<c:choose>
										<c:when test="${!isUser}">

											<a href="/jobs/join/${job.id}/${user.id}"
												class="btn btn-outline-warning btn-sm">ADD To My Jobs</a>
										
										</c:when>

									</c:choose>
				</div>
			</div>
</body>
</html>