# react全家桶最佳实践
- react
- react-router-dom
  使用<Route>指定的直接子组件可以拿到 `history` `location` `match`对象
  ```react
    const location = this.props.location || context.location;
          const match = this.props.computedMatch
            ? this.props.computedMatch // <Switch> already computed the match for us
            : this.props.path
              ? matchPath(location.pathname, this.props)
              : context.match;

          const props = { ...context, location, match };
          // ...
          children = children(props);
    ```
- redux
- [connected-react-router](https://github.com/supasate/connected-react-router) router和redux挂载
  - 该库的作用是将react-router-dom自己维护的如location，history，path等也交给了redux来管理，一般情况下，没有必要使用该库
