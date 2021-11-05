import { useState, useEffect } from 'react';

type PromiseCreator = () => any;
//함수 하나 받고 / 의존성 배열 하나 받는데
export default function usePromise(promiseCreator: PromiseCreator, deps: []) {
  const [loading, setLoading] = useState(false);
  const [resolved, setResolved] = useState(null);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    const process = async () => {
      setLoading(true);
      try {
        const resolved = await promiseCreator;
        setResolved(resolved);
      } catch (error) {
        if (typeof error === 'string') {
          setError(error);
        }
      }
      setLoading(false);
    };
    process();
  }, deps);

  return [loading, resolved, error];
}
