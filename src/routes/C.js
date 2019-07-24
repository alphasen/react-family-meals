import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import d from "../components/d";
import e from "../components/e";
import f from "../components/f";

/**
 * 路由嵌套仍然需要识别它们的完整路径才能匹配
 * @param {*} props
 */
export default function C(props) {
  return (
    <div>
      C
      <ul>
        <li>
          <Link to="/c">d</Link>
          <Link to="/c/e">e</Link>
          <Link to="/c/2/f">f</Link>
        </li>
      </ul>
      <Switch>
        {/* <Route path="/c" exact component={d}/>
        <Route path="/c/e" component={e}/> */}
        {/* 使用下面这种形式可以避免深度嵌套时输入错误 */}
        <Route path={props.match.path} exact component={d} />
        <Route path={`${props.match.path}/e`} component={e} />

        {/* 不能使用下面这种形式（当有参数时会产生bug） */}
        <Route path={`${props.match.url}/f`} component={f} />
      </Switch>
    </div>
  );
}
