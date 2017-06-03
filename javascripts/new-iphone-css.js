      var agent = navigator.userAgent.toLowerCase();
      var isIphone = agent.indexOf('ipad')!=-1 || agent.indexOf('iphone')!=-1 || agent.search('android') != -1;
      if (isIphone) {
        var v_css  = document.createElement('link');
	v_css.rel = 'stylesheet'
	v_css.type = 'text/css';
	v_css.href = "/static/new_css/iphone.css";
	document.getElementsByTagName('head')[0].appendChild(v_css);
      }

        // fudge

