import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import d from "../components/d";
import e from "../components/e";
import f from "../components/f";

/**
 * 路由嵌套仍然需要识别它们的完整路径才能匹配
 * @param {*} props
 */
export default function B(props) {
  return (
    <div>
      B
      <ul>
        <li>
          {/* props.match.url 用在Link中 */}
          <Link to={`${props.match.url}`}>d</Link>
          <Link to={`${props.match.url}/e`}>e</Link>
          <Link to={`${props.match.url}/f`}>f</Link>
        </li>
      </ul>
      <Switch>
        {/* props.match.path 用在Route中 */}
        <Route path={props.match.path} exact component={d} />
        <Route path={`${props.match.path}/e`} component={e} />
        {/* 不能使用下面这种形式（当有参数时会产生bug） */}
        {/* 实际实验出来并不会导致取不到params，可能是后续更新了该地方，为了避免不必要的bug，最好按照官方文档的推荐 */}
        {/* https://reacttraining.com/react-router/web/api/match */}
        <Route path={`${props.match.url}/f`} component={f} />
      </Switch>
    </div>
  );
}
