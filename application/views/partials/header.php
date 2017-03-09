<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title><?php echo $template['title']; ?></title>
  <?php /* echo link_tag('assets/css/main.css'); */ ?>
  <?php echo link_tag('assets/css/' . $asset_path . '.css'); ?>
  <script src="assets/js/app.js"></script>
  <?php if(isset($js)) {
    echo "<script src='assets/js/$asset_path.min.js'></script>";
  }; ?>
</head>

<body>
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-49247728-1', 'sleepytimesickness.com');
  ga('send', 'pageview');

</script>
