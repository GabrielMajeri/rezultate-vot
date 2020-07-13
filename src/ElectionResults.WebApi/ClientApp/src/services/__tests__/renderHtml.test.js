import { renderHtml } from "../renderHtml";

it("Transforms an html string into a component tree", () => {
  const html = '<p>test</p><h1>amazing</h1>';

  const componentTree = renderHtml(html);
  const children = componentTree.props.children;

  expect(children.length).toEqual(2);
});

it("Transforms an anchor tag into a component with all the props", () => {
  const html = '<a href="/" target="_blank">Text</a>';

  const componentTree = renderHtml(html);
  const anchorComponent = componentTree.props.children[0];

  const { href, target, children } = anchorComponent.props;

  expect(href).toEqual('/');
  expect(target).toEqual('_blank');
  expect(children.length).toEqual(1);
});

it("Transforms a nested html with styled span tag", () => {
  const html = '<p>Momentul <span className="emphasize">2016</span> a fost unul de cotitură în istoria alegerilor din țara noastră</p>';

  const componentTree = renderHtml(html);
  const paragraphComponent = componentTree.props.children[0];
  const spanComponent = paragraphComponent.props.children[1];

  expect(paragraphComponent.type).toEqual('p');
  expect(spanComponent.type).toEqual('span');
  expect(spanComponent.props.className).toEqual('emphasize');
});
