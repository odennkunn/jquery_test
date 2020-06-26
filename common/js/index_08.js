//ドラッグ＆ドロップする要素を取得
const fileSelector = document.getElementById('file-selector');
const output = document.getElementById('output');

//ファイルリストにアクセスする条件
if (window.FileList && window.File) {
  fileSelector.addEventListener('dragover', event => {
    event.stopPropagation(); //ハブリングを阻止
    event.preventDefault();
    event.dataTransfer.dropEffect = 'copy'; //ファイルのコピーを作成
  });

  fileSelector.addEventListener('drop', event => {
    output.innerHTML = ''; //ulの中身をリセット
    event.stopPropagation(); //ハブリングを阻止
    event.preventDefault();
    const files = event.dataTransfer.files;
    for (let i = 0; i < files.length; i++) {
      const li = document.createElement('li'); //要素を作成、追加
      const file = files[i];
      const name = file.name ? file.name : 'NOT SUPPORTED';
      li.textContent = `${name}をアップロードしました`;
      output.appendChild(li);
    }
  });
}