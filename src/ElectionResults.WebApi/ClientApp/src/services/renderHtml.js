import HTML from 'html-parse-stringify2';
import React from "react";

const getAsArray = (data) => {
  return Array.isArray(data) ? data : [data];
}

const transformNode = (node, index) => {
  const children = [];

  if (node.children) {
    node.children.forEach((value, index) => {
      children.push(transformNode(value, index));
    })
  }

  const timeStamp = Date.now();

  let type = 'text';

  let element;
  let props = { key: `${node.name}-${index}-${timeStamp}` }
  if (node.type === 'tag') {
    if (node.name) {
      if (node.name === 'fragment') {
        type = React.Fragment;
      } else {
        type = node.name;
        const attrs = node.attrs;
        props = {
          ...props,
          ...attrs,
        }
      }
    }

    element = React.createElement(type, props, children);
  }

  if (node.type === 'text') {
    element = React.createElement(React.Fragment, props, [node.content]);
  }

  return element;
}

/**
 * @param { string } html
 */
export const renderHtml = (html) => {
  const rootNode = {
    name: 'fragment',
    children: getAsArray(HTML.parse(html)),
    type: 'tag'
  };

  return transformNode(rootNode, 0);
}
