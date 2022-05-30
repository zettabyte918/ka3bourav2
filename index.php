<?php

?>
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="description" content="Eat cells smaller than you and don't get eaten by the bigger ones, as an MMO">
    <meta name="keywords" content="agario, agar, io, cell, cells, virus, bacteria, blob, game, games, web game, html5, fun, flash">
    <meta name="robots" content="index, follow">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
    <meta name="apple-mobile-web-app-capable" content="yes">

    <title>Home - Cigar</title>

    <link id="favicon" rel="icon" type="image/png" href="assets/img/favicon.png" />
    <link href='https://fonts.googleapis.com/css?family=Ubuntu:700' rel='stylesheet' type='text/css'>
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
    <link href="assets/css/index.css?v=s" rel="stylesheet">
    <style>
    </style>
</head>

<body>
<?php
if(true) {
	echo '    <!-- Modal login -->
    <div class="modal fade" id="login_modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" style="max-width: 400px;" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Login</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form id="login_form">
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" class="form-control" name="email" id="InputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                            <small id="emailHelp" class="form-text text-muted">We\'ll never share your email with anyone else.</small>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" class="form-control" name="password" id="InputPassword1" placeholder="Password">
                        </div>
                        <div class="form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1" checked disabled>
                            <label class="form-check-label" for="exampleCheck1">Remember me</label>
                        </div>
                    </form>
                </div>
                <div class="modal-footer justify-content-between">
				<div id="response_login">
    <div class="spinner-border text-primary" role="status">
  <span class="sr-only">Loading...</span>
</div> </div><div>
                    <button type="button" class="btn btn-primary"><i class="fa fa-sign-in" aria-hidden="true"></i> Login</button>
                    <button type="button" class="btn btn-secondary" data-dismiss="modal"><i class="fa fa-times-circle" aria-hidden="true"></i> Close</button></div>					
                </div>
            </div>
        </div>
    </div>
    <!-- Modal login -->
	
    <!-- Modal register -->
    <div class="modal fade" id="register_modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" style="max-width: 400px;" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Register</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form id="register_form">
					<div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Email</label>
      <input type="email" class="form-control" id="inputEmail4" placeholder="Email">
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Password</label>
      <input type="password" class="form-control" id="inputPassword4" placeholder="Password">
    </div>
  </div>
                        <div class="form-group">
                            <label>Username</label>
                            <input type="text" class="form-control" name="username" aria-describedby="usernameHelp" placeholder="Enter username">
                            
                        </div>					
						<div class="form-group">
						<label>Upload a profile image</label>
                                <div class="custom-file">
								   
                                    <input type="file" accept="image/*" class="custom-file-input" accept="image/*" id="customFile">
                                    <label class="custom-file-label" for="customFile">Select image</label>
                                </div>
                        </div>
						<small id="emailHelp" class="form-text text-muted">We\'ll never share your information with anyone else.</small>
                    </form>
                </div>
                <div class="modal-footer justify-content-between">
				<div id="response_register">
    <div class="spinner-border text-primary" role="status">
  <span class="sr-only">Loading...</span>
</div> </div><div>
                    <button type="button" class="btn btn-primary"><i class="fa fa-sign-in" aria-hidden="true"></i> Register</button>
                    <button type="button" class="btn btn-secondary" data-dismiss="modal"><i class="fa fa-times-circle" aria-hidden="true"></i> Close</button>					
                </div>
				</div>
            </div>
        </div>
    </div>
    <!-- Modal register -->	';
    
}

