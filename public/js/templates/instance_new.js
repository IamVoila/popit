define(['jadeRuntime'], function(jade) {
return function anonymous(locals, attrs, escape, rethrow) {
var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
var buf = [];
with (locals || {}) {
var interp;
var __indent = [];
buf.push('<!DOCTYPE html><!--[if lt IE 7]><html class="no-js lt-ie9 lt-ie8 lt-ie7" lang="en-gb"><![endif]--><!--[if IE 7]><html class="no-js lt-ie9 lt-ie8" lang="en-gb"><![endif]--><!--[if IE 8]><html class="no-js lt-ie9" lang="en-gb"><![endif]--><!--[if gt IE 8]>\n<!-- --><html lang="en-gb" class="no-js"><![endif]-->\n<head>\n  <meta');
buf.push(attrs({ terse: true, 'charset':('UTF-8') }, {"charset":true}));
buf.push('><!--\n  |\n  -------------------------------------\n  PopIt\n  -------------------------------------\n  A really easy way to store and share information about politicians or other public figures brought to you by mySociety, a charitable project which builds websites that give people simple, tangible benefits in the civic and community, and teaches through demonstration, how to use the internet most efficiently to improve lives. (http://www.mysociety.org/)\n  --------------------------------- -->\n  <meta');
buf.push(attrs({ terse: true, 'name':('creator'), 'content':('http://www.mysociety.org/') }, {"name":true,"content":true}));
buf.push('>\n  <meta');
buf.push(attrs({ terse: true, 'http-equiv':('imagetoolbar'), 'content':('false') }, {"http-equiv":true,"content":true}));
buf.push('>\n  <meta');
buf.push(attrs({ terse: true, 'name':('description'), 'content':('PopIt, a really easy way to store and share information about politicians or other public figures.') }, {"name":true,"content":true}));
buf.push('>\n  <title>Create your PopIt site</title>\n  <link');
buf.push(attrs({ terse: true, 'rel':('stylesheet'), 'href':('/css/popit.css'), 'type':('text/css'), 'media':('screen, print'), 'charset':('utf-8') }, {"rel":true,"href":true,"type":true,"media":true,"charset":true}));
buf.push('>\n  <link');
buf.push(attrs({ terse: true, 'rel':('stylesheet'), 'href':('/css/print.css'), 'type':('text/css'), 'media':('print'), 'charset':('utf-8') }, {"rel":true,"href":true,"type":true,"media":true,"charset":true}));
buf.push('>\n  <meta');
buf.push(attrs({ terse: true, 'name':('viewport'), 'content':('width=device-width,initial-scale=1') }, {"name":true,"content":true}));
buf.push('>\n  <!-- script(src=\'/js/libs/modernizr-2.5.3.js\', type=\'text/javascript\', charset=\'utf-8\')-->\n  <!-- Javascript -->\n  <script');
buf.push(attrs({ terse: true, 'src':('/js/require.js'), 'data-main':("/js/main-hosting"), 'type':('text/javascript'), 'charset':('utf-8') }, {"src":true,"data-main":true,"type":true,"charset":true}));
buf.push('></script>\n</head>\n<body');
buf.push(attrs({ terse: true, 'id':('popit-united_kingdom'), "class": ('brand_page') }, {}));
buf.push('>\n  <header');
buf.push(attrs({ terse: true, 'id':('header') }, {}));
buf.push('>\n    <h1');
buf.push(attrs({ terse: true, "class": ('logo') }, {}));
buf.push('><abbr');
buf.push(attrs({ terse: true, 'title':('People Organisations Positions') }, {"title":true}));
buf.push('>Pop</abbr>It</h1>\n  </header>\n  <div');
buf.push(attrs({ terse: true, 'id':('content') }, {}));
buf.push('>');
 var errors = locals.errors || {}
buf.push('\n    <div');
buf.push(attrs({ terse: true, "class": ('page-header') }, {}));
buf.push('>\n      <h1>Make your own PopIt <span');
buf.push(attrs({ terse: true, "class": ('long-title') }, {"class":true}));
buf.push('>politician monitoring web</span>site</h1>\n    </div>\n    <p');
buf.push(attrs({ terse: true, "class": ('intro') }, {}));
buf.push('>To start using PopIt you need to create a new instance. This is quick, easy, free and you do it by filling in the form below. A temporary password will be emailed to you that you can change once you login.</p>\n    <form');
buf.push(attrs({ terse: true, 'method':('post'), 'action':(''), "class": ('well') + ' ' + ('form-horizontal') }, {"method":true,"action":true}));
buf.push('>\n      <p');
buf.push(attrs({ terse: true, "class": ('control-group') + ' ' + ("" + ( errors.slug ? 'error' : '' ) + "") }, {"class":true}));
buf.push('>\n        <label');
buf.push(attrs({ terse: true, 'for':('slug'), "class": ('control-label') }, {"for":true}));
buf.push('>Pick a website name</label><span');
buf.push(attrs({ terse: true, "class": ('controls') + ' ' + ('append') }, {}));
buf.push('>\n          <input');
buf.push(attrs({ terse: true, 'id':('slug'), 'type':('text'), 'name':('slug'), 'data-validation':('required url_safe'), 'value':('' + ( locals.slug || '' ) + ''), "class": ('input-xlarge') }, {"type":true,"name":true,"data-validation":true,"value":true}));
buf.push('><span');
buf.push(attrs({ terse: true, "class": ('add-on') }, {}));
buf.push('>' + escape((interp =  config.instance_site_base_url_suffix ) == null ? '' : interp) + '</span></span>');
if ( errors.slug)
{
buf.push('<span');
buf.push(attrs({ terse: true, "class": ('help-block') }, {}));
buf.push('>Your website name can only contain letters and numbers. It should be at least four letters long but no longer than 20.</span><span');
buf.push(attrs({ terse: true, "class": ('help-block') }, {}));
buf.push('>Error is \'' + escape((interp =  errors.slug.type ) == null ? '' : interp) + '\'.</span>');
}
buf.push('\n      </p>\n      <p');
buf.push(attrs({ terse: true, "class": ('control-group') + ' ' + ("" + ( errors.email ? 'error' : '' ) + "") }, {"class":true}));
buf.push('>\n        <label');
buf.push(attrs({ terse: true, 'for':('email'), "class": ('control-label') }, {"for":true}));
buf.push('>Your Email address</label><span');
buf.push(attrs({ terse: true, "class": ('controls') }, {}));
buf.push('>\n          <input');
buf.push(attrs({ terse: true, 'id':('email'), 'type':('email'), 'name':('email'), 'data-validation':('required email'), 'value':('' + ( locals.email || '' ) + ''), "class": ('input-xlarge') }, {"type":true,"name":true,"data-validation":true,"value":true}));
buf.push('><span');
buf.push(attrs({ terse: true, "class": ('suggestion') }, {}));
buf.push('></span>');
if ( errors.email)
{
buf.push('<span');
buf.push(attrs({ terse: true, "class": ('help-block') }, {}));
buf.push('>Error is \'' + escape((interp =  errors.email.type ) == null ? '' : interp) + '\'.            </span>');
}
buf.push('</span>\n      </p>\n      <div');
buf.push(attrs({ terse: true, "class": ('form-actions') }, {}));
buf.push('>\n        <input');
buf.push(attrs({ terse: true, 'type':('submit'), 'value':('Create your own PopIt'), "class": ('btn') + ' ' + ('btn-primary') }, {"type":true,"value":true}));
buf.push('>\n      </div>\n    </form>\n  </div>\n  <footer');
buf.push(attrs({ terse: true, 'id':('footer') }, {}));
buf.push('>\n    <div>\n      <div');
buf.push(attrs({ terse: true, 'id':('sitemap') }, {}));
buf.push('><a');
buf.push(attrs({ terse: true, 'href':('/'), "class": ('logo') }, {"href":true}));
buf.push('>PopIt</a>\n        <ul>\n          <li><a');
buf.push(attrs({ terse: true, 'href':('/FIXME') }, {"href":true}));
buf.push('>About PopIt</a></li>\n          <li><a');
buf.push(attrs({ terse: true, 'href':('/info/data-import') }, {"href":true}));
buf.push('>API / Data Freedom</a></li>\n          <li><a');
buf.push(attrs({ terse: true, 'href':('/FIXME') }, {"href":true}));
buf.push('>Self Hosting</a></li>\n          <li><a');
buf.push(attrs({ terse: true, 'href':('/info/privacy') }, {"href":true}));
buf.push('>Terms & Privacy Policy</a></li>\n        </ul>\n      </div>\n      <div');
buf.push(attrs({ terse: true, 'id':('about-mysociety') }, {}));
buf.push('><a');
buf.push(attrs({ terse: true, 'href':('http://www.mysociety.org'), 'title':('mySociety') }, {"href":true,"title":true}));
buf.push('><img');
buf.push(attrs({ terse: true, 'src':("/img/mysociety-logo.png"), "class": ('mysociety-logo') }, {"src":true}));
buf.push('></a>\n        <p>This is the <a');
buf.push(attrs({ terse: true, 'href':("http://en.wikipedia.org/wiki/Software_release_life_cycle#Alpha") }, {"href":true}));
buf.push('>α</a>lpha of <a');
buf.push(attrs({ terse: true, 'href':(config.hosting_site_base_url) }, {"href":true}));
buf.push('>PopIt</a>, a new service for lowering the barrier\n          to getting started with transparency projects. Please feel free to\n          make a <a');
buf.push(attrs({ terse: true, 'href':("" + (config.hosting_site_base_url) + "/instances/new") }, {"href":true}));
buf.push('>new instance</a>, and join <a');
buf.push(attrs({ terse: true, 'href':("https://secure.mysociety.org/admin/lists/mailman/listinfo/components") }, {"href":true}));
buf.push('>our mailing list</a> to let us know that you\'re interested in giving it a go\n        </p>\n        <p>Learn more at <a');
buf.push(attrs({ terse: true, 'href':('http://www.mysociety.org'), 'title':('mySociety') }, {"href":true,"title":true}));
buf.push('>www.mysociety.org</a></p>\n      </div>\n    </div>\n    <div');
buf.push(attrs({ terse: true, "class": ('copyright') }, {}));
buf.push('></div>\n  </footer>\n</body></html>');
}
return buf.join("");
};
});