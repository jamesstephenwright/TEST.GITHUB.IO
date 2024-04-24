<?php
// Proxy script to fetch and serve content
$url = "https://storymaps.arcgis.com/stories/57db70af523047f9ba4f730f41681d98";
$content = file_get_contents($url);
echo $content;
?>