?>
    <div class="modal fade" id="inPageModal" role="dialog">
        <div class="modal-dialog modal-dialog-scrollable modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <ul class="nav nav-pills mb-3" style="display:none;" id="pills-tab" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Free</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Paid</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Try</a>
                        </li>
                    </ul>
                    <h5 id="inPageModalTitle" class="modal-title">Failed to Load</h5>
                    <input id="myInput" class="form-control" style="max-width: 200px;" type="text" placeholder="Search..">
                </div>
                <div id="inPageModalBody" class="modal-body">
                    <p>Failed to load. Please check your connection!</p>
                    <div class="center">
                        <div class="spinner-border text-primary" role="status">
                            <span class="sr-only">Loading...</span>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
    <div id="overlays">
        <div id="helloDialog">
            <form role="form">
                <div class="form-group">
                    <h2 id="title">CigarProject</h2>
                </div>

                <div class="form-group">
                    <input id="nick" class="form-control save" data-box-id="0" placeholder="Nick" maxlength="15" />
                    <input id="skin" class="form-control save" data-box-id="12" maxlength="30" hidden />
                    <select id="gamemode" class="form-control" onchange="setserver($(this).val());" required>
                        <option selected disabled>Servers:</option>
                        <option value="127.0.0.1:443">Local</option>
						<option value="safe-vase.glitch.me">Old FFA</option>
                  <option value="material-check.glitch.me">FFA 1 (Maybe Blocked)</option>
                  <option value="titanium-fish.glitch.me">FFA Test Server</option>
                  <option value="zippy-roadrunner-backup.glitch.me">FFA 2 (Zippy's Back-Up Server. Maybe Blocked)</option>
                  <option value="picturesque-quotation.glitch.me">2x Speed FFA</option>
                  <option value="quickest-cornucopia.glitch.me">Rainbow FFA</option>
                  <option value="parallel-piranha.glitch.me">Instant FFA</option>
                  <option value="torpid-omelet.glitch.me">Big Instant FFA (Gives 2k Off The Start)</option>
                  <option value="faint-fang.glitch.me">Experimental</option>
                  <option value="same-oboe.glitch.me">Teams</option>
                  <option value="marred-value.glitch.me">Hunger Games</option>
                  <option value="second-patio.glitch.me">Bots</option>
                  <option value="sassy-spectacles.glitch.me">Free Mod! Type /login MadMod</option>
                  <option value="emphasized-resilient-gray.glitch.me">Big Gae (Testing Server)</option>
                    </select>
                    <br clear="both" />
                </div>

                <div class="form-group">
                    <?php
if(session_id() == '' || !isset($_SESSION)) {
    echo '<div class="mb-10">
                        <button type="button" class="btn btn-success" style="width: 60%;" data-toggle="modal" data-target="#login_modal">Login</button>
						<button type="button" class="btn btn-secondary" style="width: 38%;float: right" data-toggle="modal" data-target="#register_modal">Register</button>

                    </div>';
}
?>

                    <button type="button" id="play-btn" onclick="play(document.getElementById('nick').value); return false;" class="btn btn-play btn-primary btn-needs-server">Play</button>
                    <button onclick="$('#settings, #instructions').toggle(); return false;" class="btn btn-info" id="settings-btn"><i class="fa fa-cog"></i></button>
                    <br clear="both" />
                </div>

                <div id="settings" class="checkbox" style="display:none;">
                    <div class="form-group" id="mainform">
                        <button type="" id="spectate-btn" onclick="spectate(); return false;" class="btn btn-danger btn-block">Spectate <i class="fa fa-eye" aria-hidden="true"></i></button>
                        <br clear="both" />
                    </div>
                    <div style="margin: 6px;">
                        <label>
                            <input type="checkbox" class="save" data-box-id="1" onchange="setSkins(!$(this).is(':checked'));"> No skins</label>
                        <label>
                            <input type="checkbox" class="save" data-box-id="2" onchange="setHats($(this).is(':checked'));"> No hats</label>
                        <label>
                            <input type="checkbox" class="save" data-box-id="3" onchange="setNames(!$(this).is(':checked'));"> No names</label>
                        <label>
                            <input type="checkbox" class="save" data-box-id="4" onchange="setDarkTheme($(this).is(':checked'));"> Dark theme</label>
                        <label>
                            <input type="checkbox" class="save" data-box-id="5" onchange="setColors($(this).is(':checked'));"> No colors</label>
                        <label>
                            <input type="checkbox" class="save" data-box-id="6" onchange="setShowMass($(this).is(':checked'));"> Show mass</label>
                        <label>
                            <input type="checkbox" class="save" data-box-id="7" onchange="setChatHide($(this).is(':checked'));"> Hide chat</label>
                        <label>
                            <input type="checkbox" class="save" data-box-id="8" onchange="setMinimap($(this).is(':checked'));"> Hide minimap</label>
                        <label>
                            <input type="checkbox" class="save" data-box-id="9" onchange="setGird($(this).is(':checked'));"> Hide grid</label>
                    </div>
                </div>
            </form>

            <div id="instructions">
                <hr/>
                <center>
                    <span class="text-muted">
                        Move your mouse to control your cell<br/>
                        Press <b>Space</b> to split<br/>
                        Press <b>W</b> to eject some mass<br/>
                    </span>
                </center>
            </div>

            <hr />
            <div id="footer">
                <a href="https://github.com/Luka967/Cigar" class="text-muted">Luka967/Cigar</a>
            </div>
            <div id="levelbar" class="side-container">
			<?php
if(session_id() == '' || !isset($_SESSION)) {
	echo '<div id="level-blocker" class="shop-blocker"><span class="outlined-text" style="display: block;top:50%" data-itr="connecting">Connecting</span></div>';
    
}

?>
                
                <div class="agario-side-panel agario-profile-panel side-container">
                    <div class="clearfix" style="margin-bottom: 16px;">
                        <div id="agario-profile-picture" style="background-image: url('assets/img/guest.png');" class="agario-profile-picture" data-tooltip="tooltip" data-placement="top" title="Profile setting" data-toggle="modal" data-target="#profile"></div>
                        <div class="agario-profile-name-container">
                            <div class="agario-wallet-container">
                                <span id="agario-wallet-label" class="agario-wallet-label">100</span>
                                <img src="assets/img/currency.png" class="agario-wallet-currency">
                                <div class="agario-wallet-plus">
                                    <span>+</span>
                                </div>
                            </div>
                            <div id="agario-profile-name" class="agario-profile-name">Guest</div>
                        </div>
                    </div>
                    <div style="position: relative;width: 92%;" class="clearfix">
                        <div class="agario-exp-bar progress">
                            <span id="progress-bar-text" class="progress-bar-text">0/50 XP</span>
                            <div id="progress-bar-striped" class="progress-bar progress-bar-striped"></div>
                        </div>
                        <div class="progress-bar-border"></div>
                        <div id="progress-bar-star" class="progress-bar-star">1</div>
                    </div>
                </div>
            </div>
            <div id="shop-panel" class="side-container">
			<?php
if(session_id() == '' || !isset($_SESSION)) {
	echo '<div id="shop-blocker" class="shop-blocker"><span class="outlined-text" style="display: block;top:50%" data-itr="connecting">Connecting</span></div>';
    
}

?>
                <div class="form-group" id="agario-second-buttons">
                    <button id="openShopBtn" onclick="MC.openShop(); return false;" class="btn btn-shop" style="line-height: 24px;" data-itr="Shop">Shop</button>
                    <br clear="both">
                </div>
                <div class="shop-left-container">
                    <div id="skinButton" class="circle" data-toggle="modal" data-target="#inPageModal" onclick="openSkinsList();" style="cursor:pointer; height:92px">
                        <div class="circle big green" style="top:75px;"><span class="outlined-text plus-text" style="cursor:pointer;line-height: 26px;">+</span></div>
                        <img class="circle skinUrl" src="" style="height: 100%; border: 3px solid #777;">
                        <span id="skinLabel" class="outlined-text" style="display: block;" data-itr="main_menu_skins">skins</span>
                    </div>
                </div>
                <div class="vertical-line" style="min-height:115px;"></div>
                <div class="shop-right-container">
                    <div style="position:relative">
                        <div id="boostButton" class="shop-power">
                            <div class="circle small green"><span class="outlined-text" style="cursor:pointer">+</span></div>
                            <img src="assets/img/xpboost_3x_shop.png" style="vertical-align:top; width:60px; display:block;margin:auto;">
                            <span class="timer">23h30m</span>
                        </div>
                        <div id="massButton" class="shop-power">
                            <div class="circle small green"><span class="outlined-text" style="cursor:pointer">+</span></div>
                            <img src="assets/img/massboost_3x_shop.png" style="vertical-align:top; width:60px; display:block;margin:auto;">
                            <span class="timer">23h30m</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </div>

    <div id="connecting">
        <div style="width: 350px; background-color: #FFFFFF; margin: 100px auto; border-radius: 15px; padding: 5px 15px 5px 15px;">
            <h2>Connecting</h2>
            <p> If you cannot connect to the servers, check if you have some anti virus or firewall blocking the connection.</p>
        </div>
    </div>

    <canvas id="canvas" width="800" height="600"></canvas>
    <input type="text" id="chat_textbox" placeholder="Press enter to chat" maxlength="200" />
    <div style="font-family:'Ubuntu'">&nbsp;</div>
    <script src="//code.jquery.com/jquery-1.11.3.min.js"></script>
    <script src="assets/js/main_out.js?v=aaz"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js" integrity="sha384-b/U6ypiBEHpOf/4+1nzFpr53nxSS+GLCkfwBdFNTxtclqqenISfwAzpKaMNFNmj4" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js" integrity="sha384-h0AbiXch4ZDo7tp9hKZ4TsHbi047NrKGLO3SEJAg45jXxnGIfYzk4Si90RDIqNm1" crossorigin="anonymous"></script>
    <script>
        $("#myInput").on("keyup", function() {
            var value = $(this).val().toLowerCase();
            $("#inPageModalBody .hat-container").filter(function() {
                $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
            });
        });
    </script>
</body>

</html>
