export default {
  functional: true,
  props: {
    tag: {
      type: String,
      required: true,
    },
  },
  render(createElement, context) {
    return createElement(
      context.props.tag,
      context.data,
      context.children,
    );
  },
};
