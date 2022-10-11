import Button from 'components/Button';
import Input from 'components/Input';
import { DemoProps } from 'layouts/DemoLayout';
import { useEffect, useSyncExternalStore } from 'react';
import store from 'store';

const Couter = () => {
  const { count, info } = useSyncExternalStore(
    store.subscribe,
    store.getSnapshot
  );

  return (
    <>
      <div>
        <div>
          Count: <span>{count}</span>
        </div>
        <div>
          Info: <span>{info}</span>
        </div>

        <div>
          <Button
            onClick={() => store.setState((d) => ({ count: d.count + 1 }))}
          >
            Add
          </Button>
        </div>
      </div>
    </>
  );
};

const Infor = () => {
  const { count, info } = useSyncExternalStore(
    store.subscribe,
    store.getSnapshot
  );

  return (
    <>
      <div>
        <div>
          Count: <span>{count}</span>
        </div>
        <div>
          Info: <span>{info}</span>
        </div>

        <div>
          <Input
            type="text"
            onChange={(e) => store.setState({ info: e.target.value })}
          />
        </div>
      </div>
    </>
  );
};

const UseSyncExternalStore = ({ onLoad }: DemoProps) => {
  useEffect(() => {
    onLoad?.();
  }, []);

  return (
    <>
      <Couter />
      <hr className="my-4" />
      <Infor />
    </>
  );
};

export default UseSyncExternalStore;
