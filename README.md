# shimmer-loader

- `yarn install` or `yarn`
- go to `localhost:3000`

There are two components exported from the Loader component; 1)  Loader and 2) LoaderWrapper.

## 1. Loader
Animated Loading component. Render this component wherever you wish to show the shimmer loading effect while the content is loading and replace it with the content when it is loaded.
### Props
- **width**: number or string
- **height**: number or string(Note: it also takes styles/className with default behavior which can be used for structuring)
Width and height are provided to give a rough structure to the component when it is not known how exactly the content will look when it is loaded. styles or className can also be used for the same purpose.

## 2. LoaderWrapper
Wrap the components in the LoaderWrapper component and it will automatically show the loader depending on the children inside it.The wrapped children components can have Loader props i.e. **width**, **height**, **className**, and **styles** to have a rough structure of how the loading contents should appear. A **React Component** needs to be wrapped around a native DOM element such as **div**, **p**, etc to be able to show a loading indicator. (Note: the component can be improved to handle react components if need be)

### Props 
- **animate**: true/false (default - false) - will show loader if true. Will return child element as it is if false.
- **children**: required
