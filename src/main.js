import template from '../dist/index.html';

function isModern() {
  try {
    // eslint-disable-next-line no-new-func
    Function('() => {};');
    return true;
  } catch (e) {
    return false;
  }
}

if (!isModern()) {
  setTimeout(function () {
    document.write(template);
  }, 1);
}
