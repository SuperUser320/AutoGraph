<?php
  $directory = dirname(__DIR__)."/test_data";
  $file_list = scandir( $directory );

  echo 'var file_list = new Array();';
  $index = 0;
  foreach($file_list as $file) {
    if (pathinfo($file)['extension'] == 'csv')
      echo 'file_list['.$index++.']="'.$file .'";';
  }
?>
