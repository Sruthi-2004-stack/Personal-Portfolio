import React, { useEffect, useState, useContext } from 'react';
import { SocialIcon } from 'react-social-icons';
import { ThemeContext } from 'styled-components';
import endpoints from '../constants/endpoints';

const styles = {
  iconStyle: {
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
  },
  customIconStyle: {
    width: 30,
    height: 30,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
  },
};

function Social() {
  const theme = useContext(ThemeContext);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(endpoints.social, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => err);
  }, []);

  return (
    <div className="social">
      {data ? data.social.map((social) => (
        social.network === 'hackerrank' ? (
          <a
            key={social.network}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/hackerrank-logo.png"
              alt="HackerRank"
              style={styles.customIconStyle}
            />
          </a>
        ) : (
          <SocialIcon
            key={social.network}
            style={styles.iconStyle}
            url={social.href}
            network={social.network}
            bgColor={theme.socialIconBgColor}
            target="_blank"
            rel="noopener noreferrer"
          />
        )
      )) : null}
    </div>
  );
}

export default Social;
