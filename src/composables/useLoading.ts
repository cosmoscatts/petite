export function useLoading(initValue = false) {
  const {
    bool: loading,
    setBool: setLoading,
    toggleBool: toggleLoading,
  } = useBoolean(initValue)

  return {
    loading,
    setLoading,
    toggleLoading,
  }
}
