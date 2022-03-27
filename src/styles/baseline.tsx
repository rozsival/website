const style = `
html, 
body, 
#__next {
  -webkit-overflow-scrolling: touch;
  margin: 0px;
  min-height: 100%;
  padding: 0px;
  width: 100%;
}
html {
  height: 100%;
  scroll-behavior: smooth;
}
body {
  -moz-osx-font-smoothing: grayscale;
  -ms-overflow-style: scrollbar;
  -webkit-font-smoothing: antialiased;
  display: flex;
  overflow-y: auto;
  overscroll-behavior-y: none;
  text-rendering: optimizeLegibility;
}
#__next {
  display: flex;
  flex-basis: auto;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 0;
  flex: 1;
}
`;

export const baseline = (
  // eslint-disable-next-line react/no-danger
  <style dangerouslySetInnerHTML={{ __html: style.replace(/\n|\s+/g, '') }} />
);
