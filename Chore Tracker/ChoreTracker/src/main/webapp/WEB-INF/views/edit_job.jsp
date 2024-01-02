<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page isErrorPage="true"%>

<!DOCTYPE html>
<html>
<head>
<title>Chore Tracker / Edit ${job.title }</title>

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
					<span class="badge bg-secondary">Edit A Job :</span>
				</h3>
			</div>


			<br>
			<form:form action="/jobs/${job.id}/edit" method="POST"
				modelAttribute="job">



				<form:errors id="titleErrors" path="title" class="text-warning" />
				<div class="form-group d-flex align-items-center">
					<form:label class="col-md-3" path="title">
						<h5>
							. . . . <span class="badge bg-secondary">Job Title:</span>
						</h5>
					</form:label>
					<form:input type="text" class="form-control" id="title"
						path="title" />
				</div>
				<br>


				<form:errors id="descriptionErrors" path="description"
					class="text-warning" />
				<div class="form-group d-flex align-items-center">
					<form:label class="col-md-3" path="description">
						<h5>
							. . .<span class="badge bg-secondary">Description :</span>
						</h5>
					</form:label>
					<form:textarea class="form-control" id="description"
						path="description"></form:textarea>
				</div>
				<br>
				<form:errors id="locationErrors" path="location"
					class="text-warning" />
				<div class="form-group d-flex align-items-center">
					<form:label class="col-md-3" path="location">
						<h5>
							. . . . .<span class="badge bg-secondary">Location :</span>
						</h5>

					</form:label>
					<form:input type="text" class="form-control" id="location"
						path="location" />
				</div>
				<br>


				<div class="d-grid gap-2">

					<button type="submit" class="btn btn-warning ">&#x2714;
						Submit &#x2714;</button>
				</div>




			</form:form>

		</div>
</body>
</html>