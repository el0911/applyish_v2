import { useEffect } from 'react';


const useSprig = () => {
  useEffect(() => {
    // Check if the script is already present to prevent duplicates
    if (document.getElementById('sprig-script')) {
      return;
    }

    const script = document.createElement('script');
    script.id = 'sprig-script';
    script.type = 'text/javascript';

    // The inline script content from Sprig
    script.innerHTML = `
      (function(l,e,a,p) {
        if (window.Sprig) return;
        window.Sprig = function(){S._queue.push(arguments)}
        var S = window.Sprig;S.appId = a;S._queue = [];window.UserLeap=S;
        a=l.createElement('script');
        a.async=1;a.src=e+'?id='+S.appId;
        p=l.getElementsByTagName('script')[0];
        p.parentNode.insertBefore(a, p);
      })(document, 'https://cdn.sprig.com/shim.js', '${process.env.NEXT_SPRING_API}');
    `;

    document.head.appendChild(script);

    return () => {
      // Clean up the script when the component unmounts
      document.head.removeChild(script);
    };
  }, []); // Empty dependency array ensures this runs only once
};

export default useSprig;
