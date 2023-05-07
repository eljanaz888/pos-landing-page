import React from 'react';
import * as classes from './style.module.css';
import { StaticImage } from 'gatsby-plugin-image';
import { useTranslation, Link, useI18next } from 'gatsby-plugin-react-i18next';


export function LanguageSwitcher(): React.ReactElement {
    const { i18n } = useTranslation();
    const { languages, originalPath } = useI18next();
  
    const [isHovering, setIsHovering] = React.useState(false);
  
    const onMouseEnter = () => {
      setIsHovering(true);
    };
  
    const onMouseLeave = (e: React.MouseEvent<HTMLUListElement>) => {
      // Check if the mouse is still over the language switcher or if it has moved onto the list of languages
      if (
        !e.relatedTarget ||
        (e.relatedTarget instanceof Element &&
          !e.relatedTarget.classList.contains(classes.LanguageOption))
      ) {
        setIsHovering(false);
      }
    };
  
    // Filter out the current language from the list of languages
    const filteredLanguages = languages.filter(lng => lng !== i18n.language);
  
    return (
      <div className={classes.LanguageSwitcher} onMouseEnter={onMouseEnter}>
        <div className={classes.OptionWrapper}>
        {i18n.language === "en" ? 
          <StaticImage src="../../../images/en.svg" alt={i18n.language} className={classes.Flag} /> :
          <StaticImage src="../../../images/sq.svg" alt={i18n.language} className={classes.Flag} /> 
        }
        <button className={classes.CurrentLanguage}>{i18n.language}</button>
        </div>
        {isHovering && (
          <ul className={classes.LanguageList} onMouseLeave={onMouseLeave}>
            {filteredLanguages.map(lng => {
              return (
                <li key={lng}>
                    <Link
                      to={originalPath}
                      language={lng}
                      activeClassName="active"
                      partiallyActive={true}
                      className={classes.LanguageOption}
                    >
                      {lng === "en" ? 
                      <StaticImage src="../../../images/en.svg" alt={lng} className={classes.Flag} /> :
                      <StaticImage src="../../../images/sq.svg" alt={lng} className={classes.Flag} /> 
                    }
                    <span className={classes.LanguageLabel}>{lng}</span>
                    </Link>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    );
  }
