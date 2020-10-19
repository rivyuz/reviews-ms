<!DOCTYPE html>

<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>

<html lang="en">

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Read&amp;Post Reviews</title>
	
    <!--COMMON SPECIFIC CSS BEGINS-->
	<link rel="stylesheet" href="css/common/bootstrap.min.css">
	<link rel="stylesheet" href="css/common/pageLayout.css">
	<link rel="stylesheet" href="css/common/fonts.css">
	<link rel="stylesheet" href="css/common/fontAwesome.css">
	<link rel="stylesheet" href="css/common/buttons.css">
	<link rel="stylesheet" href="css/common/customAlert.css">
	<link rel="stylesheet" href="css/common/progressIndicator.css">
	<link rel="stylesheet" href="css/common/masks.css">
	<link rel="stylesheet" href="css/common/z-index.css">
	
	<link rel="stylesheet" href="css/common/header/banner.css">
	<link rel="stylesheet" href="css/common/header/header.css">
	<link rel="stylesheet" href="css/common/header/burgerMenu.css">
	
	<link rel="stylesheet" href="css/common/leftRight.css">
	
	<link rel="stylesheet" href="css/common/footer/footer.css">
	<link rel="stylesheet" href="css/common/footer/footerMenu.css">
	<link rel="stylesheet" href="css/common/footer/newExistingUser.css">
	<link rel="stylesheet" href="css/common/footer/emailFromFooter.css">	
	
	<link rel="stylesheet" href="css/common/register/registerDlg.css">
	<link rel="stylesheet" href="css/common/login/loginDlg.css">
	<link rel="stylesheet" href="css/common/forgot/forgotDlg.css">
	
	<link rel="stylesheet" href="css/common/pp.css">
	<link rel="stylesheet" href="css/common/tc.css">
	<link rel="stylesheet" href="css/common/stars.css">
	<!--COMMON SPECIFIC CSS ENDS-->
	
	<!--INPUT SPECIFIC CSS BEGINS-->
	<link rel="stylesheet" href="css/input/overallRatingDiv.css">
	<link rel="stylesheet" href="css/input/inputDlgId.css">
	<link rel="stylesheet" href="css/input/comments.css">
	<link rel="stylesheet" href="css/input/carousel.css">
	<!--INPUT SPECIFIC CSS ENDS---->
	
	<!--PROFILE CSS BEGINS-->
	<link rel="stylesheet" href="css/profile/profileDlg.css">
	<link rel="stylesheet" href="css/profile/upload_photo.css">
	<!--PROFILE CSS ENDS---->
	
	<!--HISTORY CSS BEGINS-->
	<link rel="stylesheet" href="css/history/historyDlg.css">
	<!--HISTORY CSS ENDS---->
	
	<!--GENERAL JS BEGINS-->
	<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>	
    <script src="js/z_general/jquery-2.1.0.min.js"></script>
    <script src="js/z_general/bootstrap.min.js"></script>
	<script src="js/z_general/ga.js"></script>
	<script src="js/z_general/gadd.js"></script>	
	<!--GENERAL JS ENDS-->
	
  </head>

  <body>
	
	<img src="images/common/progress.gif" class="progress-indicator" />

	<div class="reviews-banner-mask">
		<div class="reviews-site-header" title="Home" class="text-center">
			<span style="color: white" class="site-name">ri</span><span style="color: red" class="site-name">view</span><span style="color: white" class="site-name">z</span>
		</div>
	</div>
	<div class="burger-container" title="Click to login or register">
		<img src="images/common/burger-menu.png" class="burger-img">
	</div>	
	<div class="burger-links">
		<ul>
			<li><a href="javascript:void(0);" onclick="showLoginDlg()" title="Click to login">Log In</a></li>
			<li><a href="javascript:void(0);" onclick="showRegisterDlg()" title="Click to register">Register</a></li>
		</ul>
	</div>	

    <nav class="page-nav">
	</nav><!-- nav ends -->

	<form class="dto-form" method="get">
		<input type="hidden" id="dto-form-category"    name="category"    value="${reviewMap['parameterList'].indexCatg}" />
		<input type="hidden" id="dto-form-entity-id"   name="entity_id"   value="${reviewMap['parameterList'].entityId}" />
		<input type="hidden" id="dto-form-entity-name" name="entity_name" value="${reviewMap['parameterList'].entityName}" />
		<input type="hidden" id="dto-form-p"        name="pn"   value="input" />
		<input type="hidden" id="dto-form-j"         name="j"         value="${reviewMap['j']}" />		
		
		<input type="hidden" id="dto-form-zu" name="zu" value="" />
	</form>

    <article class="page-article">
		
	    <div class="jumbotron text-center">
	      <p class="carousel-entity-name"> ${reviewMap['parameterList'].entityName} </p>
	      
	      <div class="container">
			<div id="myCarousel">
				<img src="images/input/gallery/${reviewMap['parameterList'].indexCatg}/${reviewMap['parameterList'].imageName}.png" id="${reviewMap['parameterList'].indexCatg}#${reviewMap['parameterList'].imageName}" />
				<hr>									
			</div>
	      </div>
		  <div class="text-center">
			<a href="javascript:void(0);" onclick="inputDlgId()" class="btn btn-success text-center" style="">Post a Review</a>
			<c:choose>
				<c:when test="${fn:length(reviewMap['revList']) != 0}">
					<a href="javascript:void(0);" onclick="overallRatingDiv()" class="btn btn-success text-center" style="margin-left: 3px;">Overall Rating</a>
				</c:when>
			</c:choose>
		  </div>	      
	    </div>

		<c:choose>
			<c:when test="${fn:length(reviewMap['revList']) != 0}">    		
				<div class="bottom-div">
					<c:forEach items="${reviewMap['revList']}" var="review" varStatus="row"><!--forEach begin-->
						<div class="box-comment text-left box-comment-boxed">
							<div class="media">
								<div class="media-left">
									<c:choose>
										<c:when test="${review.photoUploaded == 1}">
											<img src="data:image/jpg;base64,${review.userImage}" class="img-circle box-comment-img">
										</c:when>
										<c:otherwise>
											<img src="images/common/usr-icon.png" class="img-circle box-comment-img">
										</c:otherwise>				
									</c:choose>
								</div>
								<div class="media-body">
									<header class="box-comment-header unit unit-vertical unit-spacing-xxs unit-md unit-md-horizontal unit-md-inverse unit-md-middle unit-md-align-right">
										<div class="unit-left">
											<ul class="box-comment-meta list-inline list-inline-sm text-dark">
											<li>${review.dateStr}</li>
											</ul>
										</div>
										<div class="unit-body">
											<h6 class="box-comment-title">${review.entityName}</h6>
											<h6>${review.userName}</h6>
											
											<c:if test="${ review.starRating == 0 }">
												<div title="0 Star">
													<div class="starsDiv star_0"></div>
												</div>
											</c:if>
											<c:if test="${ review.starRating == 0.5 }">
												<div title="0.5 Star">
													<div class="starsDiv star_0dot5"></div>
												</div>									
											</c:if>
											<c:if test="${ review.starRating == 1 }">
												<div title="1 Star">
													<div class="starsDiv star_1"></div>
												</div>
											</c:if>
											<c:if test="${ review.starRating == 1.5 }">
												<div title="1.5 Star">
													<div class="starsDiv star_1dot5"></div>
												</div>
											</c:if>
											<c:if test="${ review.starRating == 2 }">
												<div title="2 Star">
													<div class="starsDiv star_2"></div>
												</div>
											</c:if>
											<c:if test="${ review.starRating == 2.5 }">
												<div title="2.5 Star">
													<div class="starsDiv star_2dot5"></div>
												</div>
											</c:if>
											<c:if test="${ review.starRating == 3 }">
												<div title="3 Star">
													<div class="starsDiv star_3"></div>
												</div>
											</c:if>
											<c:if test="${ review.starRating == 3.5 }">
												<div title="3.5 Star">
													<div class="starsDiv star_3dot5"></div>
												</div>
											</c:if>
											<c:if test="${ review.starRating == 4 }">
												<div title="4 Star">
													<div class="starsDiv star_4"></div>
												</div>
											</c:if>
											<c:if test="${ review.starRating == 4.5 }">
												<div title="4.5 Star">
													<div class="starsDiv star_4dot5"></div>
												</div>
											</c:if>
											<c:if test="${ review.starRating == 5 }">
												<div title="5 Star">
													<div class="starsDiv star_5"></div>
												</div>
											</c:if>
											
										</div>
									</header>
									<section class="box-comment-body">
										<div class="comments_para" id="comment_div_1357">
											<p id="userCommentParaId_1357">${review.comment}</p>
										</div>
									</section>
								</div>
							</div>
						</div>
					</c:forEach><!--forEach end-->
					<br>
				</div>		
			</c:when>
		</c:choose>

	</article>

    <div class="page-ad">
	</div><!-- ad div ends -->

	<!--footer begins-->
    <footer class="site-footer">
		<div class="company-name">
			<p class="copy-rights">&copy;2015 Raven Media LLP</p>
			<p class="copy-rights">All rights reserved</p>
		</div>
		<div class="footer-menu">
			<div class="footer-menu-links">
				<ul>
					<li><a href="javascript:void(0);" class="contact-us">Contact Us</a></li>					
					<li><a href="javascript:void(0);" class="report-bug">Report bug</a></li>
					<li><a href="javascript:void(0);" class="site-feedback">Site feedback</a></li>
					<li><a href="javascript:void(0);" class="privacy-policy">Privacy Policy</a></li>
					<li><a href="javascript:void(0);" class="terms-and-conditions">Terms &amp; Conditions</a></li>
				</ul>
			</div>
			<img src="images/common/footer-menu.png" class="footer-menu-img">
		</div>	
	</footer>
	<!-- footer ends -->
	
	<div class="overall-rating-dialog-container" >
		<div class="overall-rating-dialog">
			<form class="overall-rating-form ">
				<c:forEach items="${reviewMap['revList']}" var="review" varStatus="row"><!--outer forEach begin-->
					<c:set var="rowIndex" value="${row.count}"/>
					<c:if test="${ rowIndex == 1}"><!--if begin---->
						<c:forEach var = "i" begin = "1" end = "8"><!--inner forEach begin-->
							<c:set var="parameter" value="parameter_${i}"/>
							<c:set var="rp" value="rp_${i}"/>
							
							<div class="parameter_row">
								<div id="${parameter}" class="overall-parameter-name">${review[parameter]}</div>
								<div class="overall-star-rating-container">
									<c:if test="${ review[rp] <= 0 }">
										<div id="${parameter}_star" class="star-class starsDiv star_0"></div>
									</c:if>
									<c:if test="${ review[rp] > 0 && review[rp] <= 0.5 }">
										<div id="${parameter}_star" class="star-class starsDiv star_0dot5"></div>
									</c:if>
									<c:if test="${ review[rp] > 0.5 && review[rp] <= 1 }">
										<div id="${parameter}_star" class="star-class starsDiv star_1"></div>
									</c:if>
									<c:if test="${ review[rp] > 1 && review[rp] <= 1.5 }">
										<div id="${parameter}_star" class="star-class starsDiv star_1dot5"></div>
									</c:if>
									<c:if test="${ review[rp] > 1.5 && review[rp] <= 2 }">
										<div id="${parameter}_star" class="star-class starsDiv star_2"></div>
									</c:if>
									<c:if test="${ review[rp] > 2 && review[rp] <= 2.5 }">
										<div id="${parameter}_star" class="star-class starsDiv star_2dot5"></div>
									</c:if>
									<c:if test="${ review[rp] > 2.5 && review[rp] <= 3 }">
										<div id="${parameter}_star" class="star-class starsDiv star_3"></div>
									</c:if>
									<c:if test="${ review[rp] > 3 && review[rp] <= 3.5 }">
										<div id="${parameter}_star" class="star-class starsDiv star_3dot5"></div>
									</c:if>
									<c:if test="${ review[rp] > 3.5 && review[rp] <= 4 }">
										<div id="${parameter}_star" class="star-class starsDiv star_4"></div>
									</c:if>
									<c:if test="${ review[rp] > 4 && review[rp] <= 4.5 }">
										<div id="${parameter}_star" class="star-class starsDiv star_4dot5"></div>
									</c:if>
									<c:if test="${ review[rp] > 4.5 }">
										<div id="${parameter}_star" class="star-class starsDiv star_5"></div>
									</c:if>
								</div>
							</div>
							
						</c:forEach><!--inner forEach end---->
					</c:if><!--if end-->
				</c:forEach><!--outer forEach end-->
			</form>	
		</div>
		<div class="cancel-btn-container-entity-list">
			<button type="button" class="tabledit-remove-button btn btn-sm" style="margin-left: 5px; background-color: red" onclick="cancel();">
				<i class="glyphicon glyphicon-remove"></i>
			</button>
		</div>		
	</div>
	
	<div class="input-dialog-container" >
		<div class="input-dialog">
		
			<div class="legend text-center">
				<span class="label label-success  btn-xs">Best</span>
				<span class="label label-primary  btn-xs">Good</span>
				<span class="label label-info  btn-xs">Avg</span>
				<span class="label label-warning  btn-xs">Below Avg</span>
				<span class="label label-danger  btn-xs">No Idea</span>
			</div>
			
			<form class="input-form">
				<c:forEach var = "i" begin = "1" end = "8"><!--forEach begin-->
					
					<c:set var="parameter" value="parameter${i}"/>
					<c:set var="ratingParameter" value="parameter${i}"/>
					
					<div class="parameter_row">
						<div id="parameter_${i}" class="parameter_name">${reviewMap['parameterList'][parameter]}</div>
						<div class="parameter_value">
							<div class="btn-group" data-toggle="buttons">
								<label class="btn btn-success  btn-sm">
									<input type="radio" name="ratingParameter_${i}" value="Best">
									<span class="glyphicon glyphicon-ok"></span>
								</label>
								<label class="btn btn-primary  btn-sm">
									<input type="radio" name="ratingParameter_${i}" value="Good">
									<span class="glyphicon glyphicon-ok"></span>
								</label>
								<label class="btn btn-info  btn-sm">
									<input type="radio" name="ratingParameter_${i}" value="Avg">
									<span class="glyphicon glyphicon-ok"></span>
								</label>
								<label class="btn btn-warning  btn-sm">
									<input type="radio" name="ratingParameter_${i}" value="BelowAvg">
									<span class="glyphicon glyphicon-ok"></span>
								</label>
								<label class="btn btn-danger  btn-sm active">
									<input type="radio" name="ratingParameter_${i}" value="NoIdea" checked>
									<span class="glyphicon glyphicon-ok"></span>
								</label>
							</div>
						</div>
					</div>
				</c:forEach><!--forEach end---->
				<div id="commentsDiv">
					<textarea id="commentsInput" placeholder="Comments, if any. Please do not use any foul or abusive language!!!"></textarea>
				</div>
				
				<div class="submit-review text-center">
					<button id="submitBtn" type="button" class="btn btn-info" onclick="submitReviewsAndComment()">Submit</button>
				</div>
				<div class="cancel-btn-container-entity-list">
					<button type="button" class="tabledit-remove-button btn btn-sm" style="margin-left: 5px; background-color: red" onclick="cancel();">
						<i class="glyphicon glyphicon-remove"></i>
					</button>
				</div>
				
				<input type="hidden" id="input-form-category"    name="category"    value="${reviewMap['parameterList'].indexCatg}" />
				<input type="hidden" id="input-form-entity-id"   name="entity_id"   value="${reviewMap['parameterList'].entityId}" />
				<input type="hidden" id="input-form-entity-name" name="entity_name" value="${reviewMap['parameterList'].entityName}" />
				
			</form>
		</div>
	</div>

	<div class="profile-dialog-container" >
		<div class="profile-dialog">

			<div class="photo-record">
				<div class="user-img" class="col-md-12 col-lg-12" align="center">

				</div>
			</div>

			<form class="profile-form" method="post" action="#" enctype="multipart/form-data">

				<div id="email" class="profile-row"></div>
				<div id="name" class="profile-row"></div>
				<div id="regdate" class="profile-row"></div>
				<div id="status" class="profile-row"></div>

				<!-- UPLOAD PHOTO DIALOG - BEGINS -->
				<div class="upload-photo-dialog" >
					<span class="upload-photo-btn-container">
						<input type="button" value="Upload Photo" class="upload-photo-btn" />
						<input type="file" name="uploaded-photo" id="upload-photo-file" class="upload-photo-file" />
					</span>
					<input type="button" value="Remove Photo" onclick="removePhoto()" class="remove-photo-btn" />
					<p class="valid-photo-text">*Only JPEG/JPG files allowed - Max file size allowed is 2 MB</p>
				</div>
				
				<!-- UPLOAD PHOTO DIALOG - ENDS -->
				<input name="userId" id="userId" type="hidden" value="">
				<input name="userName" id="userName" type="hidden" value="">
				<input name="emailId" id="emailId" type="hidden" value="">
			</form>

			<div class="profile-delete-btn-container text-center">
				<button type="button" class="btn btn-info profile-delete-btn" onclick="deleteAccount()">Delete Account</button>
			</div>
			
			<div class="cancel-btn-container-entity-list">
				<button type="button" class="tabledit-remove-button btn btn-sm" style="margin-left: 5px; background-color: red" onclick="cancel();">
					<i class="glyphicon glyphicon-remove"></i>
				</button>
			</div>			

		</div>
	</div>
	
	<div class="history-dialog-container" >
		<div class="history-dialog">
			<form class="history-form">
				

			</form>
			<div class="delete-history-btn-container text-center">
				<button type="button" class="btn btn-info delete-history-btn" onclick="deleteAll()">Delete All</button>
			</div>
			<p class="all-clear">All Clear</p>
			<div class="cancel-btn-container-entity-list">
				<button type="button" class="tabledit-remove-button btn btn-sm" style="margin-left: 5px; background-color: red" onclick="cancel();">
					<i class="glyphicon glyphicon-remove"></i>
				</button>
			</div>			
		</div>
	</div>
	
	<!-- New/Existing User dialog - begins  -->
	<div style="display: none;" class="new-existing-user-dialog">
		<input type="button" value="Existing User" onclick="showLoginDlg()" class="existing-user" />			
		<input type="button" value="New User" onclick="showRegisterDlg()" class="new-user" />
		<input type="hidden" value="" class="new-existing-user-form" />
		<input type="hidden" value="" class="new-existing-user-action" />
		<input type="hidden" value="" class="new-existing-user-login-src" />
	</div>
	<!-- New/Existing User dialog - ends  -->

	<!-- email from footer dialog begins-->
	<div class="email-dialog">
		<form class="email-form" method="post" action="#">
			<span style="display:none">To:</span>
			<span style="display:none"><input type="text" name="email-dest" value="contact@riviewz.com" class="email-dest"></span>
			
			<span style="display:none">Subject:</span>
			<span style="display:none"><input type="text" name="email-subject" value="" class="email-subject"></span>						
			
			<span class="email-content-container"><textarea name="email-content" placeholder="Please type here..." rows="10" cols="50" class="email-content"></textarea></span>
			
			<span style="display:none" class="error"></span>
			
			<span class="email-btn-container"><input type="button" value="Send Email" onclick="sendEmail()" class="email-btn"></span>
		</form>
		<div class="cancel-btn-container-entity-list">
			<button type="button" class="tabledit-remove-button btn btn-sm" style="margin-left: 5px; background-color: red" onclick="cancel();">
				<i class="glyphicon glyphicon-remove"></i>
			</button>
		</div>
	</div>
	<!--email from footer dialog ends---->	
	
	<!--register dialog begins-->
	<div class="register-dialog">
		<form method="post" action="#" class="register-form">
			<div class="register-form-input">
				<input type="email" value="" autocomplete="on" placeholder="&#xf0e0; Email address" class="register-email">
				<p class="register-email-blank">Please enter your email address</p>
				<p class="register-email-invalid">Please enter a valid email address</p>
				
				<input type="password" value="" autocomplete="on" placeholder="&#xf023; Password" class="register-password">
				<p class="register-password-blank">Please enter the password</p>
				
				<input type="text" value="" autocomplete="on" placeholder="&#xf007; User name" class="register-username">
				<p class="register-username-blank">Please enter a user name</p>						
				
				<input type="button" value="Register" onclick="register()" class="form-control register-btn">
			</div>

			<div class="register-tc">
				<input id="tcCheck" name="tcCheck" type="checkbox" value="" class="register-tc-check"/>
				<label id="tcAgree" for="tcCheck" class="register-tc-label">I agree to the terms &amp; conditions</label>
				<a href="javascript:void(0);" class="register-tc-link">Terms &amp; Conditions</a>
			</div>			
			
			<div class="register-login-link">
				<a class="register-login-link-label">Click here to Log In</a>
			</div>
			
			<div class="cancel-btn-container">
				<button type="button" class="tabledit-remove-button btn btn-sm" style="margin-left: 5px; background-color: red" onclick="cancel();">
					<i class="glyphicon glyphicon-remove"></i>
				</button>
			</div>			
		</form>
	</div>
	<!--register dialog ends---->
	
	<!--login dialog begins-->
	<div class="login-dialog">
		<form method="post" action="#" class="login-form">
			<div class="login-form-input">
				<input type="email" value="" autocomplete="on" placeholder="&#xf0e0; Email address" class="login-email">
				<p class="login-email-blank">Please enter your email address</p>
				<p class="login-email-invalid">Please enter a valid email address</p>
				
				<input type="password" value="" autocomplete="on" placeholder="&#xf023; Password" class="login-password">
				<p class="login-password-blank">Please enter the password</p>
				
				<input type="button" value="Login" onclick="login()" class="form-control login-btn">
			</div>
			
			<div class="login-forgot-link">
				<a class="login-forgot-link-label">Forgot Pasword</a>
			</div>

			<div class="login-register-link">
				<a class="login-register-link-label">Click here to Register</a>
			</div>
			
			<div class="cancel-btn-container">
				<button type="button" class="tabledit-remove-button btn btn-sm" style="margin-left: 5px; background-color: red" onclick="cancel();">
					<i class="glyphicon glyphicon-remove"></i>
				</button>
			</div>
		</form>
	</div>
	<!--login dialog ends---->	

	<!--forgot password dialog begins-->
	<div class="forgot-dialog">
		<form method="post" action="#" class="forgot-form">
			<div class="forgot-form-input">
				<input type="email" value="" autocomplete="on" placeholder="&#xf0e0; Email address" class="forgot-email">
				<p class="forgot-email-blank">Please enter your email address</p>
				<p class="forgot-email-invalid">Please enter a valid email address</p>
				
				<input type="button" value="Email Password" onclick="forgot()" class="form-control forgot-btn">
			</div>
			
			<div class="cancel-btn-container">
				<button type="button" class="tabledit-remove-button btn btn-sm" style="margin-left: 5px; background-color: red" onclick="cancel();">
					<i class="glyphicon glyphicon-remove"></i>
				</button>
			</div>			
		</form>
	</div>
	<!--forgot password dialog ends---->

	<!--alert dialog begins-->
	<div class="alert-mask"></div>
	<div class="alert-dialog">
		<div class="alert-header"></div>
		<div class="alert-body">
			<p class="alert-message"></p>
		</div>
		<div class="alert-footer"></div>
	</div>
	<!--alert dialog ends---->

	<!--pp dialog begins-->
	<div class="pp-dialog-container" >
		<div class="pp-dialog">

		</div>
		<div class="cancel-btn-container-entity-list">
			<button type="button" class="tabledit-remove-button btn btn-sm" style="margin-left: 5px; background-color: red" onclick="cancel();">
				<i class="glyphicon glyphicon-remove"></i>
			</button>
		</div>
	</div>
	<!--pp dialog ends-->	

	<!--tc dialog begins-->
	<div class="tc-dialog-container" >
		<div class="tc-dialog">
		
		</div>
		<div class="cancel-btn-container-entity-list">
			<button type="button" class="tabledit-remove-button btn btn-sm" style="margin-left: 5px; background-color: red" onclick="cancel();">
				<i class="glyphicon glyphicon-remove"></i>
			</button>
		</div>
	</div>
	<!--tc dialog ends-->
	
    <!--INDEX SPECIFIC JS BEGINS-->
	<script src="js/index/getAndSetUrls.js"></script>
    <script src="js/index/showResetPasswordDlg.js"></script>
    <script src="js/index/fieldValidation.js"></script>
    <script src="js/index/zOnLoad.js"></script>
	<script src="js/index/showRegisterDlg.js"></script>
	<script src="js/index/register.js"></script>
	<script src="js/index/loginLink.js"></script>
	<script src="js/index/keyboardClick.js"></script>
	<script src="js/index/showLoginDlg.js"></script>
	<script src="js/index/login.js"></script>
	<script src="js/index/logout.js"></script>
	<script src="js/index/forgotLink.js"></script>
	<script src="js/index/registerLink.js"></script>
	<script src="js/index/showForgotDlg.js"></script>
	<script src="js/index/forgot.js"></script>
	<!--INDEX SPECIFIC JS ENDS-->
	
	<!--COMMON JS BEGINS-->
	<script src="js/common/cookieManagement.js"></script>
	<script src="js/common/progressIndicator.js"></script>	
	<script src="js/common/masks.js"></script>
	<script src="js/common/pp.js"></script>
	<script src="js/common/tc.js"></script>
	<script src="js/common/actionPerformingAlert.js"></script>
	<script src="js/common/formSubmittingAlert.js"></script>
	<script src="js/common/normalAlert.js"></script>
	<script src="js/common/siteNameClick.js"></script>
	<script src="js/common/burgerMenu.js"></script>
	<script src="js/common/configureBurgerMenu.js"></script>
	<script src="js/common/footerMenu.js"></script>
	<script src="js/common/newOrExistingUser.js"></script>
	<script src="js/common/emailFromFooter.js"></script>
	<script src="js/common/inputDlgId.js"></script>
	<!--COMMON JS ENDS-->	
	
	<!--PAGE SPECIFIC JS BEGINS-->
	<script src="js/input/overallRatingDiv.js"></script>
	<script src="js/input/submit_reviews_comment.js"></script>
	<!--PAGE SPECIFIC JS ENDS---->
	
	<!--PROFILE SPECIFIC JS BEGINS---->
	<script src="js/profile/show-profile.js"></script>
	<script src="js/profile/upload-photo.js"></script>
	<script src="js/profile/remove-photo.js"></script>
	<script src="js/profile/delete-account.js"></script>
	<!--PROFILE SPECIFIC JS ENDS---->
	
	<!--HISTORY SPECIFIC JS BEGINS---->
	<script src="js/history/show-history.js"></script>
	<script src="js/history/edit-history.js"></script>
	<script src="js/history/delete-history.js"></script>
	<script src="js/history/submit_edited_history.js"></script>
	<!--HISTORY SPECIFIC JS ENDS---->
	
	<!--Z_ENC_DEC JS BEGINS-->
	<script src="js/z_enc_dec/aes.js"></script>
	<script src="js/z_enc_dec/pbkdf2.js"></script>
	<script src="js/z_enc_dec/AesUtil.js"></script>
	<script src="js/z_enc_dec/encrypt_decrypt.js"></script>
	<!--Z_ENC_DEC JS ENDS-->	
	
  </body>

</html>