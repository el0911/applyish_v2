import { useEffect } from 'react';


const useSprig = () => {
  useEffect(() => {
    alert(process.env.NEXT_PUBLIC_CLARITY_API)
    // Check if the script is already present to prevent duplicates
    if (document.getElementById('sprig-script')) {
      return;
    }

    const script = document.createElement('script');
    script.id = 'sprig-script';
    script.type = 'text/javascript';

    // The inline script content from Sprig
    script.innerHTML = `
      (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_CLARITY_API}");
    `;

    document.head.appendChild(script);

    return () => {
      // Clean up the script when the component unmounts
      document.head.removeChild(script);
    };
  }, []); // Empty dependency array ensures this runs only once
};

export default useSprig;
