import Classes from "./classes";
import ConditionalOutput
  from "./conditional-output";
import Todos from "./todo/todo-list"

function Assignment6() {
  const color = 'blue';
  const dangerous = true;

  return (
      <div>
        <h1>Assignment 6</h1>
        <div className={`wd-bg-${color} wd-fg-black wd-padding-10px`}>
          Dynamic Blue background</div>
        <div className={`${dangerous ? 'wd-bg-red' : 'wd-bg-green'}
                                   wd-fg-black wd-padding-10px`}>
          Dangerous background</div>
        <ConditionalOutput/>
        <Todos/>

      </div>
  );
}
export default Assignment6;
