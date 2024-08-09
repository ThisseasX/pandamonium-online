export default {
  [['html', 'body', '#root'].join(',')]: {
    height: '100%',
  },
  body: {
    overflow: 'hidden',
  },
  '*': {
    WebkitTapHighlightColor: 'transparent',
    WebkitTouchCallout: 'none',
    userSelect: 'none',
  },
};
