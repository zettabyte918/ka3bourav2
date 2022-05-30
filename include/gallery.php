
<div class="tab-content" id="pills-tabContent">
  <div class="text-center tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">

  
            <?php
            # Skin directory relative to include/gallery.php (this file)
            $skindir = "../skins/";

            # Skin directory relative to index.html
            $skindirhtml = "./skins/";

            $images = scandir($skindir);

            foreach($images as $curimg) {
                if (strtolower(pathinfo($curimg, PATHINFO_EXTENSION)) == "png") {
        ?>
        
		
      <div id="<?php echo pathinfo($curimg, PATHINFO_FILENAME); ?>" class="hat-container" onclick="setSkinToDB($(this).find('.title').text());" data-dismiss="modal"><img class="img-fb" style="border: 6px solid #00470e;" src="<?php echo $skindirhtml.$curimg ?>">
	  <h4 class="title"><?php echo pathinfo($curimg, PATHINFO_FILENAME); ?></h4>
    <button type="button" style="width: 90%;" class="btn btn-primary d-inline mx-auto">Play</button>
</div>
    
        <?php
                }
            }
        ?>

  </div>
  <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab"><div id="Cougar" class="hat-container" onclick="$('#skin').val('{' + $(this).find('.title').text() + '}');" data-dismiss="modal" style="display: block;"><img class="img-fb" style="border: 6px solid #00470e;" src="./skins/Cougar.png">
	  <h4 class="title">Cougar</h4>
    <button type="button" style="width: 90%;" class="btn btn-primary d-inline mx-auto">Play</button>
</div></div>
  <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">...</div>
</div>