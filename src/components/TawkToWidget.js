import React, { useEffect } from 'react';

const TawkToWidget = ({ tawkId }) => {
  useEffect(() => {
    const tawkScript = document.createElement('script');
    tawkScript.innerHTML = `
      var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
      (function(){
        var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
        s1.async=true;
        s1.src='https://embed.tawk.to/${tawkId}';
        s1.charset='UTF-8';
        s1.setAttribute('crossorigin','*');
        s0.parentNode.insertBefore(s1,s0);
      })();
    `;
    document.body.appendChild(tawkScript);
    return () => {
      document.body.removeChild(tawkScript);
    };
  }, [tawkId]);

  return (
    <React.Fragment>
      {/* Render any other components that should be displayed on the page */}
    </React.Fragment>
  );
};

export default TawkToWidget;
