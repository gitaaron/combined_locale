require.config({
    config:{
        i18n:{
            locale:"null"
        }
    }
});

require(['i18n!nls/strings'], function(i18n) {
    var elem = document.getElementById('test_message');
    elem.innerHTML = i18n.test;
});
