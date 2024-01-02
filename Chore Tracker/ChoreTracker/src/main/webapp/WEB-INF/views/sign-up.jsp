<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ page isErrorPage="true" %>
<html>
<head>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
<title>&#128197; Chore Tracker LOGIN</title>

</head>
<body>
	<section class="vh-100"
		style="background-image: url('https://wallpapercrafter.com/th800/127315-Moon-stars-space.jpg');
		 height: 100vh; background-repeat: no-repeat; background-size: cover;">
		<div class="container py-5 h-100">
			<div
				class="row d-flex justify-content-center align-items-center h-100">
				<div class="col col-xl-10">
					<div class="card" style="border-radius: 1rem;">
						<div class="row g-0">
							<div class="col-md-6 col-lg-5 d-none d-md-block">
								<img src="https://i.imgur.com/BIOFsaa.jpg" alt="login form"
									class="img-fluid h-100" style="border-radius: 1rem 0 0 1rem;" />
							</div>
							<div class="col-md-6 col-lg-7 d-flex align-items-center">
								<div class="card-body p-4 p-lg-5 text-black">


               	<div class="d-flex align-items-center mb-3 pb-1">
											<i class="fas fa-cubes fa-2x me-3" style="color: #ff6219;"></i>
											<span class="h1 fw-bold mb-0">SIGN UP</span>
										</div>

                <form:form action="/create/user" method="post" modelAttribute="user" class="mx-1 mx-md-4">

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <form:input path="userName" type="text" id="form3Example1c" class="form-control" />
                      <form:errors path="userName" cssClass="text-red-500"/>
                      <form:label path="userName" class="form-label" for="form3Example1c">Your Name</form:label>
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <form:input path="email" type="email" id="form3Example3c" class="form-control" />
                      <form:errors path="email" cssClass="text-red-500"/>
                      <form:label path="email" class="form-label" for="form3Example3c">Your Email</form:label>
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <form:input path="password" type="password" id="form3Example4c" class="form-control" />
                      <form:errors path="password" cssClass="text-red-500"/>
                      <form:label path="password" class="form-label" for="form3Example4c">Password</form:label>
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <form:input path="confirm" type="password" id="form3Example4cd" class="form-control" />
                      <form:errors path="confirm" cssClass="text-red-500"/>
                      <form:label path="confirm" class="form-label" for="form3Example4cd">Repeat your password</form:label>
                    </div>
                  </div>

                  <div class="form-check d-flex justify-content-center mb-5">
                    <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                    <label class="form-check-label">
                      I agree all statements in <a href="#!">Terms of service</a>
                    </label>
                  </div>

                  <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="submit" class="btn btn-dark btn-lg btn-block">Register</button>
                  </div>

                </form:form>

              </div>
 
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</body>
</html>
