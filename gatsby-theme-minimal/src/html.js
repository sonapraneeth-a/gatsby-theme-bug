import React from "react"
import PropTypes from "prop-types"

import styled from "@emotion/styled";

const BodyWrapper = styled.body`
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen";
`;

export default class HTML extends React.Component {

    render() {
        return (
            <html {...this.props.htmlAttributes}>
                <head>
                <meta charSet="utf-8" />
                <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
                {this.props.headComponents}
                </head>
                <BodyWrapper {...this.props.bodyAttributes} className="test">
                {this.props.preBodyComponents}
                <noscript key="noscript" id="gatsby-noscript">
                    This app works best with JavaScript enabled is it. (Is this visible?)
                </noscript>
                <div
                    key={`body`}
                    id="___gatsby"
                    dangerouslySetInnerHTML={{ __html: this.props.body }}
                />
                {this.props.postBodyComponents}
                </BodyWrapper>
            </html>
        );
    }
}

// export default HTML;

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
