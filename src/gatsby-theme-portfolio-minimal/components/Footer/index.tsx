import React from "react";

import { Logo } from "../Logo";
import { Link } from "gatsby-theme-portfolio-minimal/src/components/Link";
import {
  Theme,
  useGlobalState,
} from "gatsby-theme-portfolio-minimal/src/context";
import { useSiteConfiguration } from "gatsby-theme-portfolio-minimal/src/hooks/useSiteConfiguration";
import * as classes from "././style.module.css";

export function Footer(): React.ReactElement {
  const { globalState } = useGlobalState();
  const siteConfiguration = useSiteConfiguration();
  const darkModeEnabled = globalState.theme === Theme.Dark;

  return (
    <footer
      className={classes.Footer}
      style={{
        background: darkModeEnabled ? "#1e1e1e" : "#1e1e1e",
        // borderTop: darkModeEnabled
        //   ? "3px solid var(--box-shadow-hover-color)"
        //   : undefined,
      }}
    >
      <div className={classes.ContentWrapper}>
        <Link to="/" aria-label="home">
          <Logo
            fontSize="1.5rem"
            color={darkModeEnabled ? "#ffbe0b" : "#ffbe0b"}
            theme={Theme.Dark}
          />
        </Link>
        <div className={classes.Links}>
          {siteConfiguration.navigation.footer.map((linkObject, key) => {
            return (
              <Link
                key={key}
                to={linkObject.url}
                aria-label={linkObject.label}
                style={{
                  color: darkModeEnabled ? "#ffbe0b" : "#ffbe0b",
                }}
              >
                {linkObject.label}
              </Link>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
