/**
 * Use this hook instead of React.useMemo when the computations aren't that expensive.
 */
function useFactory<T extends unknown>(factory: () => T): T;

function useFactory<T extends unknown>(factory: () => T) {
  return factory();
}

export default useFactory;
