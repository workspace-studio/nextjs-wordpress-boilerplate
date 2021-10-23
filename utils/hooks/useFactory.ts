/**
 * Use this hook instead of React.useMemo when the computations aren't that expensive.
 */
function useFactory<T>(factory: () => T): T;

function useFactory<T>(factory: () => T) {
  return factory();
}

export default useFactory;
