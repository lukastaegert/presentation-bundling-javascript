function rollupToBlock(blocksById, inputId, targetBlock) {
  function writeToTarget({code}) {
    const target = document.getElementById(targetBlock);
    target.textContent = code;
    hljs.highlightBlock(target);
  }

  rollup.rollup({
    input: inputId,
    plugins: [{
      resolveId(importee) {
        return importee;
      },
      load(id) {
        return document.getElementById(blocksById[id]).textContent;
      }
    }],
    onwarn(warning) {
      console.group(warning.loc ? warning.loc.file : '');
      console.warn(warning.message);
      if (warning.frame) {
        console.log(warning.frame);
      }
      console.groupEnd();
    }
  }).then(bundle => bundle.generate({
    format: 'es'
  }))
    .then(writeToTarget)
}
