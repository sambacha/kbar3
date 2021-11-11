function AdaptiveRadiusRing() {
  const {ringTarget} = React.useContext(FocusRingContext);

  const radius = React.useMemo(
    () => window.getComputedStyle(ringTarget).borderRadius,
    [ringTarget]
  );
  
  const style = {
    '__adaptive-ring-radius': radius,
  };
  return <div className={styles.ring} {...props} style={style} />;
}

// In CSS
// .ring {
//   border-radius: var(--__adaptive-ring-radius, 4px);
// }
