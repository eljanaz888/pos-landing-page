import React from 'react';
import * as classes from './style.module.css';
import { Trans } from "gatsby-plugin-react-i18next";

interface SectionProps {
    anchor: string;
    heading?: string;
    additionalClasses?: string[];
    children: React.ReactNode;
}

export function Section(props: SectionProps): React.ReactElement {
    let classList;
    if (props.additionalClasses) {
        classList = props.additionalClasses.concat(classes.ContentWrapper).join(' ');
    } else {
        classList = classes.ContentWrapper;
    }
    return (
        <section id={props.anchor} className={classes.Section}>
            <div className={classList}>
                {props.heading && <h1 className={classes.Heading}><Trans>{props.heading}</Trans></h1>}
                {props.children}
            </div>
        </section>
    );
}