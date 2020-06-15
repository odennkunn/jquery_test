<?php
if (is_uploaded_file($_FILES["file"]["tmp_name"])) {
  if (move_uploaded_file($_FILES["file"]["tmp_name"], "files/" . $_FILES["file"]["name"])) {
    echo $_FILES["file"]["name"] . "をアップロードしました。";
  } else {
    echo "ファイルをアップロードできません。";
  }
} else {
  echo "ファイルが選択されていません。";
}
?>