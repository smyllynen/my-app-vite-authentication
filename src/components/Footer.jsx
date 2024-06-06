import React from 'react';

export const Footer = () => {
  const [footerImage, setFooterImage] = React.useState();

  React.useEffect(() => {
    import('/src/img/vihrea.webp').then((image) => {
      setFooterImage(image.default);
    });
  }, []);

  return (
    <footer style={{
      backgroundImage: `url(${footerImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '311px',
      zIndex: 2,
      position: 'relative',
      margin: '0px',
      marginTop: '-66px',


    }}>

    </footer>
  );
};